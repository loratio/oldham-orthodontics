import type { Metadata } from "next";
import "../inner-page.css";

import CompactHero from "../components/inner/CompactHero";
import ContactSection from "../components/inner/ContactSection";
import EnquiryForm from "./EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Specialist Orthodontists in Oldham",
  description: "Get in touch with Oldham Orthodontics. Call, email or send a message - we'll come back to you within one working day. Free patient parking on site at 221 Hollins Road.",
};

const openingHours: [string, string][] = [
  ["Monday", "9am - 5pm"],
  ["Tuesday", "9am - 6pm"],
  ["Wednesday", "9am - 5pm"],
  ["Thursday", "9am - 5pm"],
  ["Friday", "9am - 5pm"],
  ["Saturday", "Closed"],
  ["Sunday", "Closed"],
];

export default function ContactPage() {
  return (
    <>
      <CompactHero
        label="CONTACT US"
        title={
          <>
            We&apos;re here to <span>help</span>
          </>
        }
        description="Whether you're booking your first visit, asking about treatment options, or chasing up an appointment, our team is happy to help. Here's how to reach us."
      />

      <ContactSection
        label="VISIT THE PRACTICE"
        title="Find us in the heart of Oldham"
        description="Free patient parking is available right on site. The reception team will be waiting to welcome you in."
        address={["Oldham Orthodontics", "221 Hollins Road", "Oldham OL8 3AA"]}
        phone="0161 622 0987"
        email="info@oldhamorthodontics.co.uk"
        hours={openingHours}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.8892!2d-2.1047!3d53.5408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb7e5b5b5b5b5%3A0x0!2s221+Hollins+Rd%2C+Oldham+OL8+3AA!5e0!3m2!1sen!2suk!4v1"
        mapsLinkHref="https://www.google.com/maps/search/?api=1&query=221+Hollins+Road+Oldham+OL8+3AA"
      />

      <EnquiryForm />
    </>
  );
}
