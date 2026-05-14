import type { Metadata } from "next";
import Link from "next/link";
import "../inner-page.css";

import InnerHero from "../components/inner/InnerHero";
import TreatmentGrid from "../components/inner/TreatmentGrid";
import ContentSection from "../components/inner/ContentSection";
import TestimonialsGrid from "../components/inner/TestimonialsGrid";
import CTABanner from "../components/inner/CTABanner";
import SectionDivider from "../components/SectionDivider";
import { links } from "../lib/internal-links";

export const metadata: Metadata = {
  title: "About Us | Specialist Care in the Heart of Oldham",
  description: "Get to know Oldham Orthodontics. Specialist Orthodontists, a welcoming local practice on Hollins Road, and a commitment to honest, modern orthodontic care. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const sections = [
  {
    title: "Meet Our Team",
    description: "The Specialist Orthodontists and support team behind every smile - get to know who you'll meet at your visits.",
    image: "/images/about-us-team.webp",
    href: links.meetTeam,
    learnMore: "Our Team",
  },
  {
    title: "Our Practice",
    description: "A modern, welcoming clinic in the heart of Oldham, with free patient parking and a calm, family-friendly feel.",
    image: "/images/about-us-practice.webp",
    href: links.ourPractice,
    learnMore: "Our Practice",
  },
  {
    title: "Blog",
    description: "Tips, advice and insights from our Specialist Orthodontists - on braces, Invisalign®, retainers and more.",
    image: "/images/blog-hero.webp",
    href: links.blog,
    learnMore: "Read the Blog",
  },
];

const testimonials = [
  {
    name: "Jenny H.",
    text: "From the moment you walk through the door it feels welcoming. The team explain everything clearly, and you can tell they genuinely care about getting it right.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Mark D.",
    text: "I've recommended Oldham Orthodontics to friends and family. Specialist team, honest advice, and a calm atmosphere - exactly what you want from a local practice.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Priya S.",
    text: "Both my children have been treated here and the experience has been brilliant. They listen, they explain, and they make the kids feel comfortable every visit.",
    rating: 5,
    source: "Google Review",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <InnerHero
        label="ABOUT US"
        title={
          <>
            Specialist care in
            <br />
            <span>the heart of Oldham</span>
          </>
        }
        description="We're a long-standing local practice on Hollins Road, looking after the smiles of families across Oldham and the surrounding area. Every plan is led by a Specialist Orthodontist, with a calm, friendly team alongside who genuinely enjoy what they do."
        ctaText="Arrange your free consultation"
        image="/images/about-us-hero.webp"
        imageAlt="The welcoming reception of the Oldham Orthodontics practice"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <TreatmentGrid
        label="GET TO KNOW US"
        title="The people and the place"
        description="Two short reads to give you a feel for who we are before you walk through the door."
        treatments={sections}
      />

      <ContentSection
        label="OUR APPROACH"
        title="A trusted name for orthodontics in Oldham"
        paragraphs={[
          <>Every plan at Oldham Orthodontics is led by a <Link href={links.meetTeam}>Specialist Orthodontist</Link> - clinicians who have completed years of additional training beyond general dentistry, focused solely on straightening teeth and correcting bites. It&apos;s the standard you should expect when you&apos;re trusting someone with your smile, or your child&apos;s.</>,
          <>We offer the full range of modern treatment options, from <Link href={links.invisalign}>Invisalign®</Link> and other clear aligners to ceramic, lingual and traditional fixed braces, plus combined care with maxillofacial surgeons for cases that need it. NHS treatment is available for eligible under-18s, alongside private options for adults and more complex cases.</>,
          "What patients tell us they value most is the feel of the place. Calm, unhurried, friendly. Clear explanations, honest advice, no upsell. We're proud to look after families in our community, often across generations.",
        ]}
        image="/images/oldham-orthodontics-interior.webp"
        imageAlt="Inside the Oldham Orthodontics practice"
        linkText="Meet our team"
        linkHref={links.meetTeam}
      />

      <SectionDivider from={WHITE} to={WARM} />

      <TestimonialsGrid
        label="From our patients"
        title="What local families say"
        description="A few words from patients who've trusted us with their smiles."
        testimonials={testimonials}
      />

      <SectionDivider from={WARM} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Ready to come and meet us?"
        description="Book a free, no-obligation consultation and have a friendly chat about what you're hoping to change."
        ctaText="Arrange your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
