type FeatureBannerProps = {
  label: string;
  title: React.ReactNode;
  description: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
};

export default function FeatureBanner({
  label,
  title,
  description,
  ctaText = "Meet Our Team",
  ctaHref = "#",
}: FeatureBannerProps) {
  return (
    <section className="feature-banner">
      <div className="feature-banner-content">
        <span className="feature-label">{label}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={ctaHref} className="btn btn-accent">
          {ctaText}
        </a>
      </div>
    </section>
  );
}
