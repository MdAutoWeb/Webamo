"use client";

import { useCountUp } from "@/hooks/useCountUp";

type Stat = { value: string; label: string };

function CountStat({ value, label }: Stat) {
  const match = value.match(/^(\d+)([+%]?)$/);
  const target = match ? parseInt(match[1]) : null;
  const suffix = match ? match[2] : "";

  const { ref, count } = useCountUp(target ?? 0, 1.2);

  if (!target) {
    return (
      <div className="text-center">
        <div className="font-bold text-[20px] tracking-[-0.02em] text-[#0A0A0A]">{value}</div>
        <div className="text-[11px] text-[#9CA3AF]">{label}</div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="font-bold text-[20px] tracking-[-0.02em] text-[#0A0A0A]">
        {count}{suffix}
      </div>
      <div className="text-[11px] text-[#9CA3AF]">{label}</div>
    </div>
  );
}

const stats: Stat[] = [
  { value: "2+", label: "cases" },
  { value: "1-2w", label: "levertijd" },
  { value: "100%", label: "op maat" },
];

export default function HeroStats() {
  return (
    <>
      <div className="mobile-swipe flex items-center gap-8 overflow-x-auto snap-x snap-mandatory pb-1 -mx-5 px-5 mt-8 md:hidden">
        {stats.map((s) => (
          <div key={s.label} className="snap-start shrink-0 min-w-[72px]">
            <CountStat {...s} />
          </div>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-5 mt-8">
        {stats.map((s) => (
          <CountStat key={s.label} {...s} />
        ))}
      </div>
    </>
  );
}
