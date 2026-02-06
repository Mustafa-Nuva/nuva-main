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
  title: {
    default: "NUVA – Kurdistan's First Medical AI Assistant",
    template: "%s | NUVA Medical AI",
  },
  description: "NUVA is Kurdistan's first AI-powered medical assistant. Kurdish voice support, symptom analysis, medication guidance, and medical education for doctors, pharmacists, patients, and students. Built at Hawler Medical University.",
  keywords: [
    "NUVA",
    "medical AI",
    "Kurdistan",
    "healthcare AI",
    "Kurdish voice support",
    "medical assistant",
    "symptom checker",
    "medication guidance",
    "Hawler Medical University",
    "AI healthcare Kurdistan",
    "medical education",
    "Kurdish medical AI",
    "pharmacy AI",
    "doctor AI assistant",
    "patient health tool",
    "multilingual medical AI",
    "Arabic medical AI",
    "Kurdish language AI",
    "health technology Kurdistan",
    "KII",
    "Kurdistan Innovation Institute",
  ],
  authors: [{ name: "NUVA Team", url: "https://nuva.krd" }],
  creator: "NUVA – Hawler Medical University",
  publisher: "NUVA",
  metadataBase: new URL("https://nuva.krd"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "NUVA – Kurdistan's First Medical AI Assistant",
    description: "AI-powered medical assistant with Kurdish voice support. Symptom analysis, medication guidance, and medical education for Kurdistan's healthcare community.",
    url: "https://nuva.krd",
    siteName: "NUVA Medical AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/alone-logo-w.png",
        width: 512,
        height: 512,
        alt: "NUVA Medical AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NUVA – Kurdistan's First Medical AI Assistant",
    description: "AI-powered medical assistant with Kurdish voice support for doctors, pharmacists, patients & students in Kurdistan.",
    images: ["/images/alone-logo-w.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Healthcare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "NUVA",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              description: "Kurdistan's first AI-powered medical assistant with Kurdish voice support, symptom analysis, medication guidance, and medical education.",
              url: "https://nuva.krd",
              author: {
                "@type": "Organization",
                name: "NUVA Team – Hawler Medical University",
                url: "https://nuva.krd",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              inLanguage: ["en", "ku", "ar"],
              audience: {
                "@type": "MedicalAudience",
                audienceType: "Healthcare professionals, patients, medical students",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NUVA",
              url: "https://nuva.krd",
              logo: "https://nuva.krd/images/alone-logo-w.png",
              description: "Kurdistan's first medical AI assistant, developed at Hawler Medical University with support from the Kurdistan Innovation Institute (KII).",
              email: "admin@nuva.krd",
              sameAs: [
                "https://www.instagram.com/nuva.krd",
              ],
              foundingLocation: {
                "@type": "Place",
                name: "Hawler Medical University, Kurdistan Region, Iraq",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
