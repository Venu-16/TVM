import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "BTech Project Hub | Final Year B.Tech Project Development & Support",
  description:
    "Final year B.Tech project development and support for AI/ML, Generative AI, Full Stack, Data Science and modern software projects. Architecture design, modular development, university report documentation, and viva defense coaching.",
  keywords: [
    "B.Tech Final Year Projects",
    "Engineering Project Support",
    "Generative AI Projects",
    "Machine Learning Capstone",
    "Full Stack Final Year Project",
    "Data Science Projects",
    "Computer Science Capstone Guidance",
    "Viva Voce Preparation",
    "IEEE Project Paper Support",
  ],
  authors: [{ name: "BTech Project Hub" }],
  openGraph: {
    title: "BTech Project Hub | Final Year B.Tech Project Development & Support",
    description:
      "Final year B.Tech project development and support for AI/ML, Generative AI, Full Stack, Data Science and modern software projects.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BTech Project Hub | Final Year B.Tech Project Development & Support",
    description:
      "Complete B.Tech project development support — from idea selection to code, documentation, and viva defense guidance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground font-sans min-h-screen flex flex-col selection:bg-brand-500/30 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
