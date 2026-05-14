"use client";

import { useState } from "react";

const subjects = [
  "General enquiry",
  "Question about treatment",
  "Question about an appointment",
  "Costs and finance",
  "Something else",
];

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", formData);
    setStatus("submitted");
  };

  return (
    <section className="consult-banner-section">
      <div className="consult-banner-container">
        <div className="consult-banner-image">
          <img
            src="/images/contact-enquiry.webp"
            alt="A woman smiling while reaching out from a sunlit outdoor cafe" width={1600} height={1067} loading="lazy" />
        </div>
        <div className="consult-banner-content">
          <span className="consult-banner-label">SEND US A MESSAGE</span>
          <h2>
            Get in touch <span>with the team</span>
          </h2>
          <p>
            Have a question about treatment, costs or your next visit? Drop us a line and we&apos;ll come back to you within one working day.
          </p>

          {status === "submitted" ? (
            <div className="enquiry-thanks">
              <h3>Thanks - your message is on its way.</h3>
              <p>
                We&apos;ll be in touch within one working day. If your enquiry is urgent, give us a call on{" "}
                <a href="tel:01616220987">0161 622 0987</a>.
              </p>
            </div>
          ) : (
            <form className="consult-banner-form enquiry-banner-form" onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                aria-label="First Name"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                autoComplete="given-name"
                required
              />
              <input
                type="text"
                aria-label="Last Name"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                autoComplete="family-name"
                required
              />
              <input
                type="email"
                aria-label="Email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                autoComplete="email"
                required
              />
              <input
                type="tel"
                aria-label="Phone number"
                placeholder="Phone number (optional)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                autoComplete="tel"
              />
              <select
                aria-label="What is your enquiry about?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              >
                <option value="" disabled>What is your enquiry about?</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <textarea
                aria-label="Your message"
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <button type="submit" className="btn btn-accent">
                Send Message
              </button>
              <p className="enquiry-banner-privacy">
                We&apos;ll only use your details to respond to this enquiry. For further information please read our <a href="#">privacy policy</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
