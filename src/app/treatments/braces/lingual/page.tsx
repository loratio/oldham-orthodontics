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
  title: "Lingual Braces | Hidden Behind-the-Teeth Braces",
  description: "Discover lingual braces at Oldham Orthodontics. Fixed to the back of your teeth, completely hidden during everyday wear, with the same effectiveness as traditional braces. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const benefits = [
  { title: "Completely hidden", description: "Fitted to the back of your teeth so they stay invisible during everyday life." },
  { title: "Custom-made for you", description: "Each bracket is shaped to fit the unique surface of your individual teeth." },
  { title: "Suited to complex cases", description: "Can treat a wide range of cases, from straightforward to more complex." },
  { title: "Predictable results", description: "Carefully planned and adjusted by your Specialist Orthodontist throughout treatment." },
  { title: "Discreet for adults", description: "An excellent option for adults who can't or don't want to wear visible braces." },
  { title: "No restrictions on smiling", description: "Smile, present, photograph, talk - your treatment stays out of sight." },
];

const faqs = [
  {
    question: "Are lingual braces really invisible?",
    answer: "From the outside, yes. Because the brackets are fitted to the back surface of your teeth, no one can see them during normal everyday conversation, smiling or photographs.",
  },
  {
    question: "Do they affect my speech?",
    answer: "Many patients notice a slight lisp for the first week or so as their tongue adjusts to the brackets. This usually settles quickly. We'll talk you through what to expect at your fitting.",
  },
  {
    question: "How long does treatment take?",
    answer: "Treatment timing is similar to other fixed braces, usually 12 to 24 months depending on the complexity of your case.",
  },
  {
    question: "Are lingual braces uncomfortable?",
    answer: "Like any new orthodontic appliance, there's an adjustment period as your tongue and mouth get used to the brackets. Most patients adapt within a few weeks. We'll provide everything you need to stay comfortable.",
  },
  {
    question: "How much do lingual braces cost?",
    answer: (
      <>
        Lingual braces are typically the most premium fixed option because each bracket is custom-made. <Link href={links.costs}>Costs</Link> vary by case, and we&apos;ll provide a clear, personalised quote during your free consultation.
      </>
    ),
  },
];

export default function LingualBracesPage() {
  return (
    <>
      <InnerHero
        label="LINGUAL BRACES"
        title={
          <>
            Truly hidden braces
            <br />
            <span>for a discreet treatment</span>
          </>
        }
        description="Lingual braces are fitted to the back of your teeth, so they stay completely hidden during everyday life. A discreet option for adults and older teens who want effective treatment without anyone seeing it."
        ctaText="Arrange your free consultation"
        image="/images/lingual-hero.webp"
        imageAlt="A confident adult smile during lingual braces treatment"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <ContentSection
        label="WHAT ARE LINGUAL BRACES?"
        title="Braces, but on the inside"
        paragraphs={[
          "Lingual braces use the same proven approach as conventional fixed braces - small brackets bonded to each tooth, connected by a wire that gently moves your teeth into place. The difference is that they're fitted to the back (or lingual) surface of your teeth, rather than the front.",
          "Each bracket is custom-made to fit the unique contours of your individual teeth, so they feel as comfortable as possible. From the outside, no one can see you're in treatment. From inside your mouth, your tongue settles around them within a few weeks.",
        ]}
        image="/images/lingual-what.webp"
        imageAlt="A close-up of lingual braces fitted behind the teeth"
      />

      <ContentSection
        alt
        imagePosition="right"
        label="EVERYDAY WEAR"
        title="Discreet treatment that fits your life"
        paragraphs={[
          "Once your tongue adjusts to the brackets (usually within a couple of weeks), lingual braces become a quiet part of your everyday routine. You can talk, smile, present and photograph with complete confidence.",
          "Like all fixed braces, you'll come in every 6 to 8 weeks for short adjustment appointments. We'll plan visits around your schedule so they're easy to fit in.",
        ]}
        image="/images/lingual-everyday.webp"
        imageAlt="A patient confidently going about everyday life during lingual braces treatment"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <BenefitsGrid
        title={
          <>
            The benefits of <span>lingual braces</span>
          </>
        }
        description="Lingual braces are the most discreet form of fixed braces available. Here's what patients value most."
        benefits={benefits}
      />

      <SectionDivider from={WHITE} to={NAVY} />

      <FeatureBanner
        label="WHY OLDHAM ORTHODONTICS?"
        title={
          <>
            Specialist care for
            <br />
            specialist treatment
          </>
        }
        description={
          <>
            Lingual braces require advanced training and careful planning. Our <Link href={links.meetTeam}>Specialist Orthodontists</Link> have the experience to plan and deliver them well, with the same warm, supportive approach we bring to every patient.
          </>
        }
        ctaText="Meet our team"
        ctaHref={links.meetTeam}
      />

      <SectionDivider from={NAVY} to={WHITE} />

      <ContentSection
        label="WHAT TO EXPECT?"
        title="Custom-made brackets, hidden treatment"
        paragraphs={[
          <>After your <Link href={links.freeConsultation}>free consultation</Link>, we take a detailed scan and send your case to a specialist laboratory where each bracket is digitally designed and machined to the exact contour of your individual teeth. This is what makes lingual genuinely invisible - and it&apos;s also why fitting takes a few weeks longer to plan than other braces.</>,
          "Your fitting is about a two-hour appointment. Expect to leave with a mild lisp - it almost always clears within seven to fourteen days as your tongue adapts. We send you home with relief wax for any sore spots, and we'll see you every six to eight weeks for adjustments. Cleaning takes a little extra care, so we run a short routine walkthrough at the fit.",
          <>Like every brace, treatment ends with bracket removal and a <Link href={links.retainers}>retainer</Link> the same day. Because lingual sits behind your teeth, most people will never realise you&apos;ve had treatment at all - which, for our adult patients, is usually the whole point.</>,
        ]}
        image="/images/lingual-process.webp"
        imageAlt="A patient talking with their Specialist Orthodontist at a consultation"
      />

      <FAQSection
        description="Find answers to the most common questions about lingual braces."
        faqs={faqs}
      />

      <SectionDivider from={WHITE} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Ready to talk through lingual braces?"
        description="Book a free, no-obligation consultation with our Specialist Orthodontists and find out if hidden braces are right for you."
        ctaText="Book your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
