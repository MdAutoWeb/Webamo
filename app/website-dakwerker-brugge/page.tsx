import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Website dakwerker Brugge | Meer offerte-aanvragen via Webamo",
  description:
    "Meer offerte-aanvragen voor dakwerkers in Brugge dankzij een duidelijke website die klanten naar contact leidt.",
  alternates: {
    canonical: "/website-dakwerker-brugge",
  },
  openGraph: {
    title: "Website dakwerker Brugge | Meer offerte-aanvragen via Webamo",
    description:
      "Webamo helpt dakwerkers in Brugge aan meer offerte-aanvragen via een duidelijke website die gericht is op contact en aanvragen.",
    url: "https://www.webamo.be/website-dakwerker-brugge",
  },
};

export default function WebsiteDakwerkerBruggePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.webamo.be/" },
      { "@type": "ListItem", position: 2, name: "Website voor dakwerker Brugge", item: "https://www.webamo.be/website-dakwerker-brugge" },
    ],
  };

  return (
    <main className="relative z-10 bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      {/* 1. Hero */}
      <section className="relative px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-blue-500/20 blur-[150px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-3">
            Websites voor dakwerkers in Brugge
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight mb-4 gradient-text-hero">
            Meer offerte-aanvragen zonder extra gedoe.
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto tracking-tight mb-2">
            Je website zou nieuwe klanten moeten binnenbrengen. In de praktijk zorgt ze vaak voor gemiste aanvragen.
          </p>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto tracking-tight">
            Zonder dat je het merkt, verlies je klanten aan andere dakwerkers in Brugge.
          </p>

          <div className="mt-7 flex flex-col items-center gap-2">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold text-xs md:text-sm tracking-tight button-glow hover:scale-105 transition-transform"
            >
              Vraag een gratis audit – ik toon waar je aanvragen verliest
            </a>
          </div>
        </div>
      </section>

      {/* 2. Probleem */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
              Veel websites leveren geen offertes op.
            </h2>
            <p className="text-xs md:text-sm text-white/65 leading-relaxed">
              Veel dakwerkers in Brugge hebben een website die er wel staat, maar weinig oplevert. De site is ooit
              gebouwd, maar stuurt bezoekers niet duidelijk naar een offerte-aanvraag.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 text-xs md:text-sm text-white/80">
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Geen duidelijke knop naar offerte aanvragen.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Te weinig vertrouwen: geen duidelijke uitleg of recente projecten.</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Onduidelijke structuur: bezoekers weten niet wat de volgende stap is.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Slechte mobiele ervaring, waardoor mensen afhaken.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Geen opvolging van mensen die wel contact opnemen.</span>
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
              Een website die aanvragen binnenbrengt.
            </h2>
            <p className="text-xs md:text-sm text-white/65 leading-relaxed mb-4">
              Ik bouw websites die gericht zijn op één doel: meer offerte-aanvragen voor jouw dakwerkbedrijf in Brugge.
            </p>
            <ul className="space-y-3 text-xs md:text-sm text-white/80">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>Duidelijke call-to-actions richting offerte of contact.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>Structuur die bezoekers rustig naar een aanvraag leidt.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>Mobielvriendelijk en snel, zodat mensen niet afhaken.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>Integratie met formulieren of je huidige opvolgsysteem.</span>
              </li>
            </ul>
            <p className="mt-4 text-xs md:text-sm text-white/70 leading-relaxed">
              Geen overbodige functies, maar een website die effectief werkt.
            </p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-5 md:p-6">
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              Samen zorgen we ervoor dat je website voelt als een duidelijk digitaal onthaal voor klanten in Brugge:
              ze weten wat je doet, zien wat je gemaakt hebt en kunnen eenvoudig een offerte vragen.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Case: Dakralux */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-2">
              Voorbeeld: Dakralux.
            </h2>
            <p className="text-xs md:text-sm text-white/60 tracking-tight">
              Een dakwerker die zijn website inzet als vaste stroom van aanvragen.
            </p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 p-6 md:p-7">
            <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-4">
              Voor Dakralux heb ik een website gebouwd met focus op aanvragen en opvolging. Geen overbodige
              informatie, maar een duidelijke uitleg, voorbeelden van projecten en meerdere ingangen om een offerte
              te vragen.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-white/80 mb-4">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Duidelijke offerte flow, van eerste bezoek tot aanvraag.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Integratie met een eenvoudig systeem om aanvragen op te volgen.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Tekst en opbouw afgestemd op zoekopdrachten rond dakwerken in Brugge.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Meer zichtbaarheid en een professionelere indruk bij nieuwe klanten.</span>
              </li>
            </ul>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              De website helpt actief bij het binnenhalen en opvolgen van leads, in plaats van gewoon online te staan.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Resultaat */}
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
                <span>Meer offerte-aanvragen via je website.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Minder gemiste kansen omdat mensen afhaken.</span>
              </li>
            </ul>
            <ul className="space-y-3 text-xs md:text-sm text-white/80">
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Betere opvolging van leads en aanvragen.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>Professionelere uitstraling en meer vertrouwen bij klanten.</span>
              </li>
            </ul>
          </div>

          <p className="mt-5 text-center text-xs md:text-sm text-white/70">
            Je website wordt een tool die actief nieuwe klanten binnenbrengt.
          </p>
        </div>
      </section>

      {/* 6. Hoe ik werk */}
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
                Ik bekijk waar je nu aanvragen verliest en wat bezoekers tegenhoudt.
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
                Ik maak een duidelijke flow richting offerte: van eerste indruk tot het aanvragen van een prijs.
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
                Ik bouw een website die effectief aanvragen oplevert en past bij jouw dakwerkbedrijf in Brugge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center glass-card rounded-2xl px-6 py-8 md:px-10 md:py-10 border border-white/10">
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
            Wil je meer aanvragen via je website?
          </h2>
          <p className="text-xs md:text-sm text-white/60 max-w-2xl mx-auto mb-6 tracking-tight">
            Vraag een gratis audit. Ik toon je waar je kansen laat liggen en hoe je meer offertes krijgt.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold text-xs md:text-sm tracking-tight button-glow hover:scale-105 transition-transform"
          >
            Vraag je gratis audit aan
          </a>
        </div>
      </section>

      {/* 8. Lokale SEO extra */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-14">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <p className="text-[11px] md:text-xs text-white/55 leading-relaxed">
            Werk je als dakwerker in Brugge of omgeving (Sint-Andries, Assebroek, Sint-Michiels…)? Dan kan deze aanpak
            ook voor jou werken.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

