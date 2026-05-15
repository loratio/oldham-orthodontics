import Link from "next/link";
import { links } from "@/app/lib/internal-links";

type ThankYouProps = {
  label: string;
  title: React.ReactNode;
  description: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
};

export default function ThankYou({
  label,
  title,
  description,
  ctaText = "Back to home",
  ctaHref = links.home,
}: ThankYouProps) {
  return (
    <section className="inner-hero inner-hero--compact">
      <div className="inner-hero-content">
        <div className="inner-hero-text">
          <span className="inner-hero-label">{label}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <p className="thank-you-help">
            If your enquiry is urgent, give us a call on{" "}
            <a href="tel:01616220987">0161 622 0987</a>.
          </p>
          <Link href={ctaHref} className="btn btn-accent">
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
