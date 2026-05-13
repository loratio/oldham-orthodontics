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
          <img src={image} alt={imageAlt} />
        </div>
        <div className="consult-banner-content">
          <span className="consult-banner-label">{label}</span>
          <h2>{title}</h2>
          <p>{description}</p>
          <form className="consult-banner-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
