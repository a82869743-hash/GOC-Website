import { NextRequest, NextResponse } from 'next/server';
import { appendWarrantyClaim } from '@/lib/google-sheets';

// ─── Types ──────────────────────────────────────────────────────

export interface WarrantyData {
  fullName: string;
  email: string;
  phone: string;
  warrantyId: string;
  vehicleDetails: string;
  serviceDate: string;
  serviceType: string;
  issue: string;
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

// ─── POST /api/warranty ─────────────────────────────────────────

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
    if (body.company) {
      // Silently accept to not tip off bots
      return NextResponse.json({ success: true, message: 'Warranty claim submitted.' });
    }

    // 3. Validate required fields
    const { fullName, email, phone, warrantyId, vehicleDetails, serviceDate, serviceType, issue } =
      body as WarrantyData;

    if (!fullName?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Full name is required.' },
        { status: 400 }
      );
    }

    if (!email?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Email is required.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!phone?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Phone number is required.' },
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

    if (!warrantyId?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Warranty ID is required.' },
        { status: 400 }
      );
    }

    if (!vehicleDetails?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Vehicle/item details are required.' },
        { status: 400 }
      );
    }

    if (!serviceDate?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Service date is required.' },
        { status: 400 }
      );
    }

    if (!serviceType?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Service type is required.' },
        { status: 400 }
      );
    }

    if (!issue?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Issue description is required.' },
        { status: 400 }
      );
    }

    // 4. Prepare warranty data
    const warrantyData = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      warrantyId: warrantyId.trim(),
      vehicleDetails: vehicleDetails.trim(),
      serviceDate: serviceDate.trim(),
      serviceType: serviceType.trim(),
      issue: issue.trim(),
    };

    // 5. Append to Google Sheets
    const result = await appendWarrantyClaim(warrantyData);

    if (!result.success) {
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
    console.error('❌ Warranty submission error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit warranty claim. Please try again or contact us directly.',
      },
      { status: 500 }
    );
  }
}
