import { NextRequest, NextResponse } from 'next/server';
import { appendBooking } from '@/lib/google-sheets';

// ─── Types ──────────────────────────────────────────────────────

export interface BookingData {
  fullName: string;
  phone: string;
  vehicleModel: string;
  vehicleYear?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
}

// ─── Simple In-Memory Rate Limiter ──────────────────────────────
// Limits each IP to 5 submissions per 15 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// ─── POST /api/bookings ─────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // 0. Rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // 1. Parse request body
    const body = await request.json();

    // 2. Honeypot anti-bot check
    if (body.website) {
      // Silently accept to not tip off bots
      return NextResponse.json({ success: true, message: 'Booking submitted successfully.' });
    }

    // 3. Validate required fields
    const { fullName, phone, vehicleModel } = body as BookingData;

    if (!fullName || !fullName.trim()) {
      return NextResponse.json(
        { success: false, error: 'Full name is required.' },
        { status: 400 }
      );
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: 'Phone number is required.' },
        { status: 400 }
      );
    }

    if (!vehicleModel || !vehicleModel.trim()) {
      return NextResponse.json(
        { success: false, error: 'Vehicle make & model is required.' },
        { status: 400 }
      );
    }

    // Basic phone validation
    const phoneClean = phone.replace(/[\s\-()]/g, '');
    if (phoneClean.length < 10 || !/^[+\d]+$/.test(phoneClean)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }

    // 4. Prepare booking data
    const bookingData = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      vehicleModel: vehicleModel.trim(),
      vehicleYear: body.vehicleYear?.trim() || '',
      service: body.service?.trim() || '',
      preferredDate: body.preferredDate?.trim() || '',
      preferredTime: body.preferredTime?.trim() || '',
      notes: body.notes?.trim() || '',
    };

    // 5. Append to Google Sheets
    const result = await appendBooking(bookingData);

    if (!result.success) {
      // Duplicate or other known error
      return NextResponse.json(
        { success: false, error: result.message },
        { status: result.duplicate ? 409 : 500 }
      );
    }

    // 6. Return success
    return NextResponse.json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    console.error('❌ Booking submission error:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to submit booking. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
