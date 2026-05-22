"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import BrowserMockup from "@/components/ui/BrowserMockup";
import HeroStats from "@/components/sections/HeroStats";

const hidden = { opacity: 0, y: 40 } as const;
const visible = (delay: number) => ({
  opacity: 1,
  y: 0,
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const, delay },
});

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="max-w-[1120px] mx-auto px-5 pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — staggered */}
        <div>
          <motion.div initial={reduced ? false : hidden} animate={visible(0)}>
            <div className="inline-flex items-center gap-[6px] text-[11px] font-medium tracking-[0.1em] uppercase text-[#2563EB] bg-[rgba(37,99,235,.08)] px-3 py-[6px] rounded-full mb-5">
              <span className="w-[6px] h-[6px] rounded-full bg-[#2563EB] pulse-dot shrink-0" />
              Webdesign in Brugge &amp; Vlaanderen
            </div>
          </motion.div>

          <motion.h1
            initial={reduced ? false : hidden}
            animate={visible(0.1)}
            className="font-bold text-[36px] sm:text-[42px] md:text-[52px] tracking-[-0.03em] leading-[1.05] mb-5"
          >
            Minder rompslomp.<br />
            <span className="text-[#2563EB]">Meer klanten.</span>
          </motion.h1>

          <motion.p
            initial={reduced ? false : hidden}
            animate={visible(0.2)}
            className="text-[16px] text-[#6B7280] leading-[1.65] mb-8 max-w-[460px]"
          >
            Wij bouwen websites en automatisaties voor kleine bedrijven, zodat jij gevonden wordt,
            leads binnenkomen en jij je focust op je vak.
          </motion.p>

          <motion.div
            initial={reduced ? false : hidden}
            animate={visible(0.3)}
            className="flex flex-wrap gap-3"
          >
            <Button href="/contact" variant="primary" size="lg">
              Gratis gesprek plannen
            </Button>
            <Button href="/cases" variant="outline" size="lg">
              Bekijk cases
            </Button>
          </motion.div>

          <motion.div
            initial={reduced ? false : hidden}
            animate={visible(0.4)}
          >
            <HeroStats />
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.25 }}
          className="w-full"
        >
          <BrowserMockup />
        </motion.div>
      </div>
    </section>
  );
}
