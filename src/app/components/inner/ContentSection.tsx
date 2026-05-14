type ContentSectionProps = {
  label?: string;
  title: string;
  paragraphs?: React.ReactNode[];
  list?: React.ReactNode[];
  image: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  linkText?: string;
  linkHref?: string;
  alt?: boolean;
};

export default function ContentSection({
  label,
  title,
  paragraphs = [],
  list,
  image,
  imageAlt = "",
  imagePosition = "left",
  linkText,
  linkHref = "#",
  alt = false,
}: ContentSectionProps) {
  return (
    <section className={`content-section${alt ? " alt" : ""}`}>
      <div className={`content-container${imagePosition === "right" ? " reverse" : ""}`}>
        <div className="content-image">
          <img src={image} alt={imageAlt} width={1600} height={900} loading="lazy" />
        </div>
        <div className="content-text">
          {label && <span className="content-label">{label}</span>}
          <h2>{title}</h2>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {list && (
            <ul className="content-list">
              {list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {linkText && (
            <a href={linkHref} className="content-link">
              {linkText}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
