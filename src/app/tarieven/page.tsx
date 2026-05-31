import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/site-metadata";
import PricingCard from "@/components/ui/PricingCard";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { plans, faqPricing } from "@/lib/data";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqPricing.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const metadata: Metadata = withSocialMetadata({
  title: "Tarieven",
  description:
    "Transparante prijzen voor websites, webshops en automatisaties. Website vanaf €695 setup + onderhoud, automatisatie vanaf €495+.",
  alternates: { canonical: "https://webamo.be/tarieven" },
  openGraph: {
    title: "Tarieven | Webamo",
    description:
      "Transparante prijzen voor websites, webshops en automatisaties. Website vanaf €695 setup + onderhoud, automatisatie vanaf €495+.",
    url: "https://webamo.be/tarieven",
  },
});

export default function TarievenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Header */}
      <section className="max-w-[1120px] mx-auto px-5 pt-16 pb-12 md:pt-24 text-center">
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-4">
          Tarieven
        </div>
        <h1 className="font-bold text-[40px] md:text-[52px] tracking-[-0.03em] leading-[1.05] mb-5">
          Transparante prijzen.
          <br />
          Geen verrassingen.
        </h1>
        <p className="text-[16px] text-[#6B7280] leading-[1.65] max-w-[500px] mx-auto">
          Éénmalige setup, maandelijks onderhoud. Alles inbegrepen: domein,
          hosting, SSL, updates.
        </p>
      </section>

      {/* Pricing grid */}
      <section className="max-w-[1120px] mx-auto px-5 pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* Wat is inbegrepen in het maandelijks bedrag */}
      <section className="bg-[#F5F5F5]">
        <div className="max-w-[1120px] mx-auto px-5 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-3">
                Maandelijks onderhoud
              </div>
              <h2 className="font-bold text-[26px] md:text-[30px] tracking-[-0.02em] leading-[1.2] mb-4">
                Inbegrepen in het maandelijks bedrag
              </h2>
              <p className="text-[14px] text-[#6B7280] leading-[1.7]">
                Geen verborgen kosten. Geen verrassingen. Alles wat je site
                draaiende houdt, zit in het vaste bedrag.
              </p>
            </div>
            <ul className="space-y-[10px]">
              {[
                "Hosting op snelle servers",
                "Domein en SSL-certificaat",
                "Technische updates en beveiligingspatches",
                "Max 1u aanpassingen per maand inbegrepen",
                "Extra werk buiten pakket: €75/u",
              ].map((item) => (
                <li key={item} className="flex items-start gap-[10px]">
                  <svg
                    className="w-[15px] h-[15px] mt-[2px] shrink-0 text-[#2563EB]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-[14px] text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison note */}
      <section>
        <div className="max-w-[720px] mx-auto px-5 py-12 text-center">
          <p className="text-[14px] text-[#6B7280] leading-[1.7]">
            Twijfel je welk pakket het beste past? Plan een gratis gesprek. We
            bekijken samen wat je echt nodig hebt en wat het snelst rendeert.
          </p>
        </div>
      </section>

      <FAQSection items={faqPricing} />
      <CTASection />
    </>
  );
}
