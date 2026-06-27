import Link from "next/link";
import CaseCard from "@/components/ui/CaseCard";
import { cases } from "@/lib/data";

export default function CasesSection() {
  return (
    <section className="max-w-[1120px] mx-auto px-5 py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-3">Klanten</div>
          <h2 className="font-bold text-[32px] md:text-[40px] tracking-[-0.025em] leading-[1.1]">
            Echte resultaten voor<br />echte bedrijven
          </h2>
        </div>
        <Link
          href="/cases"
          className="inline-flex items-center gap-[6px] text-[14px] font-medium text-[#2563EB] hover:gap-[10px] transition-all shrink-0"
        >
          Alle cases
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div
        className="mobile-swipe flex gap-5 overflow-x-auto snap-x snap-mandatory pb-3 -mx-5 px-5"
        role="list"
      >
        {cases.map((c) => (
          <div
            key={c.slug}
            role="listitem"
            className="snap-start shrink-0 w-[min(85vw,380px)]"
          >
            <CaseCard c={c} />
          </div>
        ))}
      </div>
      <p className="text-center text-[11px] mt-4 tracking-wide text-[#9CA3AF]">
        ← swipe om meer te zien →
      </p>
    </section>
  );
}
