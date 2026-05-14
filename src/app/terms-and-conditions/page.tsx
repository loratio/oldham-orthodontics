import type { Metadata } from "next";
import "../inner-page.css";

import CompactHero from "../components/inner/CompactHero";
import { renderPolicy } from "../lib/render-policy";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing your use of the Oldham Orthodontics website and the services we provide.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <CompactHero
        label="LEGAL"
        title="Terms and conditions"
        description="The terms that govern your use of our website and the services we provide."
      />
      <section className="policy-content-section">
        <div className="policy-content">{renderPolicy(content)}</div>
      </section>
    </>
  );
}
