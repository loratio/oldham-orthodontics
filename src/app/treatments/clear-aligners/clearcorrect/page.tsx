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
  title: "ClearCorrect Aligners | Slim Clear Aligners",
  description: "Explore ClearCorrect aligners at Oldham Orthodontics. Slim, comfortable and discreet clear aligners for everyday wear. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const benefits = [
  { title: "Slim profile", description: "Thinner than many other aligners, designed for a barely-there feel." },
  { title: "Clear and discreet", description: "Subtle in everyday situations, with minimal visual impact." },
  { title: "Comfortable fit", description: "Smooth, snug aligners with no metal brackets or wires." },
  { title: "Removable", description: "Take them out for meals and special occasions, then pop them back in." },
  { title: "Tailored to your case", description: "Aligners are custom-made for your teeth and treatment plan." },
  { title: "Flexible payment options", description: "Pay over time with 0% finance options available." },
];

const faqs = [
  {
    question: "Is ClearCorrect right for my case?",
    answer: "ClearCorrect suits a wide range of mild to moderate alignment cases. We'll let you know if it's the right fit during your consultation, and explain why.",
  },
  {
    question: "How long is treatment?",
    answer: "Treatment length depends on your case. Most patients are in treatment between 6 and 18 months.",
  },
  {
    question: "How do I clean them?",
    answer: "Rinse them with cool water and gently brush them when you brush your teeth. We'll talk you through all the care basics at your fitting.",
  },
  {
    question: "Will I need to wear a retainer afterwards?",
    answer: (
      <>
        Yes. <Link href={links.retainers}>Retainers</Link> help keep your teeth in their new position long-term. We&apos;ll provide one as part of your treatment plan.
      </>
    ),
  },
  {
    question: "What if I lose an aligner?",
    answer: "Give us a call as soon as possible. We can usually arrange a replacement quickly so your treatment stays on track.",
  },
];

export default function ClearCorrectPage() {
  return (
    <>
      <InnerHero
        label="CLEARCORRECT ALIGNERS"
        title={
          <>
            Slim, comfortable aligners
            <br />
            <span>for a confident smile</span>
          </>
        }
        description="ClearCorrect aligners are designed to be comfortable, discreet and effective. They're a great option for a range of mild to moderate alignment cases, and our team will help you decide if they're right for you."
        ctaText="Arrange your free consultation"
        image="/images/clearcorrect-hero.webp"
        imageAlt="A patient inserting her clear aligner"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <ContentSection
        label="WHAT IS CLEARCORRECT?"
        title="Clear aligners, custom-made for you"
        paragraphs={[
          "ClearCorrect uses a series of clear, custom-made aligners to gently move your teeth into place. Each tray is worn for around a week before you move on to the next, gradually achieving your planned alignment.",
          "The aligners are removable, so daily life carries on as normal. You take them out to eat, drink and clean your teeth, then pop them back in.",
        ]}
        image="/images/clearcorrect-routine.webp"
        imageAlt="A confident smile during ClearCorrect treatment"
      />

      <BenefitsGrid
        title={
          <>
            What makes <span>ClearCorrect</span> popular
          </>
        }
        description="ClearCorrect's slim profile and comfortable fit make it a popular choice for everyday wear. Here's what patients tell us they value most."
        benefits={benefits}
      />

      <SectionDivider from={WHITE} to={NAVY} />

      <FeatureBanner
        label="WHY OLDHAM ORTHODONTICS?"
        title={
          <>
            A trusted local team,
            <br />
            here to support you
          </>
        }
        description={
          <>
            Our <Link href={links.meetTeam}>Specialist Orthodontists</Link> offer ClearCorrect as one of several aligner options. Whichever system suits your case best, we&apos;ll guide you through the process with care and clarity from start to finish.
          </>
        }
        ctaText="Meet our team"
        ctaHref={links.meetTeam}
      />

      <SectionDivider from={NAVY} to={WHITE} />

      <ContentSection
        imagePosition="right"
        label="WHAT TO EXPECT?"
        title="Treatment, broken into clear phases"
        paragraphs={[
          <>After your <Link href={links.freeConsultation}>free consultation</Link> and 3D scan, ClearCorrect splits your treatment into a series of short phases rather than producing every tray up front. We&apos;ll talk you through the projected outcome and how many phases you&apos;re likely to need.</>,
          "Trays themselves are some of the thinnest on the market - a tri-layer plastic that holds force longer between changes. You'll wear each set for around a week, swap to the next, repeat. At the end of every phase we capture a progress scan and can fine-tune the next phase if anything's tracking differently to plan.",
          <>Once your final phase finishes we move you onto a <Link href={links.retainers}>retainer</Link>. If any small refinements are needed, we can order a short follow-up phase rather than restarting treatment.</>,
        ]}
        image="/images/clearcorrect-process.webp"
        imageAlt="A patient holding her ClearCorrect aligner case"
      />

      <FAQSection
        description="Find answers to the most common questions about ClearCorrect aligners."
        faqs={faqs}
      />

      <SectionDivider from={WHITE} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Curious about ClearCorrect?"
        description="Book a free consultation and find out if ClearCorrect is the right clear aligner system for you."
        ctaText="Arrange your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
