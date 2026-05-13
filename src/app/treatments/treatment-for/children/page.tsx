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
  title: "Children's Orthodontics | Early Assessment & Care",
  description: "Friendly orthodontic care for children at Oldham Orthodontics. Early assessments, gentle treatment, and a welcoming team your child will feel comfortable with. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const childTreatments = [
  {
    title: "Invisalign® First",
    description: "Clear aligners designed specifically for younger smiles - guiding growth and making space for adult teeth, without traditional brackets.",
    image: "/images/invisalign-first.webp",
    href: links.invisalign,
    learnMore: "Invisalign® First",
  },
  {
    title: "Fixed Metal Braces",
    description: "The most reliable option for children moving into their teen years, with the flexibility of coloured elastics they can pick at every visit.",
    image: "/images/metal-child.webp",
    href: links.metalBraces,
    learnMore: "Metal Braces",
  },
];

const benefits = [
  { title: "Free early assessment", description: "We assess children from age 7, so any potential issues can be spotted and planned for early." },
  { title: "Friendly environment", description: "A calm, welcoming practice where children feel relaxed from the moment they arrive." },
  { title: "Treatment when it's right", description: "We only recommend treatment when it's the right time, with a clear plan and no rush." },
  { title: "Family-friendly appointments", description: "Visits planned around school, with longer gaps between check-ins where possible." },
  { title: "Specialist expertise", description: "Every plan is led by a Specialist Orthodontist with years of experience in children's care." },
  { title: "Honest, clear advice", description: "Plain explanations for both children and parents, with no pressure either way." },
];

const faqs = [
  {
    question: "When should my child first see an orthodontist?",
    answer: "We recommend a first check-up at around age 7. By then, the adult teeth are starting to come through and we can spot any potential issues early. In most cases, treatment doesn't start straight away, but early assessment lets us plan ahead.",
  },
  {
    question: "Does my child need a referral?",
    answer: "No referral is needed. You can book a free consultation directly with us at any time, whether or not your child is showing any obvious issues.",
  },
  {
    question: "What treatment options are available for children?",
    answer: (
      <>
        It depends on your child&apos;s age and what we find at their assessment. Common options include early-stage appliances, traditional <Link href={links.metalBraces}>metal braces</Link> in the teen years, and <Link href={links.clearAligners}>clear aligners</Link> for older children. We&apos;ll explain everything in plain English.
      </>
    ),
  },
  {
    question: "Will my child need to come in often?",
    answer: "Once treatment begins, most children come in every 6 to 8 weeks for short check-in appointments. We plan visits around school hours wherever possible.",
  },
  {
    question: "How much does children's treatment cost?",
    answer: (
      <>
        Costs depend on the treatment plan and the length of care. We offer flexible <Link href={links.costs}>payment plans</Link>, including 0% finance, so the cost can be spread out. You&apos;ll get a clear, personalised quote at your free consultation.
      </>
    ),
  },
];

export default function ChildrenPage() {
  return (
    <>
      <InnerHero
        label="CHILDREN'S ORTHODONTICS"
        title={
          <>
            Gentle, friendly care
            <br />
            <span>for younger smiles</span>
          </>
        }
        description="Bringing your child to the orthodontist for the first time should feel reassuring, not scary. Our team is gentle, friendly and great with children, and we'll explain everything in a way that makes sense to both of you."
        ctaText="Arrange your free consultation"
        image="/images/children-hero.webp"
        imageAlt="A family enjoying a candid moment outdoors together"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <ContentSection
        label="CHILDREN'S ORTHODONTICS?"
        title="When and why children see an orthodontist"
        paragraphs={[
          "Orthodontists don't only treat adults and teens. We see children from age 7 onwards for early assessments, which are the best way to spot any potential issues with how their teeth and jaw are developing.",
          "An early visit doesn't always mean early treatment. Most children won't need braces until later, but a brief check-up lets us plan ahead and reassure you that everything's tracking well. If treatment is needed, we can time it perfectly.",
        ]}
        image="/images/children-what.webp"
        imageAlt="A young girl placing a clear aligner in front of a mirror"
      />

      <ContentSection
        alt
        imagePosition="right"
        label="OUR ENVIRONMENT"
        title="A practice children feel comfortable in"
        paragraphs={[
          "We know that bringing a young child to a new environment can be daunting for both of you. Our team is brilliant at putting younger patients at ease, with a calm, friendly approach and plenty of time to explain things at their pace.",
          "From the moment they walk in, the goal is for your child to feel welcome and listened to. We answer their questions (not just yours), and we make sure they leave each visit smiling.",
        ]}
        image="/images/children-everyday.webp"
        imageAlt="A child with a backpack smiling at home before school"
      />

      <TreatmentGrid
        label="CHILDREN'S TREATMENT OPTIONS"
        title="The treatments we use for younger smiles"
        description="Most children won't need treatment until later, but when the time comes there are two main routes we'll talk you through - both designed around how a younger smile is still growing."
        treatments={childTreatments}
      />

      <SectionDivider from={WARM} to={WHITE} />

      <BenefitsGrid
        title={
          <>
            Why families choose <span>Oldham Orthodontics</span>
          </>
        }
        description="We treat children of all ages from across Oldham and the surrounding area. Here's what local families tell us they value most."
        benefits={benefits}
      />

      <SectionDivider from={WHITE} to={NAVY} />

      <FeatureBanner
        label="WHY OLDHAM ORTHODONTICS?"
        title={
          <>
            A trusted team for
            <br />
            generations of local families
          </>
        }
        description={
          <>
            Our <Link href={links.meetTeam}>Specialist Orthodontists</Link> have years of experience working with children, and a warm, patient approach that puts younger smiles at ease. Many of the children we treat have parents who were patients here too.
          </>
        }
        ctaText="Meet our team"
        ctaHref={links.meetTeam}
      />

      <SectionDivider from={NAVY} to={WHITE} />

      <ContentSection
        label="WHAT TO EXPECT?"
        title="From first check-up to ready-for-treatment"
        paragraphs={[
          <>The first visit is a <Link href={links.freeConsultation}>free consultation</Link> and it&apos;s mostly a conversation. We chat through any worries you&apos;ve noticed at home, take a gentle look in their mouth, and let your child play with the scanner so they feel comfortable. Most younger children leave excited, not anxious.</>,
          "For most children, we recommend monitoring rather than starting treatment straight away - we want adult teeth in place and the jaw at the right stage of growth. We'll book a free review visit when the timing is right, often a year or two later. No pressure, no clock-watching.",
          <>When treatment does start, we keep visits short and fun - we let your child help pick the colours of their elastics or carry their aligner case in their school bag. Once their new smile is set, a <Link href={links.retainers}>retainer</Link> protects it for the long term.</>,
        ]}
        image="/images/children-process.webp"
        imageAlt="A young patient holding a clear aligner"
      />

      <FAQSection
        description="Find answers to the most common questions about children's orthodontic treatment."
        faqs={faqs}
      />

      <SectionDivider from={WHITE} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Ready to book your child's first visit?"
        description="Book a free, no-obligation consultation with our Specialist Orthodontists and let's start with a friendly chat."
        ctaText="Book your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
