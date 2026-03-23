"use client";

export default function AllInOneEngine() {
  const capabilities = [
    {
      title: "Design dat overtuigt.",
      description:
        "Wij bouwen sites die ademen (zoals KH-Reflexologie). Geen templates, maar maatwerk dat jouw merk autoriteit geeft.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "Systemen die ontlasten.",
      description:
        "Van Airtable CRM's (zoals Dakralux) tot slimme boekingsflows. Wij automatiseren de rompslomp zodat jij je handen vrij hebt.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-16 py-6 md:py-8">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* White Glow Background */}
      <div className="absolute inset-0 bg-gradient-radial from-white/16 via-white/8 to-transparent" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[780px] h-[420px] rounded-full bg-white/10 blur-[140px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
            Design dat verkoopt. Systemen die meewerken.
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto tracking-tight">
            Van websites op maat tot slimme koppelingen en workflows – modulair
            opgebouwd, alleen wat jouw business nodig heeft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="glass-card p-5 rounded-xl group hover:border-blue-500/50 transition-all animate-fade-in relative cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
                  {capability.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-500 transition-colors tracking-tight">
                {capability.title}
              </h3>
              <p className="text-white/70 text-xs leading-relaxed group-hover:text-blue-500/80 transition-colors">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
