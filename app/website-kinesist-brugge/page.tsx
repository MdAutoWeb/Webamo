import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Website kinesist Brugge | Meer afspraken via Webamo",
  description:
    "Meer afspraken voor kinesisten in Brugge dankzij een duidelijke website met online booking.",
  keywords: [
    "website kinesist Brugge",
    "webdesign kinesist Brugge",
    "meer afspraken kinesist Brugge",
  ],
  alternates: {
    canonical: "/website-kinesist-brugge",
  },
  openGraph: {
    title: "Website kinesist Brugge | Meer afspraken via Webamo",
    description:
      "Webamo helpt kinesisten in Brugge aan meer afspraken met een rustige, duidelijke website die patiënten direct naar een afspraak leidt.",
    url: "https://webamo.be/website-kinesist-brugge",
  },
};

export default function WebsiteKinesistBruggePage() {
  return (
    <main className="relative z-10 bg-black">
      <Header />

      {/* 1. Hero */}
      <section className="relative px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-blue-500/20 blur-[150px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-3">
            Websites voor kinesisten in Brugge
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight mb-4 gradient-text-hero">
            Meer afspraken voor kinesisten in Brugge zonder extra telefoons.
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto tracking-tight mb-3">
            Je website zou patiënten moeten helpen om meteen te boeken. In de praktijk zorgt ze vaak voor het
            tegenovergestelde.
          </p>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto tracking-tight">
            Zonder dat je het merkt, verlies je patiënten.
          </p>

          <div className="mt-7 flex flex-col items-center gap-2">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold text-xs md:text-sm tracking-tight button-glow hover:scale-105 transition-transform"
            >
              Vraag een gratis audit – ik toon je waar je patiënten verliest
            </a>
            <p className="text-[11px] text-white/55">
              Gericht op kinesisten en lokale praktijken in Vlaanderen.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Probleem */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
              Je website voelt niet aan als een goed onthaal.
            </h2>
            <p className="text-xs md:text-sm text-white/65 leading-relaxed">
              Veel kinesisten in Brugge hebben een website die ooit gebouwd werd en nooit echt is
              geoptimaliseerd. Patiënten moeten bellen of mailen, haken af omdat het onduidelijk is en
              afspraken gaan verloren zonder dat je het merkt.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 text-xs md:text-sm text-white/80">
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Geen online booking: patiënten moeten bellen of mailen om een afspraak vast te leggen.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Verouderde of drukke website die niet meer past bij je praktijk in Brugge.</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Onduidelijk op mobiel: mensen moeten zoeken waar ze kunnen boeken.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>
                  Geen duidelijke knop naar afspraak en minder vertrouwen dan je echte praktijk uitstraalt.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Oplossing */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
              Een website die patiënten uit Brugge direct naar een afspraak leidt.
            </h2>
            <p className="text-xs md:text-sm text-white/65 leading-relaxed mb-4">
              Ik bouw geen website om &quot;mooi&quot; te zijn. De focus ligt op een duidelijke flow:
              eerst vertrouwen, dan korte uitleg en dan de logische actie: een afspraak maken.
            </p>
            <ul className="space-y-3 text-xs md:text-sm text-white/80">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>Heldere structuur waar patiënten stap voor stap doorheen geleid worden.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>Online booking mogelijk, zodat afspraken niet meer volledig via telefoon lopen.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>Mobielvriendelijk ontwerp dat snel laadt en eenvoudig te bedienen is.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>Snelle laadtijd, zodat mensen niet afhaken nog voor de pagina geladen is.</span>
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-5 md:p-6">
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              Het doel is eenvoudig: een website voor jouw kinepraktijk in Brugge die rustig aanvoelt en
              patiënten zonder gedoe naar &quot;afspraak maken&quot; brengt.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Resultaat */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-2">
              Wat dit oplevert.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ul className="space-y-3 text-xs md:text-sm text-white/80">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Meer afspraken in je agenda zonder extra campagnes.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Minder telefoons tussendoor tijdens consultaties.</span>
              </li>
            </ul>
            <ul className="space-y-3 text-xs md:text-sm text-white/80">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Minder administratie rond het vastleggen en verplaatsen van afspraken.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Minder afhakers omdat het traject naar een afspraak duidelijk en rustig is.</span>
              </li>
            </ul>
          </div>

          <p className="mt-5 text-center text-xs md:text-sm text-white/70">
            Je agenda vult zich rustiger en consistenter. Zonder dat je extra marketing moet doen.
          </p>
        </div>
      </section>

      {/* 5. Hoe ik werk */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-2">
              Hoe ik werk.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-left">
            <div>
              <p className="text-xs md:text-[11px] font-mono tracking-[0.18em] text-blue-400 mb-2">
                01
              </p>
              <h3 className="text-sm md:text-base font-semibold text-white tracking-tight mb-2">
                Analyse.
              </h3>
              <p className="text-xs md:text-sm text-white/65 leading-relaxed">
                Ik bekijk je huidige website en zie waar patiënten afhaken of vastlopen.
              </p>
            </div>

            <div className="md:border-l md:border-white/10 md:pl-6">
              <p className="text-xs md:text-[11px] font-mono tracking-[0.18em] text-blue-400 mb-2">
                02
              </p>
              <h3 className="text-sm md:text-base font-semibold text-white tracking-tight mb-2">
                Structuur.
              </h3>
              <p className="text-xs md:text-sm text-white/65 leading-relaxed">
                Ik maak een duidelijke flow richting afspraak: van eerste indruk tot het vastleggen van een moment.
              </p>
            </div>

            <div className="md:border-l md:border-white/10 md:pl-6">
              <p className="text-xs md:text-[11px] font-mono tracking-[0.18em] text-blue-400 mb-2">
                03
              </p>
              <h3 className="text-sm md:text-base font-semibold text-white tracking-tight mb-2">
                Bouw.
              </h3>
              <p className="text-xs md:text-sm text-white/65 leading-relaxed">
                Ik bouw een website die converteert: rustig, duidelijk en gericht op afspraken voor je praktijk in
                Brugge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center glass-card rounded-2xl px-6 py-8 md:px-10 md:py-10 border border-white/10">
          <p className="text-xs md:text-sm text-white/60 tracking-tight mb-2">
            Kijken wat er beter kan?
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
            Vraag een gratis website-audit voor je kinepraktijk in Brugge.
          </h2>
          <p className="text-xs md:text-sm text-white/60 max-w-2xl mx-auto mb-6 tracking-tight">
            Je krijgt een korte analyse met concrete verbeterpunten rond duidelijkheid, mobiel gebruik en afspraken.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold text-xs md:text-sm tracking-tight button-glow hover:scale-105 transition-transform"
          >
            Vraag je gratis audit aan
          </a>
        </div>
      </section>

      {/* 7. Lokale SEO extra */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-14">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <p className="text-[11px] md:text-xs text-white/55 leading-relaxed">
            Werk je als kinesist in Brugge of omgeving (Sint-Andries, Sint-Michiels, Assebroek…)? Dan kan deze aanpak
            ook voor jou werken.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}


