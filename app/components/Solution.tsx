import Starfield from "./Starfield";

import Portfolio from "./Portfolio";

export default function Solution({
  showPortfolio = false,
}: {
  showPortfolio?: boolean;
}) {
  const features = [
    "Moderne, snelle website",
    "Conversiegericht design",
    "Automatische lead-opvolging",
    "Formulieren, chatbots & CRM",
    "Afspraken & herinneringen",
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-16 pt-6 md:pt-8 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Divider line with star and glow */}
        <div className="relative my-6 md:my-8">
          <div className="flex items-center justify-center">
            {/* Left line - fade in */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-white/70 flex-1 max-w-[300px]" />

            {/* Star in the middle with glow */}
            <div className="mx-8 flex-shrink-0 relative">
              {/* Glow effect behind star */}
              <div className="absolute inset-0 -m-2 bg-white/20 rounded-full blur-md" />
              <div className="absolute inset-0 -m-1 bg-white/10 rounded-full blur-sm" />

              {/* Star */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
              >
                <path
                  d="M7 0L8.57322 4.83684L13.8768 4.83684L9.65178 7.82632L11.225 12.6632L7 9.67368L2.775 12.6632L4.34822 7.82632L0.123223 4.83684L5.42678 4.83684L7 0Z"
                  fill="white"
                  className="drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]"
                />
              </svg>
            </div>

            {/* Right line - fade out */}
            <div className="h-[1px] bg-gradient-to-l from-transparent via-white/30 to-white/70 flex-1 max-w-[300px]" />
          </div>

          {/* Extended glow line in the middle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm" />
        </div>

        {/* Title and description centered */}
        <div className="text-center">
          <h2 className="text-[30px] md:text-[40px] font-extrabold text-white leading-tight">
            Slimme websites met ingebouwde automatisatie
          </h2>

          <p className="mt-4 text-white/75 text-[15px] md:text-[16px] leading-relaxed max-w-4xl mx-auto">
            Geen gewone website, maar een systeem dat klanten aantrekt, opvolgt
            en omzet in afspraken— volledig aangepast aan jouw manier van
            werken.
          </p>
        </div>

        {/* Features and network - no box */}
        <div className="mt-10 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center lg:max-w-6xl lg:ml-auto lg:mr-0">
            {/* left features - no box */}
            <div className="space-y-4 lg:ml-12">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-emerald-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.6}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white/90 text-[15px]">{f}</span>
                </div>
              ))}
            </div>

            {/* right starfield - no box */}
            <div className="relative hidden lg:block h-[260px]">
              <Starfield
                width={420}
                height={260}
                starCount={60}
                opacity={0.6}
                largerStars={false}
              />
            </div>
          </div>
        </div>

        {/* Button + small text */}
        <div className="mt-8 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg
                       bg-gradient-to-r from-blue-500 to-violet-500
                       hover:from-blue-600 hover:to-violet-600
                       text-white font-semibold text-[14px]
                       shadow-[0_18px_40px_rgba(37,99,235,0.28)]
                       transition-all"
          >
            Gratis intakegesprek
          </a>
          <p className="mt-3 text-white/60 text-[13px]">
            Binnen 15 minuten weet je wat mogelijk is.
          </p>
        </div>

        {/* Portfolio case */}
        {showPortfolio && (
          <div className="mt-8">
            <Portfolio />
          </div>
        )}

        {/* keywords */}
        <div className="mt-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/55 text-[13px] md:text-[14px]">
            <span>Chatbots</span>
            <span className="text-white/20">•</span>
            <span>CRM</span>
            <span className="text-white/20">•</span>
            <span>Automatische e-mails</span>
            <span className="text-white/20">•</span>
            <span>E-mails</span>
            <span className="text-white/20">•</span>
            <span>Afspraken</span>
            <span className="text-white/20">•</span>
            <span>AI</span>
            <span className="text-white/20">•</span>
            <span>API koppelingen</span>
          </div>
        </div>
      </div>
    </section>
  );
}
