import type { Metadata } from "next";
import Link from "next/link";
import "../../inner-page.css";

import InnerHero from "../../components/inner/InnerHero";
import TreatmentGrid from "../../components/inner/TreatmentGrid";
import ContentSection from "../../components/inner/ContentSection";
import TestimonialsGrid from "../../components/inner/TestimonialsGrid";
import CTABanner from "../../components/inner/CTABanner";
import SectionDivider from "../../components/SectionDivider";
import { links } from "../../lib/internal-links";

export const metadata: Metadata = {
  title: "Treatment For | Care for Every Age",
  description: "Orthodontic care for every stage of life at Oldham Orthodontics. Tailored treatment for adults, teens and children, delivered by our Specialist Orthodontists. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const groups = [
  {
    title: "Adults",
    description: "Discreet, flexible treatment that fits around work, family and everyday life.",
    image: "/images/adults-hero.webp",
    href: links.adults,
    learnMore: "Adults",
  },
  {
    title: "Teens",
    description: "Friendly, supportive care designed around teenage routines, school and confidence.",
    image: "/images/teens-hero.webp",
    href: links.teens,
    learnMore: "Teens",
  },
  {
    title: "Children",
    description: "Early assessments and gentle, welcoming care for younger smiles.",
    image: "/images/children-hero.webp",
    href: links.children,
    learnMore: "Children",
  },
];

const testimonials = [
  {
    name: "Olivia C.",
    text: "Both of my children have been treated here over the past few years. The team is brilliant with kids and the whole family always feels welcome.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Rachel B.",
    text: "I'm in my forties and finally felt ready to do something about my teeth. The team made me feel completely at ease and never made me feel like I'd left it too late.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Tom W.",
    text: "Our daughter is mid-treatment and loves coming in. They explain everything to her in a way she understands and she leaves smiling every time.",
    rating: 5,
    source: "Google Review",
  },
];

export default function TreatmentForPage() {
  return (
    <>
      <InnerHero
        label="TREATMENT FOR"
        title={
          <>
            Specialist orthodontic care
            <br />
            <span>for every age</span>
          </>
        }
        description="Whether you're an adult considering treatment for the first time, a parent planning ahead for your child, or a teen ready to start, you'll find a friendly, expert team here to support you at every stage."
        ctaText="Arrange your free consultation"
        image="/images/tf-hub-hero.webp"
        imageAlt="A family enjoying time together at home"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <TreatmentGrid
        label="Who We Treat"
        title="Care that's tailored to every stage of life"
        description="Every age comes with different priorities. We adjust our approach so treatment feels right for the patient in front of us."
        treatments={groups}
      />

      <ContentSection
        label="OUR APPROACH"
        title="A welcoming team for every patient"
        paragraphs={[
          <>From your first <Link href={links.freeConsultation}>free consultation</Link>, our priority is making you and your family feel comfortable. We take the time to listen, explain options clearly, and recommend the treatment that&apos;s right for the person in front of us.</>,
          "Whether you're a confident adult patient, a slightly nervous teen, or a curious younger child, you'll meet the same warm, professional team who genuinely enjoy what they do.",
        ]}
        image="/images/tf-hub-approach.webp"
        imageAlt="A mum and daughter sharing a moment together"
        linkText="Meet our team"
        linkHref={links.meetTeam}
      />

      <SectionDivider from={WHITE} to={WARM} />

      <TestimonialsGrid
        label="From our patients"
        title="What our patients say"
        description="Real stories from local families and individuals we've treated."
        testimonials={testimonials}
      />

      <SectionDivider from={WARM} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Ready to take the first step?"
        description="Book a free, no-obligation consultation and find out what treatment is right for you or your family."
        ctaText="Arrange your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
