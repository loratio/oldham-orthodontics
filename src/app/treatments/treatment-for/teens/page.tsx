import type { Metadata } from "next";
import Link from "next/link";
import "../../../inner-page.css";

import InnerHero from "../../../components/inner/InnerHero";
import ContentSection from "../../../components/inner/ContentSection";
import TreatmentGrid from "../../../components/inner/TreatmentGrid";
import BenefitsGrid from "../../../components/inner/BenefitsGrid";
import FeatureBanner from "../../../components/inner/FeatureBanner";
import FAQSection from "../../../components/inner/FAQSection";
import CTABanner from "../../../components/inner/CTABanner";
import SectionDivider from "../../../components/SectionDivider";
import { links } from "../../../lib/internal-links";

export const metadata: Metadata = {
  title: "Teen Orthodontics | Friendly, Supportive Care",
  description: "Orthodontic treatment for teens at Oldham Orthodontics. Friendly, supportive care designed around school, social life and growing confidence. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const teenTreatments = [
  {
    title: "Invisalign® for Teens",
    description: "Clear aligners designed for growing smiles, with built-in compliance indicators and space for new adult teeth coming through.",
    image: "/images/invisalign-hero.webp",
    href: links.invisalign,
    learnMore: "Invisalign® Teen",
  },
  {
    title: "Metal Braces",
    description: "The most reliable option for teens, with coloured elastics they can swap every visit. Great for more complex cases.",
    image: "/images/metal-hero.webp",
    href: links.metalBraces,
    learnMore: "Metal Braces",
  },
  {
    title: "Ceramic Braces",
    description: "Tooth-coloured brackets that blend into the smile - a discreet alternative for self-conscious teens.",
    image: "/images/ceramic-teen.webp",
    href: links.ceramicBraces,
    learnMore: "Ceramic Braces",
  },
];

const benefits = [
  { title: "Treatment options to suit them", description: "From classic metal braces to discreet clear aligners or ceramic braces, we'll talk through what fits best." },
  { title: "Built around school", description: "Appointments planned around school hours, with longer gaps between visits where possible." },
  { title: "Confidence at every stage", description: "Friendly explanations, no surprises, and a team your teen will feel relaxed with." },
  { title: "Modern technology", description: "Digital scans replace messy impressions, and 3D planning shows them how their smile will change." },
  { title: "Coloured elastics", description: "Teens with metal braces can choose colours to change at every appointment, if they fancy a change." },
  { title: "Parent-friendly pricing", description: "Clear, transparent pricing with 0% finance options to spread the cost." },
];

const faqs = [
  {
    question: "What's the best age for teen orthodontic treatment?",
    answer: "Most teens start treatment between 11 and 15 once their adult teeth have come through, but the right timing varies. We can assess any time from age 7 onwards and let you know when's best to begin.",
  },
  {
    question: "Which type of braces is best for teens?",
    answer: (
      <>
        It depends on the case and what your teen prefers. Many choose <Link href={links.metalBraces}>metal braces</Link> for their reliability (and the chance to pick fun elastic colours), while others go for <Link href={links.invisalign}>Invisalign®</Link> for discretion. We&apos;ll go through it all at your consultation.
      </>
    ),
  },
  {
    question: "How long does treatment take?",
    answer: "Most teen treatments take between 12 and 24 months, depending on the case. We'll give you a clear timeline at your consultation.",
  },
  {
    question: "Will it affect school or sports?",
    answer: "Day-to-day school life and most sports carry on as normal. For contact sports, we recommend a mouthguard, which we can advise on. We'll plan appointments around school hours wherever possible.",
  },
  {
    question: "How much does teen treatment cost?",
    answer: (
      <>
        <Link href={links.costs}>Costs</Link> depend on the option you choose and the complexity of the case. We offer flexible 0% finance plans to spread the cost, and you&apos;ll get a personalised quote at your free consultation.
      </>
    ),
  },
];

export default function TeensPage() {
  return (
    <>
      <InnerHero
        label="TEEN ORTHODONTICS"
        title={
          <>
            Confident smiles
            <br />
            <span>for growing teens</span>
          </>
        }
        description="The teen years are the most common time to start orthodontic treatment, and we make the whole journey as friendly and easy as possible. From the first visit to the final reveal, your teen will feel listened to, supported and looked after."
        ctaText="Arrange your free consultation"
        image="/images/teens-hero.webp"
        imageAlt="A laughing teenager in a denim jacket and beanie under warm sunlight"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <ContentSection
        label="TEEN ORTHODONTICS?"
        title="The right time to straighten teeth"
        paragraphs={[
          "For most teens, the age of 11 to 15 is the sweet spot for orthodontic treatment. By this point, adult teeth have usually come through, and the jaw is still developing - which means we can guide growth as well as straighten teeth.",
          "Modern treatment is far more comfortable, discreet and effective than it used to be. Whether your teen prefers visible metal braces, low-key ceramic ones, or clear aligners, we'll find an option that suits their personality and their case.",
        ]}
        image="/images/teens-what.webp"
        imageAlt="A teenager smiling confidently while wearing metal braces"
      />

      <ContentSection
        alt
        imagePosition="right"
        label="EVERYDAY LIFE"
        title="Treatment that fits around school and friends"
        paragraphs={[
          "We know teens are busy. We plan appointments around school hours and exam periods wherever we can, and most check-ins are short - in and out in under 30 minutes.",
          "Day-to-day life carries on as normal. School, sports, music, hobbies, hanging out with friends - none of it has to stop. We'll talk your teen through what to do (and what to avoid) so they stay confident throughout treatment.",
        ]}
        image="/images/teens-everyday.webp"
        imageAlt="A teenager laughing with a friend"
      />

      <TreatmentGrid
        label="TEEN TREATMENT OPTIONS"
        title="The treatments we recommend most for teens"
        description="Most teens fit one of three routes. Each works just as well - the right pick comes down to the case, what feels comfortable, and what fits the rest of their life."
        treatments={teenTreatments}
      />

      <SectionDivider from={WARM} to={WHITE} />

      <BenefitsGrid
        title={
          <>
            Why teens choose <span>Oldham Orthodontics</span>
          </>
        }
        description="We treat hundreds of teens every year. Here's what they (and their parents) tell us they value most."
        benefits={benefits}
      />

      <SectionDivider from={WHITE} to={NAVY} />

      <FeatureBanner
        label="WHY OLDHAM ORTHODONTICS?"
        title={
          <>
            A friendly team your teen
            <br />
            will feel comfortable with
          </>
        }
        description={
          <>
            Our <Link href={links.meetTeam}>Specialist Orthodontists</Link> are experienced at putting nervous teens at ease and explaining everything in a way that makes sense. You&apos;ll find a calm, welcoming environment from the very first visit.
          </>
        }
        ctaText="Meet our team"
        ctaHref={links.meetTeam}
      />

      <SectionDivider from={NAVY} to={WHITE} />

      <ContentSection
        label="WHAT TO EXPECT?"
        title="How treatment fits around school life"
        paragraphs={[
          <>The first appointment is a <Link href={links.freeConsultation}>free consultation</Link> - usually a chat, a quick clinical look and a 3D scan. We talk directly with your teen, not just over their head, so they feel part of the decision rather than dragged along. No commitment on the day.</>,
          "If treatment is the right call, we share the plan, the projected result and the all-in cost in one go. Appointments are mapped against the school calendar - we'll work around exam weeks and trips wherever we can. Most fittings take an hour; routine check-ins are 15 to 20 minutes.",
          <>Between visits, we&apos;re available by phone or email if a bracket pops off, an elastic snaps, or your teen just wants reassurance. When the braces come off, we fit a <Link href={links.retainers}>retainer</Link> and run a short walkthrough of how to look after their new smile.</>,
        ]}
        image="/images/teens-process.webp"
        imageAlt="A teen patient examining a dental model"
      />

      <FAQSection
        description="Find answers to the most common questions about teen orthodontic treatment."
        faqs={faqs}
      />

      <SectionDivider from={WHITE} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Ready to book your teen's first visit?"
        description="Book a free, no-obligation consultation with our Specialist Orthodontists and let's talk through the right plan."
        ctaText="Book your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
