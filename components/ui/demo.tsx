"use client"

import { Card } from "@/components/ui/card"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-auto md:h-[500px] relative overflow-visible md:overflow-hidden border-0 shadow-none rounded-none bg-transparent">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(255,255,255,0.55)" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/58 to-black/70 md:from-black/88 md:via-black/78 md:to-black/88" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(255,255,255,0.015),transparent_62%),radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.015),transparent_58%)]" />

      <div className="flex flex-col-reverse md:flex-row h-full relative z-10">
        <div className="flex-1 p-6 md:p-8 md:pr-2 relative z-10 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-black/45 backdrop-blur-sm mb-5 w-fit">
            <span className="text-[11px] text-white/70 tracking-tight uppercase">
              Websites op maat
            </span>
            <span className="text-[11px] text-white/35">•</span>
            <span className="text-[11px] text-white/70 tracking-tight uppercase">
              Slimme koppelingen
            </span>
            <span className="text-[11px] text-white/35">•</span>
            <span className="text-[11px] text-white/70 tracking-tight uppercase">
              Business workflows
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight mb-4 gradient-text-hero">
            High-end webdesign & business automatisatie in Vlaanderen.
          </h1>

          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mb-6 tracking-tight">
            Webamo bouwt digitale ervaringen die verkopen én systemen die je administratie op
            automatische piloot zetten. Geen manueel gepruts meer, maar een motor die voor jou
            draait.
          </p>

          <div className="relative flex flex-col sm:flex-row gap-2 justify-start md:justify-center">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="w-56 md:w-72 h-16 rounded-full bg-white/20 blur-[60px] opacity-70" />
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
          </div>
        </div>

        <div className="flex-1 relative h-[300px] sm:h-[380px] md:h-auto md:-ml-14">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black/10 via-transparent to-black/10 md:from-black/18 md:to-black/18" />
        <div className="hidden md:block pointer-events-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-20 md:w-28 bg-gradient-to-r from-transparent via-black/70 to-transparent blur-2xl" />
      </div>
    </Card>
  )
}

