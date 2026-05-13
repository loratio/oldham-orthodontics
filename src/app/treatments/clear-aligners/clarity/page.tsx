import type { Metadata } from "next";
import Link from "next/link";
import "../../../inner-page.css";

import InnerHero from "../../../components/inner/InnerHero";
import ContentSection from "../../../components/inner/ContentSection";
import BenefitsGrid from "../../../components/inner/BenefitsGrid";
import FeatureBanner from "../../../components/inner/FeatureBanner";
import FAQSection from "../../../components/inner/FAQSection";
import CTABanner from "../../../components/inner/CTABanner";
import SectionDivider from "../../../components/SectionDivider";
import { links } from "../../../lib/internal-links";

export const metadata: Metadata = {
  title: "Clarity™ Aligners | Comfortable Clear Aligners from 3M",
  description: "Discover Clarity™ Aligners at Oldham Orthodontics. Comfortable, discreet clear aligners from 3M, designed for everyday wear. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const benefits = [
  { title: "Discreet", description: "Clear, smooth aligners that blend in with your everyday look." },
  { title: "Trusted manufacturer", description: "Designed by 3M, a name with decades of dental and orthodontic experience." },
  { title: "Removable", description: "Take them out for meals, brushing, and special occasions." },
  { title: "Custom-fit", description: "Each set of aligners is precisely shaped for your teeth." },
  { title: "Comfortable", description: "Smooth edges and a snug fit, with no metal brackets or wires." },
  { title: "Effective", description: "Suited to a range of mild to moderate alignment cases." },
];

const faqs = [
  {
    question: "How is Clarity™ different from Invisalign®?",
    answer: (
      <>
        They&apos;re both excellent clear aligner systems, just made by different manufacturers. Some cases are better suited to one over the other. Read more about <Link href={links.invisalign}>Invisalign®</Link>, or we&apos;ll explain our recommendation during your consultation.
      </>
    ),
  },
  {
    question: "How long does treatment take?",
    answer: "Most cases take between 6 and 18 months, depending on complexity. We'll give you a clear timeline when we plan your treatment.",
  },
  {
    question: "Are Clarity™ aligners comfortable?",
    answer: "Yes. The aligners are smooth and custom-fit, designed for everyday wear. Most patients adjust within a few days.",
  },
  {
    question: "Can I eat with the aligners in?",
    answer: "No, you'll take them out for meals. This keeps them clean and avoids damage. They go back in straight after brushing.",
  },
  {
    question: "How much do Clarity™ aligners cost?",
    answer: (
      <>
        <Link href={links.costs}>Costs</Link> vary depending on your case. We offer 0% finance options and clear, transparent pricing. You&apos;ll get a personalised quote during your free consultation.
      </>
    ),
  },
];

export default function ClarityPage() {
  return (
    <>
      <InnerHero
        label="CLARITY™ ALIGNERS"
        title={
          <>
            A reliable alternative
            <br />
            <span>for everyday wear</span>
          </>
        }
        description="Clarity™ Aligners from 3M offer a comfortable, discreet way to straighten teeth, designed with everyday life in mind. Our team will help you decide if Clarity™ is the right fit for your smile."
        ctaText="Arrange your free consultation"
        image="/images/clarity-hero.webp"
        imageAlt="A patient holding her clear aligner outdoors"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <ContentSection
        label="WHAT IS CLARITY™?"
        title="Clear aligners from a trusted name"
        paragraphs={[
          "Clarity™ Aligners are a clear aligner system from 3M, one of the world's most established names in dental and orthodontic care. They work in much the same way as other clear aligners. You wear a series of custom-made trays that gradually move your teeth into place.",
          "Each tray is worn for around a week before swapping to the next. The aligners are removable, so eating, drinking and cleaning your teeth stays straightforward.",
        ]}
        image="/images/clarity-routine.webp"
        imageAlt="A patient inserting her clear aligner"
      />

      <BenefitsGrid
        title={
          <>
            Why patients choose <span>Clarity™</span>
          </>
        }
        description="Clarity™ Aligners pair a trusted manufacturer with a comfortable, low-profile design. Here's what patients tell us they value most."
        benefits={benefits}
      />

      <SectionDivider from={WHITE} to={NAVY} />

      <FeatureBanner
        label="WHY OLDHAM ORTHODONTICS?"
        title={
          <>
            Aligner expertise
            <br />
            you can trust
          </>
        }
        description={
          <>
            Our <Link href={links.meetTeam}>Specialist Orthodontists</Link> work with a range of trusted aligner systems, so we can match the right one to your treatment plan. You&apos;ll always know why we&apos;ve recommended a particular option.
          </>
        }
        ctaText="Meet our team"
        ctaHref={links.meetTeam}
      />

      <SectionDivider from={NAVY} to={WHITE} />

      <ContentSection
        imagePosition="right"
        label="WHAT TO EXPECT?"
        title="How a Clarity™ smile is made"
        paragraphs={[
          <>After your <Link href={links.freeConsultation}>free consultation</Link> and 3D scan, your plan goes to 3M&apos;s production lab. Each Clarity™ aligner is manufactured from their precision-engineered clear plastic, designed to apply a slightly firmer, more controlled pressure than most clear systems.</>,
          "Your full series arrives back at the practice; we fit the first set and send the rest home with you. Trays change every one to two weeks. We review your progress every eight weeks - slightly less often than Invisalign®, because the firmer Clarity™ shell holds the planned movement more consistently between visits, especially for back-tooth rotations.",
          <>The last tray comes off, your <Link href={links.retainers}>retainer</Link> is fitted, and we run a quick care walkthrough. The whole plan was built around the result you saw at the start - so there&apos;s no guesswork at the finish line.</>,
        ]}
        image="/images/clarity-process.webp"
        imageAlt="A patient at the end of Clarity™ Aligners treatment"
      />

      <FAQSection
        description="Find answers to the most common questions about Clarity™ Aligners."
        faqs={faqs}
      />

      <SectionDivider from={WHITE} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Ready to talk through your options?"
        description="Arrange a free, no-obligation consultation with our team to find the right clear aligner system for you."
        ctaText="Book your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
