import { cases } from "@/lib/data";
import { images } from "@/lib/images";

const SITE_URL = "https://webamo.be";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Webamo",
  image: `${SITE_URL}${images.brand.logo}`,
  url: SITE_URL,
  telephone: "+32493527360",
  email: "info@webamo.be",
  priceRange: "€€",
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
    "Brugge",
    "Oostkamp",
    "Torhout",
    "Zedelgem",
    "Wingene",
    "West-Vlaanderen",
    "Vlaanderen",
  ],
  description:
    "Conversiegerichte websites en automatisaties voor kleine bedrijven in Brugge en Vlaanderen.",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61577447082676",
    "https://www.linkedin.com/company/webamo",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(cases.filter((c) => c.testimonialText && c.testimonialAuthor).length),
    bestRating: "5",
  },
  review: cases
    .filter((c) => c.testimonialText && c.testimonialAuthor)
    .map((c) => ({
      "@type": "Review",
      author: { "@type": "Person", name: c.testimonialAuthor },
      reviewBody: c.testimonialText,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    })),
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Webamo",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
} as const;

export const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#webpage`,
  url: `${SITE_URL}/contact`,
  name: "Contact | Webamo",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: { "@id": `${SITE_URL}/#organization` },
} as const;

export const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Website laten maken Brugge & West-Vlaanderen | Webamo",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: { "@id": `${SITE_URL}/#organization` },
} as const;
