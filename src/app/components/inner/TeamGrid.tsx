type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  href?: string;
};

type TeamGridProps = {
  title?: string;
  description?: string;
  members: TeamMember[];
  ctaText?: string;
  ctaHref?: string;
};

const Avatar = () => (
  <svg viewBox="0 0 100 100">
    <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3" />
    <ellipse cx="50" cy="85" rx="30" ry="25" fill="currentColor" opacity="0.3" />
  </svg>
);

export default function TeamGrid({
  title = "Meet The Team",
  description = "Our experienced team of specialists is dedicated to providing exceptional orthodontic care in a warm, welcoming environment.",
  members,
  ctaText = "DISCOVER MORE",
  ctaHref = "#",
}: TeamGridProps) {
  return (
    <section className="team-grid-section">
      <div className="team-grid-container">
        <div className="team-grid-header">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="team-grid">
          {members.map((m, i) => (
            <div key={i} className="team-grid-card">
              <div className="team-grid-photo">
                {m.image ? <img src={m.image} alt={m.name} /> : <Avatar />}
              </div>
              <h4>{m.name}</h4>
              <span className="team-grid-role">{m.role}</span>
              <p>{m.bio}</p>
              <a href={m.href ?? "#"} className="team-grid-link">
                READ MORE →
              </a>
            </div>
          ))}
        </div>
        <div className="team-grid-cta">
          <a href={ctaHref} className="btn btn-accent">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
