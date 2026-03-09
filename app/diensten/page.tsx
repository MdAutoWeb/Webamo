import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Slimme systemen voor groei | Diensten | Webamo",
  description:
    "Slimme systemen voor groei: websites op maat, automatisatie en koppelingen met jouw tools. Kies jouw startpunt met Webamo in Vlaanderen.",
  keywords: [
    "webamo diensten",
    "oplossingen webamo",
    "website op maat",
    "business automatisatie",
    "CRM koppelingen",
    "automatische e-mails",
    "workflow automatisatie",
    "tool integraties",
  ],
  alternates: {
    canonical: "/diensten",
  },
  openGraph: {
    title: "Slimme systemen voor groei | Diensten | Webamo",
    description:
      "Ontdek de oplossingen van Webamo: websites + automatisatie of pure procesautomatisatie. Slimme koppelingen en workflows voor KMO's.",
    url: "https://webamo.be/diensten",
  },
};

const foundationBullets = [
  "Conversiegerichte landingpages",
  "Automatische opvolg-e-mails",
  "CRM-koppelingen & pipelines",
  "Online afspraken & herinneringen",
] as const;

const acceleratorBullets = [
  "Formulieren koppelen aan CRM",
  "Automatische notificaties & reminders",
  "Tool-integraties (Notion, HubSpot, ...)",
  "Custom API-koppelingen",
] as const;

const techStack = ["CRM", "AI", "API", "Chatbots", "Automatische e-mails"] as const;

export default function DienstenPage() {
  return (
    <main className="relative z-10 bg-black">
      <Header />

      {/* Hero - Solutions Hub */}
      <section className="relative px-6 md:px-12 lg:px-16 pt-16 md:pt-18 pb-8 md:pb-10 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid opacity-5" />
        {/* Ambient radial glow */}
        <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-blue-500/20 blur-[150px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight mb-4 gradient-text-hero">
            Minder administratie, meer focus op je vak.
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto tracking-tight">
            Ik bouw geen simpele websites, ik bouw systemen die je werk lichter
            maken. Geen vage uurtarieven, maar een vaste prijs voor resultaat.
          </p>
        </div>
      </section>

      {/* Twee hoofdkeuzes */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-8 md:pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Kaart 1 - Digitale fundering */}
          <div className="w-full glass-card rounded-2xl p-6 md:p-7 border border-white/10 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)] hover:scale-[1.02] transition-transform transition-shadow transition-colors duration-300">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2">
              Oplossing 01
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-2">
              Een nieuwe site die voor je werkt
            </h2>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-4">
              Website + automatisatie. Alles-in-één: van de eerste klik tot de
              getekende offerte.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-white/80">
              {foundationBullets.map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kaart 2 - Proces versneller */}
          <div className="w-full glass-card rounded-2xl p-6 md:p-7 border border-white/10 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)] hover:scale-[1.02] transition-transform transition-shadow transition-colors duration-300">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2">
              Oplossing 02
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-2">
              Je huidige tools koppelen
            </h2>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-4">
              Pure automatisatie. Ik laat je bestaande software (CRM, mail,
              agenda) eindelijk met elkaar praten.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-white/80">
              {acceleratorBullets.map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech-Stack Grid */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-8 md:pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2">
              Waar ik mee bouw
            </p>
            <p className="text-xs md:text-sm text-white/60 tracking-tight">
              Compacte bouwstenen die we modulair inzetten voor jouw systeem.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-3xl mx-auto">
            {techStack.map((item) => (
              <div
                key={item}
                className="border border-white/20 rounded-lg px-3 py-2 text-center text-[11px] md:text-xs text-white/70 font-mono tracking-[0.14em] uppercase bg-black hover:bg-white/5 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* De Webamo Methode */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-8 md:pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-2">
              Van chaos naar systeem.
            </h2>
            <p className="text-xs md:text-sm text-white/60 tracking-tight">
              Geen eindeloze meetings, maar een gericht proces naar resultaat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-left">
            {/* Stap 01 */}
            <div>
              <p className="text-xs md:text-[11px] font-mono tracking-[0.18em] text-blue-400 mb-2">
                01
              </p>
              <h3 className="text-sm md:text-base font-semibold text-white tracking-tight mb-2">
                De blauwdruk
              </h3>
              <p className="text-xs md:text-sm text-white/65 leading-relaxed">
                We brengen je huidige workflow en knelpunten in kaart. Geen
                giswerk, maar een plan voor maximale tijdsbesparing.
              </p>
            </div>

            {/* Stap 02 */}
            <div className="md:border-l md:border-white/10 md:pl-6">
              <p className="text-xs md:text-[11px] font-mono tracking-[0.18em] text-blue-400 mb-2">
                02
              </p>
              <h3 className="text-sm md:text-base font-semibold text-white tracking-tight mb-2">
                De bouw
              </h3>
              <p className="text-xs md:text-sm text-white/65 leading-relaxed">
                We bouwen je high-end website, met of zonder automatisatie. Jij
                kiest wat past. Als het nodig is, koppelen we CRM, mails en
                andere tools netjes achter de schermen.
              </p>
            </div>

            {/* Stap 03 */}
            <div className="md:border-l md:border-white/10 md:pl-6">
              <p className="text-xs md:text-[11px] font-mono tracking-[0.18em] text-blue-400 mb-2">
                03
              </p>
              <h3 className="text-sm md:text-base font-semibold text-white tracking-tight mb-2">
                De versnelling
              </h3>
              <p className="text-xs md:text-sm text-white/65 leading-relaxed">
                We testen de motor, leveren op en vanaf dan draait je business
                meer op automatische piloot.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Sectie */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-12 md:pb-14">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center glass-card rounded-2xl px-6 py-8 md:px-10 md:py-10 border border-white/10">
          <p className="text-xs md:text-sm text-white/60 tracking-tight mb-2">
            Even sparren?
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-4">
            Op 15 minuten weten we of ik je kan helpen.
          </h2>
          <p className="text-xs md:text-sm text-white/60 max-w-2xl mx-auto mb-6 tracking-tight">
            Geen verkooppraat, gewoon kijken waar de knelpunten in je business
            zitten en of een slim systeem je effectief vooruithelpt.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold text-xs md:text-sm tracking-tight button-glow button-pulse hover:scale-105 transition-transform"
          >
            Plan je gratis intake
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
