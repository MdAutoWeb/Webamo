import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Webamo - Websites & Automatisatie voor Zelfstandigen | België",
    template: "%s | Webamo",
  },
  description:
    "Webamo bouwt moderne websites met slimme automatisatie voor zelfstandigen en KMO's in België. Conversiegerichte websites, CRM-koppelingen, e-mailautomatisatie en meer. Gratis intakegesprek.",
  keywords: [
    "website laten maken",
    "website maken belgië",
    "webdesign voor zelfstandigen",
    "webdesign belgië",
    "moderne websites",
    "automatisatie voor ondernemers",
    "AI automatisatie",
    "landingpage bouwen",
    "website en automatisatie",
    "CRM integratie",
    "e-mailautomatisatie",
    "website voor KMO",
    "website voor zelfstandige",
    "conversiegerichte website",
    "website met automatisatie",
    "webdesign belgië",
    "website maken belgië",
    "webdesign brugge",
    "webdesign antwerpen",
    "webdesign brussel",
    "webdesign gent",
    "website developer belgië",
  ],
  authors: [{ name: "Maikel", url: "https://webamo.be" }],
  creator: "Webamo",
  publisher: "Webamo",
  metadataBase: new URL("https://webamo.be"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "Webamo - Websites & Automatisatie voor Zelfstandigen | België",
    description:
      "Moderne websites met slimme automatisatie voor zelfstandigen en KMO's. Conversiegerichte websites, CRM-koppelingen en e-mailautomatisatie. Gratis intakegesprek.",
    url: "https://webamo.be",
    siteName: "Webamo",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Webamo - Websites & Automatisatie",
      },
    ],
    locale: "nl_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webamo - Websites & Automatisatie voor Zelfstandigen",
    description:
      "Moderne websites met slimme automatisatie voor zelfstandigen en KMO's in België.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://webamo.be/#organization",
    name: "Webamo",
    description:
      "Webamo bouwt high-end websites en slimme automatisaties (CRM, Airtable) voor KMO's en zelfstandigen in Brugge en heel Vlaanderen.",
    url: "https://webamo.be",
    logo: "https://webamo.be/images/logo.png",
    image: "https://webamo.be/images/logo.png",
    telephone: "+32",
    email: "info@webamo.be",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brugge",
      addressRegion: "West-Vlaanderen",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.2093",
      longitude: "3.2247",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Brugge",
      },
      {
        "@type": "City",
        name: "Gent",
      },
      {
        "@type": "City",
        name: "Antwerpen",
      },
      {
        "@type": "State",
        name: "Vlaanderen",
      },
    ],
    priceRange: "$$",
    sameAs: [],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Design & Business Automation",
    provider: {
      "@type": "LocalBusiness",
      name: "Webamo",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brugge",
        addressRegion: "West-Vlaanderen",
        addressCountry: "BE",
      },
    },
    areaServed: {
      "@type": "State",
      name: "Vlaanderen",
    },
    description:
      "High-end webdesign en business automatisatie voor KMO's en zelfstandigen in Brugge en Vlaanderen. Websites, CRM integratie (Airtable), en workflow automatisatie.",
    offers: {
      "@type": "Offer",
      description: "Gratis intakegesprek voor nieuwe klanten",
    },
  };

  return (
    <html lang="nl-BE">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black text-white`}
      >
        <div className="relative min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
