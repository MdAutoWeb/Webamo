"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import MobileSwipeRow from "@/components/ui/MobileSwipeRow";

const diensten: { tag: string; title: string; body: string; href: string }[] = [
  {
    tag: "Website",
    title: "Conversiegerichte website",
    body: "Geen template. Een site gebouwd rond jouw klant: snel, mobiel-first, en geoptimaliseerd om bezoekers te laten bellen of mailen.",
    href: "/diensten#website",
  },
  {
    tag: "Lokale SEO",
    title: "Gevonden worden op Google",
    body: "Google Business Profile, lokale zoektermen en technische SEO, zodat jij bovenaan staat als iemand in jouw regio zoekt.",
    href: "/diensten",
  },
  {
    tag: "Automatisatie",
    title: "Automatisatie & leadmachine",
    body: "Leadmachine met Airtable, missed-call text-back, WhatsApp-automatisatie, review automation en offerteflows, op maat en ook zonder nieuwe website.",
    href: "/diensten#automatisatie",
  },
  {
    tag: "Webshop",
    title: "Webshop",
    body: "Online verkopen zonder gedoe. Betaling, beheer en bestellingen volledig geregeld.",
    href: "/diensten#webshop",
  },
];

export default function DienstenSection() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-[#F5F5F5]">
      <div className="max-w-[1120px] mx-auto px-5 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-3">Wat we bouwen</div>
            <h2 className="font-bold text-[32px] md:text-[40px] tracking-[-0.025em] leading-[1.1]">
              Alles wat je nodig hebt<br />om online te groeien
            </h2>
          </div>
          <Link
            href="/diensten"
            className="inline-flex items-center gap-[6px] text-[14px] font-medium text-[#2563EB] hover:gap-[10px] transition-all shrink-0"
          >
            Alle diensten
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <MobileSwipeRow desktopCols="md:grid-cols-2 lg:grid-cols-4" itemWidth="w-[min(85vw,280px)]">
          {diensten.map(({ tag, title, body, href }) => (
            <motion.div
              key={title}
              className="h-full"
              whileHover={
                reduced
                  ? undefined
                  : {
                      y: -4,
                      boxShadow: "0 12px 32px -8px rgba(10,10,10,.12)",
                      transition: { duration: 0.2, ease: "easeOut" },
                    }
              }
            >
              <Link
                href={href}
                className="group bg-white rounded-[16px] p-7 border border-[#E5E7EB] hover:border-[#0A0A0A] transition-colors flex flex-col h-full"
              >
                <span className="inline-block text-[10px] font-semibold tracking-[0.1em] uppercase text-[#2563EB] bg-[rgba(37,99,235,.08)] px-[9px] py-[4px] rounded-full mb-5 self-start">
                  {tag}
                </span>
                <h3 className="font-semibold text-[18px] tracking-[-0.01em] mb-2">{title}</h3>
                <p className="text-[14px] text-[#6B7280] leading-[1.6] flex-1">{body}</p>
                <div className="mt-5 inline-flex items-center gap-[6px] text-[13px] font-medium text-[#2563EB] group-hover:gap-[10px] transition-all">
                  Meer info
                  <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </MobileSwipeRow>
      </div>
    </section>
  );
}
