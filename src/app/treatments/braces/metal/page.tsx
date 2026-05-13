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
  title: "Metal Braces | Reliable Fixed Braces",
  description: "Explore metal braces at Oldham Orthodontics. Reliable, precise and the most established option for straightening teeth. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const benefits = [
  { title: "Highly effective", description: "Suited to a wide range of cases, including more complex alignment needs." },
  { title: "Most affordable", description: "The most budget-friendly fixed option, often with the shortest treatment times." },
  { title: "Precise control", description: "Allows your orthodontist to fine-tune tooth movement at every stage." },
  { title: "Durable", description: "Strong, hard-wearing brackets that handle everyday eating and brushing." },
  { title: "Suited to all ages", description: "A trusted choice for children, teens and adults alike." },
  { title: "Customisable", description: "Choose from a range of coloured elastics to make them your own." },
];

const faqs = [
  {
    question: "How long does treatment with metal braces take?",
    answer: "Treatment usually takes 12 to 24 months, depending on the complexity of your case. We'll give you a clear timeline during your free consultation.",
  },
  {
    question: "Do metal braces hurt?",
    answer: "You may feel some pressure and tenderness for a few days after fitting and after each adjustment, but it settles quickly. Most patients adjust to wearing them comfortably within a week.",
  },
  {
    question: "Will I have to change my diet?",
    answer: "Mostly no, but we recommend avoiding very hard, sticky or chewy foods that could damage the brackets or wires. We'll talk through everything at your fitting.",
  },
  {
    question: "How do I clean my teeth with braces?",
    answer: (
      <>
        Brushing takes a bit longer with braces, and we&apos;ll recommend tools like interdental brushes to keep things easy. Your <Link href={links.meetTeam}>Specialist Orthodontist</Link> will demonstrate the best routine for you.
      </>
    ),
  },
  {
    question: "How much do metal braces cost?",
    answer: (
      <>
        <Link href={links.costs}>Costs</Link> vary depending on the complexity of your case. We offer flexible payment plans, including 0% finance options. Book a consultation for a personalised quote.
      </>
    ),
  },
];

export default function MetalBracesPage() {
  return (
    <>
      <InnerHero
        label="METAL BRACES"
        title={
          <>
            Reliable, precise braces
            <br />
            <span>that get results</span>
          </>
        }
        description="Fixed metal braces are the most established and effective way to straighten teeth. Suited to a wide range of cases, they remain a popular choice for children, teens and adults at Oldham Orthodontics."
        ctaText="Arrange your free consultation"
        image="/images/metal-hero.webp"
        imageAlt="A close-up of teeth with fixed metal braces"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <ContentSection
        label="WHAT ARE METAL BRACES?"
        title="Tried, tested and dependable"
        paragraphs={[
          "Metal braces are made up of small stainless-steel brackets bonded to each tooth and connected by a thin archwire. The wire gently guides your teeth into their new positions over time, with regular adjustments from your Specialist Orthodontist along the way.",
          "Modern metal braces are far smaller and more comfortable than older versions, with smoother surfaces and refined bracket shapes. They're the most precise way to plan complex tooth movements and remain the gold standard for fixed orthodontic treatment.",
        ]}
        image="/images/metal-what.webp"
        imageAlt="A patient with a close-up of metal braces on their teeth"
      />

      <ContentSection
        alt
        imagePosition="right"
        label="EVERYDAY WEAR"
        title="Treatment that becomes second nature"
        paragraphs={[
          "Once your braces are fitted, daily life carries on as normal. You'll get used to the feel of them within a week or two, and your speech, eating and brushing routines settle in quickly.",
          "Most patients visit us every 6 to 8 weeks for a short adjustment appointment. These check-ins keep your treatment on track and give us the chance to answer any questions along the way.",
        ]}
        image="/images/metal-everyday.webp"
        imageAlt="A confident young person smiling with braces"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <BenefitsGrid
        title={
          <>
            The benefits of <span>metal braces</span>
          </>
        }
        description="Metal braces remain one of the most reliable and versatile orthodontic options. Here's what patients tell us they value most."
        benefits={benefits}
      />

      <SectionDivider from={WHITE} to={NAVY} />

      <FeatureBanner
        label="WHY OLDHAM ORTHODONTICS?"
        title={
          <>
            Expert braces care,
            <br />
            close to home
          </>
        }
        description={
          <>
            Our <Link href={links.meetTeam}>Specialist Orthodontists</Link> have decades of combined experience planning and delivering fixed brace treatment for patients of all ages. From your very first consultation, you&apos;ll feel supported by a team that genuinely cares about getting the details right.
          </>
        }
        ctaText="Meet our team"
        ctaHref={links.meetTeam}
      />

      <SectionDivider from={NAVY} to={WHITE} />

      <ContentSection
        label="WHAT TO EXPECT?"
        title="From fitting day to finishing line"
        paragraphs={[
          <>Your <Link href={links.freeConsultation}>free consultation</Link> includes an examination, a 3D scan, and X-rays where needed. We&apos;ll walk through which teeth are moving where, and may liaise with your dentist if you&apos;ve had recent fillings or crowns near the bracket sites.</>,
          "Fitting day takes around an hour. Brackets are bonded directly to your teeth, the archwire is threaded through and held in place with coloured elastic ties (yes, even the adults pick a colour). From there, you'll come in every four to six weeks for short adjustment visits - we swap the elastics, upgrade the wire as treatment progresses, and handle the occasional emergency repair if a bracket comes loose on a chewy bagel.",
          <>When your bite&apos;s where it should be we gently de-bond the brackets and polish the enamel, then fit your <Link href={links.retainers}>retainer</Link> the same visit.</>,
        ]}
        image="/images/metal-process.webp"
        imageAlt="A patient at a braces adjustment appointment"
      />

      <FAQSection
        description="Find answers to the most common questions about metal braces."
        faqs={faqs}
      />

      <SectionDivider from={WHITE} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Ready to start your braces journey?"
        description="Book a free, no-obligation consultation with our Specialist Orthodontists and find out if metal braces are right for you."
        ctaText="Book your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
