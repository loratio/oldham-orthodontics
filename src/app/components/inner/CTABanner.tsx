type CTABannerProps = {
  title: React.ReactNode;
  description: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function CTABanner({
  title,
  description,
  ctaText = "Book Your Free Consultation",
  ctaHref = "/free-consultation",
}: CTABannerProps) {
  return (
    <section className="cta-panel">
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="btns">
          <a href={ctaHref} className="btn btn-accent">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
