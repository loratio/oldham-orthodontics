type Benefit = {
  title: string;
  description: string;
};

type BenefitsGridProps = {
  title: React.ReactNode;
  description?: string;
  benefits: Benefit[];
};

export default function BenefitsGrid({ title, description, benefits }: BenefitsGridProps) {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-item-text">
              <h4>{b.title}</h4>
              <p>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
