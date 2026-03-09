"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-16 pt-20 md:pt-24 pb-8 md:pb-10 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-5" />

      {/* Large soft blue radial glow from below the text */}
      <div className="pointer-events-none absolute -bottom-64 left-1/2 -translate-x-1/2 w-[820px] h-[820px] rounded-full bg-blue-500/15 blur-[180px]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtle SEO Tags in pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm mb-5"
          >
            <span className="text-[11px] text-white/60 tracking-tight uppercase">
              Websites op maat
            </span>
            <span className="text-[11px] text-white/30">•</span>
            <span className="text-[11px] text-white/60 tracking-tight uppercase">
              Slimme koppelingen
            </span>
            <span className="text-[11px] text-white/30">•</span>
            <span className="text-[11px] text-white/60 tracking-tight uppercase">
              Business workflows
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight mb-4 gradient-text-hero"
          >
            High-end webdesign & business automatisatie in Vlaanderen.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto mb-6 tracking-tight"
          >
            Webamo bouwt digitale ervaringen die verkopen én systemen die je
            administratie op automatische piloot zetten. Geen manueel gepruts
            meer, maar een motor die voor jou draait.
          </motion.p>

          {/* Buttons with ambient glow behind */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col sm:flex-row gap-2 justify-center"
          >
            {/* Soft oval glow behind buttons (no harde balk) */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="w-56 md:w-72 h-16 rounded-full bg-blue-500/20 blur-[60px] opacity-70" />
            </div>

            <a
              href="/contact"
              className="relative button-glow px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold text-xs transition-all hover:scale-105 tracking-tight"
            >
              Start je project
            </a>
            <a
              href="/diensten"
              className="relative px-5 py-2.5 rounded-lg border border-white/20 text-white font-semibold text-xs hover:bg-white/5 transition-all tracking-tight"
            >
              Bekijk de cases
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
