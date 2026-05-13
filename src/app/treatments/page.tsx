import type { Metadata } from "next";
import "../inner-page.css";

import InnerHero from "../components/inner/InnerHero";
import TreatmentGrid from "../components/inner/TreatmentGrid";
import ContentSection from "../components/inner/ContentSection";
import TestimonialsGrid from "../components/inner/TestimonialsGrid";
import CTABanner from "../components/inner/CTABanner";
import SectionDivider from "../components/SectionDivider";

export const metadata: Metadata = {
  title: "Treatments | Specialist Orthodontic Care",
  description: "Explore orthodontic treatments at Oldham Orthodontics, including clear aligners, braces and more. Our Specialist Orthodontists will help you find the right option. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

const categories = [
  {
    title: "Clear Aligners",
    description: "Discreet, removable aligners - including Invisalign®, Clarity™ and ClearCorrect.",
    image: "/images/Invisalign.jpg",
    href: "/treatments/clear-aligners",
    learnMore: "Aligners",
  },
  {
    title: "Braces",
    description: "Fixed braces in metal, ceramic or lingual styles to suit how you'd like to smile.",
    image: "/images/Braces.jpg",
    href: "/treatments/braces",
    learnMore: "Braces",
  },
  {
    title: "Treatment For",
    description: "Care that's tailored for adults, teens and children - at every stage of life.",
    image: "/images/child.jpg",
    href: "/treatments/treatment-for",
    learnMore: "All ages",
  },
  {
    title: "Other Services",
    description: "Specialist treatments including jaw surgery referrals and retainers.",
    image: "/images/other-services-placeholder.jpg",
    href: "/treatments/other-services",
    learnMore: "More",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "The team made me feel so comfortable from the very first visit. They took the time to explain every option clearly and find the right plan for me.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "James T.",
    text: "Our daughter was nervous about braces, but everyone at Oldham Orthodontics put her at ease. We couldn't be happier with the results.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Emma R.",
    text: "Friendly, professional and genuinely caring. I felt looked after at every appointment - and I love my smile.",
    rating: 5,
    source: "Google Review",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <InnerHero
        label="OUR TREATMENTS"
        title={
          <>
            Treatments tailored
            <br />
            <span>to your smile</span>
          </>
        }
        description="From clear aligners to traditional braces, we offer a full range of orthodontic options for every age and lifestyle. Whatever your starting point, our friendly team will help you find the right plan."
        ctaText="Arrange your free consultation"
        image="/images/Treatments.png"
        imageAlt="Patient consultation at Oldham Orthodontics"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <TreatmentGrid
        label="Explore Our Treatments"
        title="Find the right treatment for you"
        description="Every smile is different. Browse our treatment categories below and find the option that fits your needs."
        treatments={categories}
      />

      <ContentSection
        label="OUR APPROACH"
        title="Treatment that fits your life"
        paragraphs={[
          "We know that starting orthodontic treatment is a big decision, and we're here to make it feel straightforward. Our specialist team will take the time to understand what you're hoping for, talk you through your options, and recommend the approach that suits you best.",
          "From your first consultation onwards, you'll feel supported by people who genuinely care about getting it right - for your smile, your lifestyle, and your budget.",
        ]}
        image="/images/oldham-orthodontics-interior.webp"
        imageAlt="Inside Oldham Orthodontics"
        linkText="Meet our team"
        linkHref="/about-us/meet-our-team"
      />

      <SectionDivider from={WHITE} to={WARM} />

      <TestimonialsGrid
        label="From our patients"
        title="What our patients say"
        description="Real stories from local families who've trusted us with their care."
        testimonials={testimonials}
      />

      <SectionDivider from={WARM} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Ready to start your smile journey?"
        description="Book a free, no-obligation consultation and have a friendly chat with our team about what's right for you."
        ctaText="Arrange your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
