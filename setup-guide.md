# GOC Forms → Google Sheets Setup Guide

> Complete guide to connect your GOC website forms (Booking + Warranty Claim) to Google Sheets.

---

## Table of Contents

1. [Google Cloud Setup](#1-google-cloud-setup)
2. [Configure Environment Variables](#2-configure-environment-variables)
3. [Google Sheet Setup](#3-google-sheet-setup)
4. [Run & Test Locally](#4-run--test-locally)
5. [Deploy to Vercel](#5-deploy-to-vercel)
6. [How It Works (Architecture)](#6-how-it-works-architecture)
7. [Troubleshooting](#7-troubleshooting)
8. [Ownership Transfer Guide](#8-ownership-transfer-guide)

---

## 1. Google Cloud Setup

### Step 1.1 — Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click the project dropdown at the top → **"New Project"**
3. Enter a name (e.g., `GOC Website Forms`)
4. Click **"Create"**
5. Make sure the new project is selected in the dropdown

### Step 1.2 — Enable Google Sheets API

1. In Google Cloud Console, go to: **APIs & Services → Library**
   - Or visit: `https://console.cloud.google.com/apis/library`
2. Search for **"Google Sheets API"**
3. Click on it → Click **"Enable"**
4. Wait for it to activate (takes a few seconds)

### Step 1.3 — Create a Service Account

1. Go to: **APIs & Services → Credentials**
   - Or visit: `https://console.cloud.google.com/apis/credentials`
2. Click **"+ CREATE CREDENTIALS"** → **"Service Account"**
3. Fill in the details:
   - **Service account name:** `goc-forms` (or any name you like)
   - **Service account ID:** auto-generated (e.g., `goc-forms@your-project.iam.gserviceaccount.com`)
   - **Description:** `Service account for GOC website form submissions`
4. Click **"Create and Continue"**
5. **Skip** the optional role selection (click "Continue")
6. **Skip** granting users access (click "Done")

### Step 1.4 — Download the Credentials (Private Key)

1. In the **Credentials** page, find your new service account
2. Click on the service account email
3. Go to the **"Keys"** tab
4. Click **"Add Key"** → **"Create new key"**
5. Select **JSON** format
6. Click **"Create"**
7. A `.json` file will download — **this is your `credentials.json`**

> ⚠️ **Security Warning:** This file contains your private key. NEVER commit it to git, share it publicly, or upload it anywhere. Always use environment variables in production.

### Step 1.5 — Extract Values from credentials.json

Open the downloaded JSON file. You need exactly **2 values:**

```json
{
  "client_email": "goc-forms@your-project.iam.gserviceaccount.com",  ← COPY THIS
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQ...\n-----END PRIVATE KEY-----\n"  ← COPY THIS
}
```

- **`client_email`** → This becomes `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- **`private_key`** → This becomes `GOOGLE_SERVICE_ACCOUNT_KEY`

---

## 2. Configure Environment Variables

### Step 2.1 — Create `.env` File (Local Development)

1. Copy the example file:
   ```bash
   cp .env.example .env
   ```
   Or on Windows:
   ```powershell
   Copy-Item .env.example .env
   ```

2. Open `.env` and fill in your values:

   ```env
   GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here
   GOOGLE_SERVICE_ACCOUNT_EMAIL=goc-forms@your-project.iam.gserviceaccount.com
   GOOGLE_SERVICE_ACCOUNT_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQ...\n-----END PRIVATE KEY-----\n"
   ```

### Step 2.2 — How to Find Your Spreadsheet ID

Your Google Sheet URL looks like this:
```
https://docs.google.com/spreadsheets/d/1aBcDeFgHiJkLmNoPqRsTuVwXyZ/edit#gid=0
                                       ↑_____________________________↑
                                       This is your SPREADSHEET_ID
```

Example:
- URL: `https://docs.google.com/spreadsheets/d/1X2Y3Z_abcdefghijklmnop/edit`
- ID: `1X2Y3Z_abcdefghijklmnop`

### Step 2.3 — Important Notes About the Private Key

- Copy the **entire** private key value, including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` parts
- Keep the `\n` characters as-is in the `.env` file (they represent line breaks inside the key)
- **Wrap the entire value in double quotes** in the `.env` file
- The code automatically converts `\n` to actual newlines at runtime

---

## 3. Google Sheet Setup

### Step 3.1 — Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a **new blank spreadsheet**
3. Name it: `GOC Form Submissions` (or any name)

### Step 3.2 — Share the Sheet with the Service Account

> ⚠️ **This step is critical — without it, the service account cannot write to the sheet.**

1. Open your Google Sheet
2. Click the **"Share"** button (top right)
3. In the **"Add people and groups"** field, paste your **service account email**:
   ```
   goc-forms@your-project.iam.gserviceaccount.com
   ```
4. Set the permission to **"Editor"**
5. **Uncheck** "Notify people" (service accounts don't have email)
6. Click **"Share"**

### Step 3.3 — Sheet Tabs (Auto-Created)

The system will **automatically create** two sheet tabs when the first form is submitted:

| Tab Name          | Purpose                    |
|-------------------|----------------------------|
| `Bookings`        | Booking form submissions   |
| `Warranty Claims` | Warranty claim submissions |

Each tab will have the correct header row created automatically.

**Manual setup (optional):** If you prefer to create them yourself, add two tabs named exactly `Bookings` and `Warranty Claims`, and add these header rows:

**Bookings tab — Row 1:**
```
Timestamp | Full Name | Phone | Vehicle Model | Vehicle Year | Service | Preferred Date | Preferred Time | Notes
```

**Warranty Claims tab — Row 1:**
```
Timestamp | Full Name | Email | Phone | Warranty ID | Vehicle Details | Service Date | Service Type | Issue
```

---

## 4. Run & Test Locally

### Step 4.1 — Install Dependencies

```bash
npm install
```

### Step 4.2 — Start Development Server

```bash
npm run dev
```

### Step 4.3 — Test the Forms

1. Open `http://localhost:3000/book` → Submit a booking
2. Open `http://localhost:3000/warranty` → Submit a warranty claim
3. Check your Google Sheet — new rows should appear

### Step 4.4 — Verify Data Flow

- ✅ Row appears in correct sheet tab
- ✅ Timestamp is in IST format
- ✅ All fields are populated
- ✅ Submitting the same phone + date again shows duplicate error
- ✅ Form shows loading spinner during submission
- ✅ Success/error messages display correctly

---

## 5. Deploy to Vercel

### Step 5.1 — Add Environment Variables in Vercel

1. Go to [Vercel Dashboard](https://vercel.com) → Your GOC project
2. Go to **Settings → Environment Variables**
3. Add these three variables:

| Variable Name                    | Value                                          |
|----------------------------------|-------------------------------------------------|
| `GOOGLE_SHEETS_SPREADSHEET_ID`  | Your spreadsheet ID                             |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL`  | `goc-forms@your-project.iam.gserviceaccount.com`|
| `GOOGLE_SERVICE_ACCOUNT_KEY`    | The entire private key (with quotes if needed)  |

> **Tip for the private key in Vercel:** Paste the key value WITHOUT surrounding quotes. Vercel handles the escaping. But DO keep the `\n` characters inside the key as-is.

### Step 5.2 — Redeploy

After adding environment variables, trigger a new deployment:

```bash
# Push your code changes
git add .
git commit -m "feat: add Google Sheets integration for forms"
git push
```

Vercel will auto-deploy. Or go to Vercel Dashboard → Deployments → **Redeploy**.

### Step 5.3 — Verify Production

1. Visit your live site's booking page → Submit a test booking
2. Visit the warranty page → Submit a test claim
3. Check Google Sheets for the new entries
4. Delete the test rows after verification

---

## 6. How It Works (Architecture)

```
┌──────────────────────────────────────────────────────────┐
│                    GOC WEBSITE (Next.js)                  │
│                                                          │
│  /book page ──────→ POST /api/bookings ──┐               │
│                                          │               │
│  /warranty page ──→ POST /api/warranty ──┤               │
│                                          │               │
│                    ┌─────────────────────▼──────────────┐ │
│                    │  src/lib/google-sheets.ts          │ │
│                    │                                    │ │
│                    │  • Authenticates via Service Acct  │ │
│                    │  • Ensures sheet tabs exist        │ │
│                    │  • Checks for duplicates           │ │
│                    │  • Appends row with timestamp      │ │
│                    └─────────────┬──────────────────────┘ │
└──────────────────────────────────┼────────────────────────┘
                                   │
                                   ▼
                    ┌──────────────────────────┐
                    │   GOOGLE SHEETS API       │
                    │   (sheets.googleapis.com) │
                    └──────────┬───────────────┘
                               │
                               ▼
                    ┌──────────────────────────┐
                    │  YOUR GOOGLE SHEET        │
                    │                          │
                    │  📋 Bookings tab          │
                    │  📋 Warranty Claims tab   │
                    └──────────────────────────┘
```

### Data Flow for Each Submission:

1. User fills form → clicks Submit
2. Frontend shows loading spinner, disables inputs
3. `POST /api/bookings` or `POST /api/warranty` is called
4. API route validates all required fields
5. Honeypot check filters bots
6. Rate limiter prevents abuse (5 requests/15 min/IP)
7. `google-sheets.ts` authenticates with Google
8. Checks if sheet tab exists → creates if not
9. Checks for duplicate entries
10. Appends new row with IST timestamp
11. Returns success/error to frontend
12. Frontend shows success message or error banner

### Files Modified/Created:

| File | Purpose |
|------|---------|
| `src/lib/google-sheets.ts` | **NEW** — Core Google Sheets utility |
| `src/app/api/bookings/route.ts` | **UPDATED** — Now writes to Sheets |
| `src/app/api/warranty/route.ts` | **NEW** — Warranty API endpoint |
| `src/app/warranty/page.tsx` | **UPDATED** — Full API integration |
| `.env.example` | **NEW** — Environment variable template |
| `.gitignore` | **UPDATED** — Excludes credentials.json |
| `setup-guide.md` | **NEW** — This file |

---

## 7. Troubleshooting

### ❌ Error: "Missing Google Sheets env vars"

**Cause:** One or more environment variables are not set.

**Fix:**
1. Check your `.env` file has all 3 variables
2. Restart the dev server after changing `.env`
3. On Vercel, ensure variables are set in **Settings → Environment Variables**

---

### ❌ Error: "The caller does not have permission" (403)

**Cause:** The service account doesn't have Editor access to the Google Sheet.

**Fix:**
1. Open your Google Sheet
2. Click **Share**
3. Add your service account email with **Editor** permission
4. Make sure you're sharing with the correct email (check `credentials.json` → `client_email`)

---

### ❌ Error: "Requested entity was not found" (404)

**Cause:** The spreadsheet ID is wrong.

**Fix:**
1. Open your Google Sheet in the browser
2. Copy the ID from the URL (the long string between `/d/` and `/edit`)
3. Update `GOOGLE_SHEETS_SPREADSHEET_ID` in your `.env`

---

### ❌ Sheet Not Updating (No Error)

**Possible causes:**
1. **Wrong spreadsheet:** Check you're looking at the correct Google Sheet
2. **Cached data:** Refresh the Google Sheet page (Ctrl+Shift+R)
3. **Bot filter:** If the honeypot field had a value, the submission is silently rejected
4. **Rate limited:** If you submitted too many times, wait 15 minutes

---

### ❌ Error: "Invalid grant" or "Invalid JWT"

**Cause:** The private key is malformed.

**Fix:**
1. In your `.env`, make sure the key is wrapped in double quotes
2. Ensure `\n` characters are present (don't convert to actual newlines in `.env`)
3. Re-download `credentials.json` and copy the `private_key` value fresh
4. Make sure you copied the ENTIRE key including `-----BEGIN...` and `-----END...`

---

### ❌ Error: "ECONNREFUSED" or Network Errors

**Cause:** Can't reach Google API.

**Fix:**
1. Check your internet connection
2. If behind a corporate firewall, ensure `sheets.googleapis.com` is not blocked
3. Try again — Google APIs occasionally have brief outages

---

### ❌ Duplicate Error When It Shouldn't Be

**Cause:** The duplicate checker matched an existing row.

**How duplicates are detected:**
- **Bookings:** Same phone number + same preferred date
- **Warranty:** Same phone number + same warranty ID

**Fix:** If a legitimate re-submission, the user should change the preferred date (bookings) or contact support directly (warranty).

---

### ❌ Form Submits But Frontend Shows Error

**Cause:** The API returned a non-200 status.

**Debug steps:**
1. Open browser DevTools → Network tab
2. Submit the form
3. Click the failed request → check Response for error details
4. Check Vercel Function logs: **Vercel Dashboard → Your Project → Logs**

---

## 8. Ownership Transfer Guide

When transferring the project to a client:

### Step 8.1 — Transfer Google Sheet Ownership

1. Open the Google Sheet
2. Click **Share**
3. Add the client's Google account with **Owner** permission
4. The client accepts the ownership transfer via email
5. **Do NOT** remove the service account — it still needs Editor access

### Step 8.2 — Transfer Google Cloud Project (Optional)

If the client should own the Google Cloud project:

1. Go to **Google Cloud Console → IAM & Admin → IAM**
2. Click **"Grant Access"**
3. Add client's Google account → Role: **Owner**
4. Client accepts the invitation
5. Remove your own account (optional)

### Step 8.3 — What to Verify After Transfer

- [ ] Service account still has **Editor** access to the Google Sheet
- [ ] Forms still submit successfully on the live site
- [ ] New entries appear in the Google Sheet
- [ ] Client can view and manage the sheet
- [ ] Vercel environment variables are still correct
- [ ] Google Cloud project billing is set up (free tier is usually sufficient)

### Step 8.4 — Google API Free Tier Limits

Google Sheets API is free for most use cases:
- **500 requests per 100 seconds per project**
- **100 requests per 100 seconds per user**
- For GOC's volume, this is more than enough (even 1000+ submissions/day)

### Step 8.5 — Recommended Client Handoff Checklist

- [ ] Client has Google account with Owner access to the Sheet
- [ ] Client has login to Vercel project (or ownership transferred)
- [ ] Client has a copy of this `setup-guide.md`
- [ ] Client understands where form data goes
- [ ] Test submission verified after transfer
- [ ] Client knows to contact support if they see errors

---

## Quick Reference

| Resource | URL |
|----------|-----|
| Google Cloud Console | https://console.cloud.google.com |
| Google Sheets API Dashboard | https://console.cloud.google.com/apis/api/sheets.googleapis.com |
| Your Google Sheet | *(paste your sheet URL here)* |
| Vercel Dashboard | https://vercel.com/dashboard |
| Booking Form | `https://yourdomain.com/book` |
| Warranty Form | `https://yourdomain.com/warranty` |
| Booking API | `POST /api/bookings` |
| Warranty API | `POST /api/warranty` |

---

*Last updated: April 2026*
