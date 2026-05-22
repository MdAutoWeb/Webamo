import Link from "next/link";
import CaseCard from "@/components/ui/CaseCard";
import MobileSwipeRow from "@/components/ui/MobileSwipeRow";
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

      <MobileSwipeRow desktopCols="md:grid-cols-2" itemWidth="w-[min(92vw,340px)]">
        {cases.map((c) => (
          <CaseCard key={c.slug} c={c} />
        ))}
      </MobileSwipeRow>
    </section>
  );
}
