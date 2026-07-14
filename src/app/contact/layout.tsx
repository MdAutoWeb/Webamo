import type { Metadata } from "next";
import { contactPageJsonLd } from "@/lib/local-business-schema";
import { withSocialMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = withSocialMetadata({
  title: "Contact",
  description:
    "Neem contact op met Webamo voor websites en automatisatie in Brugge en West-Vlaanderen. Bel, mail of stuur een bericht.",
  alternates: { canonical: "https://webamo.be/contact" },
  openGraph: {
    title: "Contact | Webamo",
    description:
      "Neem contact op met Webamo voor websites en automatisatie in Brugge en West-Vlaanderen.",
    url: "https://webamo.be/contact",
  },
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      {children}
    </>
  );
}
