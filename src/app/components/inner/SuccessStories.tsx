import BeforeAfterSlider from "../BeforeAfterSlider";

type SuccessStory = {
  label: string;
  beforeImage?: string;
  afterImage?: string;
};

type SuccessStoriesProps = {
  label?: string;
  title: React.ReactNode;
  description?: string;
  stories: SuccessStory[];
  ctaText?: string;
  ctaHref?: string;
};

export default function SuccessStories({
  label = "Patient Results",
  title,
  description,
  stories,
  ctaText = "Our Results",
  ctaHref = "#",
}: SuccessStoriesProps) {
  return (
    <section className="gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-label">{label}</div>
          <h2 className="section-title">{title}</h2>
          {description && <p className="section-desc">{description}</p>}
        </div>
        <div className="gallery-grid">
          {stories.map((s, i) => (
            <BeforeAfterSlider
              key={i}
              label={s.label}
              beforeImage={s.beforeImage}
              afterImage={s.afterImage}
            />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a href={ctaHref} className="btn btn-accent">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
