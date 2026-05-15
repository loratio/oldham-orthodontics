# Oldham Orthodontics

Next.js website for Oldham Orthodontics, deployed on Vercel.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js (App Router, React, TypeScript) |
| **Styling** | CSS (global + per-page modules) |
| **Lead CRM** | PRM by TIO (account `PENDING — awaiting strategist confirmation`) |
| **Deployment** | Vercel |

## Getting Started

```bash
npm run dev        # http://localhost:3000
npm run build      # Production build
npm run lint       # ESLint check
```

## Architecture — Lead Capture

Patient enquiries are captured by **PRM** (Patient Relationship Manager by TIO). PRM is a receiver — it does not host the forms. Each form on the site POSTs FormData directly to `prm.tio.work` using the **v4-tds web-form convention** (hidden `wf` field, account-level API key in the `TDS-API-KEY` header, honeypots, and optional file uploads). PRM then fires email templates, routes leads into the practice inbox, and feeds the dashboard.

## Forms & PRM Integration

The site has four forms. All four post directly to PRM using the same shared submission helper.

> **Status:** `wf` IDs and PRM account number are **pending** confirmation from the digital strategist. Once confirmed, replace the `TODO_REPLACE` placeholders in each form component and the `NEXT_PUBLIC_PRM_ACCOUNT_ID` env var in Vercel.

| Form | Page | Component | Workflow ID (`wf`) |
|------|------|-----------|--------------------|
| Contact Enquiry | `/contact` | `src/app/contact/EnquiryForm.tsx` | `wf/TODO_REPLACE/...` |
| Free Consultation | `/free-consultation` | `src/app/free-consultation/page.tsx` | `wf/TODO_REPLACE/...` |
| Dentist Referral | `/dentist-referrals` | `src/app/dentist-referrals/ReferralForm.tsx` | `wf/TODO_REPLACE/...` |
| Inline Consultation Banner | (reusable, used on inner pages) | `src/app/components/inner/ConsultBannerForm.tsx` | `wf/TODO_REPLACE/...` |

### Shared submission helper

A single helper handles all PRM POSTs so each form only worries about field collection + validation, not transport.

```
src/app/lib/
  formSubmit.ts       # submitPrmForm() + uploadFile() — to be added
  validators.ts       # required/email/phone/postcode/dateOfBirth — to be added
```

**`submitPrmForm(form: HTMLFormElement)`**
- Serializes `<form>` to `application/x-www-form-urlencoded`
- POSTs to `NEXT_PUBLIC_PRM_ENDPOINT` with `TDS-API-KEY` header
- Strips honeypot fields before sending; if a honeypot is filled it returns `{ success: true }` silently so bots get a fake-success
- Returns `{ success, error? }` for the caller to redirect or show an error

**`uploadFile(file: File)`** (used by Dentist Referral)
- Uploads each image to `prm.tio.work/api/v2/upload-file` with `accountid` + the API key
- Returns a hosted URL that the form then submits as a hidden `referral_photo_N` field
- Enforces a 10MB-per-file cap

### Per-form hidden fields

Each form includes a standard PRM payload (mirrors TBP's pattern):

```tsx
<input type="hidden" name="accountid" defaultValue={PRM_ACCOUNT_ID} />
<input type="hidden" name="wf" defaultValue={PRM_WEB_FORM} />
<input type="hidden" name="prm-note" value="prm-note" />
<input type="hidden" name="thanks" defaultValue={THANKS_URL} />
<input type="hidden" name="page_name" value="contact" />        {/* per-form */}
<input type="hidden" name="gdpr" value="gdpr" />
<input type="hidden" name="email_subject" value={emailSubject} />
<input type="hidden" name="gdpr_email_subject" value={`${emailSubject} (GDPR)`} />
{/* GDPR email routing: recipient = local_part[0] + '@' + domain[0] */}
<input type="hidden" name="local_part[0]" value={EMAIL_LOCAL_PART} />
<input type="hidden" name="domain[0]" value={EMAIL_DOMAIN} />

{/* UTM attribution — populated by tracking script on the page */}
<input type="hidden" name="custom14" defaultValue="" id="fPages" />
<input type="hidden" name="custom15" defaultValue="" id="fContent" />
<input type="hidden" name="custom16" defaultValue="" id="fSource" />
<input type="hidden" name="custom17" defaultValue="" id="fMedium" />
<input type="hidden" name="custom18" defaultValue="" id="fTerm" />
<input type="hidden" name="custom19" defaultValue="" id="fCampaign" />
<input type="hidden" name="custom20" defaultValue="" id="fClientId" />
```

### Honeypots

Every form includes two off-screen honeypot fields with generic names so browser autofill / password managers don't trip them while still catching bots:

```tsx
<div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
  <input type="text" name="oo_hp_a" tabIndex={-1} autoComplete="off" defaultValue="" />
  <input type="text" name="oo_hp_b" tabIndex={-1} autoComplete="off" defaultValue="" />
</div>
```

If either field has a value at submit time, `submitPrmForm()` returns success without contacting PRM.

### Form-specific notes

- **Contact Enquiry** — `subject` dropdown drives the `email_subject` so reception can triage at a glance ("General enquiry", "Question about treatment", "Question about an appointment", "Costs and finance", "Something else"). Optional GDPR routing per subject pending decision (TBP uses this pattern to split new-patient vs existing-patient leads).
- **Free Consultation** — short form (name, email, phone). Single workflow; sends a confirmation email to the patient and a new-lead email to reception.
- **Dentist Referral** — two sections (dentist details + patient details) plus optional clinical photo uploads (max 8). Photos are uploaded to PRM first, then the hosted URLs are submitted as hidden `referral_photo_N` fields. Requires the hidden `dentist_form=1` flag for PRM's GDPR email template to dispatch (matches TBP's Dentist Referral behaviour).
- **Inline Consultation Banner** — `ConsultBannerForm.tsx` is a reusable component dropped into inner pages (treatments, costs, etc). Uses its own `wf` so leads from inner-page banners can be attributed separately if desired.

### GDPR + anti-abuse summary

All forms include:
- Off-screen honeypots (`oo_hp_a`, `oo_hp_b`) — silent fake-success for bots
- GDPR email routing via `local_part[]` / `domain[]` (recipient set per form)
- Per-field blur-time validation with inline error messaging
- UTM attribution passed through hidden `custom14`–`custom20` fields (page, content, source, medium, term, campaign, Google client ID)
- File uploads sized at ≤10MB and gated behind PRM's upload endpoint

## Environment Variables (Vercel)

Set these on the Vercel project before forms will submit:

| Variable | Purpose | Where to find it |
|---|---|---|
| `NEXT_PUBLIC_PRM_ENDPOINT` | Full v4-tds endpoint URL (e.g. `https://prm.tio.work/api/xcms-to-prm-v4-tds`) | PRM admin → Account → API |
| `NEXT_PUBLIC_TDS_API_KEY` | Account-level API key (sent as `TDS-API-KEY` header) | PRM admin → Account → API |
| `NEXT_PUBLIC_PRM_ACCOUNT_ID` | Numeric PRM account ID (used for file uploads + the `accountid` hidden field) | PRM admin → Account |

All three are `NEXT_PUBLIC_*` because they are read in client components. The API key is account-level (not user-level) and gated behind PRM's per-account access controls — the same model TBP and Pallant use.

## What the strategist needs to confirm

Before the forms can go live, the digital strategist must provide:

1. **PRM account ID** — for `NEXT_PUBLIC_PRM_ACCOUNT_ID`
2. **Four `wf` workflow IDs** — one per form, each pointing at its PRM action set
3. **Email recipient(s)** — `local_part[0]` + `domain[0]` for GDPR routing (default expectation: `info@oldhamorthodontics.co.uk` or similar)
4. **Per-form action sets configured in PRM** — email templates, notification recipients, GDPR copy address

Email sent — awaiting reply. Once confirmed, swap placeholders in:
- `src/app/contact/EnquiryForm.tsx` — `PRM_WEB_FORM`, `THANKS_URL`, email constants
- `src/app/free-consultation/page.tsx` — same
- `src/app/dentist-referrals/ReferralForm.tsx` — same, plus `dentist_form=1` hidden flag
- `src/app/components/inner/ConsultBannerForm.tsx` — same
- Vercel env vars

## Deployment

The site deploys automatically to Vercel on push to `main`.

### Commit identity

Vercel only deploys commits whose author email maps to a GitHub account on the `tio-websites` Vercel team. Confirm:

```bash
git config user.name   # should be "syedalitio"
git config user.email  # should be "syed@growdental.com"
```

## Project Structure

```
src/app/
  page.tsx                          # Homepage
  layout.tsx                        # Root layout (header, footer, fonts)
  globals.css                       # Global styles
  inner-page.css                    # Inner page shared styles
  contact/
    page.tsx, EnquiryForm.tsx       # Contact form
  free-consultation/
    page.tsx, booking.css           # Booking form (inline)
  dentist-referrals/
    page.tsx, ReferralForm.tsx      # Dentist referral form
  components/
    SiteHeader.tsx, SiteFooter.tsx
    VisitSection.tsx, SectionDivider.tsx, BeforeAfterSlider.tsx
    inner/
      ConsultBannerForm.tsx         # Reusable inline consultation banner
  lib/
    internal-links.ts
    render-policy.tsx
    formSubmit.ts                   # (to be added) Shared PRM submit helper
    validators.ts                   # (to be added) Form field validators
  about-us/, treatments/, results/, costs/, dentist-referrals/, ...
public/
  images/, favicons/, logos/
```

## Status

- [x] Homepage + all inner pages built
- [x] Header, footer, navigation
- [x] Forms scaffolded (UI complete, submission stubbed to `console.log`)
- [x] BugHerd feedback widget embedded
- [x] Core Web Vitals + SEO infrastructure
- [ ] **PRM `wf` IDs received from strategist**
- [ ] **`formSubmit.ts` + `validators.ts` helpers added**
- [ ] **Forms wired to PRM** (replace `console.log` with `submitPrmForm`)
- [ ] **Honeypots + UTM hidden fields added to each form**
- [ ] **Thank-you pages / inline confirmation finalised**
- [ ] **Vercel env vars set** (`NEXT_PUBLIC_PRM_ENDPOINT`, `NEXT_PUBLIC_TDS_API_KEY`, `NEXT_PUBLIC_PRM_ACCOUNT_ID`)
- [ ] **End-to-end test** — submit each form on the deployed preview, verify lead lands in PRM dashboard + notification email arrives
- [ ] DNS pointed to Vercel
