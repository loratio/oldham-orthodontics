import type { Metadata } from "next";
import Link from "next/link";
import "../inner-page.css";

import InnerHero from "../components/inner/InnerHero";
import SectionDivider from "../components/SectionDivider";
import ReferralForm from "./ReferralForm";
import { links } from "../lib/internal-links";

export const metadata: Metadata = {
  title: "Dentist Referrals | Refer a Patient to Oldham Orthodontics",
  description: "Refer a patient to Oldham Orthodontics. Quick online referral form for dentists, with optional clinical photo upload. We work closely with referring practitioners across Oldham and the surrounding area.",
};

const WHITE = "#fff";
const WARM = "#faf7f4";

export default function DentistReferralsPage() {
  return (
    <>
      <InnerHero
        label="DENTIST REFERRALS"
        title={
          <>
            Refer a patient to
            <br />
            <span>Oldham Orthodontics</span>
          </>
        }
        description="If you're a referring dental practitioner, you're in the right place. Our team works closely with local practices to look after your patients' smiles, and we'll keep you informed at every stage of their treatment with us."
        image="/images/dentist-referrals-hero.webp"
        imageAlt="A patient smiling during a consultation in the dental chair"
      />

      <SectionDivider from={WARM} to={WARM} />

      <section className="referral-section">
        <div className="referral-container">
          <div className="referral-intro">
            <span className="section-label">REFERRAL FORM</span>
            <h2>Send us your patient&apos;s details</h2>
            <p>
              Complete the form below to refer your patient. If you&apos;ve referred to us before, thank you for your continued trust. Patient information shared here is handled in line with our <Link href={links.privacyPolicy}>privacy policy</Link>.
            </p>
          </div>
          <ReferralForm />
        </div>
      </section>
    </>
  );
}
