import type { Metadata } from "next";
import "../inner-page.css";

import InnerHero from "../components/inner/InnerHero";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import CTABanner from "../components/inner/CTABanner";
import SectionDivider from "../components/SectionDivider";

export const metadata: Metadata = {
  title: "Patient Results | Real Before & After Smiles",
  description: "See real before and after results from patients treated at Oldham Orthodontics. Invisalign®, ceramic braces, lingual braces and jaw surgery case studies. Book your free consultation today.",
};

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";

type CaseGroupProps = {
  label: string;
  title: string;
  description: string;
  cases: { label: string; slug: string }[];
  background?: "white" | "warm";
};

function CaseGroup({ label, title, description, cases, background = "white" }: CaseGroupProps) {
  const sectionStyle = { background: background === "warm" ? WARM : WHITE };
  return (
    <section className="gallery" style={sectionStyle}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">{label}</div>
          <h2 className="section-title">{title}</h2>
          <p className="section-desc">{description}</p>
        </div>
        <div className="gallery-grid">
          {cases.map((c) => (
            <BeforeAfterSlider
              key={c.slug}
              label={c.label}
              beforeImage={`/images/results/${c.slug}-before.webp`}
              afterImage={`/images/results/${c.slug}-after.webp`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const invisalignCases = Array.from({ length: 8 }, (_, i) => ({ label: `Case ${i + 1}`, slug: `invisalign-case-${i + 1}` }));
const ceramicCases = Array.from({ length: 6 }, (_, i) => ({ label: `Case ${i + 1}`, slug: `ceramic-case-${i + 1}` }));
const lingualCases = Array.from({ length: 4 }, (_, i) => ({ label: `Case ${i + 1}`, slug: `lingual-case-${i + 1}` }));
const jawCases = [
  ...Array.from({ length: 5 }, (_, i) => ({ label: `Case ${i + 1}`, slug: `jaw-case-${i + 1}` })),
  { label: "Profile - Case 1", slug: "jaw-profile-1" },
  { label: "Profile - Case 2", slug: "jaw-profile-2" },
];

export default function ResultsPage() {
  return (
    <>
      <InnerHero
        label="REAL RESULTS"
        title={
          <>
            Real smiles,
            <br />
            <span>real transformations</span>
          </>
        }
        description="A snapshot of the smiles we've helped shape at our Oldham practice. Every case below was planned and delivered by our Specialist Orthodontists. Drag the slider on each photo to see the before and after for yourself."
        ctaText="Arrange your free consultation"
        image="/images/results-hero.webp"
        imageAlt="A confident patient smiling in warm sunlight"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <CaseGroup
        label="INVISALIGN®"
        title="Invisalign® clear aligner cases"
        description="Discreet, removable aligners working through everything from mild crowding to more complex alignment changes."
        cases={invisalignCases}
        background="white"
      />

      <SectionDivider from={WHITE} to={WARM} />

      <CaseGroup
        label="CERAMIC BRACES"
        title="Ceramic braces cases"
        description="Tooth-coloured brackets delivering reliable results, with a less noticeable look than traditional metal."
        cases={ceramicCases}
        background="warm"
      />

      <SectionDivider from={WARM} to={WHITE} />

      <CaseGroup
        label="LINGUAL BRACES"
        title="Lingual braces cases"
        description="Hidden behind the teeth, lingual braces straighten without anyone needing to know treatment is underway."
        cases={lingualCases}
        background="white"
      />

      <SectionDivider from={WHITE} to={WARM} />

      <CaseGroup
        label="JAW SURGERY"
        title="Combined orthodontic and jaw surgery cases"
        description="More complex cases involving both the position of the teeth and the underlying jaw, treated alongside our partner maxillofacial surgeons."
        cases={jawCases}
        background="warm"
      />

      <SectionDivider from={WARM} to={NAVY} variant="into-cta" />

      <CTABanner
        title="Could your smile be next?"
        description="Book a free, no-obligation consultation with our Specialist Orthodontists and find out what's possible for you."
        ctaText="Arrange your free consultation"
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
    </>
  );
}
