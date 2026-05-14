type TreatmentCard = {
  title: string;
  description: string;
  image: string;
  href?: string;
  learnMore?: string;
};

type TreatmentGridProps = {
  label?: string;
  title: string;
  description?: string;
  treatments: TreatmentCard[];
};

export default function TreatmentGrid({
  label = "Our Treatments",
  title,
  description,
  treatments,
}: TreatmentGridProps) {
  return (
    <section className="inner-treatments treatments">
      <div className="container">
        <div className="section-header">
          <div className="section-label">{label}</div>
          <h2 className="section-title">{title}</h2>
          {description && <p className="section-desc">{description}</p>}
        </div>
        <div className={`treatment-grid${treatments.length === 3 ? " treatment-grid--three" : ""}${treatments.length === 2 ? " treatment-grid--two" : ""}`}>
          {treatments.map((t, i) => (
            <a key={i} href={t.href ?? "#"} className="treatment-card">
              <div className="treatment-img-wrap">
                <img src={t.image} alt={t.title} className="treatment-bg" width={1600} height={900} loading="lazy" />
                <div className="treatment-overlay"></div>
              </div>
              <div className="treatment-content">
                <h3>{t.title}</h3>
                <p>{t.description}</p>
                <span className="learn-more">{t.learnMore ?? t.title} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
