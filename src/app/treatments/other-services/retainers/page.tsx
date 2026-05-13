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
  title: "Retainers | Protect Your New Smile",
  description: "Retainers at Oldham Orthodontics protect your new smile after braces or aligner treatment. Fixed and removable options available. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const benefits = [
  { title: "Long-term protection", description: "Help keep your teeth in their new position once active treatment finishes." },
  { title: "Fixed or removable", description: "Choose the option that fits your lifestyle best, or pair the two for added security." },
  { title: "Custom-made", description: "Each retainer is shaped precisely for your teeth, for a snug, comfortable fit." },
  { title: "Discreet", description: "Removable retainers are virtually invisible, and fixed retainers sit hidden behind your teeth." },
  { title: "Easy to maintain", description: "Simple, straightforward care routines that fit easily into your day." },
  { title: "Ongoing support", description: "We're here for replacements, repairs and check-ins long after treatment ends." },
];

const faqs = [
  {
    question: "Why do I need to wear a retainer?",
    answer: "Once your teeth have been moved into their new position, they need help to stay there. Without a retainer, teeth can gradually drift back over time. Wearing a retainer is the best way to protect the result you've worked so hard to achieve.",
  },
  {
    question: "How long do I need to wear them?",
    answer: "We recommend wearing retainers indefinitely to protect your smile long-term. In the first months after treatment, you'll wear them most of the time. After that, most patients move to wearing them just at night.",
  },
  {
    question: "What's the difference between fixed and removable retainers?",
    answer: "A fixed retainer is a thin wire bonded to the back of your front teeth - it stays in place permanently and is invisible from the outside. A removable retainer is a clear plastic tray, similar to a clear aligner, that you wear at night and take out during the day. We often recommend pairing both for the best long-term result.",
  },
  {
    question: "What if I lose or damage my retainer?",
    answer: "Give us a call as soon as you can. We can arrange a replacement quickly, often using the digital records from your treatment so you don't need a new scan. Try not to go too long without one, as teeth can start to shift within days.",
  },
  {
    question: "How much do retainers cost?",
    answer: (
      <>
        A retainer is included as part of every full orthodontic treatment plan with us. Replacement retainers are charged separately - we&apos;ll explain <Link href={links.costs}>costs</Link> clearly so there are no surprises.
      </>
    ),
  },
];

export default function RetainersPage() {
  return (
    <>
      <InnerHero
        label="RETAINERS"
        title={
          <>
            The final step
            <br />
            <span>to protect your smile</span>
          </>
        }
        description="A retainer is the last (and most important) part of any orthodontic journey. It keeps your teeth in their new position long after treatment ends, so the smile you've worked towards stays exactly where it should."
        ctaText="Arrange your free consultation"
        image="/images/retainers-hero.webp"
        imageAlt="A clear retainer ready to wear"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <ContentSection
        label="WHAT IS A RETAINER?"
        title="Holding your new smile in place"
        paragraphs={[
          "After any orthodontic treatment - whether you've worn fixed braces, clear aligners or something else - your teeth need help settling into their new position. A retainer does exactly that. It's a small, custom-made appliance that gently holds your teeth in place while the surrounding bone and tissue stabilise.",
          "There are two main types: fixed retainers, bonded to the back of your front teeth permanently, and removable retainers, which look similar to a clear aligner and are worn at night. Many patients use a combination of both for the best long-term result.",
        ]}
        image="/images/retainers-what.webp"
        imageAlt="A close-up of teeth ready to receive a retainer"
      />

      <ContentSection
        alt
        imagePosition="right"
        label="EVERYDAY WEAR"
        title="A small habit that protects a big result"
        paragraphs={[
          "Wearing a retainer becomes a quiet part of your night-time routine. Removable retainers go in just before bed and come out in the morning, no different to other parts of your daily care.",
          "Fixed retainers don't need any active wearing - they sit hidden behind your teeth and just need a bit of extra care when brushing and flossing. We'll talk you through everything at your fitting.",
        ]}
        image="/images/retainers-wear.webp"
        imageAlt="A patient holding a clear retainer"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <BenefitsGrid
        title={
          <>
            The benefits of <span>retainers</span>
          </>
        }
        description="A retainer is a small thing that does a big job. Here's what patients value most."
        benefits={benefits}
      />

      <SectionDivider from={WHITE} to={NAVY} />

      <FeatureBanner
        label="WHY OLDHAM ORTHODONTICS?"
        title={
          <>
            Long-term care from
            <br />
            a team that&apos;s still there
          </>
        }
        description={
          <>
            Our <Link href={links.meetTeam}>Specialist Orthodontists</Link> believe orthodontics doesn&apos;t end when the braces come off. We&apos;re here for replacements, repairs and check-ins, so your smile stays protected for years to come.
          </>
        }
        ctaText="Meet our team"
        ctaHref={links.meetTeam}
      />

      <SectionDivider from={NAVY} to={WHITE} />

      <ContentSection
        label="WHAT TO EXPECT?"
        title="How retainers fit into your aftercare"
        paragraphs={[
          <>If you&apos;re finishing your treatment with us, your retainer is already built into the plan. We capture a 3D scan of your teeth in their final position before your braces come off (or your last aligner), so your retainer is ready to fit the same day. For some patients we&apos;ll also bond a thin discreet wire behind the front teeth as a belt-and-braces measure. If you&apos;re a new patient who&apos;s lost or outgrown an old retainer, a <Link href={links.freeConsultation}>free consultation</Link> is the place to start.</>,
          "The wear schedule is straightforward: full-time for the first few weeks while your teeth settle, then nightly for the long term. We'll show you exactly how to clean it (cool water, mild soap, never toothpaste) at the fitting.",
          "We keep your final scan on file. If you lose a removable retainer down the line, we can usually produce a replacement from the stored data within a week - no need to start any treatment from scratch.",
        ]}
        image="/images/retainers-care.webp"
        imageAlt="A confident patient enjoying their new smile"
      />

      <FAQSection
        description="Find answers to the most common questions about retainers."
        faqs={faqs}
      />

      <SectionDivider from={WHITE} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Need a new retainer or just starting out?"
        description="Book a free, no-obligation consultation and we'll talk you through everything you need to know."
        ctaText="Book your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
