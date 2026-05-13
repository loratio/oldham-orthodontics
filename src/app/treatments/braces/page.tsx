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
  title: "Braces | Fixed Orthodontic Treatment",
  description: "Discover braces treatment at Oldham Orthodontics, including metal, ceramic and lingual options. Our Specialist Orthodontists will help you find the right fit. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const braceTypes = [
  {
    title: "Metal Braces",
    description: "The most established option - reliable, precise and the most budget-friendly choice.",
    image: "/images/metal-hero.webp",
    href: links.metalBraces,
    learnMore: "Metal Braces",
  },
  {
    title: "Ceramic Braces",
    description: "Tooth-coloured brackets that blend into your smile, with the same effectiveness.",
    image: "/images/ceramic-hero.webp",
    href: links.ceramicBraces,
    learnMore: "Ceramic Braces",
  },
  {
    title: "Lingual Braces",
    description: "Fixed to the back of your teeth so they stay completely hidden during everyday wear.",
    image: "/images/lingual-hero.webp",
    href: links.lingualBraces,
    learnMore: "Lingual Braces",
  },
];

const testimonials = [
  {
    name: "Beth M.",
    text: "I'd been thinking about braces for years and finally booked a consultation. The team explained every option clearly and made me feel completely at ease. My smile has never looked better.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Daniel K.",
    text: "Our son had ceramic braces and the whole experience was brilliant. From his first visit through to fitting and check-ups, everyone made him feel welcome.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Aisha R.",
    text: "I chose lingual braces and couldn't be happier. No one even knew I was in treatment, and the team kept me supported throughout.",
    rating: 5,
    source: "Google Review",
  },
];

export default function BracesPage() {
  return (
    <>
      <InnerHero
        label="BRACES"
        title={
          <>
            Trusted, effective braces
            <br />
            <span>for every smile</span>
          </>
        }
        description="Fixed braces are one of the most established and effective ways to straighten teeth. We offer metal, ceramic and lingual options, so you can choose the style that suits you best."
        ctaText="Arrange your free consultation"
        image="/images/braces-hub-hero.webp"
        imageAlt="A patient smiling during braces treatment"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <TreatmentGrid
        label="Brace Options"
        title="Three styles, all from the same expert team"
        description="Whatever style of braces you choose, you'll be in the hands of Specialist Orthodontists who tailor every plan to the patient."
        treatments={braceTypes}
      />

      <ContentSection
        label="OUR APPROACH"
        title="Helping you choose the right braces for your smile"
        paragraphs={[
          <>Every smile responds differently to treatment. During your <Link href={links.freeConsultation}>free consultation</Link>, we&apos;ll examine your teeth, talk through what&apos;s important to you, and explain the differences between each style of braces.</>,
          "You'll never feel rushed into a decision. Our Specialist Orthodontists will recommend the option that's right for your case, your lifestyle and your budget, and explain why.",
        ]}
        image="/images/braces-hub-approach.webp"
        imageAlt="A young patient wearing fixed metal braces"
        linkText="Meet our team"
        linkHref={links.meetTeam}
      />

      <SectionDivider from={WHITE} to={WARM} />

      <TestimonialsGrid
        label="From our patients"
        title="What our patients say"
        description="Real stories from local people who've trusted us with their braces treatment."
        testimonials={testimonials}
      />

      <SectionDivider from={WARM} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Ready to talk through your options?"
        description="Book a free, no-obligation consultation and our team will walk you through the right braces for you."
        ctaText="Arrange your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
