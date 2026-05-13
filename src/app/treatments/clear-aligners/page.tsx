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
  title: "Clear Aligners | Invisible Teeth Straightening",
  description: "Discover clear aligner treatment at Oldham Orthodontics. Invisalign®, Clarity™ and ClearCorrect options available, with expert guidance from our Specialist Orthodontists. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const brands = [
  {
    title: "Invisalign®",
    description: "The world's most established clear aligner system, with proven results for a wide range of cases.",
    image: "/images/invisalign-hero.webp",
    href: "/treatments/clear-aligners/invisalign",
    learnMore: "Invisalign®",
  },
  {
    title: "Clarity™ Aligners",
    description: "A clear, comfortable alternative from 3M, designed for everyday wear and reliable results.",
    image: "/images/clarity-hero.webp",
    href: "/treatments/clear-aligners/clarity",
    learnMore: "Clarity™",
  },
  {
    title: "ClearCorrect Aligners",
    description: "Slim, discreet aligners with a comfortable fit, suited to a range of mild to moderate cases.",
    image: "/images/clearcorrect-hero.webp",
    href: "/treatments/clear-aligners/clearcorrect",
    learnMore: "ClearCorrect",
  },
];

const testimonials = [
  {
    name: "Hannah J.",
    text: "I'd put off braces for years, but clear aligners felt manageable. The team explained everything and I never felt rushed or pushed. My smile has changed completely.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Michael P.",
    text: "Friendly, professional and genuinely interested in finding what was right for me. They talked through every option and let me make the call.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Sophie L.",
    text: "I barely noticed I was wearing them, and neither did anyone else. The whole experience felt straightforward and supportive from start to finish.",
    rating: 5,
    source: "Google Review",
  },
];

export default function ClearAlignersPage() {
  return (
    <>
      <InnerHero
        label="CLEAR ALIGNERS"
        title={
          <>
            Straighten your teeth
            <br />
            <span>without anyone noticing</span>
          </>
        }
        description="Clear aligners are a discreet, removable way to straighten teeth without traditional braces. Our team will help you find the right system for your smile, your lifestyle and your budget."
        ctaText="Arrange your free consultation"
        image="/images/ca-hub-hero.webp"
        imageAlt="A patient holding her clear aligner"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <TreatmentGrid
        label="Clear Aligner Brands"
        title="Three trusted aligner systems"
        description="We work with the leading clear aligner brands, so we can match the right system to your treatment needs."
        treatments={brands}
      />

      <ContentSection
        label="OUR APPROACH"
        title="Finding the right aligner for you"
        paragraphs={[
          <>Every smile is different, and so is every aligner system. During your <Link href={links.freeConsultation}>free consultation</Link>, we&apos;ll talk through your goals, take a closer look at your teeth, and recommend the option that fits you best.</>,
          "You'll never feel pushed towards one product over another. Our Specialist Orthodontists choose the system that's right for your case, and explain why so you feel confident going in.",
        ]}
        image="/images/ca-hub-approach.webp"
        imageAlt="A patient holding their clear aligner"
        linkText="Meet our team"
        linkHref={links.meetTeam}
      />

      <SectionDivider from={WHITE} to={WARM} />

      <TestimonialsGrid
        label="From our patients"
        title="What our patients say"
        description="Real stories from local people who've trusted us with their care."
        testimonials={testimonials}
      />

      <SectionDivider from={WARM} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Ready to start your smile journey?"
        description="Book a free, no-obligation consultation and have a friendly chat with our team about which clear aligner system is right for you."
        ctaText="Arrange your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
