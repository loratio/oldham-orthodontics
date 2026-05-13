import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import VisitSection from "./components/VisitSection";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Oldham Orthodontics | Specialist Orthodontic Care in Oldham",
    template: "%s | Oldham Orthodontics",
  },
  description: "Modern braces and advanced aligner treatments delivered by experienced, trusted orthodontists in a warm and welcoming practice in Oldham. Book your free consultation today.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <SiteHeader />
        {children}
        <VisitSection />
        <SiteFooter />
      </body>
    </html>
  );
}
