"use client";

export default function Pillars() {
  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-16 py-10 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Pillar 1 */}
          <div className="glass-card p-5 md:p-6 rounded-xl animate-fade-in">
            <div className="mb-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                Design dat verkoopt.
              </h2>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Geen dertien-in-een-dojn sites. Wij bouwen digitale ervaringen die klanten overtuigen vanaf de eerste klik.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="glass-card p-5 md:p-6 rounded-xl animate-fade-in-delay">
            <div className="mb-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                Je business op automatische piloot.
              </h2>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Stop met manueel prutswerk. Wij koppelen je website aan je CRM, agenda en mailbox zodat jij kunt focussen op je werk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
