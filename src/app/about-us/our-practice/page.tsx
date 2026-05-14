import type { Metadata } from "next";
import Link from "next/link";
import "../../inner-page.css";

import InnerHero from "../../components/inner/InnerHero";
import ContentSection from "../../components/inner/ContentSection";
import CTABanner from "../../components/inner/CTABanner";
import SectionDivider from "../../components/SectionDivider";
import { links } from "../../lib/internal-links";

export const metadata: Metadata = {
  title: "Our Practice | Modern Clinic on Hollins Road, Oldham",
  description: "Have a look around Oldham Orthodontics. Welcoming waiting areas, modern surgeries, free patient parking and BDA Good Practice accreditation. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const gallery = [
  { src: "/images/practice/practice-waiting-1.webp", alt: "The Oldham Orthodontics waiting area with comfortable leather seating and an award display" },
  { src: "/images/practice/practice-waiting-2.webp", alt: "A bright waiting area opening onto the practice surgery doors" },
  { src: "/images/practice/practice-surgery-1.webp", alt: "A modern, immaculately presented orthodontic surgery room" },
  { src: "/images/practice/practice-surgery-2.webp", alt: "An additional surgery room with up-to-date orthodontic equipment" },
  { src: "/images/practice/practice-xray.webp", alt: "The on-site digital X-ray and imaging suite" },
];

const bdaCommitments = [
  "We aim to provide dental care of consistently good quality for all patients.",
  "We only provide care that meets your needs and wishes.",
  "We aim to make your treatment as comfortable and convenient as possible.",
  "We look after your general health and safety while receiving dental care.",
  "We follow current guidelines on infection control.",
  "We check for mouth cancer and tell you what we find.",
  "We take part in continuing professional development to keep our skills and knowledge up-to-date.",
  "We train all staff in practice-wide work systems and review training plans once a year.",
  "We welcome feedback and deal promptly with any complaints.",
  "Every member of the practice is aware of the need to work safely under General Dental Council guidelines.",
];

export default function OurPracticePage() {
  return (
    <>
      <InnerHero
        label="OUR PRACTICE"
        title={
          <>
            A modern clinic on
            <br />
            <span>Hollins Road, Oldham</span>
          </>
        }
        description="Tucked just off the main road through Oldham, our practice has been looking after local smiles for years. Free patient parking is available right on site, and the welcoming feel starts the moment you walk through the door."
        ctaText="Arrange your free consultation"
        image="/images/about-us-practice.webp"
        imageAlt="The exterior of Oldham Orthodontics at 221 Hollins Road"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <ContentSection
        label="WELCOME"
        title="Comfortable, calm and easy to find"
        paragraphs={[
          <>You&apos;ll find us at <strong>221 Hollins Road, Oldham OL8 3AA</strong>, with free patient parking on the forecourt. The reception team will greet you on arrival, and the waiting area is bright, comfortable and family-friendly with plenty of seating for parents and children alike.</>,
          <>Every appointment is run from one of our modern surgeries, equipped with digital scanners and imaging to keep the patient experience as smooth as possible. From your first <Link href={links.freeConsultation}>free consultation</Link> through to your final review, you&apos;ll be looked after by the same calm, friendly team.</>,
        ]}
        image="/images/practice/practice-waiting-1.webp"
        imageAlt="The Oldham Orthodontics waiting area"
        linkText="Meet our team"
        linkHref={links.meetTeam}
      />

      <SectionDivider from={WHITE} to={WARM} />

      <section className="practice-gallery-section" style={{ background: WARM }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label">PRACTICE GALLERY</div>
            <h2 className="section-title">Have a look around</h2>
            <p className="section-desc">A glimpse of the waiting area, surgeries and imaging suite you&apos;ll see when you visit us.</p>
          </div>
          <div className="practice-gallery-grid">
            {gallery.map((img, i) => (
              <div key={i} className="practice-gallery-item">
                <img src={img.src} alt={img.alt} width={1600} height={900} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from={WARM} to={WHITE} />

      <section className="practice-tour-section" style={{ background: WHITE }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label">VIRTUAL TOUR</div>
            <h2 className="section-title">Take a virtual walk around the practice</h2>
            <p className="section-desc">Have a look inside before you visit. Click and drag to explore the practice in 360 degrees, powered by Google Street View.</p>
          </div>
          <div className="practice-tour-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2suk!4v1443694932167!6m8!1m7!1s1NA2YWL8fM4AAAQp6spjog!2m2!1d53.52531616511624!2d-2.118888040078218!3f249.30338631340925!4f-1.591993282806996!5f1.2656463178707669"
              title="Oldham Orthodontics virtual practice tour"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <SectionDivider from={WHITE} to={WARM} />

      <ContentSection
        alt
        imagePosition="right"
        label="BDA GOOD PRACTICE"
        title="A nationally accredited standard of care"
        paragraphs={[
          "Oldham Orthodontics is a member of the British Dental Association (BDA) Good Practice Scheme - a UK-wide quality assurance framework that recognises practices delivering care to nationally agreed best-practice standards.",
          "Membership means we sign up to ten clear commitments about how we treat patients and run the practice. They cover everything from the quality of care we provide to how we keep our skills up to date and how we handle feedback. The full quality statement is below.",
        ]}
        list={bdaCommitments}
        image="/images/practice/practice-bda-reception.webp"
        imageAlt="The Oldham Orthodontics reception desk"
      />

      <SectionDivider from={WARM} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Pop in and see us"
        description="Book a free, no-obligation consultation and we'll show you round in person. Free parking on site and a friendly welcome guaranteed."
        ctaText="Arrange your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
