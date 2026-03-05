"use client";

import { useEffect, useRef, useState } from "react";

// Navigation menu data structure
const menuItems = [
  {
    label: "About",
    href: "#",
    submenu: [
      { label: "Our Team", href: "#" },
      { label: "Practice Tour", href: "#" },
      { label: "BDA Good Practice", href: "#" },
      { label: "Practice Gallery", href: "#" },
      { label: "Leave a Review", href: "#" },
    ],
  },
  {
    label: "Treatments",
    href: "/treatments",
    submenu: [
      {
        label: "Straight Teeth For Adults",
        href: "#",
        submenu: [
          { label: "Aligners", href: "#" },
          { label: "Braces", href: "#" },
          { label: "Tooth Whitening", href: "#" },
        ],
      },
      {
        label: "Straight Teeth For Children/Teens",
        href: "#",
        submenu: [
          { label: "Aligners for Children/Teens", href: "#" },
          { label: "Braces for Children/Teens", href: "#" },
          { label: "Braces for Under 10s", href: "#" },
          { label: "NHS Suitability Check", href: "#" },
        ],
      },
      {
        label: "Hidden Braces",
        href: "#",
        submenu: [
          { label: "Ceramic Braces", href: "#" },
          { label: "Clear Aligners", href: "#" },
          { label: "Lingual Braces", href: "#" },
        ],
      },
      {
        label: "Fixed Braces",
        href: "#",
        submenu: [
          { label: "Metal Braces", href: "#" },
          { label: "Self Ligating Braces", href: "#" },
        ],
      },
      {
        label: "Severe Cases",
        href: "#",
        submenu: [
          { label: "Functional Braces", href: "#" },
          { label: "Orthognathic Surgery", href: "#" },
        ],
      },
      {
        label: "Retainers",
        href: "#",
        submenu: [
          { label: "Retainers 4 Life", href: "#" },
          { label: "Oldham Retainers", href: "#" },
          { label: "Caring for Your Braces", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Why Choose Us",
    href: "#",
    submenu: [
      { label: "Our Specialists", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Our Philosophy", href: "#" },
      { label: "Our Awards", href: "#" },
    ],
  },
  {
    label: "Success Stories",
    href: "#",
    submenu: [
      { label: "Before and Afters", href: "#" },
      { label: "Testimonials", href: "#" },
    ],
  },
  {
    label: "Costs",
    href: "#",
  },
  {
    label: "For Patients",
    href: "#",
    submenu: [
      { label: "New Patients", href: "#" },
      { label: "Information Leaflets", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Orthodontists vs Dentists", href: "#" },
      { label: "Your Feedback", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    label: "Contact Us",
    href: "#",
  },
];

// SVG Icons as components
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const LogoMark = () => (
  <svg className="logo-mark" viewBox="0 0 50 50">
    <path
      d="M25 5 C35 5 45 15 42 28 C39 41 28 45 18 40 C8 35 2 22 10 12 C15 6 20 5 25 5Z"
      fill="none"
      stroke="#2e6da0"
      strokeWidth="2.5"
    />
    <path
      d="M20 12 C30 8 40 18 35 30 C32 36 24 38 18 34"
      fill="none"
      stroke="#5ba4cf"
      strokeWidth="2.5"
    />
  </svg>
);

// Chevron icon for dropdowns
const ChevronDown = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Navigation item with dropdown
type MenuItem = {
  label: string;
  href: string;
  submenu?: MenuItem[];
};

const NavItem = ({ item }: { item: MenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="nav-item"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href={item.href} className="nav-link">
        {item.label}
        {item.submenu && <ChevronDown />}
      </a>
      {item.submenu && isOpen && (
        <div className="dropdown">
          {item.submenu.map((subItem, index) => (
            <div key={index} className="dropdown-item-wrapper">
              <a href={subItem.href} className="dropdown-item">
                {subItem.label}
                {subItem.submenu && (
                  <span className="submenu-arrow">&rsaquo;</span>
                )}
              </a>
              {subItem.submenu && (
                <div className="nested-dropdown">
                  {subItem.submenu.map((nestedItem, nestedIndex) => (
                    <a
                      key={nestedIndex}
                      href={nestedItem.href}
                      className="dropdown-item"
                    >
                      {nestedItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Decorative floating logo for backgrounds
const FloatingLogo = ({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div className={`floating-logo ${className}`} style={style}>
    <svg viewBox="0 0 50 50">
      <path
        d="M25 5 C35 5 45 15 42 28 C39 41 28 45 18 40 C8 35 2 22 10 12 C15 6 20 5 25 5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M20 12 C30 8 40 18 35 30 C32 36 24 38 18 34"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  </div>
);

// Animated element component
function AnimatedElement({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

// Before/After Slider Component
function BeforeAfterSlider({ label }: { label: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After image (full width, underneath) */}
      <div className="ba-after">
        <img src="/images/beforeafter.jpg" alt="After treatment" />
      </div>

      {/* Before image (clipped) */}
      <div className="ba-before" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img src="/images/beforeafter.jpg" alt="Before treatment" />
      </div>

      {/* Slider handle */}
      <div
        className="ba-handle"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="ba-handle-line" />
        <div className="ba-handle-circle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
      </div>

      <div className="ba-label">{label}</div>
    </div>
  );
}

// Team data
const teamMembers = [
  { name: "Dr. Sarah Mitchell", role: "SPECIALIST ORTHODONTIST", gender: "female" },
  { name: "Dr. James Thompson", role: "SPECIALIST ORTHODONTIST", gender: "male" },
  { name: "Dr. Emily Roberts", role: "SPECIALIST ORTHODONTIST", gender: "female" },
  { name: "Dr. Michael Chen", role: "SPECIALIST ORTHODONTIST", gender: "male" },
  { name: "Dr. Rachel Adams", role: "SPECIALIST ORTHODONTIST", gender: "female" },
];

// Team Section with carousel
function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getCardPosition = (index: number) => {
    const diff = index - activeIndex;
    const totalMembers = teamMembers.length;

    // Handle wrap-around
    let normalizedDiff = diff;
    if (diff > totalMembers / 2) normalizedDiff = diff - totalMembers;
    if (diff < -totalMembers / 2) normalizedDiff = diff + totalMembers;

    if (normalizedDiff === 0) return "center";
    if (normalizedDiff === -1) return "left";
    if (normalizedDiff === 1) return "right";
    if (normalizedDiff === -2) return "far-left";
    if (normalizedDiff === 2) return "far-right";
    return "hidden";
  };

  return (
    <section className="team">
      <div className="team-container">
        <div className="team-content">
          <div className="team-label">MEET THE TEAM</div>
          <h2 className="team-title">
            <span className="team-title-line1">Specialist Orthodontists</span>
            <span className="team-title-line2">Dedicated To Exceptional Care</span>
          </h2>
          <p className="team-description">
            With decades of combined experience, our specialist orthodontist team
            is here to help you achieve a straighter smile - whether you&apos;re
            considering aligners, braces, or other treatments. No matter your
            starting point or goals, you&apos;ll be in safe, trusted hands.
          </p>
          <a href="#" className="btn-team-cta">
            MEET OUR TEAM
          </a>
        </div>
        <div className="team-carousel">
          <button className="carousel-btn carousel-btn-prev" onClick={handlePrev} disabled={isAnimating}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className="carousel-cards">
            {teamMembers.map((member, index) => {
              const position = getCardPosition(index);
              if (position === "hidden") return null;
              return (
                <div
                  key={member.name}
                  className={`carousel-card carousel-card-${position}`}
                >
                  <div className={`carousel-card-img carousel-card-img-${member.gender}`}>
                    <svg viewBox="0 0 100 100" className="placeholder-avatar">
                      <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3" />
                      <ellipse cx="50" cy="85" rx="30" ry="25" fill="currentColor" opacity="0.3" />
                    </svg>
                  </div>
                  <div className="carousel-card-info">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="carousel-btn carousel-btn-next" onClick={handleNext} disabled={isAnimating}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [headerTop, setHeaderTop] = useState(56);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setHeaderTop(window.scrollY > 50 ? 0 : 56);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <a href="tel:01616200808" className="top-bar-phone">
              <PhoneIcon /> 0161 620 0808
            </a>
            <span>
              <ClockIcon /> Mon-Fri: 8:30am - 5:30pm
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <a href="#" className="top-bar-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Dentist Referrals
            </a>
            <a href="mailto:info@oldhamorthodontics.co.uk">
              info@oldhamorthodontics.co.uk
            </a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header
        className={`header ${scrolled ? "scrolled" : ""}`}
        style={{ top: `${headerTop}px` }}
      >
        <div className="header-inner">
          <a href="#" className="logo">
            <LogoMark />
            <div className="logo-text">
              <span className="name">Oldham</span>
              <span className="sub">Orthodontics</span>
            </div>
          </a>
          <nav>
            {menuItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="#" className="btn btn-primary">
              Free Consultation
            </a>
          </div>
          <div className="mobile-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/images/hero.jpg" alt="Orthodontics patient smiling" />
        </div>
        <FloatingLogo
          className="xl drift light"
          style={{ top: "15%", left: "5%", opacity: 0.06 }}
        />
        <FloatingLogo
          className="lg pulse light"
          style={{ bottom: "20%", right: "10%", opacity: 0.05 }}
        />
        <FloatingLogo
          className="md sway light"
          style={{ top: "60%", left: "15%", opacity: 0.04 }}
        />
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <StarIcon />
              Specialist Orthodontic Practice
            </div>
            <h1>
              Creating <span>Confident Smiles</span> for Children & Adults
            </h1>
            <p>
              Modern braces and advanced aligner treatments delivered by
              experienced, trusted orthodontists in a warm and welcoming
              practice in Oldham.
            </p>
            <div className="hero-btns">
              <a href="#" className="btn btn-accent">
                Book Your Free Consultation
              </a>
              <a href="#" className="btn btn-outline-light">
                Costs
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="num">30+</div>
                <div className="label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="num">3</div>
                <div className="label">Aligner Systems</div>
              </div>
              <div className="hero-stat">
                <div className="num">5*</div>
                <div className="label">Patient Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <div className="info-bar">
        <div className="info-item">
          <div className="icon">Location</div>
          <div>&nbsp;123 High Street, Oldham, OL1</div>
        </div>
        <div className="info-item">
          <div className="icon">Hours</div>
          <div>Mon-Fri: 8:30am - 5:30pm</div>
        </div>
        <div className="info-item">
          <div className="icon">Phone</div>
          <div>0161 620 0808</div>
        </div>
        <div className="info-item">
          <div className="icon">P</div>
          <div>Free Patient Parking</div>
        </div>
      </div>

      {/* TREATMENTS */}
      <section className="treatments">
        <FloatingLogo
          className="lg drift blue logo-decoration-1"
          style={{ top: "5%", right: "3%" }}
        />
        <FloatingLogo
          className="md pulse blue logo-decoration-2"
          style={{ bottom: "10%", left: "5%" }}
        />
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Treatments</div>
            <h2 className="section-title">
              Orthodontic Solutions for Every Smile
            </h2>
            <p className="section-desc">
              From traditional braces to the latest aligner technology, we offer
              a full range of treatments tailored to your needs.
            </p>
          </div>
          <div className="treatment-grid">
            <AnimatedElement>
              <div className="treatment-card">
                <img src="/images/Braces.jpg" alt="Fixed Braces" className="treatment-bg" />
                <div className="treatment-overlay"></div>
                <div className="treatment-content">
                  <h3>Fixed Braces</h3>
                  <p>
                    Proven, effective treatment for precise tooth alignment using
                    modern bracket systems.
                  </p>
                  <span className="learn-more">Learn More &rarr;</span>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="treatment-card">
                <img src="/images/Invisalign.jpg" alt="Clear Aligners" className="treatment-bg" />
                <div className="treatment-overlay"></div>
                <div className="treatment-content">
                  <h3>Clear Aligners</h3>
                  <p>
                    Three advanced aligner systems for discreet, comfortable teeth
                    straightening.
                  </p>
                  <span className="learn-more">Learn More &rarr;</span>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="treatment-card">
                <img src="/images/child.jpg" alt="Children and Teens" className="treatment-bg" />
                <div className="treatment-overlay"></div>
                <div className="treatment-content">
                  <h3>Children & Teens</h3>
                  <p>
                    Early assessment and specialist orthodontics in a friendly,
                    relaxed environment.
                  </p>
                  <span className="learn-more">Learn More &rarr;</span>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="treatment-card">
                <img src="/images/Adult.jpg" alt="Adult Orthodontics" className="treatment-bg" />
                <div className="treatment-overlay"></div>
                <div className="treatment-content">
                  <h3>Adult Orthodontics</h3>
                  <p>
                    Discreet options for adults including invisible aligners and
                    lingual braces.
                  </p>
                  <span className="learn-more">Learn More &rarr;</span>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-choose">
        <FloatingLogo
          className="xl rotate light"
          style={{ top: "-10%", right: "-5%" }}
        />
        <FloatingLogo
          className="lg sway light"
          style={{ bottom: "5%", left: "2%" }}
        />
        <FloatingLogo
          className="md float-vertical light"
          style={{ top: "40%", right: "8%" }}
        />
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose Oldham Orthodontics
            </h2>
          </div>
          <div className="why-grid">
            <AnimatedElement>
              <div className="why-card">
                <div className="icon">
                  <img src="/images/consultation.png" alt="Free Consultation" />
                </div>
                <h3>Free Consultation</h3>
                <p>
                  Your first appointment is completely free - with no pressure
                  and no obligation. Walk away with a clear understanding of
                  your options.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="why-card">
                <div className="icon">
                  <img src="/images/medical.png" alt="Experienced Orthodontists" />
                </div>
                <h3>Experienced Orthodontists</h3>
                <p>
                  Our clinicians are highly respected specialists with decades
                  of experience and a reputation for exceptional results.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="why-card">
                <div className="icon">
                  <img src="/images/aligner.png" alt="Three Aligner Systems" />
                </div>
                <h3>Three Aligner Systems</h3>
                <p>
                  We offer three leading aligner brands, giving you more choice
                  and ensuring the best fit for your lifestyle and goals.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="why-card">
                <div className="icon">
                  <img src="/images/family.png" alt="Family-Friendly Practice" />
                </div>
                <h3>Family-Friendly Practice</h3>
                <p>
                  We&apos;re a big family ourselves - warm, welcoming and
                  supportive. Every patient is treated like one of our own.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="why-card">
                <div className="icon">
                  <img src="/images/monitor.png" alt="Modern Technology" />
                </div>
                <h3>Modern Technology</h3>
                <p>
                  Digital scanning, advanced imaging and cutting-edge treatment
                  planning for faster, more comfortable results.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="why-card">
                <div className="icon">
                  <img src="/images/accessible.png" alt="Transparent Process" />
                </div>
                <h3>Transparent Process</h3>
                <p>
                  Clear pricing, written treatment summaries and a step-by-step
                  journey - you&apos;ll always know what to expect.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* SMILE JOURNEY */}
      <section className="journey">
        <FloatingLogo
          className="lg subtle-drift coral"
          style={{ top: "10%", left: "5%" }}
        />
        <FloatingLogo
          className="xl subtle-pulse blue"
          style={{ bottom: "-15%", right: "0%" }}
        />
        <div className="container">
          <div className="section-header">
            <div className="section-label">Your Smile Journey</div>
            <h2 className="section-title">
              From First Visit to Confident Smile
            </h2>
            <p className="section-desc">
              A clear, simple path to your new smile - with support and guidance
              at every stage.
            </p>
          </div>
          <div className="journey-steps">
            <AnimatedElement>
              <div className="journey-step">
                <div className="step-num">1</div>
                <h3>Free Consultation</h3>
                <p>
                  Discuss your goals, explore treatment options and receive a
                  same-day written summary - all completely free.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="journey-step">
                <div className="step-num">2</div>
                <h3>Records Appointment</h3>
                <p>
                  X-rays, photographs and digital scans to create your
                  personalised treatment plan. Just 50 GBP, deducted from your total.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="journey-step">
                <div className="step-num">3</div>
                <h3>Treatment Begins</h3>
                <p>
                  Your custom treatment starts with regular check-ups and full
                  support from our dedicated team throughout.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="journey-step">
                <div className="step-num">4</div>
                <h3>Smile Transformation</h3>
                <p>
                  Reveal your new confident smile! We&apos;ll ensure your
                  results are maintained with retainers and aftercare.
                </p>
              </div>
            </AnimatedElement>
          </div>
          <div className="journey-cta">
            <a href="#" className="btn btn-accent">
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <TeamSection />

      {/* REVIEWS */}
      <section className="reviews">
        <FloatingLogo
          className="xl rotate coral"
          style={{ top: "-10%", left: "-5%", opacity: 0.03 }}
        />
        <FloatingLogo
          className="md float-vertical blue"
          style={{ bottom: "20%", right: "5%" }}
        />
        <div className="container">
          <div className="section-header">
            <div className="section-label">Patient Reviews</div>
            <h2 className="section-title">Hear From Our Patients</h2>
            <p className="section-desc">
              Real stories from real patients who&apos;ve transformed their
              smiles with us.
            </p>
          </div>
          <div className="reviews-grid">
            <AnimatedElement>
              <div className="review-card">
                <div className="review-stars">*****</div>
                <p>
                  &ldquo;From the very first consultation, I felt welcomed and
                  at ease. The whole team are fantastic and my results are
                  amazing!&rdquo;
                </p>
                <div className="review-author">Sarah T.</div>
                <div className="review-source">Google Review</div>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="review-card">
                <div className="review-stars">*****</div>
                <p>
                  &ldquo;Brilliant practice with a lovely friendly team. My
                  son&apos;s treatment has been smooth from start to finish.
                  Highly recommend!&rdquo;
                </p>
                <div className="review-author">James P.</div>
                <div className="review-source">Google Review</div>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="review-card">
                <div className="review-stars">*****</div>
                <p>
                  &ldquo;I was nervous about getting braces as an adult but they
                  made me feel so comfortable. Best decision I&apos;ve ever made
                  for my smile.&rdquo;
                </p>
                <div className="review-author">Amina K.</div>
                <div className="review-source">Google Review</div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <FloatingLogo
          className="lg drift blue"
          style={{ top: "5%", right: "8%" }}
        />
        <FloatingLogo
          className="md pulse coral"
          style={{ bottom: "10%", left: "10%" }}
        />
        <div className="container">
          <div className="section-header">
            <div className="section-label">Smile Gallery</div>
            <h2 className="section-title">Real Results, Real Smiles</h2>
            <p className="section-desc">
              See the transformations we&apos;ve achieved for patients just like
              you.
            </p>
          </div>
          <div className="gallery-grid">
            <AnimatedElement>
              <BeforeAfterSlider label="Fixed Braces" />
            </AnimatedElement>
            <AnimatedElement>
              <BeforeAfterSlider label="Clear Aligners" />
            </AnimatedElement>
            <AnimatedElement>
              <BeforeAfterSlider label="Teen Treatment" />
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* COST AND FINANCE */}
      <section className="cost-finance">
        <div className="cost-finance-container">
          <div className="cost-finance-content">
            <div className="cost-finance-label">COST AND FINANCE</div>
            <h2 className="cost-finance-title">
              <span className="cost-finance-line1">Flexible Payment Plans</span>
              <span className="cost-finance-line2">To Suit Every Budget</span>
            </h2>
            <p className="cost-finance-desc">
              Our private treatment options are designed to cater for all, ensuring
              your smile transformation is nothing short of magical. Enjoy competitive
              treatment prices and flexible payment options to make braces accessible
              to everyone.
            </p>
            <a href="#" className="btn btn-accent">
              See Our Treatment Cost
            </a>
          </div>
          <div className="cost-finance-image">
            <img src="/images/Cost.jpg" alt="Flexible payment plans" />
          </div>
        </div>
      </section>

      {/* CTA PANEL */}
      <section className="cta-panel">
        <FloatingLogo
          className="xl rotate light"
          style={{ top: "-20%", left: "5%" }}
        />
        <FloatingLogo
          className="lg float-vertical light"
          style={{ bottom: "-10%", right: "10%" }}
        />
        <FloatingLogo
          className="md drift light"
          style={{ top: "30%", right: "3%" }}
        />
        <div className="container">
          <h2>Ready to Start Your Smile Journey?</h2>
          <p>
            Book your free, no-obligation consultation today and take the first
            step towards the smile you&apos;ve always wanted.
          </p>
          <div className="btns">
            <a href="#" className="btn btn-accent">
              Book Your Free Consultation
            </a>
            <a href="tel:01616200808" className="btn btn-white">
              Call 0161 620 0808
            </a>
          </div>
        </div>
      </section>

      {/* VISIT US / MAP */}
      <section className="visit-section">
        <div className="visit-container">
          <div className="visit-info">
            <h2 className="visit-title">Visit Us</h2>
            <p className="visit-desc">
              We&apos;re conveniently located in Oldham with free patient parking.
              Book a consultation and start your smile journey today.
            </p>

            <div className="visit-details">
              <h3 className="location-title">Oldham Orthodontics</h3>

              <div className="visit-item">
                <div className="visit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="visit-text">
                  <p>221 Hollins Road,</p>
                  <p>Oldham OL8 3AA</p>
                </div>
              </div>

              <div className="visit-item">
                <div className="visit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="visit-text">
                  <a href="tel:01616220987">0161 622 0987</a>
                </div>
              </div>

              <div className="visit-item">
                <div className="visit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="visit-text">
                  <p className="hours-label">Opening Times</p>
                </div>
              </div>

              <div className="hours-grid">
                <div className="hours-row">
                  <span>Monday</span>
                  <span>9:00am - 5:00pm</span>
                </div>
                <div className="hours-row">
                  <span>Tuesday</span>
                  <span>9:00am - 6:00pm</span>
                </div>
                <div className="hours-row">
                  <span>Wednesday</span>
                  <span>9:00am - 5:00pm</span>
                </div>
                <div className="hours-row">
                  <span>Thursday</span>
                  <span>9:00am - 5:00pm</span>
                </div>
                <div className="hours-row">
                  <span>Friday</span>
                  <span>9:00am - 5:00pm</span>
                </div>
                <div className="hours-row">
                  <span>Saturday</span>
                  <span>9:00am - 2:00pm*</span>
                </div>
                <div className="hours-row">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="hours-note">*Alternate Saturdays by appointment only</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=221+Hollins+Road+Oldham+OL8+3AA"
                target="_blank"
                rel="noopener noreferrer"
                className="google-maps-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="visit-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.8892!2d-2.1047!3d53.5408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb7e5b5b5b5b5%3A0x0!2s221+Hollins+Rd%2C+Oldham+OL8+3AA!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Oldham Orthodontics Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="minimal-footer">
        <div className="minimal-footer-container">
          <div className="minimal-footer-top">
            <div className="minimal-footer-logo">
              <svg className="logo-mark" viewBox="0 0 50 50" style={{ width: 50, height: 50 }}>
                <path
                  d="M25 5 C35 5 45 15 42 28 C39 41 28 45 18 40 C8 35 2 22 10 12 C15 6 20 5 25 5Z"
                  fill="none"
                  stroke="#2e6da0"
                  strokeWidth="2.5"
                />
                <path
                  d="M20 12 C30 8 40 18 35 30 C32 36 24 38 18 34"
                  fill="none"
                  stroke="#5ba4cf"
                  strokeWidth="2.5"
                />
              </svg>
              <div className="logo-text">
                <span className="name">Oldham</span>
                <span className="sub">Orthodontics</span>
              </div>
            </div>
            <div className="minimal-footer-social">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="minimal-footer-divider"></div>
          <div className="minimal-footer-bottom">
            <p className="minimal-footer-copyright">
              © COPYRIGHT 2025 | OLDHAM ORTHODONTICS | ALL RIGHTS RESERVED
            </p>
            <div className="minimal-footer-legal">
              <a href="#">PRIVACY POLICY</a>
              <span>|</span>
              <a href="#">TERMS & CONDITIONS</a>
              <span>|</span>
              <a href="#">COOKIES POLICY</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
