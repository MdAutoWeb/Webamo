"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTASection() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-[#0A0A0A]">
      <div className="max-w-[720px] mx-auto px-5 py-16 md:py-24 text-center">
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/30 mb-4">Klaar om te starten?</div>
        <h2 className="font-bold text-[32px] md:text-[42px] tracking-[-0.025em] leading-[1.1] text-white mb-5">
          Meer klanten via Google.<br />Minder handmatig werk.
        </h2>
        <p className="text-[15px] text-white/50 leading-[1.65] mb-8 max-w-[460px] mx-auto">
          Plan een gratis gesprek. We bekijken samen wat er ontbreekt en hoe snel we dat kunnen oplossen.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <motion.div
            animate={reduced ? undefined : { scale: [1, 1.025, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Button href="/contact" variant="primary" size="lg">
              Gratis gesprek plannen
            </Button>
          </motion.div>
          <Button href="/contact" variant="outline-dark" size="lg">
            Bekijk tarieven
          </Button>
        </div>
      </div>
    </section>
  );
}
