"use client";

import { usePathname } from "next/navigation";

const hours: [string, string][] = [
  ["Monday", "9am - 5pm"],
  ["Tuesday", "9am - 6pm"],
  ["Wednesday", "9am - 5pm"],
  ["Thursday", "9am - 5pm"],
  ["Friday", "9am - 5pm"],
  ["Saturday", "Closed"],
  ["Sunday", "Closed"],
];

const HIDE_ON_PATHS = ["/contact", "/free-consultation"];

export default function VisitSection() {
  const pathname = usePathname();
  if (HIDE_ON_PATHS.includes(pathname)) return null;

  return (
    <section className="visit-section">
      <div className="visit-container">
        <div className="visit-info">
          <h2 className="visit-title">
            Get In Touch <span style={{ color: "var(--coral)" }}>With Us</span>
          </h2>
          <p className="visit-desc">
            We&apos;re conveniently located in Oldham with free patient parking. Book a free consultation and start your smile journey today.
          </p>

          <div className="visit-details">
            <div className="visit-item">
              <div className="visit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="visit-text">
                <p><strong>Oldham Orthodontics</strong></p>
                <p>221 Hollins Road, Oldham</p>
                <p>OL8 3AA</p>
              </div>
            </div>

            <div className="visit-item">
              <div className="visit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="visit-text">
                <a href="tel:01616220987"><strong>0161 622 0987</strong></a>
              </div>
            </div>

            <div className="visit-item">
              <div className="visit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="visit-text">
                <p><strong>Opening Times</strong></p>
              </div>
            </div>

            <div className="hours-grid">
              {hours.map(([day, time]) => (
                <div key={day} className="hours-row">
                  <span>{day}</span>
                  <span>{time}</span>
                </div>
              ))}
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=221+Hollins+Road+Oldham+OL8+3AA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
              style={{ marginTop: "16px" }}
            >
              Get Directions &rarr;
            </a>
          </div>
        </div>

        <div className="visit-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.8892!2d-2.1047!3d53.5408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb7e5b5b5b5b5%3A0x0!2s221+Hollins+Rd%2C+Oldham+OL8+3AA!5e0!3m2!1sen!2suk!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Oldham Orthodontics Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
