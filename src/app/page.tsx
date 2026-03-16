"use client";

import { useEffect, useRef, useState } from "react";

// Navigation menu data structure
const menuItems = [
  {
    label: "Treatments",
    href: "#",
    submenu: [
      {
        label: "Clear Aligners",
        href: "#",
        submenu: [
          { label: "Invisalign®", href: "#" },
          { label: "Clarity™ Aligners", href: "#" },
          { label: "ClearCorrect Aligners", href: "#" },
        ],
      },
      {
        label: "Braces",
        href: "#",
        submenu: [
          { label: "Metal Braces", href: "#" },
          { label: "Ceramic Braces", href: "#" },
          { label: "Lingual Braces", href: "#" },
        ],
      },
      {
        label: "Treatment For",
        href: "#",
        submenu: [
          { label: "Adults", href: "#" },
          { label: "Teens", href: "#" },
          { label: "Children", href: "#" },
        ],
      },
      {
        label: "Other Services",
        href: "#",
        submenu: [
          { label: "Jaw Surgery", href: "#" },
          { label: "Retainers", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Costs",
    href: "#",
  },
  {
    label: "Results",
    href: "#",
  },
  {
    label: "About Us",
    href: "#",
    submenu: [
      { label: "Meet Our Team", href: "#" },
      { label: "Our Practice", href: "#" },
    ],
  },
  {
    label: "Contact",
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
  <svg className="logo-mark" viewBox="0 0 100 100">
    {/* Dark navy outer swoosh - top right to bottom */}
    <path
      d="M52 2 C72 0 92 16 96 38 C100 58 88 78 70 88 C65 91 58 90 62 85 C78 74 86 54 82 36 C78 18 64 6 52 2Z"
      fill="#1a2a5c"
    />
    {/* Medium blue swoosh - bottom to left */}
    <path
      d="M65 94 C50 102 28 100 14 86 C0 72 -2 48 8 30 C11 25 16 22 16 28 C10 46 12 66 24 80 C36 92 52 96 65 94Z"
      fill="#2e6da0"
    />
    {/* Blue swoosh - left to top */}
    <path
      d="M10 24 C18 8 38 -2 58 2 C68 4 74 10 68 14 C52 8 34 10 22 22 C12 34 10 50 14 62 C16 66 12 68 8 62 C2 50 4 36 10 24Z"
      fill="#3d8cc4"
    />
    {/* Light blue inner swoosh */}
    <path
      d="M46 8 C60 4 76 12 84 28 C88 36 86 42 80 38 C72 26 60 16 46 16 C34 16 24 24 20 36 C18 40 14 40 14 34 C16 20 30 10 46 8Z"
      fill="#5ba4cf"
    />
    {/* Lightest swoosh accent */}
    <path
      d="M80 68 C72 82 56 92 40 90 C32 88 28 84 34 82 C48 86 62 80 72 68 C78 58 80 46 76 36 C74 32 78 30 80 36 C84 48 84 58 80 68Z"
      fill="#7dbde8"
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasMegaMenu = item.label === "Treatments" && item.submenu?.some(s => s.submenu);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      className={`nav-item${hasMegaMenu ? " has-mega" : ""}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <a href={item.href} className="nav-link">
        {item.label}
        {item.submenu && <ChevronDown />}
      </a>
      {item.submenu && isOpen && (
        hasMegaMenu ? (
          <div className="mega-menu" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            {item.submenu.map((category, index) => (
              <div key={index} className="mega-menu-column">
                <a href={category.href} className="mega-menu-heading">
                  {category.label}
                </a>
                {category.submenu?.map((subItem, subIndex) => (
                  <a key={subIndex} href={subItem.href} className="mega-menu-item">
                    {subItem.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="dropdown" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            {item.submenu.map((subItem, index) => (
              <div key={index} className="dropdown-item-wrapper">
                <a href={subItem.href} className="dropdown-item">
                  {subItem.label}
                </a>
              </div>
            ))}
          </div>
        )
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
    <img src="/images/oldham-circle-watermark.png" alt="" />
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
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 6 3 12 9 18" />
            <polyline points="15 6 21 12 15 18" />
          </svg>
        </div>
      </div>

      <div className="ba-label">{label}</div>
    </div>
  );
}

// Team data
const teamMembers = [
  { name: "Dr Ovais Malik", role: "CONSULTANT & SPECIALIST ORTHODONTIST", gender: "male", image: "https://cdn.shopify.com/s/files/1/0858/4382/files/IMG_3769_1_1.jpg" },
  { name: "Dr Sarah Glossop", role: "CONSULTANT & SPECIALIST ORTHODONTIST", gender: "female" },
  { name: "Hamza Anwar", role: "SPECIALIST ORTHODONTIST", gender: "male" },
  { name: "Dr Nadia Stivaros", role: "SPECIALIST IN ORTHODONTICS", gender: "female" },
  { name: "Dr Samer Salam", role: "SPECIALIST IN ORTHODONTICS", gender: "male" },
  { name: "Dr Simon Watkinson", role: "CONSULTANT & SPECIALIST ORTHODONTIST", gender: "male" },
  { name: "Dr Richard Needham", role: "CONSULTANT & SPECIALIST ORTHODONTIST", gender: "male" },
];

// Team Section with carousel
function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
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
          <div className="section-label">Meet The Team</div>
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
            Meet Our Team
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
                    {member.image ? (
                      <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <svg viewBox="0 0 100 100" className="placeholder-avatar">
                        <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3" />
                        <ellipse cx="50" cy="85" rx="30" ry="25" fill="currentColor" opacity="0.3" />
                      </svg>
                    )}
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
  const [topBarHeight, setTopBarHeight] = useState(40);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      if (topBarRef.current) {
        setTopBarHeight(topBarRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <>
      {/* NAV WRAPPER */}
      <div className="nav-wrapper" ref={topBarRef}>
        {/* TOP BAR */}
        <div className="top-bar">
          <div className="top-bar-inner" style={{ justifyContent: "flex-end" }}>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <a href="#" className="top-bar-link" style={{ fontWeight: 700 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Dentist Referrals
              </a>
              <a href="tel:01616200808" className="top-bar-phone">
                <PhoneIcon /> 0161 620 0808
              </a>
            </div>
          </div>
        </div>

        {/* HEADER */}
        <header
          className={`header ${scrolled ? "scrolled" : ""}`}
        >
          <div className="header-inner">
          <a href="/" className="mobile-logo">
            <img src="/images/oldham-logo.png" alt="Oldham Orthodontics" className="mobile-logo-img" />
          </a>
          <div className="logo-spacer"></div>
          <nav>
            {menuItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </nav>
          <div className="header-right desktop-only">
            <a href="#" className="btn btn-accent">
              Free Consultation
            </a>
          </div>
          <div className="header-right-mobile">
            <a href="tel:01616220987" className="mobile-call">
              <PhoneIcon /> Call Us
            </a>
            <div className={`mobile-toggle ${mobileMenuOpen ? "open" : ""}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
        <a href="#" className="nav-logo">
          <img src="/images/oldham-logo.png" alt="Oldham Orthodontics" className="header-logo-img" />
        </a>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          {menuItems.map((item, index) => (
            <div key={index} className="mobile-menu-item">
              {item.submenu ? (
                <>
                  <div
                    className={`mobile-menu-link has-children ${mobileExpanded === item.label ? "expanded" : ""}`}
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg className="mobile-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div className={`mobile-submenu ${mobileExpanded === item.label ? "open" : ""}`}>
                    {item.submenu.map((sub, subIndex) => (
                      "submenu" in sub && sub.submenu ? (
                        <div key={subIndex} className="mobile-submenu-group">
                          <a href={sub.href} className="mobile-submenu-heading">{sub.label}</a>
                          {sub.submenu.map((child: {label: string; href: string}, childIndex: number) => (
                            <a key={childIndex} href={child.href} className="mobile-submenu-child" onClick={() => setMobileMenuOpen(false)}>
                              {child.label}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <a key={subIndex} href={sub.href} className="mobile-submenu-link" onClick={() => setMobileMenuOpen(false)}>
                          {sub.label}
                        </a>
                      )
                    ))}
                  </div>
                </>
              ) : (
                <a href={item.href} className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <div className="mobile-menu-footer">
            <a href="tel:01616220987" className="mobile-menu-phone">
              <PhoneIcon /> 0161 622 0987
            </a>
            <a href="#" className="btn btn-accent mobile-menu-cta" onClick={() => setMobileMenuOpen(false)}>
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>

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
                <div className="num">100+</div>
                <div className="label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="num">3</div>
                <div className="label">Aligner Systems</div>
              </div>
              <div className="hero-stat">
                <div className="num">4.6<svg width="24" height="24" viewBox="0 0 24 24" fill="#f5c542" stroke="#f5c542" strokeWidth="1" style={{display: "inline", verticalAlign: "middle", marginLeft: "2px", marginBottom: "4px"}}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></div>
                <div className="label">Patient Rating</div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero to Treatments curve */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10, height: "140px" }}>
          <svg viewBox="0 0 1440 140" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
            <path d="M0,80 C200,140 400,100 720,120 C1000,138 1200,90 1440,110 L1440,140 L0,140 Z" fill="#fff" />
          </svg>
        </div>
      </section>

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
                <div className="treatment-img-wrap">
                  <img src="/images/Braces.jpg" alt="Fixed Braces" className="treatment-bg" />
                  <div className="treatment-overlay"></div>
                </div>
                <div className="treatment-content">
                  <h3>Fixed Braces</h3>
                  <p>
                    Proven, effective treatment for precise tooth alignment using
                    modern bracket systems.
                  </p>
                  <span className="learn-more">Braces &rarr;</span>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="treatment-card">
                <div className="treatment-img-wrap">
                  <img src="/images/Invisalign.jpg" alt="Clear Aligners" className="treatment-bg" />
                  <div className="treatment-overlay"></div>
                </div>
                <div className="treatment-content">
                  <h3>Clear Aligners</h3>
                  <p>
                    Three advanced aligner systems for discreet, comfortable teeth
                    straightening.
                  </p>
                  <span className="learn-more">Aligners &rarr;</span>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="treatment-card">
                <div className="treatment-img-wrap">
                  <img src="/images/child.jpg" alt="Children and Teens" className="treatment-bg" />
                  <div className="treatment-overlay"></div>
                </div>
                <div className="treatment-content">
                  <h3>Early Orthodontics</h3>
                  <p>
                    Early assessment and specialist orthodontics in a friendly,
                    relaxed environment.
                  </p>
                  <span className="learn-more">Children &rarr;</span>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="treatment-card">
                <div className="treatment-img-wrap">
                  <img src="/images/Adult.jpg" alt="Adult Orthodontics" className="treatment-bg" />
                  <div className="treatment-overlay"></div>
                </div>
                <div className="treatment-content">
                  <h3>Adult Orthodontics</h3>
                  <p>
                    Discreet options for adults including invisible aligners and
                    lingual braces.
                  </p>
                  <span className="learn-more">Adults &rarr;</span>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <div className="section-curve-divider" style={{ background: "#fff" }}>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path d="M0,0 L0,60 C180,100 360,120 540,90 C720,60 900,110 1080,100 C1200,94 1340,70 1440,80 L1440,0 Z" fill="#fff" />
          <path d="M0,60 C180,100 360,120 540,90 C720,60 900,110 1080,100 C1200,94 1340,70 1440,80 L1440,140 L0,140 Z" fill="#1a1a3e" />
        </svg>
      </div>
      <section className="why-choose">
        <FloatingLogo
          className="xl drift light"
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
              Why Choose Oldham Orthodontics?
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
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a href="#" className="btn btn-accent">About Us</a>
          </div>
        </div>
      </section>

      {/* SMILE JOURNEY */}
      <div className="section-curve-divider" style={{ background: "#1a1a3e" }}>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path d="M0,0 L0,70 C240,110 480,40 720,70 C960,100 1140,120 1320,90 C1380,82 1420,75 1440,70 L1440,0 Z" fill="#1a1a3e" />
          <path d="M0,70 C240,110 480,40 720,70 C960,100 1140,120 1320,90 C1380,82 1420,75 1440,70 L1440,140 L0,140 Z" fill="#faf7f4" />
        </svg>
      </div>
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

      {/* Journey to Team curve */}
      <div className="section-curve-divider curve-tight" style={{ background: "#faf7f4" }}>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path d="M0,0 L0,65 C200,100 450,50 720,75 C990,100 1200,110 1440,70 L1440,0 Z" fill="#faf7f4" />
          <path d="M0,65 C200,100 450,50 720,75 C990,100 1200,110 1440,70 L1440,140 L0,140 Z" fill="#f8f8f8" />
        </svg>
      </div>

      {/* TEAM */}
      <TeamSection />

      {/* Team to Reviews curve */}
      <div className="section-curve-divider" style={{ background: "#f8f8f8" }}>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path d="M0,0 L0,55 C300,100 600,30 900,70 C1100,95 1300,110 1440,60 L1440,0 Z" fill="#f8f8f8" />
          <path d="M0,55 C300,100 600,30 900,70 C1100,95 1300,110 1440,60 L1440,140 L0,140 Z" fill="#faf7f4" />
        </svg>
      </div>

      {/* REVIEWS */}
      <section className="reviews">
        <FloatingLogo
          className="xl drift coral"
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

      {/* Reviews to Gallery curve */}
      <div className="section-curve-divider" style={{ background: "#faf7f4" }}>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path d="M0,0 L0,70 C180,110 420,40 660,65 C900,90 1100,120 1440,75 L1440,0 Z" fill="#faf7f4" />
          <path d="M0,70 C180,110 420,40 660,65 C900,90 1100,120 1440,75 L1440,140 L0,140 Z" fill="#f5f2ef" />
        </svg>
      </div>

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
            <div className="section-label">Patient Results</div>
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
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a href="#" className="btn btn-accent">Our Results</a>
          </div>
        </div>
      </section>

      {/* Gallery to Cost curve */}
      <div className="section-curve-divider" style={{ background: "#f5f2ef" }}>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path d="M0,0 L0,60 C250,95 500,110 750,80 C1000,50 1200,90 1440,70 L1440,0 Z" fill="#f5f2ef" />
          <path d="M0,60 C250,95 500,110 750,80 C1000,50 1200,90 1440,70 L1440,140 L0,140 Z" fill="#faf7f4" />
        </svg>
      </div>

      {/* COST AND FINANCE */}
      <section className="cost-finance">
        <div className="cost-finance-container">
          <div className="cost-finance-content">
            <div className="section-label">Costs</div>
            <h2 className="cost-finance-title">
              Transparent Fees &amp; <span style={{ color: "var(--coral)" }}>Flexible Payments</span>
            </h2>
            <ul className="cost-finance-list">
              <li>
                <span className="cost-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Bespoke, all-inclusive pricing plans
              </li>
              <li>
                <span className="cost-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                0% Interest payment options (0% APR)
              </li>
              <li>
                <span className="cost-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Initial assessment with digital simulation
              </li>
              <li>
                <span className="cost-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Family &amp; sibling discounts available
              </li>
            </ul>
            <div className="cost-price-card">
              <div className="cost-price-left">
                <div className="cost-price-label">Start from only</div>
                <div className="cost-price-amount">£50 <span>/week</span></div>
              </div>
              <div className="cost-price-right">
                <div className="cost-price-heading">Spread the cost</div>
                <div className="cost-price-desc">With our interest-free finance plans.</div>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <a href="#" className="btn btn-accent">Costs</a>
            </div>
          </div>
          <div className="cost-finance-image">
            <img src="/images/Cost.jpg" alt="Flexible payment plans" />
          </div>
        </div>
      </section>

      {/* CTA PANEL */}
      <div className="section-curve-divider curve-into-cta" style={{ background: "transparent" }}>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path d="M0,0 L0,50 C120,80 300,110 500,85 C700,60 850,100 1050,110 C1200,117 1350,90 1440,65 L1440,0 Z" fill="#faf7f4" />
        </svg>
      </div>
      <section className="cta-panel">
        <FloatingLogo
          className="xl drift light"
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
          </div>
        </div>
      </section>

      {/* CTA to Visit curve */}
      <div className="curve-out-of-cta">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
          <path d="M0,80 C160,120 380,140 600,110 C820,80 1050,125 1260,135 C1360,140 1420,125 1440,115 L1440,180 L0,180 Z" fill="#faf7f4" />
        </svg>
      </div>

      {/* VISIT US / MAP */}
      <section className="visit-section">
        <div className="visit-container">
          <div className="visit-info">
            <h2 className="visit-title">Get In Touch <span style={{ color: "var(--coral)" }}>With Us</span></h2>
            <p className="visit-desc">
              We&apos;re conveniently located in Oldham with free patient parking. Book a consultation and start your smile journey today.
            </p>

            <div className="visit-details">
              <div className="visit-item">
                <div className="visit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="visit-text">
                  <p><strong>Oldham Orthodontics</strong></p>
                  <p>221 Hollins Road, Oldham</p>
                  <p>OL8 3AA</p>
                </div>
              </div>

              <div className="visit-item">
                <div className="visit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="visit-text">
                  <a href="tel:01616220987"><strong>0161 622 0987</strong></a>
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
                  <p><strong>Opening Times</strong></p>
                </div>
              </div>

              <div className="hours-grid">
                <div className="hours-row">
                  <span>Monday</span>
                  <span>9am – 5pm</span>
                </div>
                <div className="hours-row">
                  <span>Tuesday</span>
                  <span>9am – 6pm</span>
                </div>
                <div className="hours-row">
                  <span>Wednesday</span>
                  <span>9am – 5pm</span>
                </div>
                <div className="hours-row">
                  <span>Thursday</span>
                  <span>9am – 5pm</span>
                </div>
                <div className="hours-row">
                  <span>Friday</span>
                  <span>9am – 5pm</span>
                </div>
                <div className="hours-row">
                  <span>Saturday</span>
                  <span>Closed</span>
                </div>
                <div className="hours-row">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=221+Hollins+Road+Oldham+OL8+3AA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                style={{ marginTop: "16px" }}
              >
                Get Directions &rarr;
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
              <img src="/images/tio-logo.png" alt="Oldham Orthodontics" className="footer-logo-img" />
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

      {/* Floating mobile CTA */}
      <div className={`mobile-floating-cta ${scrolled ? "visible" : ""}`}>
        <a href="#" className="btn btn-accent">Free Consultation</a>
      </div>
    </>
  );
}
