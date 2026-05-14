type CompactHeroProps = {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
};

export default function CompactHero({ label, title, description }: CompactHeroProps) {
  return (
    <section className="inner-hero inner-hero--compact">
      <div className="inner-hero-content">
        <div className="inner-hero-text">
          <span className="inner-hero-label">{label}</span>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      </div>
    </section>
  );
}
