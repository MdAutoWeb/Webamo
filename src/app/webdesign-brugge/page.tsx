import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { withSocialMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = withSocialMetadata({
  title: "Website laten maken Brugge & Oostkamp",
  description:
    "Website laten maken in Brugge of Oostkamp? Webamo bouwt snelle, conversiegerichte websites voor zelfstandigen en KMO's in West-Vlaanderen. Vanaf €695, live in 1-2 weken.",
  alternates: { canonical: "https://webamo.be/webdesign-brugge" },
  openGraph: {
    title: "Webdesign Brugge | Webamo",
    description:
      "Professionele websites voor bedrijven in Brugge. Op maat, mobiel-first en gericht op meer leads.",
    url: "https://webamo.be/webdesign-brugge",
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Webdesign Brugge",
  provider: { "@id": "https://webamo.be/#organization" },
  areaServed: { "@type": "City", name: "Brugge" },
  url: "https://webamo.be/webdesign-brugge",
};

export default function WebdesignBruggePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="max-w-[1120px] mx-auto px-5 pt-16 pb-12 md:pt-24">
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#2563EB] mb-4">
          Webdesign · Brugge
        </div>
        <h1 className="font-bold text-[40px] md:text-[52px] tracking-[-0.03em] leading-[1.05] mb-5 max-w-[700px]">
          Website laten maken in Brugge?
        </h1>
        <p className="text-[16px] text-[#6B7280] leading-[1.65] max-w-[600px] mb-4">
          Webamo helpt zelfstandigen en KMO&apos;s in Brugge, Oostkamp en de hele regio met een
          professionele website die gevonden wordt op Google en leads oplevert. Geen template,
          geen maanden wachten.
        </p>
        <p className="text-[15px] text-[#6B7280] leading-[1.65] max-w-[600px] mb-8">
          Of je nu een nieuwe zaak start of je oude site wilt vervangen: wij bouwen mobiel-first,
          met lokale SEO en optionele automatisatie voor leadopvolging.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="primary" size="lg">
            Gratis gesprek plannen
          </Button>
          <Button href="/cases" variant="outline" size="lg">
            Bekijk cases
          </Button>
        </div>
      </section>

      <section className="max-w-[1120px] mx-auto px-5 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-bold text-[24px] tracking-[-0.02em] mb-4">Wat je krijgt</h2>
          <ul className="space-y-3 text-[15px] text-[#374151]">
            <li>Conversiegerichte website op maat</li>
            <li>Mobiel-first en snel ladend</li>
            <li>Lokale SEO voor Brugge, Oostkamp en regio</li>
            <li>Contactformulier met leadopvolging</li>
            <li>Domein, hosting en onderhoud inbegrepen</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-[24px] tracking-[-0.02em] mb-4">Voor wie?</h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.65] mb-4">
            Dakwerkers, zorgpraktijken, coaches, horeca, ambachtslui en andere lokale bedrijven in
            Brugge en West-Vlaanderen die online meer aanvragen willen.
          </p>
          <Link href="/tarieven" className="text-[14px] font-medium text-[#2563EB] hover:underline">
            Bekijk tarieven →
          </Link>
          {" · "}
          <Link href="/cases" className="text-[14px] font-medium text-[#2563EB] hover:underline">
            Cases →
          </Link>
        </div>
      </section>

      <section className="bg-[#F5F5F5] border-y border-[#E5E7EB]">
        <div className="max-w-[720px] mx-auto px-5 py-14 md:py-16">
          <h2 className="font-bold text-[24px] tracking-[-0.02em] mb-4 text-[#0A0A0A]">
            Waarom een lokale webdesigner?
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-4">
            Een bureau ver van je regio snapt de lokale markt minder goed. Webamo kent de zoekintentie
            in Brugge en omstreken: mensen zoeken naar een betrouwbare partner dichtbij, met duidelijke
            prijzen en snelle oplevering.
          </p>
          <p className="text-[15px] text-[#6B7280] leading-[1.7]">
            Gemiddeld staat je site binnen 1 tot 2 weken live. Daarna helpen we je groeien met
            automatisatie en extra landingspagina&apos;s wanneer je klaar bent.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
