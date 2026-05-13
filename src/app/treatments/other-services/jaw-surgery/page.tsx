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
  title: "Jaw Surgery | Specialist Orthognathic Care",
  description: "Orthognathic (jaw) surgery support at Oldham Orthodontics. Specialist orthodontic planning alongside surgical care for more complex cases. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const benefits = [
  { title: "For more complex cases", description: "Treats cases where the jaws don't align well and orthodontics alone won't fix the issue." },
  { title: "Specialist planning", description: "Detailed orthodontic preparation that works hand-in-hand with your surgical team." },
  { title: "Joined-up care", description: "We coordinate between you, your surgeon and your dentist so nothing falls between the cracks." },
  { title: "Lasting results", description: "When orthodontics and surgery work together, the outcomes are stable and long-lasting." },
  { title: "Functional and aesthetic", description: "Better bite function, better facial balance, and better long-term oral health." },
  { title: "Clear, honest guidance", description: "We'll only recommend surgery if it's the right step, and we'll explain why in plain English." },
];

const faqs = [
  {
    question: "Who needs jaw surgery?",
    answer: "Jaw surgery is used in cases where the upper and lower jaws don't line up properly and orthodontics alone can't correct the issue. It's usually planned for adults whose jaws have finished growing, and it makes a significant difference to bite, function and facial balance.",
  },
  {
    question: "Do you carry out the surgery here?",
    answer: "No - jaw (orthognathic) surgery is carried out by a maxillofacial surgeon in a hospital setting. We handle the orthodontic side of treatment before and after, working closely with your surgical team throughout.",
  },
  {
    question: "How long does the whole process take?",
    answer: "From start to finish, combined orthodontic and surgical treatment usually takes 18 months to 3 years. The exact timeline depends on the complexity of your case. We'll plan everything in detail so you know what to expect.",
  },
  {
    question: "What happens before the surgery?",
    answer: "We use orthodontics - usually fixed braces - to move your teeth into the right position ready for surgery. This stage typically takes 12 to 18 months. We'll explain every milestone so you're never in the dark.",
  },
  {
    question: "How much does treatment cost?",
    answer: (
      <>
        Costs vary significantly depending on the case, and surgery itself is usually covered separately. We&apos;ll talk you through everything at your <Link href={links.freeConsultation}>free consultation</Link>, including <Link href={links.costs}>finance options</Link> for the orthodontic portion of treatment.
      </>
    ),
  },
];

export default function JawSurgeryPage() {
  return (
    <>
      <InnerHero
        label="JAW SURGERY"
        title={
          <>
            Specialist support for
            <br />
            <span>more complex cases</span>
          </>
        }
        description="For some patients, orthodontics alone isn't enough. When the upper and lower jaws don't align well, jaw surgery combined with specialist orthodontics can deliver lasting, transformational results. We'll guide you through every step."
        ctaText="Arrange your free consultation"
        image="/images/jaw-hero.webp"
        imageAlt="A specialist orthodontist reviewing a treatment plan"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <ContentSection
        label="JAW SURGERY?"
        title="When orthodontics and surgery work together"
        paragraphs={[
          "Orthognathic surgery - more commonly called jaw surgery - is used in cases where the upper and lower jaws don't fit together properly. This can cause issues with biting, chewing, sleep, and the overall balance of the face.",
          "Treatment combines specialist orthodontics with a separate surgical procedure carried out by a maxillofacial surgeon. The orthodontic stage prepares your teeth, the surgery corrects the jaw position, and a final orthodontic phase finishes the alignment.",
        ]}
        image="/images/jaw-what.webp"
        imageAlt="A patient at their orthodontic assessment"
      />

      <ContentSection
        alt
        imagePosition="right"
        label="OUR ROLE"
        title="Specialist orthodontic care alongside your surgery"
        paragraphs={[
          "We don't perform the surgery itself - that's carried out by a maxillofacial surgeon in a hospital setting. What we do handle is the specialist orthodontic care before and after the procedure, planned closely with your surgical team.",
          "Our role is to make sure your teeth are in exactly the right position before surgery, and to fine-tune the alignment afterwards. We coordinate the whole journey so you only ever have one main point of contact.",
        ]}
        image="/images/jaw-process.webp"
        imageAlt="Detailed orthodontic planning"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <BenefitsGrid
        title={
          <>
            The benefits of <span>combined treatment</span>
          </>
        }
        description="When orthodontics and surgery are planned together, the results go far beyond a straighter smile. Here's what patients value most."
        benefits={benefits}
      />

      <SectionDivider from={WHITE} to={NAVY} />

      <FeatureBanner
        label="WHY OLDHAM ORTHODONTICS?"
        title={
          <>
            Joined-up care from
            <br />
            an experienced local team
          </>
        }
        description={
          <>
            Combined orthodontic and surgical treatment is a big undertaking, and you deserve a team that supports you the whole way. Our <Link href={links.meetTeam}>Specialist Orthodontists</Link> work closely with leading maxillofacial surgeons, so you&apos;re in expert hands at every stage.
          </>
        }
        ctaText="Meet our team"
        ctaHref={links.meetTeam}
      />

      <SectionDivider from={NAVY} to={WHITE} />

      <ContentSection
        label="WHAT TO EXPECT?"
        title="Combining orthodontics and surgery"
        paragraphs={[
          <>Jaw surgery is rarely quick - the whole journey usually runs two to three years from your first appointment. We start with a <Link href={links.freeConsultation}>free consultation</Link>, a full set of scans and a joint review with a maxillofacial surgeon at one of our partner hospitals before anything is decided.</>,
          "If combined treatment is the right route, phase one is pre-surgical orthodontics - usually 12 to 18 months of braces or aligners to position your teeth correctly for surgery. The surgery itself is a single procedure under general anaesthetic, with around two weeks of soft-food recovery before normal life resumes. Most patients are back at work within four to six weeks.",
          <>Phase two is three to six months of post-surgical fine-tuning to settle the bite. When you finish, a <Link href={links.retainers}>retainer</Link> protects the result. The surgical team handles the operation; we handle the orthodontics either side and stay the steady point of contact across the whole journey.</>,
        ]}
        image="/images/jaw-recovery.webp"
        imageAlt="A patient feeling confident after combined treatment"
      />

      <FAQSection
        description="Find answers to the most common questions about jaw surgery and combined treatment."
        faqs={faqs}
      />

      <SectionDivider from={WHITE} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Want to find out if jaw surgery is right for you?"
        description="Book a free, no-obligation consultation with our Specialist Orthodontists and we'll talk you through every option."
        ctaText="Book your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
