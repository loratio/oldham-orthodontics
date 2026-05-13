type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category?: string;
  href?: string;
};

type BlogSectionProps = {
  title?: string;
  description?: string;
  posts: BlogPost[];
  ctaText?: string;
  ctaHref?: string;
};

export default function BlogSection({
  title = "Blog",
  description = "Stay up to date with the latest orthodontic news, tips and advice from our expert team.",
  posts,
  ctaText = "DISCOVER MORE",
  ctaHref = "#",
}: BlogSectionProps) {
  return (
    <section className="blog-section-featured">
      <div className="blog-featured-container">
        <div className="blog-featured-header">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="blog-featured-grid">
          {posts.map((post, i) => (
            <article key={i} className="blog-featured-card">
              <div className="blog-featured-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-featured-content">
                <span className="blog-featured-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={post.href ?? "#"} className="blog-featured-link">
                  READ MORE →
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="blog-featured-nav">
          <a href={ctaHref} className="btn btn-primary">
            {ctaText}
          </a>
          <div className="blog-featured-arrows">
            <button className="arrow-btn" aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="arrow-btn" aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
