import Image from "next/image";
import { images } from "@/lib/images";

export default function BrowserMockup() {
  return (
    <div className="relative pb-8 pr-5">
      <div className="bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden shadow-[0_24px_48px_-16px_rgba(10,10,10,.15),0_8px_16px_-8px_rgba(10,10,10,.08)]">
        <div className="flex items-center gap-[14px] px-4 py-3 border-b border-[#E5E7EB] bg-[#fafafa]">
          <div className="flex gap-[6px]">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-[10px] h-[10px] rounded-full bg-[#E5E7EB]" />
            ))}
          </div>
          <div className="flex-1 inline-flex items-center justify-center gap-[6px] text-[12px] text-[#6B7280] bg-white border border-[#E5E7EB] rounded-[6px] px-3 py-[5px]">
            <svg className="w-[10px] h-[10px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            dakralux.be
          </div>
        </div>

        <div className="relative h-[240px] md:h-[280px] overflow-hidden bg-white">
          <Image
            src={images.cases.dakralux}
            alt="Dakralux website, case door Webamo"
            fill
            className="object-cover object-[32%_top]"
            sizes="(max-width: 768px) 100vw, 520px"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[260px] bg-white border border-[#E5E7EB] rounded-[14px] p-[16px] shadow-[0_20px_40px_-12px_rgba(10,10,10,.16)]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0A0A0A]">Automation flow</span>
          <span className="inline-flex items-center gap-[5px] text-[10px] font-medium text-[#2563EB] uppercase tracking-[0.1em]">
            <span className="w-[6px] h-[6px] rounded-full bg-[#2563EB] pulse-dot shrink-0" />
            Live
          </span>
        </div>
        {[
          { label: "Form ingevuld op dakralux.be", meta: "0s" },
          { label: "Lead → Airtable", meta: "+2s" },
          { label: "Auto-reply naar klant", meta: "+5s" },
        ].map((s, i) => (
          <div
            key={i}
            className={`flex items-center gap-[9px] py-[8px] text-[13px] text-[#0A0A0A] ${i > 0 ? "border-t border-[#E5E7EB]" : ""}`}
          >
            <span className="w-[17px] h-[17px] shrink-0 rounded-full bg-[rgba(37,99,235,.1)] text-[#2563EB] inline-flex items-center justify-center">
              <svg className="w-[10px] h-[10px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span className="text-[12px]">{s.label}</span>
            <span className="ml-auto text-[11px] text-[#9CA3AF] font-light shrink-0">{s.meta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
