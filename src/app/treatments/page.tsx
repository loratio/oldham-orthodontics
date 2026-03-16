"use client";

import { useState, useRef } from "react";
import "../inner-page.css";

// FAQ Accordion Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`faq-icon ${isOpen ? "rotate" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

// Logo Mark Component
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

// Before/After Carousel Component
function BeforeAfterCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cases = [
    { before: "/images/beforeafter.jpg", type: "Clear Aligners", duration: "12 months" },
    { before: "/images/beforeafter.jpg", type: "Fixed Braces", duration: "18 months" },
    { before: "/images/beforeafter.jpg", type: "Ceramic Braces", duration: "14 months" },
    { before: "/images/beforeafter.jpg", type: "Teen Treatment", duration: "16 months" },
    { before: "/images/beforeafter.jpg", type: "Adult Aligners", duration: "10 months" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="ba-carousel">
      <button className="ba-arrow ba-arrow-left" onClick={() => scroll("left")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <div className="ba-carousel-track" ref={scrollRef}>
        {cases.map((item, index) => (
          <div key={index} className="ba-carousel-card">
            <img src={item.before} alt={`${item.type} before and after`} />
            <div className="ba-carousel-info">
              <h4>{item.type}</h4>
              <p>{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="ba-arrow ba-arrow-right" onClick={() => scroll("right")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

// Team Carousel Component
function TeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const teamMembers = [
    { name: "Dr. Sarah Mitchell", role: "Specialist Orthodontist", gender: "female" },
    { name: "Dr. James Thompson", role: "Specialist Orthodontist", gender: "male" },
    { name: "Dr. Emily Roberts", role: "Specialist Orthodontist", gender: "female" },
    { name: "Dr. Michael Chen", role: "Specialist Orthodontist", gender: "male" },
    { name: "Dr. Rachel Adams", role: "Specialist Orthodontist", gender: "female" },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const getCardPosition = (index: number) => {
    const diff = index - activeIndex;
    const total = teamMembers.length;
    let normalized = diff;
    if (diff > total / 2) normalized = diff - total;
    if (diff < -total / 2) normalized = diff + total;
    if (normalized === 0) return "center";
    if (normalized === -1) return "left";
    if (normalized === 1) return "right";
    return "hidden";
  };

  return (
    <div className="team-carousel-inner">
      <button className="team-arrow team-arrow-left" onClick={handlePrev}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <div className="team-cards-wrapper">
        {teamMembers.map((member, index) => {
          const position = getCardPosition(index);
          if (position === "hidden") return null;
          return (
            <div key={member.name} className={`team-card-inner team-card-${position}`}>
              <div className={`team-card-avatar team-card-avatar-${member.gender}`}>
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3" />
                  <ellipse cx="50" cy="85" rx="30" ry="25" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
              <div className="team-card-details">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="team-arrow team-arrow-right" onClick={handleNext}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

export default function TreatmentsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: "",
  });

  const faqs = [
    {
      question: "How long does treatment typically take?",
      answer: "Treatment duration varies depending on the complexity of your case. Most treatments range from 6 months to 2 years. During your free consultation, we'll provide a personalized timeline for your specific needs."
    },
    {
      question: "Is orthodontic treatment painful?",
      answer: "You may experience some discomfort when braces are first fitted or adjusted, but this typically subsides within a few days. Modern orthodontic techniques are designed to minimize discomfort while maximizing results."
    },
    {
      question: "Can adults have braces?",
      answer: "Absolutely! There's no age limit for orthodontic treatment. We treat many adult patients who want to improve their smile. Options like clear aligners and ceramic braces are popular choices for adults seeking a discreet solution."
    },
    {
      question: "How much does treatment cost?",
      answer: "Costs vary depending on the type of treatment and complexity of your case. We offer flexible payment plans to suit every budget. Book a free consultation to receive a personalized quote."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans to help make treatment affordable. You can spread the cost of your treatment over monthly instalments with 0% finance options available."
    },
  ];

  const testimonials = [
    { name: "Sarah M.", text: "Amazing experience from start to finish. The team made me feel so comfortable!", rating: 5 },
    { name: "James T.", text: "My son's teeth look incredible. Highly recommend Oldham Orthodontics.", rating: 5 },
    { name: "Emma R.", text: "Professional, friendly, and the results speak for themselves.", rating: 5 },
  ];

  const blogPosts = [
    {
      title: "5 Signs Your Child May Need Braces And What To Look For",
      image: "/images/child.jpg",
      category: "Children",
      date: "14.06.2025",
      excerpt: "Tincidunt semper egestas massa lacus varius lacus tristique. Eget a nulla eget venenatis nulla. Facilisi lacus purus ullamcorper aliquet venenatis massa vitae augue est."
    },
    {
      title: "Clear Aligners vs Traditional Braces: Which Is Right For You?",
      image: "/images/Adult.jpg",
      category: "Treatments",
      date: "14.06.2025",
      excerpt: "Massa consequat non egestas odio nisl tempor tincidunt faucibus morbi. In non consequat platea eu id posuere. Amet purus quisque nunc ac."
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* HEADER */}
      <header className="inner-header">
        <div className="header-inner">
          <a href="/" className="logo">
            <LogoMark />
            <div className="logo-text">
              <span className="name">Oldham</span>
              <span className="sub">Orthodontics</span>
            </div>
          </a>
          <nav className="inner-nav">
            <a href="/">Home</a>
            <a href="/treatments" className="active">Treatments</a>
            <a href="#">Adults</a>
            <a href="#">Children</a>
            <a href="#">Cases</a>
            <a href="#">Contact</a>
          </nav>
          <a href="#consultation" className="btn btn-primary">Free Consultation</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="inner-hero">
        <div className="inner-hero-content">
          <div className="inner-hero-text">
            <span className="inner-hero-label">TREATMENTS</span>
            <h1>Discover Your Perfect<br /><span>Smile Solution</span></h1>
            <p>
              From traditional braces to cutting-edge clear aligners, we offer
              a comprehensive range of orthodontic treatments tailored to your
              unique needs and lifestyle.
            </p>
            <a href="#consultation" className="btn btn-accent">Book Free Consultation</a>
          </div>
          <div className="inner-hero-image">
            <img src="/images/Invisalign.jpg" alt="Clear aligners treatment" />
          </div>
        </div>
      </section>

      {/* TREATMENTS SECTION */}
      <section className="inner-treatments">
        <div className="inner-treatments-container">
          <div className="section-header">
            <div className="section-label">Our Treatments</div>
            <h2 className="section-title">Orthodontic Solutions for Every Smile</h2>
            <p className="section-desc">
              From traditional braces to the latest aligner technology, we offer
              a full range of treatments tailored to your needs.
            </p>
          </div>
          <div className="treatment-grid">
            <div className="treatment-card">
              <img src="/images/Braces.jpg" alt="Fixed Braces" className="treatment-bg" />
              <div className="treatment-overlay"></div>
              <div className="treatment-content">
                <h3>Fixed Braces</h3>
                <p>Proven, effective treatment for precise tooth alignment using modern bracket systems.</p>
                <span className="learn-more">Learn More →</span>
              </div>
            </div>
            <div className="treatment-card">
              <img src="/images/Invisalign.jpg" alt="Clear Aligners" className="treatment-bg" />
              <div className="treatment-overlay"></div>
              <div className="treatment-content">
                <h3>Clear Aligners</h3>
                <p>Three advanced aligner systems for discreet, comfortable teeth straightening.</p>
                <span className="learn-more">Learn More →</span>
              </div>
            </div>
            <div className="treatment-card">
              <img src="/images/child.jpg" alt="Children and Teens" className="treatment-bg" />
              <div className="treatment-overlay"></div>
              <div className="treatment-content">
                <h3>Children & Teens</h3>
                <p>Early assessment and specialist orthodontics in a friendly, relaxed environment.</p>
                <span className="learn-more">Learn More →</span>
              </div>
            </div>
            <div className="treatment-card">
              <img src="/images/Adult.jpg" alt="Adult Orthodontics" className="treatment-bg" />
              <div className="treatment-overlay"></div>
              <div className="treatment-content">
                <h3>Adult Orthodontics</h3>
                <p>Discreet options for adults including invisible aligners and lingual braces.</p>
                <span className="learn-more">Learn More →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION 1 - Image Left */}
      <section className="content-section">
        <div className="content-container">
          <div className="content-image">
            <img src="/images/Braces.jpg" alt="Fixed braces treatment" />
          </div>
          <div className="content-text">
            <span className="content-label">FIXED BRACES</span>
            <h2>Invisalign Treatment</h2>
            <p>
              Invisalign uses a series of custom-made, virtually invisible aligners
              to gradually straighten your teeth. Each aligner is worn for about two
              weeks before moving on to the next in the series, gently shifting your
              teeth into their ideal position.
            </p>
            <p>
              This innovative approach means you can transform your smile without
              the look and feel of traditional metal braces. The aligners are
              removable, making eating, brushing, and flossing easier than ever.
            </p>
            <a href="#" className="content-link">
              Learn more about Invisalign
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION 2 - Image Right */}
      <section className="content-section alt">
        <div className="content-container reverse">
          <div className="content-image">
            <img src="/images/Adult.jpg" alt="Adult orthodontics" />
          </div>
          <div className="content-text">
            <span className="content-label">CLEAR ALIGNERS</span>
            <h2>Why Choose Clear Aligners?</h2>
            <p>
              Clear aligners offer a discreet, comfortable alternative to traditional
              braces. Perfect for adults and teens who want to straighten their teeth
              without anyone noticing.
            </p>
            <ul className="content-list">
              <li>Virtually invisible when worn</li>
              <li>Removable for eating and cleaning</li>
              <li>Fewer appointments required</li>
              <li>Comfortable with no metal brackets</li>
              <li>See your results before you start</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFITS OF INVISALIGN SECTION */}
      <section className="benefits-section">
        <div className="benefits-container">
          <div className="benefits-header">
            <h2>The Benefits Of <span>Invisalign®?</span></h2>
            <p>
              Invisalign clear aligners offer a modern approach to straightening teeth.
              Using advanced 3D technology, we create a series of custom-made aligners
              designed specifically for your smile journey.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-item-text">
              <h4>Discreet</h4>
              <p>Because Invisalign clear aligners are nearly invisible, they make a great option for client-facing professionals.</p>
            </div>
            <div className="benefit-item-text">
              <h4>Accurate</h4>
              <p>Invisalign clear aligners are 100% customised for your smile, making them incredibly efficient.</p>
            </div>
            <div className="benefit-item-text">
              <h4>Removable</h4>
              <p>Going to a big meeting or event? You can take out your aligners for special occasions, meal times and to brush your teeth.</p>
            </div>
            <div className="benefit-item-text">
              <h4>Comfortable</h4>
              <p>The smooth medical-grade plastic of the aligners won&apos;t irritate your cheeks or gums.</p>
            </div>
            <div className="benefit-item-text">
              <h4>Convenient</h4>
              <p>Pair Invisalign treatment with Dental Monitoring for remote check-ins.</p>
            </div>
            <div className="benefit-item-text">
              <h4>Affordable</h4>
              <p>At Oldham Orthodontics we can work out a plan that best suits your budget. We offer 0% APR finance and other flexible payment options up to 36 months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="video-section">
        <div className="video-container">
          <div className="video-overlay"></div>
          <img src="/images/video.png" alt="Invisalign treatment video" className="video-bg" />
          <button className="video-play-btn" aria-label="Play video">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </button>
          <span className="video-text">PLAY VIDEO</span>
        </div>
      </section>

      {/* CONTENT SECTION 3 - Image Left */}
      <section className="content-section">
        <div className="content-container">
          <div className="content-image">
            <img src="/images/child.jpg" alt="Children orthodontics" />
          </div>
          <div className="content-text">
            <span className="content-label">CHILDREN &amp; TEENS</span>
            <h2>Early Orthodontic Assessment</h2>
            <p>
              The American Association of Orthodontists recommends that children
              have their first orthodontic assessment by age 7. Early evaluation
              allows us to identify potential issues and plan the most effective
              treatment approach.
            </p>
            <p>
              We create a welcoming, fun environment for our younger patients,
              making their orthodontic journey a positive experience from start
              to finish.
            </p>
            <a href="#" className="content-link">
              Learn about children&apos;s treatments
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURE BANNER */}
      <section className="feature-banner">
        <div className="feature-banner-overlay"></div>
        <div className="feature-banner-content">
          <span className="feature-label">WHY CHOOSE US</span>
          <h2>Experience The Oldham<br />Orthodontics Difference</h2>
          <p>
            With over 30 years of combined experience, our specialist orthodontists
            are dedicated to creating beautiful, healthy smiles for patients of all ages.
          </p>
          <a href="#" className="btn btn-white">Meet Our Team</a>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <span className="faq-label">COMMON QUESTIONS</span>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to the most common questions about orthodontic treatment.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="inner-testimonials">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <span className="testimonials-label">TESTIMONIALS</span>
            <h2>What Our Patients Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-avatar">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3" />
                    <ellipse cx="50" cy="85" rx="30" ry="25" fill="currentColor" opacity="0.3" />
                  </svg>
                </div>
                <div className="testimonial-stars">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p>&ldquo;{testimonial.text}&rdquo;</p>
                <span className="testimonial-name">{testimonial.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET OUR SPECIALIST BANNER */}
      <section className="specialist-banner">
        <div className="specialist-banner-bg"></div>
        <div className="specialist-banner-content">
          <div className="specialist-text">
            <span className="specialist-label">MEET OUR SPECIALIST</span>
            <h2>Expert Orthodontists<br /><span>Dedicated To You</span></h2>
            <p>
              Our specialist orthodontists bring decades of combined experience
              and a passion for creating beautiful smiles. Every member of our team is
              committed to providing exceptional care in a warm, welcoming environment.
            </p>
            <a href="#" className="btn btn-white">DISCOVER MORE</a>
          </div>
          <div className="specialist-images">
            <div className="specialist-member">
              <div className="specialist-photo">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3" />
                  <ellipse cx="50" cy="85" rx="30" ry="25" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
              <span className="specialist-name">Dr. Sarah Mitchell</span>
            </div>
            <div className="specialist-member">
              <div className="specialist-photo">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3" />
                  <ellipse cx="50" cy="85" rx="30" ry="25" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
              <span className="specialist-name">Dr. James Thompson</span>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM GRID */}
      <section className="team-grid-section">
        <div className="team-grid-container">
          <div className="team-grid-header">
            <h2>Meet The Team</h2>
            <p>Our experienced team of specialists is dedicated to providing exceptional orthodontic care in a warm, welcoming environment.</p>
          </div>
          <div className="team-grid">
            <div className="team-grid-card">
              <div className="team-grid-photo">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3" />
                  <ellipse cx="50" cy="85" rx="30" ry="25" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
              <h4>Dr Howard Greeves</h4>
              <span className="team-grid-role">Associate Dentist</span>
              <p>Howard qualified from the Peninsula School of Medicine and Dentistry in 2013 having previously completed...</p>
              <a href="#" className="team-grid-link">READ MORE →</a>
            </div>
            <div className="team-grid-card">
              <div className="team-grid-photo">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3" />
                  <ellipse cx="50" cy="85" rx="30" ry="25" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
              <h4>Dr Jay Wilson</h4>
              <span className="team-grid-role">Specialist Orthodontist and Co-Owner</span>
              <p>Jay completed her specialist Orthodontic training at the Birmingham Dental School in 2009. She has since enhanced...</p>
              <a href="#" className="team-grid-link">READ MORE →</a>
            </div>
            <div className="team-grid-card">
              <div className="team-grid-photo">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3" />
                  <ellipse cx="50" cy="85" rx="30" ry="25" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
              <h4>Rachel White</h4>
              <span className="team-grid-role">Dental Hygienist</span>
              <p>Rachel has been with Stoke Bishop Dental since 2009. She qualified in 2002 at the Eastman Dental Hospital...</p>
              <a href="#" className="team-grid-link">READ MORE →</a>
            </div>
            <div className="team-grid-card">
              <div className="team-grid-photo">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3" />
                  <ellipse cx="50" cy="85" rx="30" ry="25" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
              <h4>Marianne Nicoll</h4>
              <span className="team-grid-role">Practice Manager</span>
              <p>Marianne joined Stoke Bishop Dental Centre in November 2022 as our Lead Dental Nurse bringing over twenty...</p>
              <a href="#" className="team-grid-link">READ MORE →</a>
            </div>
          </div>
          <div className="team-grid-cta">
            <a href="#" className="btn btn-primary">DISCOVER MORE</a>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES SECTION */}
      <section className="success-stories-section">
        <div className="success-stories-container">
          <div className="success-stories-header">
            <span className="success-stories-label">SUCCESS STORIES</span>
            <h2>Real Results <span>From Our Patients</span></h2>
            <p>See the amazing transformations we&apos;ve achieved for our patients with before and after comparisons.</p>
          </div>
          <div className="success-stories-grid">
            <div className="success-story-card">
              <div className="success-story-image">
                <img src="/images/beforeafter.jpg" alt="Cosmetic Bonding before and after" />
                <div className="success-story-labels">
                  <span className="label-before">BEFORE</span>
                  <span className="label-after">AFTER</span>
                </div>
                <button className="success-story-toggle" aria-label="Toggle before/after">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8M12 8v8" />
                  </svg>
                </button>
              </div>
              <p className="success-story-type">Cosmetic Bonding</p>
            </div>
            <div className="success-story-card">
              <div className="success-story-image">
                <img src="/images/beforeafter.jpg" alt="Clear Aligners before and after" />
                <div className="success-story-labels">
                  <span className="label-before">BEFORE</span>
                  <span className="label-after">AFTER</span>
                </div>
                <button className="success-story-toggle" aria-label="Toggle before/after">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8M12 8v8" />
                  </svg>
                </button>
              </div>
              <p className="success-story-type">Clear Aligners</p>
            </div>
            <div className="success-story-card">
              <div className="success-story-image">
                <img src="/images/beforeafter.jpg" alt="Porcelain Veneers before and after" />
                <div className="success-story-labels">
                  <span className="label-before">BEFORE</span>
                  <span className="label-after">AFTER</span>
                </div>
                <button className="success-story-toggle" aria-label="Toggle before/after">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8M12 8v8" />
                  </svg>
                </button>
              </div>
              <p className="success-story-type">Porcelain Veneers</p>
            </div>
          </div>
          <div className="success-stories-nav">
            <a href="#" className="btn btn-primary">DISCOVER MORE</a>
            <div className="success-stories-arrows">
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

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner-content">
          <div className="cta-text">
            <h2>Ready To Start Your<br />Smile Journey?</h2>
            <p>Book your free, no-obligation consultation today.</p>
            <a href="#consultation" className="btn btn-accent">Book Free Consultation</a>
          </div>
          <div className="cta-image">
            <img src="/images/Cost.jpg" alt="Happy patient" />
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="blog-section-featured">
        <div className="blog-featured-container">
          <div className="blog-featured-header">
            <h2>Blog</h2>
            <p>Stay up to date with the latest orthodontic news, tips and advice from our expert team.</p>
          </div>
          <div className="blog-featured-grid">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-featured-card">
                <div className="blog-featured-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-featured-content">
                  <span className="blog-featured-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href="#" className="blog-featured-link">
                    READ MORE →
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="blog-featured-nav">
            <a href="#" className="btn btn-primary">DISCOVER MORE</a>
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

      {/* CONSULTATION BANNER SECTION */}
      <section id="consultation" className="consult-banner-section">
        <div className="consult-banner-container">
          <div className="consult-banner-image">
            <img src="/images/child.jpg" alt="Mother and daughter consultation" />
          </div>
          <div className="consult-banner-content">
            <span className="consult-banner-label">BOOK FREE CONSULTATION</span>
            <h2>Start Your Smile<br /><span>Journey Today</span></h2>
            <p>
              Take the first step towards your perfect smile. Book a free,
              no-obligation consultation with our specialist orthodontists.
            </p>
            <form className="consult-banner-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="E-Mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <button type="submit" className="btn btn-mint">FREE CONSULTATION</button>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="inner-contact">
        <div className="contact-container">
          <div className="contact-info">
            <span className="contact-label">GET IN TOUCH</span>
            <h2>Visit Us Today</h2>
            <p>
              We&apos;d love to welcome you to our practice. Book a free consultation
              and take the first step towards your perfect smile.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p>221 Hollins Road</p>
                  <p>Oldham OL8 3AA</p>
                </div>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:01616220987">0161 622 0987</a>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@oldhamorthodontics.co.uk">info@oldhamorthodontics.co.uk</a>
              </div>
            </div>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="maps-link">
              Open in Google Maps
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.8892!2d-2.1047!3d53.5408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb7e5b5b5b5b5%3A0x0!2s221+Hollins+Rd%2C+Oldham+OL8+3AA!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
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
    </>
  );
}
