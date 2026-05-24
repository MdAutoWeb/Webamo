import type { Metadata } from "next";
import CaseCard from "@/components/ui/CaseCard";
import CTASection from "@/components/sections/CTASection";
import { cases } from "@/lib/data";
import { withSocialMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = withSocialMetadata({
  title: "Cases",
  description: "Bekijk hoe Webamo websites en automations bouwt die echt werken. Echte resultaten voor echte bedrijven in Brugge en Vlaanderen.",
  alternates: { canonical: "https://webamo.be/cases" },
  openGraph: {
    title: "Cases | Webamo",
    description: "Bekijk hoe Webamo websites en automations bouwt die echt werken. Echte resultaten voor echte bedrijven in Brugge en Vlaanderen.",
    url: "https://webamo.be/cases",
  },
});

export default function CasesPage() {
  return (
    <>
      <section className="max-w-[1120px] mx-auto px-5 pt-16 pb-12 md:pt-24">
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-4">Cases</div>
        <h1 className="font-bold text-[40px] md:text-[52px] tracking-[-0.03em] leading-[1.05] mb-5 max-w-[600px]">
          Echte resultaten voor<br />echte bedrijven
        </h1>
        <p className="text-[16px] text-[#6B7280] leading-[1.65] max-w-[500px]">
          Geen mooie beloftes. Concrete leads, cijfers en verhalen van bedrijven die we geholpen hebben.
        </p>
      </section>

      <section className="max-w-[1120px] mx-auto px-5 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <CaseCard key={c.slug} c={c} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
