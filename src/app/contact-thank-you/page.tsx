import type { Metadata } from "next";
import "../inner-page.css";
import ThankYou from "../components/thank-you/ThankYou";

export const metadata: Metadata = {
  title: "Thank You | Oldham Orthodontics",
  description: "Thanks for getting in touch. We'll be in touch within one working day.",
  robots: { index: false, follow: true },
};

export default function ContactThankYouPage() {
  return (
    <ThankYou
      label="THANK YOU"
      title={
        <>
          Thanks - your message <span>is on its way</span>
        </>
      }
      description="We've received your enquiry and the team will come back to you within one working day."
    />
  );
}
