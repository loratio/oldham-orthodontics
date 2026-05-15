import type { Metadata } from "next";
import "../inner-page.css";
import ThankYou from "../components/thank-you/ThankYou";

export const metadata: Metadata = {
  title: "Consultation Request Received | Oldham Orthodontics",
  description: "Thanks for booking your free consultation. We'll be in touch shortly to confirm a time.",
  robots: { index: false, follow: true },
};

export default function ConsultationThankYouPage() {
  return (
    <ThankYou
      label="CONSULTATION REQUEST RECEIVED"
      title={
        <>
          Thanks - we&apos;ll be in touch <span>very soon</span>
        </>
      }
      description="We've received your free consultation request. The team will call or email within one working day to find a time that suits you."
    />
  );
}
