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
  title: "Ceramic Braces | Discreet Fixed Braces",
  description: "Explore ceramic braces at Oldham Orthodontics. Tooth-coloured brackets that blend in with your smile, with the same effectiveness as metal braces. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const benefits = [
  { title: "Subtle appearance", description: "Tooth-coloured brackets that blend into your smile in everyday conversations." },
  { title: "Same effectiveness", description: "Just as capable as metal braces for treating a wide range of cases." },
  { title: "Smooth and comfortable", description: "Rounded brackets sit gently against the cheek for a comfortable everyday feel." },
  { title: "Strong and durable", description: "Made from a hard-wearing ceramic material designed to last your full treatment." },
  { title: "Popular with adults", description: "A discreet alternative for adults who'd prefer their treatment to be low-profile." },
  { title: "Predictable results", description: "Carefully planned by your Specialist Orthodontist, with clear progress milestones." },
];

const faqs = [
  {
    question: "Are ceramic braces less visible than metal ones?",
    answer: "Yes. The brackets are made from a clear or tooth-coloured ceramic, so they blend in with your natural smile and are much less noticeable, especially in photos.",
  },
  {
    question: "How long does treatment take?",
    answer: "Treatment usually takes 12 to 24 months, depending on the complexity of your case. We'll plan your full timeline at your consultation.",
  },
  {
    question: "Are ceramic braces as effective as metal?",
    answer: "Yes. They use the same proven approach as metal braces and can treat the same wide range of cases. The main difference is the look.",
  },
  {
    question: "Do ceramic braces stain?",
    answer: "The brackets themselves are stain-resistant, but the small elastic ties around each bracket can pick up colour from things like coffee, red wine and curries. These are changed at each adjustment appointment, so any staining is short-lived.",
  },
  {
    question: "How much do ceramic braces cost?",
    answer: (
      <>
        <Link href={links.costs}>Costs</Link> are usually slightly higher than metal braces because of the materials. We&apos;ll give you a clear, personalised quote during your free consultation, with 0% finance available.
      </>
    ),
  },
];

export default function CeramicBracesPage() {
  return (
    <>
      <InnerHero
        label="CERAMIC BRACES"
        title={
          <>
            Effective braces that
            <br />
            <span>blend with your smile</span>
          </>
        }
        description="Ceramic braces work in the same way as metal braces, but with tooth-coloured brackets that are far less noticeable. A popular option for adults and older teens who'd like their treatment to stay discreet."
        ctaText="Arrange your free consultation"
        image="/images/ceramic-hero.webp"
        imageAlt="A close-up of teeth with discreet ceramic braces"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <ContentSection
        label="WHAT ARE CERAMIC BRACES?"
        title="The discreet way to straighten teeth"
        paragraphs={[
          "Ceramic braces use the same approach as traditional metal braces: small brackets bonded to each tooth, connected by an archwire that gently moves your teeth into their planned position. The difference is in the brackets themselves, which are made from a clear or tooth-coloured ceramic material.",
          "Up close, they're still visible, but from any natural conversational distance they blend in with your smile. They're an ideal middle-ground for patients who want the reliability of fixed braces without the visible metal look.",
        ]}
        image="/images/ceramic-what.webp"
        imageAlt="A patient smiling with ceramic braces"
      />

      <ContentSection
        alt
        imagePosition="right"
        label="EVERYDAY WEAR"
        title="Treatment that fits a busy life"
        paragraphs={[
          "Once fitted, ceramic braces become a quiet part of your routine. Most patients adjust within a week or two, and the smooth, rounded brackets feel comfortable against your cheeks.",
          "You'll come in every 6 to 8 weeks for short adjustments, where we replace the elastic ties (a chance to refresh any staining from coffee or food). Apart from that, day-to-day life carries on as normal.",
        ]}
        image="/images/ceramic-everyday.webp"
        imageAlt="A confident patient mid-treatment with ceramic braces"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <BenefitsGrid
        title={
          <>
            The benefits of <span>ceramic braces</span>
          </>
        }
        description="Ceramic braces give you the proven results of fixed braces with a more subtle look. Here's what patients value most."
        benefits={benefits}
      />

      <SectionDivider from={WHITE} to={NAVY} />

      <FeatureBanner
        label="WHY OLDHAM ORTHODONTICS?"
        title={
          <>
            Beautiful results
            <br />
            from a trusted local team
          </>
        }
        description={
          <>
            Our <Link href={links.meetTeam}>Specialist Orthodontists</Link> have years of experience fitting and finishing ceramic braces beautifully. We&apos;ll talk you through every option, and recommend ceramic only when it&apos;s genuinely the best fit for your case.
          </>
        }
        ctaText="Meet our team"
        ctaHref={links.meetTeam}
      />

      <SectionDivider from={NAVY} to={WHITE} />

      <ContentSection
        label="WHAT TO EXPECT?"
        title="Discreet braces, behind the scenes"
        paragraphs={[
          <>Your <Link href={links.freeConsultation}>free consultation</Link> includes a quick lifestyle chat alongside the clinical look - we&apos;ll ask about coffee, red wine and anything else that might affect how the elastic ties hold their colour. We&apos;ll show you photos of ceramic brackets on real teeth so the look is no surprise.</>,
          "Fitting takes about an hour. Brackets are a translucent ceramic that blends with the tooth surface, held by a thinner archwire than metal braces. Check-ins are every six to eight weeks - we swap the elastic ties (which can pick up colour over time; the brackets themselves don't), upgrade the wire as treatment moves forward, and answer any questions.",
          <>When the braces come off, we polish the enamel and fit your <Link href={links.retainers}>retainer</Link> the same visit. Most patients tell us the brackets felt invisible within a couple of weeks of wearing them.</>,
        ]}
        image="/images/ceramic-process.webp"
        imageAlt="A patient at a ceramic braces adjustment appointment"
      />

      <FAQSection
        description="Find answers to the most common questions about ceramic braces."
        faqs={faqs}
      />

      <SectionDivider from={WHITE} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Ready to start your smile journey?"
        description="Book a free, no-obligation consultation and find out if ceramic braces are right for you."
        ctaText="Book your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
