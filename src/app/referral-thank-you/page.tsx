import type { Metadata } from "next";
import "../inner-page.css";
import ThankYou from "../components/thank-you/ThankYou";

export const metadata: Metadata = {
  title: "Referral Received | Oldham Orthodontics",
  description: "Thanks - we've received your patient referral and will be in touch shortly.",
  robots: { index: false, follow: true },
};

export default function ReferralThankYouPage() {
  return (
    <ThankYou
      label="REFERRAL RECEIVED"
      title={
        <>
          Thanks - we&apos;ve received <span>your referral</span>
        </>
      }
      description="We'll be in touch within one working day to confirm next steps for your patient."
    />
  );
}
