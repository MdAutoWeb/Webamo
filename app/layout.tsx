import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Webamo - Webdesign & Automatisatie voor Zelfstandigen in Brugge",
    template: "%s | Webamo",
  },
  description:
    "Webamo bouwt moderne websites en slimme automatisatie voor zelfstandigen en KMO's in Brugge en Vlaanderen. Webdesign, CRM-koppelingen en e-mailautomatisatie op maat.",
  authors: [{ name: "Maikel", url: "https://www.webamo.be" }],
  creator: "Webamo",
  publisher: "Webamo",
  metadataBase: new URL("https://www.webamo.be"),
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
    url: "https://www.webamo.be",
    siteName: "Webamo",
    images: [
      {
        url: "/images/Webamo-OG.png",
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
    images: ["/images/Webamo-OG.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.webamo.be/#organization",
    name: "Webamo",
    description:
      "Webamo bouwt high-end websites en slimme automatisaties (CRM, Airtable) voor KMO's en zelfstandigen in Brugge en heel Vlaanderen.",
    url: "https://www.webamo.be",
    logo: "https://www.webamo.be/images/Webamo-logo.png",
    image: "https://www.webamo.be/images/Webamo-logo.png",
    email: "info@webamo.be",
    telephone: "+32493527360",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oostkamp",
      addressRegion: "West-Vlaanderen",
      postalCode: "8020",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.15504",
      longitude: "3.23498",
    },
    areaServed: [
      { "@type": "City", name: "Oostkamp" },
      { "@type": "City", name: "Brugge" },
      { "@type": "City", name: "Zedelgem" },
      { "@type": "City", name: "Beernem" },
      { "@type": "City", name: "Gent" },
      { "@type": "City", name: "Antwerpen" },
      { "@type": "State", name: "Vlaanderen" },
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/webamo",
      "https://www.google.com/maps/place/Webamo/@51.0963082,4.2262283,17z/data=!3m1!4b1!4m6!3m5!1s0xa773ad8d9deb755d:0xcf40ea653a30117c",
    ],
    founder: {
      "@type": "Person",
      name: "Maikel",
      url: "https://www.webamo.be",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.webamo.be/#service",
    name: "Webdesign en bedrijfsautomatisatie",
    serviceType: "Webdesign en bedrijfsautomatisatie",
    url: "https://www.webamo.be/diensten",
    description:
      "High-end webdesign en business automatisatie voor KMO's en zelfstandigen in Brugge en Vlaanderen. Websites, CRM integratie (Airtable), en workflow automatisatie.",
    provider: {
      "@id": "https://www.webamo.be/#organization",
    },
    areaServed: [
      { "@type": "City", name: "Brugge" },
      { "@type": "City", name: "Gent" },
      { "@type": "City", name: "Antwerpen" },
      { "@type": "State", name: "Vlaanderen" },
    ],
    offers: {
      "@type": "Offer",
      description: "Gratis intakegesprek voor nieuwe klanten",
      price: "0",
      priceCurrency: "EUR",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.webamo.be/#website",
    url: "https://www.webamo.be",
    name: "Webamo",
    description:
      "Webdesign en automatisatie voor zelfstandigen en KMO's in Brugge en Vlaanderen.",
    inLanguage: "nl-BE",
    publisher: {
      "@id": "https://www.webamo.be/#organization",
    },
  };

  return (
    <html lang="nl-BE">
      <head>
        <link rel="preconnect" href="https://prod.spline.design" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black text-white`}
      >
        <div className="relative min-h-screen overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
