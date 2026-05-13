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
  title: "Adult Orthodontics | Treatment That Fits Your Life",
  description: "Discreet, flexible orthodontic treatment for adults at Oldham Orthodontics. Designed to fit around work, family and everyday life. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const adultTreatments = [
  {
    title: "Invisalign®",
    description: "Virtually invisible clear aligners that come out for meals, meetings and the things you'd rather not work around.",
    image: "/images/invisalign-hero.webp",
    href: links.invisalign,
    learnMore: "Invisalign®",
  },
  {
    title: "Ceramic Braces",
    description: "Tooth-coloured brackets that blend into your smile - a discreet fixed option without the cost of going hidden.",
    image: "/images/ceramic-hero.webp",
    href: links.ceramicBraces,
    learnMore: "Ceramic Braces",
  },
  {
    title: "Lingual Braces",
    description: "Fixed to the back of your teeth and completely hidden from view, so no one needs to know you're in treatment.",
    image: "/images/lingual-hero.webp",
    href: links.lingualBraces,
    learnMore: "Lingual Braces",
  },
];

const benefits = [
  { title: "Discreet options", description: "Choose from clear aligners, ceramic braces or hidden lingual braces, depending on what suits you." },
  { title: "Treatment around your schedule", description: "Appointments planned around work and family commitments, including longer gaps between visits." },
  { title: "Flexible payment plans", description: "Spread the cost with 0% finance options and transparent, clear pricing." },
  { title: "Modern technology", description: "Digital scans and 3D treatment planning mean fewer impressions and a more comfortable experience." },
  { title: "Honest advice", description: "We'll only recommend treatment if it's genuinely right for you, with no pressure either way." },
  { title: "Specialist expertise", description: "Every plan is led by a Specialist Orthodontist with years of experience treating adult patients." },
];

const faqs = [
  {
    question: "Am I too old for orthodontic treatment?",
    answer: "No. Healthy teeth and gums can be moved at any age. Many of our patients start treatment in their 30s, 40s, 50s and beyond, and the results are just as good as they would be at any earlier stage.",
  },
  {
    question: "Which type of treatment is best for adults?",
    answer: (
      <>
        It depends on your case, your lifestyle and what matters most to you. Many adults prefer <Link href={links.clearAligners}>clear aligners</Link> for their discretion, while others choose <Link href={links.ceramicBraces}>ceramic</Link> or <Link href={links.lingualBraces}>lingual</Link> braces. We&apos;ll walk you through the options at your consultation.
      </>
    ),
  },
  {
    question: "How long will my treatment take?",
    answer: "Most adult treatments take between 6 and 24 months, depending on the complexity of your case and the option you choose. We'll give you a clear estimate during your consultation.",
  },
  {
    question: "Will I need to wear a retainer afterwards?",
    answer: (
      <>
        Yes. A <Link href={links.retainers}>retainer</Link> helps keep your teeth in their new position. We&apos;ll talk you through the options and include a retainer as part of your treatment plan.
      </>
    ),
  },
  {
    question: "How much does treatment cost?",
    answer: (
      <>
        <Link href={links.costs}>Costs</Link> depend on the option you choose and the complexity of your case. We offer flexible payment plans, including 0% finance. You&apos;ll get a personalised quote at your free consultation.
      </>
    ),
  },
];

export default function AdultsPage() {
  return (
    <>
      <InnerHero
        label="ADULT ORTHODONTICS"
        title={
          <>
            Treatment that fits
            <br />
            <span>your life</span>
          </>
        }
        description="It's never too late to feel confident in your smile. Whether you're considering treatment for the first time or revisiting it after years, our team will help you find an option that fits around work, family and the rest of your everyday life."
        ctaText="Arrange your free consultation"
        image="/images/adults-hero.webp"
        imageAlt="A couple sharing a warm hug on a sunlit street"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <ContentSection
        label="ADULT ORTHODONTICS?"
        title="Modern treatment, designed around real lives"
        paragraphs={[
          <>Adult orthodontics has come a long way. Today, you have more options than ever - <Link href={links.invisalign}>Invisalign®</Link>, ceramic braces, lingual braces and more - so you can choose a treatment that suits the way you live.</>,
          "Most of our adult patients are juggling work, family or both. We plan treatment with that in mind: longer gaps between appointments where possible, digital scans rather than messy impressions, and a clear, honest plan from the very start.",
        ]}
        image="/images/adults-what.webp"
        imageAlt="Two adult friends laughing together"
      />

      <ContentSection
        alt
        imagePosition="right"
        label="EVERYDAY LIFE"
        title="Discreet options for busy schedules"
        paragraphs={[
          "If you're worried about how treatment will look or feel, you're not alone - that's the most common concern adult patients raise at consultation. The good news is, modern orthodontics has plenty of subtle options.",
          "Clear aligners are virtually invisible. Ceramic braces blend with your teeth. Lingual braces sit hidden behind them. Whichever option you choose, you'll be able to talk, smile and present without feeling self-conscious.",
        ]}
        image="/images/adults-everyday.webp"
        imageAlt="A confident adult patient at work"
      />

      <TreatmentGrid
        label="ADULT TREATMENT OPTIONS"
        title="The most popular treatments for adults"
        description="Most of our adult patients lean towards options they can keep low-key. Here are the three we recommend most often, with the trade-offs explained on each page."
        treatments={adultTreatments}
      />

      <SectionDivider from={WARM} to={WHITE} />

      <BenefitsGrid
        title={
          <>
            Why adults choose <span>Oldham Orthodontics</span>
          </>
        }
        description="We treat hundreds of adult patients every year, and we know what matters to them. Here's what they tell us they value most."
        benefits={benefits}
      />

      <SectionDivider from={WHITE} to={NAVY} />

      <FeatureBanner
        label="WHY OLDHAM ORTHODONTICS?"
        title={
          <>
            A welcoming local team,
            <br />
            wherever you&apos;re starting from
          </>
        }
        description={
          <>
            Our <Link href={links.meetTeam}>Specialist Orthodontists</Link> have years of experience guiding adult patients through treatment. Whether you&apos;re sure what you want or still weighing things up, you&apos;ll find a calm, honest team ready to help.
          </>
        }
        ctaText="Meet our team"
        ctaHref={links.meetTeam}
      />

      <SectionDivider from={NAVY} to={WHITE} />

      <ContentSection
        label="WHAT TO EXPECT?"
        title="From first consultation to finished smile"
        paragraphs={[
          <>Most adult patients tell us the hardest part is booking the first <Link href={links.freeConsultation}>free consultation</Link>. We keep it relaxed - a proper look at your teeth, an honest conversation about what you&apos;re hoping to change, and the options that genuinely fit your case. No pressure, no upsell.</>,
          "If you decide to go ahead, we capture a 3D digital scan (no impressions, no gagging) and build your treatment plan around it. You'll see your projected result before treatment starts, with a clear timeline and a fixed total cost - including finance options if you want to spread it.",
          <>Check-ins are deliberately quick - usually 15 to 20 minutes every six to eight weeks, scheduled around work where possible. Once your teeth are where they should be, we hand over your <Link href={links.retainers}>retainer</Link> and keep your file on hand for the long term.</>,
        ]}
        image="/images/adults-process.webp"
        imageAlt="An adult patient smiling outdoors"
      />

      <FAQSection
        description="Find answers to the most common questions about adult orthodontic treatment."
        faqs={faqs}
      />

      <SectionDivider from={WHITE} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Ready to start your smile journey?"
        description="Book a free, no-obligation consultation with our Specialist Orthodontists and find the treatment that fits your life."
        ctaText="Book your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
