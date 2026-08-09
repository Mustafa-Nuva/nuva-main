import type { Metadata, Viewport } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NUVA — Medical AI, built for the future",
    template: "%s | NUVA",
  },
  description:
    "NUVA is a medical AI assistant for patients and healthcare professionals. Symptom guidance, medication information, and voice support in Kurdish, Arabic, and English.",
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
    "Kurdistan Innovation Institute",
    "multilingual medical AI",
  ],
  authors: [{ name: "NUVA Team", url: "https://nuva.krd" }],
  creator: "NUVA",
  publisher: "NUVA",
  metadataBase: new URL("https://nuva.krd"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "NUVA — Medical AI, built for the future",
    description:
      "Medical intelligence for patients and healthcare professionals — in Kurdish, Arabic, and English.",
    url: "https://nuva.krd",
    siteName: "NUVA Medical AI",
    locale: "en_US",
    type: "website",
    images: [
      { url: "/og-logo.png", width: 512, height: 512, alt: "NUVA Medical AI Logo" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NUVA — Medical AI, built for the future",
    description:
      "Medical intelligence for patients and healthcare professionals — in Kurdish, Arabic, and English.",
    images: ["/og-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Healthcare",
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${vazir.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "NUVA",
              applicationCategory: "HealthApplication",
              operatingSystem: "iOS, iPadOS, Android, Web",
              description:
                "Medical AI assistant with Kurdish, Arabic, and English support for symptom guidance, medication information, and medical education.",
              url: "https://nuva.krd",
              author: {
                "@type": "Organization",
                name: "NUVA Team — Hawler Medical University",
                url: "https://nuva.krd",
              },
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
              logo: "https://nuva.krd/og-logo.png",
              image: "https://nuva.krd/og-logo.png",
              description:
                "Kurdistan's first medical AI assistant, developed at Hawler Medical University with support from the Kurdistan Innovation Institute (KII).",
              email: "support@nuva.krd",
              founder: [
                { "@type": "Person", name: "Mustafa Karwan" },
                { "@type": "Person", name: "Yad Qasim" },
              ],
              sameAs: ["https://www.instagram.com/nuva.krd"],
              foundingLocation: {
                "@type": "Place",
                name: "Hawler Medical University, Kurdistan Region, Iraq",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
