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
  title: "Invisalign® | Invisible Clear Aligners",
  description: "Explore Invisalign® clear aligners at Oldham Orthodontics. Virtually invisible, removable and comfortable for everyday wear. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const benefits = [
  { title: "Discreet", description: "Nearly invisible when worn, so most people won't notice you're in treatment." },
  { title: "Removable", description: "Take them out to eat, drink, brush and floss without restrictions." },
  { title: "Comfortable", description: "Smooth, medical-grade plastic with no brackets or wires to irritate your cheeks or gums." },
  { title: "Predictable", description: "See a 3D preview of your projected results before you start, so you know what to expect." },
  { title: "Convenient", description: "Fewer in-person appointments than traditional braces, with longer gaps between check-ins." },
  { title: "Flexible", description: "Pause aligner wear briefly for a special occasion if you need to, then pop them back in." },
];

const faqs = [
  {
    question: "How long does Invisalign® treatment take?",
    answer: "Most treatments take 6 to 18 months, but it depends on your individual case. We'll give you a clear timeline during your free consultation.",
  },
  {
    question: "Will Invisalign® work for my case?",
    answer: "Invisalign® treats a wide range of cases, from mild to more complex. The best way to find out is to book a free consultation so we can take a proper look at your smile.",
  },
  {
    question: "How often do I need to wear them?",
    answer: "20 to 22 hours a day, including overnight. The more consistently you wear them, the smoother your treatment will be.",
  },
  {
    question: "How much does Invisalign® cost?",
    answer: (
      <>
        <Link href={links.costs}>Costs</Link> vary depending on the complexity of your case. We offer flexible payment plans, including 0% finance options. Book a consultation for a personalised quote.
      </>
    ),
  },
  {
    question: "Can teenagers have Invisalign®?",
    answer: (
      <>
        Yes. Invisalign® Teen is designed for <Link href={links.teens}>younger patients</Link> and includes features like compliance indicators and built-in space for growing teeth.
      </>
    ),
  },
];

export default function InvisalignPage() {
  return (
    <>
      <InnerHero
        label="INVISALIGN®"
        title={
          <>
            Discreet, comfortable
            <br />
            <span>smile treatment</span>
          </>
        }
        description="Invisalign® is the world's most established clear aligner system. A series of removable, custom-made aligners gradually move your teeth into place, without the look and feel of traditional braces."
        ctaText="Arrange your free consultation"
        image="/images/invisalign-hero.webp"
        imageAlt="A patient enjoying everyday life during Invisalign® treatment"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <ContentSection
        label="WHAT IS INVISALIGN®?"
        title="Clear aligners made for your smile"
        paragraphs={[
          "Invisalign® uses a series of clear, removable aligners custom-made to fit your teeth. Each one is worn for about a week before you move on to the next in the series, gradually shifting your teeth into their planned position.",
          "Because the aligners are virtually invisible, most people won't even notice you're wearing them. And because they're removable, you can take them out to eat, drink, brush and floss, just like normal.",
        ]}
        image="/images/invisalign-product.webp"
        imageAlt="A single clear Invisalign® aligner"
      />

      <ContentSection
        alt
        imagePosition="right"
        label="EVERYDAY WEAR"
        title="Treatment that fits around your life"
        paragraphs={[
          "Your aligners are worn 20 to 22 hours a day, including overnight. The rest of the time, they sit comfortably in their case while you eat or have a special occasion.",
          "Most patients visit us every 6 to 8 weeks for a quick check-in. Treatment typically takes 6 to 18 months, depending on your case.",
        ]}
        image="/images/invisalign-routine.webp"
        imageAlt="A patient placing her Invisalign® aligner back in its case"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <BenefitsGrid
        title={
          <>
            The benefits of <span>Invisalign®</span>
          </>
        }
        description="Invisalign® clear aligners offer a modern, comfortable way to straighten teeth. Here's what patients tell us they love about it."
        benefits={benefits}
      />

      <SectionDivider from={WHITE} to={NAVY} />

      <FeatureBanner
        label="WHY OLDHAM ORTHODONTICS?"
        title={
          <>
            Expert Invisalign® care,
            <br />
            close to home
          </>
        }
        description={
          <>
            Our <Link href={links.meetTeam}>Specialist Orthodontists</Link> have years of experience planning and delivering Invisalign® treatment for patients of all ages. From your first consultation onwards, you&apos;ll feel supported by a team that genuinely cares about getting it right.
          </>
        }
        ctaText="Meet our team"
        ctaHref={links.meetTeam}
      />

      <SectionDivider from={NAVY} to={WHITE} />

      <ContentSection
        label="WHAT TO EXPECT?"
        title="From digital scan to finished smile"
        paragraphs={[
          <>Your <Link href={links.freeConsultation}>free consultation</Link> starts with a 3D intra-oral scan - no impression trays, no gagging. We map your teeth into Invisalign&apos;s ClinCheck software, plan each movement, and walk you through a preview of your final smile before you decide whether to commit.</>,
          "Your custom trays arrive in batches over the course of treatment. Most patients swap to a new set every week and wear them 20 to 22 hours a day - they come out to eat, drink anything other than water, brush and floss. We may bond small tooth-coloured attachments to a few teeth, or carefully reshape contact points (called IPR), if the case needs it. Check-ins are every six to eight weeks, sometimes virtual.",
          <>When you reach the last tray we move you straight onto a <Link href={links.retainers}>retainer</Link> the same day. Your ClinCheck file stays on record, so if anything ever shifts later we can produce a refinement set without starting over.</>,
        ]}
        image="/images/invisalign-process.webp"
        imageAlt="A patient at her Invisalign® treatment review"
      />

      <FAQSection
        description="Find answers to the most common questions about Invisalign® treatment."
        faqs={faqs}
      />

      <SectionDivider from={WHITE} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Ready to start your Invisalign® journey?"
        description="Book a free, no-obligation consultation with our Specialist Orthodontists and find out if Invisalign® is right for you."
        ctaText="Book your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
