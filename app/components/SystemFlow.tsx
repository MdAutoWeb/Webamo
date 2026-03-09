"use client";

import { useEffect, useState } from "react";

export default function SystemFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "Bezoeker", x: 0 },
    { label: "Slimme Interactie", x: 25 },
    { label: "Conversie", x: 50 },
    { label: "Centraal Beheer", x: 75 },
    { label: "Opvolging", x: 100 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-16 py-5 md:py-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 animate-fade-in">
          <h2 className="text-lg md:text-xl font-bold text-white mb-1 tracking-tight">
            System Flow
          </h2>
          <p className="text-white/60 text-xs md:text-sm mb-1 tracking-tight">
            Zo werkt je geautomatiseerde business
          </p>
          <p className="text-white/40 text-xs tracking-tight">
            Wij bouwen de flow die bij jouw proces past – met of zonder AI.
          </p>
        </div>

        {/* Flow Visualization */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 transform -translate-y-1/2" />
          
          {/* Animated Blue Line */}
          <div 
            className="absolute top-1/2 left-0 h-[2px] bg-blue-500 transform -translate-y-1/2 transition-all ease-linear"
            style={{ 
              width: `${(activeStep / (steps.length - 1)) * 100}%`,
              transitionDuration: '2s',
            }}
          />

          {/* Steps */}
          <div className="relative flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.label} className="flex flex-col items-center relative z-10">
                {/* Node */}
                <div 
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2 transition-all duration-500 ${
                    index <= activeStep
                      ? "bg-blue-500/20 border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                      : "bg-black/50 border-white/20"
                  }`}
                >
                  <div 
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                      index === activeStep
                        ? "bg-blue-500 scale-150 shadow-[0_0_15px_rgba(37,99,235,0.8)]"
                        : index < activeStep
                        ? "bg-blue-500/60"
                        : "bg-white/20"
                    }`}
                  />
                </div>
                
                {/* Label */}
                <div className="text-center">
                  <p 
                    className={`text-xs font-medium transition-colors tracking-tight ${
                      index <= activeStep ? "text-blue-500" : "text-white/40"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
