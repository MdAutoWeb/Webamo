"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number;
            const animate = (currentTime: number) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

              setCount(Math.floor(progress * end));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(end);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, end, duration]);

  return (
    <div ref={ref} className="inline-block">
      {count}{suffix}
    </div>
  );
}

export default function PortfolioShowcase() {
  const projects = [
    {
      name: "KH-Reflexologie",
      url: "https://kh-reflexologie.vercel.app/",
      image: "/images/KH Reflexologie.png",
      alt: "High-end webdesign KH-Reflexologie door Webamo Brugge",
      tags: ["Design Focus", "Framer Motion", "High-Conversion"],
    },
    {
      name: "Dakralux",
      url: "https://www.dakralux.be",
      image: "/images/Dakralux.png",
      alt: "Airtable CRM integratie Dakralux - Webamo Automatisatie België",
      tags: ["Business Engine", "Airtable CRM Integration", "Lead Management"],
    },
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-16 py-6 md:py-8 section-glow">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* White Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-white/14 via-white/7 to-transparent" />
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[820px] h-[420px] rounded-full bg-white/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">
            Onze Cases: Design &amp; Automatisatie in de Praktijk
          </h2>
        </div>

        {/* Split-screen Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group animate-fade-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Container with Hover Scale */}
              <div className="glass-card p-4 rounded-xl group-hover:scale-105 group-hover:border-blue-500/50 transition-all duration-300 relative z-10">
                {/* Image Container - Grows on Hover */}
                <div className="mb-3 overflow-hidden rounded-lg border border-white/20 group-hover:border-blue-500/50 transition-all">
                  <div className="relative bg-black/50 h-[200px] group-hover:h-[350px] transition-all duration-300">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover object-top group-hover:object-top transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Text & Tags */}
                <div className="text-center">
                  <h3 className="text-white/80 text-sm md:text-base font-medium mb-2 group-hover:text-blue-500 transition-colors tracking-tight">
                    {project.name}
                  </h3>
                  {/* Technical Tags */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/30 text-blue-500/90 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 group-hover:text-blue-500 group-hover:shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* 3x */}
          <div className="text-center animate-fade-in">
            <div className="text-3xl md:text-4xl font-black text-white mb-1 leading-none tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.28)]">
              <CountUp end={3} />x
            </div>
            <p className="text-white/70 text-xs mt-1">Meer Leads</p>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/10" />

          {/* 80% */}
          <div className="text-center animate-fade-in-delay">
            <div className="text-3xl md:text-4xl font-black text-white mb-1 leading-none tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.28)]">
              <CountUp end={80} duration={2.5} />%
            </div>
            <p className="text-white/70 text-xs mt-1">Tijdsbesparing</p>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/10" />

          {/* 24/7 */}
          <div className="text-center animate-fade-in-delay-2">
            <div className="text-3xl md:text-4xl font-black text-white mb-1 leading-none tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.28)]">
              24/7
            </div>
            <p className="text-white/70 text-xs mt-1">Bereikbaar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
