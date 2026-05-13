type Testimonial = {
  name: string;
  text: string;
  rating: number;
  source?: string;
};

type TestimonialsGridProps = {
  label?: string;
  title?: string;
  description?: string;
  testimonials: Testimonial[];
};

export default function TestimonialsGrid({
  label = "Testimonials",
  title = "What Our Patients Say",
  description,
  testimonials,
}: TestimonialsGridProps) {
  return (
    <section className="reviews">
      <div className="container">
        <div className="section-header">
          <div className="section-label">{label}</div>
          <h2 className="section-title">{title}</h2>
          {description && <p className="section-desc">{description}</p>}
        </div>
        <div className="reviews-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">{"★".repeat(t.rating)}</div>
              <p>&ldquo;{t.text}&rdquo;</p>
              <div className="review-author">{t.name}</div>
              {t.source && <div className="review-source">{t.source}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
