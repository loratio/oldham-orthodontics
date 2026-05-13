"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type MenuItem = {
  label: string;
  href: string;
  submenu?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    label: "Treatments",
    href: "/treatments",
    submenu: [
      {
        label: "Clear Aligners",
        href: "/treatments/clear-aligners",
        submenu: [
          { label: "Invisalign®", href: "/treatments/clear-aligners/invisalign" },
          { label: "Clarity™ Aligners", href: "/treatments/clear-aligners/clarity" },
          { label: "ClearCorrect Aligners", href: "/treatments/clear-aligners/clearcorrect" },
        ],
      },
      {
        label: "Braces",
        href: "/treatments/braces",
        submenu: [
          { label: "Metal Braces", href: "/treatments/braces/metal" },
          { label: "Ceramic Braces", href: "/treatments/braces/ceramic" },
          { label: "Lingual Braces", href: "/treatments/braces/lingual" },
        ],
      },
      {
        label: "Treatment For",
        href: "/treatments/treatment-for",
        submenu: [
          { label: "Adults", href: "/treatments/treatment-for/adults" },
          { label: "Teens", href: "/treatments/treatment-for/teens" },
          { label: "Children", href: "/treatments/treatment-for/children" },
        ],
      },
      {
        label: "Other Services",
        href: "/treatments/other-services",
        submenu: [
          { label: "Jaw Surgery", href: "/treatments/other-services/jaw-surgery" },
          { label: "Retainers", href: "/treatments/other-services/retainers" },
        ],
      },
    ],
  },
  { label: "Costs", href: "/costs" },
  { label: "Results", href: "/results" },
  {
    label: "About Us",
    href: "/about-us",
    submenu: [
      { label: "Meet Our Team", href: "/about-us/meet-our-team" },
      { label: "Our Practice", href: "/about-us/our-practice" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

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

function NavItem({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasMegaMenu = item.label === "Treatments" && item.submenu?.some((s) => s.submenu);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 350);
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
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const hideFloatingCta = pathname === "/free-consultation";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="nav-wrapper" ref={topBarRef}>
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

        <header className={`header ${scrolled ? "scrolled" : ""}`}>
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
              <a href="/free-consultation" className="btn btn-accent">
                Free Consultation
              </a>
            </div>
            <div className="header-right-mobile">
              <a href="tel:01616220987" className="mobile-call">
                <PhoneIcon /> Call Us
              </a>
              <div
                className={`mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </header>
        <a href="/" className="nav-logo">
          <img src="/images/oldham-logo.png" alt="Oldham Orthodontics" className="header-logo-img" />
        </a>
      </div>

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
                    <svg
                      className="mobile-chevron"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div className={`mobile-submenu ${mobileExpanded === item.label ? "open" : ""}`}>
                    {item.submenu.map((sub, subIndex) =>
                      "submenu" in sub && sub.submenu ? (
                        <div key={subIndex} className="mobile-submenu-group">
                          <a href={sub.href} className="mobile-submenu-heading">
                            {sub.label}
                          </a>
                          {sub.submenu.map((child, childIndex) => (
                            <a
                              key={childIndex}
                              href={child.href}
                              className="mobile-submenu-child"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <a
                          key={subIndex}
                          href={sub.href}
                          className="mobile-submenu-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </a>
                      )
                    )}
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <div className="mobile-menu-footer">
            <a href="tel:01616220987" className="mobile-menu-phone">
              <PhoneIcon /> 0161 622 0987
            </a>
            <a
              href="/free-consultation"
              className="btn btn-accent mobile-menu-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>

      {!hideFloatingCta && (
        <div className={`mobile-floating-cta ${scrolled ? "visible" : ""}`}>
          <a href="/free-consultation" className="btn btn-accent">
            Free Consultation
          </a>
        </div>
      )}
    </>
  );
}
