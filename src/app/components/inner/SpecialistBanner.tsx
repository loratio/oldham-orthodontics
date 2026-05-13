type Specialist = { name: string; image?: string };

type SpecialistBannerProps = {
  label?: string;
  title: React.ReactNode;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  specialists: Specialist[];
};

const Avatar = () => (
  <svg viewBox="0 0 100 100">
    <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3" />
    <ellipse cx="50" cy="85" rx="30" ry="25" fill="currentColor" opacity="0.3" />
  </svg>
);

export default function SpecialistBanner({
  label = "MEET OUR SPECIALIST",
  title,
  description,
  ctaText = "DISCOVER MORE",
  ctaHref = "#",
  specialists,
}: SpecialistBannerProps) {
  return (
    <section className="specialist-banner">
      <div className="specialist-banner-bg"></div>
      <div className="specialist-banner-content">
        <div className="specialist-text">
          <span className="specialist-label">{label}</span>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={ctaHref} className="btn btn-accent">
            {ctaText}
          </a>
        </div>
        <div className="specialist-images">
          {specialists.map((s, i) => (
            <div key={i} className="specialist-member">
              <div className="specialist-photo">
                {s.image ? <img src={s.image} alt={s.name} /> : <Avatar />}
              </div>
              <span className="specialist-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
