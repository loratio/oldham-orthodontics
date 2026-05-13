type InnerHeroProps = {
  label: string;
  title: React.ReactNode;
  description: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
  image: string;
  imageAlt?: string;
};

export default function InnerHero({
  label,
  title,
  description,
  ctaText = "Book Free Consultation",
  ctaHref = "/free-consultation",
  image,
  imageAlt = "",
}: InnerHeroProps) {
  return (
    <section className="inner-hero">
      <div className="inner-hero-content">
        <div className="inner-hero-text">
          <span className="inner-hero-label">{label}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={ctaHref} className="btn btn-accent">
            {ctaText}
          </a>
        </div>
        <div className="inner-hero-image">
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}
