import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./logo-intro.css";
import "./scroll-animation.css";
import "./new-sections.css";
import "./medical-scroll.css";
import "./team-section.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NUVA – Kurdistan's First Medical AI Assistant",
  description: "NUVA is a specialized medical AI assistant with Kurdish voice support, designed for doctors, pharmacists, patients, and medical students in Kurdistan.",
  openGraph: {
    title: "NUVA – Kurdistan's First Medical AI Assistant",
    description: "Medical AI assistant with Kurdish voice message support and multilingual capabilities for the Kurdistan healthcare community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
