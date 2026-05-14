import type { Metadata } from "next";
import "../inner-page.css";

import CompactHero from "../components/inner/CompactHero";
import { renderPolicy } from "../lib/render-policy";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Oldham Orthodontics collects, uses, stores and protects your personal information, and your rights under UK data protection law.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <CompactHero
        label="LEGAL"
        title="Privacy policy"
        description="How we collect, use, store and protect your personal information, and your rights under UK data protection law."
      />
      <section className="policy-content-section">
        <div className="policy-content">{renderPolicy(content)}</div>
      </section>
    </>
  );
}
