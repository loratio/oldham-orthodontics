import type { Metadata } from "next";
import Link from "next/link";
import "../../inner-page.css";

import InnerHero from "../../components/inner/InnerHero";
import TreatmentGrid from "../../components/inner/TreatmentGrid";
import ContentSection from "../../components/inner/ContentSection";
import CTABanner from "../../components/inner/CTABanner";
import SectionDivider from "../../components/SectionDivider";
import { links } from "../../lib/internal-links";

export const metadata: Metadata = {
  title: "Other Services | Jaw Surgery & Retainers",
  description: "Additional orthodontic services at Oldham Orthodontics, including jaw surgery referrals and retainers to protect your new smile. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const services = [
  {
    title: "Jaw Surgery",
    description: "Specialist treatment for more complex cases where surgery can help achieve the best result.",
    image: "/images/jaw-hero.webp",
    href: links.jawSurgery,
    learnMore: "Jaw Surgery",
  },
  {
    title: "Retainers",
    description: "The final step that keeps your new smile in place for the long term, after any treatment.",
    image: "/images/retainers-hero.webp",
    href: links.retainers,
    learnMore: "Retainers",
  },
];

export default function OtherServicesPage() {
  return (
    <>
      <InnerHero
        label="OTHER SERVICES"
        title={
          <>
            Specialist care beyond
            <br />
            <span>everyday treatments</span>
          </>
        }
        description="As well as our core orthodontic treatments, we offer additional services that help patients achieve the best possible long-term results. From specialist jaw surgery referrals to retainers, we'll guide you through everything that's right for your case."
        ctaText="Arrange your free consultation"
        image="/images/os-hub-hero.webp"
        imageAlt="A welcoming view of the Oldham Orthodontics practice"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <TreatmentGrid
        label="Additional Services"
        title="Specialist support, wherever you are in your journey"
        description="These additional services sit alongside our main treatments, so we can give you the right care at every stage."
        treatments={services}
      />

      <ContentSection
        label="OUR APPROACH"
        title="Joined-up care, from start to finish"
        paragraphs={[
          <>If your case needs more than a standard orthodontic treatment, we&apos;ll guide you through every step. During your <Link href={links.freeConsultation}>free consultation</Link>, we&apos;ll explain whether any additional services might apply to you, and why.</>,
          "Whether you're starting out, in the middle of treatment, or wrapping it up with a retainer, the same warm, supportive team is here for you. We don't believe in handing patients between unfamiliar specialists - we coordinate everything around you.",
        ]}
        image="/images/os-hub-approach.webp"
        imageAlt="A friendly conversation with the orthodontic team"
        linkText="Meet our team"
        linkHref={links.meetTeam}
      />

      <SectionDivider from={WHITE} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Not sure what you need?"
        description="Book a free, no-obligation consultation and we'll talk you through every service that's relevant to your case."
        ctaText="Arrange your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
