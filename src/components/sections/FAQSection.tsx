import type { FaqItem } from "@/lib/data";

export default function FAQSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="max-w-[720px] mx-auto px-5 py-16 md:py-24">
      <div className="text-center mb-10">
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-3">
          FAQ
        </div>
        <h2 className="font-bold text-[32px] md:text-[38px] tracking-[-0.025em] leading-[1.1]">
          Veelgestelde vragen
        </h2>
      </div>
      <div>
        {items.map((item) => (
          <details key={item.q} className="group border-b border-[#E5E7EB]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
              <span className="font-medium text-[15px] text-[#0A0A0A]">{item.q}</span>
              <span className="shrink-0 w-6 h-6 rounded-full border border-[#E5E7EB] flex items-center justify-center transition-transform group-open:rotate-45">
                <svg
                  className="w-3 h-3 text-[#6B7280]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="text-[14px] text-[#6B7280] leading-[1.7] pb-5">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
