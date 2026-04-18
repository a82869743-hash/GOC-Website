/**
 * ─── Google Sheets Integration ──────────────────────────────────
 *
 * This module handles all communication with the Google Sheets API.
 * It uses a Service Account for authentication (no user login required).
 *
 * Environment variables required:
 *   GOOGLE_SHEETS_SPREADSHEET_ID  — The ID from your Google Sheet URL
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL  — Service account email (xxx@xxx.iam.gserviceaccount.com)
 *   GOOGLE_SERVICE_ACCOUNT_KEY    — The private key from credentials.json (with \n line breaks)
 */

import { google, sheets_v4 } from 'googleapis';

// ─── Types ──────────────────────────────────────────────────────

export interface BookingRow {
  timestamp: string;
  fullName: string;
  phone: string;
  vehicleModel: string;
  vehicleYear: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export interface WarrantyRow {
  timestamp: string;
  fullName: string;
  email: string;
  phone: string;
  warrantyId: string;
  vehicleDetails: string;
  serviceDate: string;
  serviceType: string;
  issue: string;
}

// ─── Sheet Names (must match tabs in your Google Sheet) ─────────
const BOOKINGS_SHEET = 'Bookings';
const WARRANTY_SHEET = 'Warranty Claims';

// ─── Column Headers ─────────────────────────────────────────────
const BOOKING_HEADERS = [
  'Timestamp',
  'Full Name',
  'Phone',
  'Vehicle Model',
  'Vehicle Year',
  'Service',
  'Preferred Date',
  'Preferred Time',
  'Notes',
];

const WARRANTY_HEADERS = [
  'Timestamp',
  'Full Name',
  'Email',
  'Phone',
  'Warranty ID',
  'Vehicle Details',
  'Service Date',
  'Service Type',
  'Issue',
];

// ─── Auth & Client ──────────────────────────────────────────────

/**
 * Creates an authenticated Google Sheets client using Service Account credentials.
 * Credentials are read from environment variables — never from a file in production.
 */
function getAuthClient(): sheets_v4.Sheets {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!email || !rawKey || !spreadsheetId) {
    throw new Error(
      'Missing Google Sheets env vars. Required: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_KEY, GOOGLE_SHEETS_SPREADSHEET_ID'
    );
  }

  // The private key stored in env vars has literal \n — convert to actual newlines
  const privateKey = rawKey.replace(/\\n/g, '\n');

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

function getSpreadsheetId(): string {
  const id = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!id) throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not set');
  return id;
}

// ─── Sheet Initialization ───────────────────────────────────────

/**
 * Ensures the target sheet tab exists. If not, creates it and writes headers.
 * This prevents "sheet not found" errors on first use.
 */
async function ensureSheetExists(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  sheetName: string,
  headers: string[]
): Promise<void> {
  try {
    // Get all sheet tabs in the spreadsheet
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const existingSheets = spreadsheet.data.sheets?.map(
      (s) => s.properties?.title
    );

    if (!existingSheets?.includes(sheetName)) {
      // Create the missing sheet tab
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: sheetName,
                },
              },
            },
          ],
        },
      });

      // Write header row
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `'${sheetName}'!A1`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [headers],
        },
      });

      console.log(`✅ Created sheet "${sheetName}" with headers`);
    }
  } catch (error) {
    console.error(`⚠️ Error ensuring sheet "${sheetName}" exists:`, error);
    // Don't throw — let the append attempt handle the error
  }
}

// ─── Duplicate Detection ────────────────────────────────────────

/**
 * Checks if a duplicate booking already exists based on phone + preferred date.
 * Returns true if a matching row is found in the last 200 entries.
 */
async function isDuplicateBooking(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  phone: string,
  preferredDate: string
): Promise<boolean> {
  // Only check for duplicates if we have both phone and date
  if (!phone || !preferredDate) return false;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `'${BOOKINGS_SHEET}'!C:G`, // Phone is col C, Date is col G
    });

    const rows = response.data.values;
    if (!rows || rows.length <= 1) return false; // Only header or empty

    // Normalize the phone for comparison (strip spaces, dashes, etc.)
    const normalizedPhone = phone.replace(/[\s\-()]/g, '');

    // Check last 200 rows (or all if fewer)
    const startIndex = Math.max(1, rows.length - 200);
    for (let i = startIndex; i < rows.length; i++) {
      const rowPhone = (rows[i][0] || '').replace(/[\s\-()]/g, '');
      const rowDate = rows[i][4] || ''; // Preferred Date is 5th column in range (index 4)

      if (rowPhone === normalizedPhone && rowDate === preferredDate) {
        return true;
      }
    }

    return false;
  } catch {
    // If we can't check (e.g., sheet doesn't exist yet), allow the submission
    return false;
  }
}

/**
 * Checks if a duplicate warranty claim exists based on warranty ID + phone.
 * Returns true if a matching row is found.
 */
async function isDuplicateWarranty(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  warrantyId: string,
  phone: string
): Promise<boolean> {
  if (!warrantyId || !phone) return false;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `'${WARRANTY_SHEET}'!D:E`, // Phone is col D, Warranty ID is col E
    });

    const rows = response.data.values;
    if (!rows || rows.length <= 1) return false;

    const normalizedPhone = phone.replace(/[\s\-()]/g, '');
    const normalizedWarrantyId = warrantyId.trim().toUpperCase();

    const startIndex = Math.max(1, rows.length - 200);
    for (let i = startIndex; i < rows.length; i++) {
      const rowPhone = (rows[i][0] || '').replace(/[\s\-()]/g, '');
      const rowWarrantyId = (rows[i][1] || '').trim().toUpperCase();

      if (rowPhone === normalizedPhone && rowWarrantyId === normalizedWarrantyId) {
        return true;
      }
    }

    return false;
  } catch {
    return false;
  }
}

// ─── Public API ─────────────────────────────────────────────────

/**
 * Appends a booking entry to the "Bookings" sheet.
 * - Auto-creates the sheet if it doesn't exist
 * - Checks for duplicate submissions
 * - Adds a timestamp automatically
 */
export async function appendBooking(data: Omit<BookingRow, 'timestamp'>): Promise<{
  success: boolean;
  message: string;
  duplicate?: boolean;
}> {
  const sheets = getAuthClient();
  const spreadsheetId = getSpreadsheetId();

  // Ensure the sheet exists with proper headers
  await ensureSheetExists(sheets, spreadsheetId, BOOKINGS_SHEET, BOOKING_HEADERS);

  // Check for duplicate (phone + date combination)
  const duplicate = await isDuplicateBooking(
    sheets,
    spreadsheetId,
    data.phone,
    data.preferredDate
  );

  if (duplicate) {
    return {
      success: false,
      message: 'A booking with this phone number and date already exists.',
      duplicate: true,
    };
  }

  // Generate IST timestamp
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  // Prepare row data (must match BOOKING_HEADERS order)
  const row = [
    timestamp,
    data.fullName,
    data.phone,
    data.vehicleModel,
    data.vehicleYear,
    data.service,
    data.preferredDate,
    data.preferredTime,
    data.notes,
  ];

  // Append to Google Sheets
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `'${BOOKINGS_SHEET}'!A:I`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [row],
    },
  });

  return {
    success: true,
    message: 'Booking submitted successfully! Our team will contact you shortly to confirm.',
  };
}

/**
 * Appends a warranty claim to the "Warranty Claims" sheet.
 * - Auto-creates the sheet if it doesn't exist
 * - Checks for duplicate submissions
 * - Adds a timestamp automatically
 */
export async function appendWarrantyClaim(data: Omit<WarrantyRow, 'timestamp'>): Promise<{
  success: boolean;
  message: string;
  duplicate?: boolean;
}> {
  const sheets = getAuthClient();
  const spreadsheetId = getSpreadsheetId();

  // Ensure the sheet exists with proper headers
  await ensureSheetExists(sheets, spreadsheetId, WARRANTY_SHEET, WARRANTY_HEADERS);

  // Check for duplicate (warrantyId + phone combination)
  const duplicate = await isDuplicateWarranty(
    sheets,
    spreadsheetId,
    data.warrantyId,
    data.phone
  );

  if (duplicate) {
    return {
      success: false,
      message: 'A warranty claim with this Warranty ID and phone number already exists.',
      duplicate: true,
    };
  }

  // Generate IST timestamp
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  // Prepare row data (must match WARRANTY_HEADERS order)
  const row = [
    timestamp,
    data.fullName,
    data.email,
    data.phone,
    data.warrantyId,
    data.vehicleDetails,
    data.serviceDate,
    data.serviceType,
    data.issue,
  ];

  // Append to Google Sheets
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `'${WARRANTY_SHEET}'!A:I`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [row],
    },
  });

  return {
    success: true,
    message: 'Warranty claim submitted successfully! Our team will review within 48 hours.',
  };
}
