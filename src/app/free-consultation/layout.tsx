import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Consultation | Book Your Smile Assessment",
  description: "Book your free orthodontic consultation at Oldham Orthodontics. Meet our Specialist Orthodontists, discuss your goals, and discover the right treatment for your smile.",
};

export default function FreeConsultationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
