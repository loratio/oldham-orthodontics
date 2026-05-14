"use client";

import { useRef, useState } from "react";

type FormState = {
  dentistName: string;
  practiceName: string;
  practiceAddress: string;
  dentistEmail: string;
  dentistPhone: string;
  patientFirstName: string;
  patientLastName: string;
  patientDob: string;
  patientGuardian: string;
  patientAddress: string;
  patientEmail: string;
  patientPhone: string;
  reasonForReferral: string;
};

const empty: FormState = {
  dentistName: "",
  practiceName: "",
  practiceAddress: "",
  dentistEmail: "",
  dentistPhone: "",
  patientFirstName: "",
  patientLastName: "",
  patientDob: "",
  patientGuardian: "",
  patientAddress: "",
  patientEmail: "",
  patientPhone: "",
  reasonForReferral: "",
};

const MAX_PHOTOS = 8;

export default function ReferralForm() {
  const [data, setData] = useState<FormState>(empty);
  const [photos, setPhotos] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const fileInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Referral submitted:", data, photos.map((f) => f.name));
    setStatus("submitted");
  };

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const next = [...photos];
    for (const f of Array.from(files)) {
      if (next.length >= MAX_PHOTOS) break;
      next.push(f);
    }
    setPhotos(next);
  };

  const removePhoto = (i: number) => {
    setPhotos((p) => p.filter((_, idx) => idx !== i));
  };

  if (status === "submitted") {
    return (
      <div className="enquiry-thanks">
        <h3>Thanks - we&apos;ve received your referral.</h3>
        <p>
          We&apos;ll be in touch within one working day to confirm next steps. If you need to reach us in the meantime, give the team a call on{" "}
          <a href="tel:01616220987">0161 622 0987</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="referral-form" onSubmit={handleSubmit} noValidate>
      <div className="referral-fieldset">
        <h3>Dentist&apos;s details</h3>
        <div className="referral-grid">
          <input type="text" aria-label="Dentist name" placeholder="Dentist name *" value={data.dentistName} onChange={(e) => update("dentistName", e.target.value)} required />
          <input type="text" aria-label="Practice name" placeholder="Practice name" value={data.practiceName} onChange={(e) => update("practiceName", e.target.value)} />
          <input type="text" aria-label="Practice address" className="referral-grid--full" placeholder="Practice address" value={data.practiceAddress} onChange={(e) => update("practiceAddress", e.target.value)} />
          <input type="email" aria-label="Dentist email" placeholder="Email *" value={data.dentistEmail} onChange={(e) => update("dentistEmail", e.target.value)} required />
          <input type="tel" aria-label="Dentist phone" placeholder="Phone *" value={data.dentistPhone} onChange={(e) => update("dentistPhone", e.target.value)} required />
        </div>
      </div>

      <div className="referral-fieldset">
        <h3>Patient&apos;s details</h3>
        <div className="referral-grid">
          <input type="text" aria-label="Patient first name" placeholder="First name *" value={data.patientFirstName} onChange={(e) => update("patientFirstName", e.target.value)} required />
          <input type="text" aria-label="Patient last name" placeholder="Last name *" value={data.patientLastName} onChange={(e) => update("patientLastName", e.target.value)} required />
          <input type="text" aria-label="Patient date of birth" placeholder="Date of birth *" value={data.patientDob} onChange={(e) => update("patientDob", e.target.value)} required />
          <input type="text" aria-label="Parent or guardian's name" placeholder="Parent or guardian's name (if applicable)" value={data.patientGuardian} onChange={(e) => update("patientGuardian", e.target.value)} />
          <input type="text" aria-label="Patient address" className="referral-grid--full" placeholder="Address" value={data.patientAddress} onChange={(e) => update("patientAddress", e.target.value)} />
          <input type="email" aria-label="Patient email" placeholder="Email *" value={data.patientEmail} onChange={(e) => update("patientEmail", e.target.value)} required />
          <input type="tel" aria-label="Patient phone" placeholder="Phone *" value={data.patientPhone} onChange={(e) => update("patientPhone", e.target.value)} required />
        </div>
      </div>

      <div className="referral-fieldset">
        <h3>Reason for referral</h3>
        <textarea
          aria-label="Reason for referral"
          placeholder="Brief clinical notes, presenting concerns, anything we should know before the patient&apos;s first visit."
          rows={5}
          value={data.reasonForReferral}
          onChange={(e) => update("reasonForReferral", e.target.value)}
          required
        />
      </div>

      <div className="referral-fieldset">
        <h3>Send us patient photos</h3>
        <p className="referral-photos-help">
          Optional. Up to {MAX_PHOTOS} clinical photographs (front, side, occlusal etc). Helps us review the case before the consultation.
        </p>
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(e) => {
            handleFiles(e.target.files);
            if (fileInput.current) fileInput.current.value = "";
          }}
        />
        <button
          type="button"
          className="btn btn-outline referral-photos-btn"
          onClick={() => fileInput.current?.click()}
          disabled={photos.length >= MAX_PHOTOS}
        >
          {photos.length === 0 ? "Choose photos" : `Add more (${photos.length}/${MAX_PHOTOS})`}
        </button>
        {photos.length > 0 && (
          <ul className="referral-photos-list">
            {photos.map((f, i) => (
              <li key={`${f.name}-${i}`}>
                <span>{f.name}</span>
                <button type="button" onClick={() => removePhoto(i)} aria-label={`Remove ${f.name}`}>
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="enquiry-banner-privacy">
        Patient information shared here is handled in line with our <a href="/privacy-policy">privacy policy</a>.
      </p>
      <button type="submit" className="btn btn-accent referral-submit">
        Send referral
      </button>
    </form>
  );
}
