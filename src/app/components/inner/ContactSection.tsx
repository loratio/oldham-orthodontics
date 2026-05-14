type ContactSectionProps = {
  label?: string;
  title?: string;
  description?: string;
  address: string[];
  phone: string;
  email: string;
  hours?: [string, string][];
  mapEmbedUrl: string;
  mapsLinkHref?: string;
};

export default function ContactSection({
  label = "GET IN TOUCH",
  title = "Visit Us Today",
  description = "We'd love to welcome you to our practice. Book a free consultation and take the first step towards your perfect smile.",
  address,
  phone,
  email,
  hours,
  mapEmbedUrl,
  mapsLinkHref = "https://www.google.com/maps",
}: ContactSectionProps) {
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;
  return (
    <section className="inner-contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="contact-label">{label}</span>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
          <div className="contact-details">
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                {address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href={telHref}>{phone}</a>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            {hours && hours.length > 0 && (
              <div className="contact-item contact-item--hours">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="contact-hours-title">Opening times</p>
                  <ul className="contact-hours-list">
                    {hours.map(([day, time]) => (
                      <li key={day}>
                        <span>{day}</span>
                        <span>{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <a href={mapsLinkHref} target="_blank" rel="noopener noreferrer" className="maps-link">
            Open in Google Maps
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
        <div className="contact-map">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Practice location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
