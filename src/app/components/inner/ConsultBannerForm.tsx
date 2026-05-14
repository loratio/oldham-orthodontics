"use client";

import { useState } from "react";

type ConsultBannerFormProps = {
  label?: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt?: string;
};

export default function ConsultBannerForm({
  label = "BOOK FREE CONSULTATION",
  title,
  description,
  image,
  imageAlt = "",
}: ConsultBannerFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="consultation" className="consult-banner-section">
      <div className="consult-banner-container">
        <div className="consult-banner-image">
          <img src={image} alt={imageAlt} width={1600} height={900} loading="lazy" />
        </div>
        <div className="consult-banner-content">
          <span className="consult-banner-label">{label}</span>
          <h2>{title}</h2>
          <p>{description}</p>
          <form className="consult-banner-form" onSubmit={handleSubmit}>
            <input
              type="text"
              aria-label="First Name"
              placeholder="First Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              autoComplete="given-name"
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
            <button type="submit" className="btn btn-accent">
              FREE CONSULTATION
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
