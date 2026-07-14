"use client";

import { motion, useReducedMotion } from "framer-motion";
import MobileSwipeRow from "@/components/ui/MobileSwipeRow";

const pains = [
  {
    id: "google",
    title: "Niet gevonden op Google",
    body: "Je concurrent staat bovenaan, jij niet. Nieuwe klanten vinden je bedrijf gewoon niet, ook al ben je beter.",
  },
  {
    id: "leads",
    title: "Leads die nergens naartoe gaan",
    body: "Iemand vult je formulier in en dan? Geen automatische bevestiging, geen CRM, geen opvolging. Kansen verdwijnen.",
  },
  {
    id: "website",
    title: "Verouderde website die niet converteert",
    body: "Bezoekers komen, maar bellen niet. Je site ziet er niet professioneel uit op mobiel en geeft geen vertrouwen.",
  },
  {
    id: "repetitive",
    title: "Tijd die opgaat aan hetzelfde werk",
    body: "Elke offerte manueel opstellen, elke mail apart beantwoorden, elke klant hetzelfde uitleggen. Uren die je kwijt bent aan taken die zich elke week herhalen.",
  },
] as const;

function GooglePainVisual({ reduced }: { reduced: boolean }) {
  const rows = [
    { rank: "01", active: true },
    { rank: "14", active: false },
  ];

  return (
    <div className="w-full space-y-2.5 px-0.5">
      {rows.map((row, i) => (
        <div key={row.rank} className="flex items-center gap-2">
          <span
            className={`text-[10px] font-medium tabular-nums w-5 shrink-0 ${
              row.active ? "text-[#2563EB]" : "text-[#9CA3AF]"
            }`}
          >
            {row.rank}
          </span>
          <div className="flex-1 h-[6px] rounded-full bg-[#E5E7EB] overflow-hidden">
            {row.active ? (
              <motion.div
                className="h-full rounded-full bg-[#2563EB]"
                initial={{ width: reduced ? "78%" : "0%" }}
                animate={{ width: "78%" }}
                transition={{ duration: reduced ? 0 : 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            ) : (
              <motion.div
                className="h-full rounded-full bg-[#D1D5DB]"
                initial={{ width: reduced ? "22%" : "28%" }}
                animate={reduced ? undefined : { width: ["28%", "24%", "28%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function LeadsPainVisual({ reduced }: { reduced: boolean }) {
  return (
    <div className="w-full flex items-center gap-2 px-0.5">
      <div className="flex-1 rounded-md border border-[#E5E7EB] bg-white p-2 space-y-1.5">
        <div className="h-[5px] w-10 rounded bg-[#E5E7EB]" />
        <div className="h-[5px] w-full rounded bg-[#E5E7EB]" />
        <div className="h-[5px] w-[85%] rounded bg-[#E5E7EB]" />
      </div>
      <div className="relative w-8 shrink-0 flex items-center justify-center">
        <div className="absolute inset-x-0 top-1/2 h-px bg-[#E5E7EB]" />
        <motion.div
          className="relative z-10 w-2 h-2 rounded-full bg-[#2563EB]"
          animate={
            reduced
              ? { opacity: 0.35, x: 12 }
              : { x: [0, 12, 24], opacity: [1, 0.6, 0] }
          }
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
        />
      </div>
      <div className="w-9 h-9 shrink-0 rounded-md border border-dashed border-[#D1D5DB] bg-[#FAFAFA]" />
    </div>
  );
}

function WebsitePainVisual({ reduced }: { reduced: boolean }) {
  const bars = [
    { key: "bezoek", heights: [14, 22, 30, 36], color: "bg-[#D1D5DB]" },
    { key: "contact", heights: [10, 10, 11, 10], color: "bg-[#2563EB]/35" },
  ];

  return (
    <div className="w-full flex items-end justify-center gap-5 px-1 h-[44px]">
      {bars.map((bar) => (
        <div key={bar.key} className="flex flex-col items-center gap-1.5 w-10">
          <div className="w-full h-9 flex items-end justify-center">
            <motion.div
              className={`w-6 rounded-sm ${bar.color}`}
              animate={
                reduced
                  ? { height: bar.heights[bar.heights.length - 1] }
                  : { height: bar.heights }
              }
              transition={
                reduced
                  ? { duration: 0 }
                  : { duration: 3.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }
              }
            />
          </div>
          <span className="text-[9px] text-[#9CA3AF] font-medium tracking-wide uppercase">
            {bar.key === "bezoek" ? "Bezoek" : "Contact"}
          </span>
        </div>
      ))}
    </div>
  );
}

function RepetitivePainVisual({ reduced }: { reduced: boolean }) {
  const tasks = ["Offerte", "Mail", "Uitleg"];

  return (
    <div className="w-full flex items-center justify-center gap-2 px-0.5">
      {tasks.map((label, i) => (
        <motion.div
          key={label}
          className="flex-1 rounded-md border border-[#E5E7EB] bg-white p-2"
          animate={
            reduced
              ? { opacity: i === 1 ? 1 : 0.55 }
              : { opacity: [0.45, 1, 0.45] }
          }
          transition={
            reduced
              ? { duration: 0 }
              : { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }
          }
        >
          <div className="h-[5px] w-full rounded bg-[#E5E7EB] mb-1.5" />
          <div className="h-[5px] w-[70%] rounded bg-[#E5E7EB] mb-1.5" />
          <span className="text-[8px] text-[#9CA3AF] font-medium uppercase tracking-wide">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

const visuals = {
  google: GooglePainVisual,
  leads: LeadsPainVisual,
  website: WebsitePainVisual,
  repetitive: RepetitivePainVisual,
};

const icons = {
  google: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  leads: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.34 2 2 0 0 1 3.6 2.13h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  website: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  repetitive: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6v6l3 1.5" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
};

function PainCard({
  id,
  title,
  body,
  index,
  reduced,
}: {
  id: (typeof pains)[number]["id"];
  title: string;
  body: string;
  index: number;
  reduced: boolean;
}) {
  const Visual = visuals[id];

  return (
    <motion.article
      className="group bg-[#F5F5F5] rounded-[16px] p-7 h-full border border-transparent hover:border-[#E5E7EB] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow]"
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 }}
    >
      <div className="rounded-[12px] bg-white border border-[#E5E7EB] p-4 mb-5 min-h-[72px] flex flex-col justify-center">
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-[8px] bg-[#F5F5F5] border border-[#E5E7EB] flex items-center justify-center text-[#6B7280]">
            {icons[id]}
          </div>
        </div>
        <Visual reduced={reduced} />
      </div>
      <h3 className="font-semibold text-[17px] tracking-[-0.01em] mb-2">{title}</h3>
      <p className="text-[14px] text-[#6B7280] leading-[1.6]">{body}</p>
    </motion.article>
  );
}

export default function PainSection() {
  const reduced = useReducedMotion();

  return (
    <section className="max-w-[1120px] mx-auto px-5 py-16 md:py-24">
      <motion.div
        className="text-center mb-12"
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-3">
          Herken je dit?
        </div>
        <h2 className="font-bold text-[32px] md:text-[40px] tracking-[-0.025em] leading-[1.1]">
          Waarom kleine bedrijven
          <br />
          online achterop raken
        </h2>
      </motion.div>

      <MobileSwipeRow desktopCols="md:grid-cols-2 lg:grid-cols-4" itemWidth="w-[min(85vw,280px)]">
        {pains.map((pain, i) => (
          <PainCard key={pain.id} {...pain} index={i} reduced={!!reduced} />
        ))}
      </MobileSwipeRow>
    </section>
  );
}
