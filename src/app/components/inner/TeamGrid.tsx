"use client";

import { useEffect, useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  gdcNumber?: string;
  bio: string;
  fullBio?: string;
  image?: string;
  href?: string;
};

type TeamGridProps = {
  title?: string;
  description?: string;
  members: TeamMember[];
  ctaText?: string;
  ctaHref?: string;
  showCta?: boolean;
};

const Avatar = () => (
  <svg viewBox="0 0 100 100">
    <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3" />
    <ellipse cx="50" cy="85" rx="30" ry="25" fill="currentColor" opacity="0.3" />
  </svg>
);

export default function TeamGrid({
  title = "Meet The Team",
  description = "Our experienced team of specialists is dedicated to providing exceptional orthodontic care in a warm, welcoming environment.",
  members,
  ctaText = "DISCOVER MORE",
  ctaHref = "#",
  showCta = true,
}: TeamGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  const openMember = openIndex !== null ? members[openIndex] : null;

  return (
    <section className="team-grid-section">
      <div className="team-grid-container">
        <div className="team-grid-header">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="team-grid">
          {members.map((m, i) => (
            <div key={i} className="team-grid-card">
              <div className="team-grid-photo">
                {m.image ? <img src={m.image} alt={m.name} /> : <Avatar />}
              </div>
              <h4>{m.name}</h4>
              <span className="team-grid-role">{m.role}</span>
              {m.gdcNumber && (
                <span className="team-grid-gdc">GDC No. {m.gdcNumber}</span>
              )}
              <p>{m.bio}</p>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="team-grid-link"
              >
                READ MORE →
              </button>
            </div>
          ))}
        </div>
        {showCta && (
          <div className="team-grid-cta">
            <a href={ctaHref} className="btn btn-accent">
              {ctaText}
            </a>
          </div>
        )}
      </div>

      {openMember && (
        <div
          className="team-modal-backdrop"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-modal-name"
        >
          <div
            className="team-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="team-modal-close"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="team-modal-content">
              {openMember.image && (
                <div className="team-modal-photo">
                  <img src={openMember.image} alt={openMember.name} />
                </div>
              )}
              <h3 id="team-modal-name">{openMember.name}</h3>
              <span className="team-modal-role">{openMember.role}</span>
              {openMember.gdcNumber && (
                <span className="team-modal-gdc">GDC No. {openMember.gdcNumber}</span>
              )}
              <div className="team-modal-bio">
                {(openMember.fullBio || openMember.bio)
                  .split(/\n+/)
                  .map((para, idx) => (
                    <p key={idx}>{para.trim()}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
