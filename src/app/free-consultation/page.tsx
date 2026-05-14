"use client";

import { useState } from "react";
import "../inner-page.css";
import "./booking.css";

const steps = [
  {
    title: "Warm Welcome",
    description: "Meet our friendly team and enjoy a relaxed environment from the moment you arrive.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 56v-4a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v4" />
        <circle cx="32" cy="24" r="10" />
        <path d="M48 16l4-4M16 16l-4-4" />
      </svg>
    ),
  },
  {
    title: "A Closer Look",
    description: "A Specialist Orthodontist will examine your smile and discuss your goals in detail.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="26" cy="26" r="14" />
        <line x1="36.5" y1="36.5" x2="52" y2="52" />
      </svg>
    ),
  },
  {
    title: "Tailored Plan",
    description: "We'll talk through the right treatment options for you and explain timings and costs clearly.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="12" width="36" height="44" rx="2" />
        <line x1="22" y1="22" x2="42" y2="22" />
        <line x1="22" y1="32" x2="42" y2="32" />
        <line x1="22" y1="42" x2="34" y2="42" />
      </svg>
    ),
  },
  {
    title: "Next Steps",
    description: "If you're happy to go ahead, we'll book your treatment start date - no pressure, no obligation.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="14" width="40" height="42" rx="3" />
        <line x1="12" y1="26" x2="52" y2="26" />
        <line x1="22" y1="10" x2="22" y2="20" />
        <line x1="42" y1="10" x2="42" y2="20" />
        <polyline points="22 41 30 49 42 35" />
      </svg>
    ),
  },
];

export default function FreeConsultationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation request:", formData);
  };

  return (
    <>
      <section id="booking" className="booking-hero">
        <div className="booking-hero-container">
          <div className="booking-hero-content">
            <span className="booking-hero-label">BOOK FREE CONSULTATION</span>
            <h1>
              Start your smile journey with a free,
              <br />
              no-obligation consultation
            </h1>
            <p>
              Meet our Specialist Orthodontists, talk through your goals, and discover the
              right treatment for you. There&apos;s no pressure - just expert advice and a clear plan.
            </p>
            <form className="booking-form" onSubmit={handleSubmit}>
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
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                autoComplete="email"
                required
              />
              <input
                type="tel"
                aria-label="Phone Number"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                autoComplete="tel"
                required
              />
              <button type="submit" className="btn btn-accent booking-submit">
                Book your free consultation
              </button>
              <p className="booking-privacy">
                For further information please read our{" "}
                <a href="#">privacy policy</a>.
              </p>
            </form>
          </div>
          <div className="booking-hero-image">
            <img src="/images/free-consultation-hero.webp" alt="A patient smiling during a relaxed consultation with her orthodontist" width={1200} height={800} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="appointment-steps">
        <div className="appointment-steps-container">
          <h2>What happens at your appointment?</h2>
          <p className="appointment-steps-intro">
            Your free consultation takes around 30 minutes. Here&apos;s exactly what to expect when
            you visit us - friendly faces, expert advice, and a clear next step.
          </p>
          <div className="appointment-steps-grid">
            {steps.map((step, i) => (
              <div key={i} className="appointment-step">
                <div className="appointment-step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <a href="#booking" className="btn btn-accent appointment-steps-cta">
            Arrange your free consultation
          </a>
        </div>
      </section>
    </>
  );
}
