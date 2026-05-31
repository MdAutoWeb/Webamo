import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { automationServices } from "@/lib/data";
import { withSocialMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = withSocialMetadata({
  title: "Diensten",
  description: "Website, webshop en automatisatie voor kleine bedrijven in Brugge en Vlaanderen. Alles op maat, snel geleverd.",
  alternates: { canonical: "https://webamo.be/diensten" },
  openGraph: {
    title: "Diensten | Webamo",
    description: "Website, webshop en automatisatie voor kleine bedrijven in Brugge en Vlaanderen. Alles op maat, snel geleverd.",
    url: "https://webamo.be/diensten",
  },
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Webdesign & Automatisatie",
  provider: { "@id": "https://webamo.be/#organization" },
  areaServed: { "@type": "AdministrativeArea", name: "Vlaanderen" },
  serviceType: [
    "Webdesign",
    "Webshop ontwikkeling",
    "Marketing automatisatie",
    "Lead automatisatie",
    "Chatflows",
    "Lokale SEO",
  ],
  url: "https://webamo.be/diensten",
};

const diensten = [
  {
    id: "website",
    tag: "Website",
    title: "Conversiegerichte website op maat",
    body: "Geen dure agency, geen WordPress template. We bouwen een snelle, mobielvriendelijke site die bezoekers omzet in klanten. Elke sectie heeft een doel: contactformulier, telefoonnummer, vertrouwen opbouwen.",
    bullets: [
      "Mobiel-first design",
      "Snel laden (Core Web Vitals)",
      "Contactformulier met automatische bevestiging",
      "Domein + hosting inbegrepen",
      "Technisch onderhoud elke maand",
    ],
  },
  {
    id: "automatisatie",
    tag: "Automatisatie",
    title: automationServices.title,
    body: automationServices.body,
    bullets: automationServices.bullets,
  },
  {
    id: "webshop",
    tag: "Webshop",
    title: "Online verkopen zonder gedoe",
    body: "Betaling, beheer en bestellingen volledig geregeld. We bouwen een snelle webshop op maat, zonder abonnementskosten van derde platformen.",
    bullets: [
      "Mollie of Stripe betaling",
      "Admin panel voor producten",
      "Domein + hosting inbegrepen",
      "Mobiel-first design",
    ],
  },
];

export default function DienstenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* Header */}
      <section className="max-w-[1120px] mx-auto px-5 pt-16 pb-12 md:pt-24">
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-4">Diensten</div>
        <h1 className="font-bold text-[40px] md:text-[52px] tracking-[-0.03em] leading-[1.05] mb-5 max-w-[700px]">
          Alles wat je nodig hebt<br />om online te groeien
        </h1>
        <p className="text-[16px] text-[#6B7280] leading-[1.65] max-w-[520px]">
          Van website tot webshop tot automatisatie, met één doel: meer klanten voor jouw bedrijf.
        </p>
      </section>

      {/* Diensten */}
      {diensten.map(({ id, tag, title, body, bullets }, i) => (
        <section
          key={id}
          id={id}
          className={i % 2 === 1 ? "bg-[#F5F5F5]" : ""}
        >
          <div className="max-w-[1120px] mx-auto px-5 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <span className="inline-block text-[10px] font-semibold tracking-[0.1em] uppercase text-[#2563EB] bg-[rgba(37,99,235,.08)] px-[9px] py-[4px] rounded-full mb-5">
                {tag}
              </span>
              <h2 className="font-bold text-[28px] md:text-[34px] tracking-[-0.025em] leading-[1.15] mb-4">{title}</h2>
              <p className="text-[15px] text-[#6B7280] leading-[1.65] mb-6">{body}</p>
              <Button href="/contact" variant="primary" size="md">Vraag vrijblijvend aan</Button>
            </div>
            <div className={`bg-white rounded-[16px] border border-[#E5E7EB] p-7 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <ul className="space-y-[12px]">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-[10px]">
                    <svg className="w-[15px] h-[15px] mt-[2px] shrink-0 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[14px] text-[#374151]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
