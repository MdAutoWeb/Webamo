import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { images } from "@/lib/images";
import { cases } from "@/lib/data";
import { defaultOgImages, defaultTwitter } from "@/lib/site-metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Webamo | Websites & Automations | Brugge",
    template: "%s | Webamo",
  },
  description:
    "Website laten maken in Brugge en West-Vlaanderen? Webamo bouwt conversiegerichte websites en automatisatie voor KMO's. Meer leads, minder handmatig werk.",
  metadataBase: new URL("https://webamo.be"),
  openGraph: {
    siteName: "Webamo",
    locale: "nl_BE",
    type: "website",
    images: defaultOgImages,
  },
  twitter: defaultTwitter,
  alternates: { canonical: "https://webamo.be" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: images.brand.favicon, sizes: "32x32", type: "image/png" }],
    apple: [{ url: images.brand.favicon, sizes: "180x180", type: "image/png" }],
  },
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://webamo.be/#organization",
  name: "Webamo",
  url: "https://webamo.be",
  telephone: "+32493527360",
  email: "info@webamo.be",
  priceRange: "€€",
  logo: {
    "@type": "ImageObject",
    url: "https://webamo.be/images/brand/webamo-logo-light-transparent.png",
    width: 2133,
    height: 714,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brugge",
    addressRegion: "West-Vlaanderen",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.2093,
    longitude: 3.2247,
  },
  areaServed: [
    { "@type": "City", name: "Brugge" },
    { "@type": "City", name: "Oostkamp" },
    { "@type": "AdministrativeArea", name: "West-Vlaanderen" },
    { "@type": "AdministrativeArea", name: "Vlaanderen" },
  ],
  description: "Conversiegerichte websites en automations voor kleine bedrijven in Brugge en Vlaanderen.",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61577447082676",
    "https://www.linkedin.com/company/webamo",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(cases.length),
    bestRating: "5",
  },
  review: cases.map((c) => ({
    "@type": "Review",
    author: { "@type": "Person", name: c.testimonialAuthor },
    reviewBody: c.testimonialText,
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  })),
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://webamo.be/#website",
  name: "Webamo",
  url: "https://webamo.be",
  publisher: { "@id": "https://webamo.be/#organization" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
