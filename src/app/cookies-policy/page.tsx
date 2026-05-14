import type { Metadata } from "next";
import "../inner-page.css";

import CompactHero from "../components/inner/CompactHero";
import { renderPolicy } from "../lib/render-policy";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "What cookies are, which cookies we use on the Oldham Orthodontics website, and how to manage your cookie preferences.",
};

export default function CookiesPolicyPage() {
  return (
    <>
      <CompactHero
        label="LEGAL"
        title="Cookies policy"
        description="What cookies are, which cookies we use, and how to manage your cookie preferences."
      />
      <section className="policy-content-section">
        <div className="policy-content">{renderPolicy(content)}</div>
      </section>
    </>
  );
}
