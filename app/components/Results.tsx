"use client";

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

export default function Results() {
  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-16 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* 3x */}
          <div className="text-center animate-fade-in">
            <div className="text-6xl md:text-7xl font-black text-blue-500 mb-1 leading-none">
              <CountUp end={3} />x
            </div>
            <p className="text-white/50 text-sm mt-2">Meer leads</p>
          </div>

          {/* 80% */}
          <div className="text-center animate-fade-in-delay">
            <div className="text-6xl md:text-7xl font-black text-blue-500 mb-1 leading-none">
              <CountUp end={80} duration={2.5} />%
            </div>
            <p className="text-white/50 text-sm mt-2">Tijdsbesparing</p>
          </div>

          {/* 24/7 */}
          <div className="text-center animate-fade-in-delay-2">
            <div className="text-6xl md:text-7xl font-black text-blue-500 mb-1 leading-none">
              24/7
            </div>
            <p className="text-white/50 text-sm mt-2">Automatisch</p>
          </div>
        </div>
      </div>
    </section>
  );
}
