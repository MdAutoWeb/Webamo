import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Diensten | Webamo – Websites & Automatisatie Brugge",
  description:
    "Webamo bouwt websites die klanten opleveren: duidelijke structuur, focus op afspraken en minder gedoe. Ontdek de diensten en aanpak.",
  alternates: {
    canonical: "/diensten",
  },
  openGraph: {
    title: "Diensten | Webamo – Websites & Automatisatie Brugge",
    description:
      "Webamo helpt zelfstandigen en kleine bedrijven aan meer klanten via een website die werkt. Duidelijke structuur, focus op actie en minder administratie.",
    url: "https://www.webamo.be/diensten",
  },
};

export default function DienstenPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.webamo.be/" },
      { "@type": "ListItem", position: 2, name: "Diensten", item: "https://www.webamo.be/diensten" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Webamo Diensten",
    description: "Overzicht van diensten aangeboden door Webamo voor zelfstandigen en KMO's in Vlaanderen.",
    url: "https://www.webamo.be/diensten",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Website die direct klanten oplevert",
          description: "Voor zelfstandigen die snel online willen staan met een duidelijke en professionele website die mensen naar actie leidt. Vaste prijs op maat.",
          provider: { "@id": "https://www.webamo.be/#organization" },
          areaServed: { "@type": "State", name: "Vlaanderen" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Website op maat voor groei",
          description: "Volledig afgestemd op jouw zaak. Focus op conversie en snelle, duidelijke gebruikerservaring voor meer aanvragen.",
          provider: { "@id": "https://www.webamo.be/#organization" },
          areaServed: { "@type": "State", name: "Vlaanderen" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Automatisatie die werk uit handen neemt",
          description: "Automatische opvolging, minder manueel werk en meer overzicht. CRM integratie en workflow automatisatie via Airtable.",
          provider: { "@id": "https://www.webamo.be/#organization" },
          areaServed: { "@type": "State", name: "Vlaanderen" },
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hoeveel kost een website bij Webamo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dat hangt af van wat je nodig hebt. Een heldere website voor zelfstandigen start vanaf een vaste prijs op maat, afgestemd op jouw situatie en doelen. Automatisatie en CRM-koppelingen worden apart besproken. Vraag een gratis intakegesprek aan — dan geef ik je meteen een eerlijk beeld van de investering.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe lang duurt het bouwen van een website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een standaard website voor zelfstandigen is doorgaans klaar in 2 à 3 weken na de intake. Voor complexere projecten met automatisatie of maatwerk CRM-integratie rekenen we 4 tot 6 weken.",
        },
      },
      {
        "@type": "Question",
        name: "Werk je ook buiten Brugge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, zeker. Webamo werkt voor klanten in heel Vlaanderen — Gent, Antwerpen, Oostkamp en omgeving. Alles verloopt digitaal. Een fysieke afspraak in Brugge is altijd mogelijk maar nooit verplicht.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is bedrijfsautomatisatie en heb ik dat nodig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bedrijfsautomatisatie betekent dat terugkerende taken automatisch verlopen: leads worden automatisch opgevolgd, formulieren komen direct in je CRM terecht en je hoeft niet meer manueel te kopiëren of mailen. Als je veel tijd verliest aan administratie of opvolging, is automatisatie waarschijnlijk de slimste investering.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is het verschil tussen een gewone website en een conversiegerichte website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een gewone website staat online en toont informatie. Een conversiegerichte website is gebouwd rond één doel: bezoekers omzetten naar klanten. Duidelijke structuur, één centrale actie per pagina, en een opbouw die vertrouwen wekt. Webamo bouwt altijd conversiegerichte websites.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe vraag ik een offerte of samenwerking aan bij Webamo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ga naar de contactpagina en vul het formulier in. Je hoort binnen 24 uur van me. We plannen een gratis intakegesprek van 30 minuten zonder verplichtingen.",
        },
      },
    ],
  };

  return (
    <main className="relative z-10 bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* 1. Hero */}
      <section className="relative px-6 md:px-12 lg:px-16 pt-16 md:pt-18 pb-8 md:pb-10 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid opacity-5" />
        {/* Ambient radial glow */}
        <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-blue-500/20 blur-[150px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight mb-4 gradient-text-hero">
            Meer klanten via een website die werkt.
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto tracking-tight mb-2">
            Geen website om gewoon online te staan, maar een duidelijke structuur die mensen naar actie leidt:
            contact opnemen, een afspraak maken of een offerte aanvragen.
          </p>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto tracking-tight mb-2">
            Zonder dat je het merkt, verlies je nu klanten via je website.
          </p>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto tracking-tight">
            Minder gedoe, meer resultaat.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold text-sm tracking-tight button-glow hover:scale-105 transition-transform"
            >
              Vraag een gratis audit – ik toon waar je klanten verliest
            </a>
          </div>
        </div>
      </section>

      {/* 2. Oplossingen */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-8 md:pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Welke webdesign diensten biedt Webamo aan?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Oplossing 1 */}
            <div className="w-full glass-card rounded-2xl p-6 md:p-7 border border-white/10 flex flex-col">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2">
                Oplossing 01
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-2">
                Website die direct klanten oplevert.
              </h3>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-4">
                Voor zelfstandigen die snel online willen staan met een duidelijke en professionele website die
                mensen naar actie leidt.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-white/80 mb-4">
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>Duidelijke structuur.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>Focus op actie (contact / afspraak).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>Eenvoudig te beheren.</span>
                </li>
              </ul>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-4">
                Geen overbodige functies, gewoon iets dat werkt.
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-xs md:text-sm text-white/60">Vaste prijs op maat.</p>
              </div>
            </div>

            {/* Oplossing 2 */}
            <div className="w-full glass-card rounded-2xl p-6 md:p-7 border border-white/10 flex flex-col">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2">
                Oplossing 02
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-2">
                Website op maat voor groei.
              </h3>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-4">
                Voor wie meer uit zijn website wil halen en een sterkere online aanwezigheid wil opbouwen.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-white/80 mb-4">
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>Volledig afgestemd op jouw zaak.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>Focus op conversie.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>Snelle en duidelijke ervaring.</span>
                </li>
              </ul>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-4">
                Meer aanvragen, minder afhakers — zonder extra marketing.
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-xs md:text-sm text-white/60">Op aanvraag.</p>
              </div>
            </div>

            {/* Oplossing 3 */}
            <div className="w-full glass-card rounded-2xl p-6 md:p-7 border border-white/10 flex flex-col">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2">
                Oplossing 03
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-2">
                Automatisatie die werk uit handen neemt.
              </h3>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-4">
                Voor wie minder tijd wil verliezen aan administratie en opvolging.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-white/80 mb-4">
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>Automatische opvolging.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>Minder manueel werk.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>Meer overzicht.</span>
                </li>
              </ul>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-4">
                Meer tijd voor je echte werk.
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-xs md:text-sm text-white/60">Op aanvraag.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Proces */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-8 md:pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-2">
              Hoe werkt het traject bij Webamo?
            </h2>
            <p className="text-xs md:text-sm text-white/60 tracking-tight">
              Geen ingewikkeld traject, maar een duidelijke aanpak richting resultaat.
            </p>
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
                Ik bekijk waar je klanten of tijd verliest.
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
                Ik werk een duidelijke flow uit die mensen rustig naar de volgende stap leidt.
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
                Je krijgt een website die effectief werkt: meer klanten, meer afspraken en minder gedoe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-8 md:pb-10">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Veelgestelde vragen
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Hoeveel kost een website bij Webamo?",
                a: "Dat hangt af van wat je nodig hebt. Een heldere website voor zelfstandigen start vanaf een vaste prijs op maat, afgestemd op jouw situatie en doelen. Automatisatie en CRM-koppelingen worden apart besproken. Vraag een gratis intakegesprek aan — dan geef ik je meteen een eerlijk beeld van de investering.",
              },
              {
                q: "Hoe lang duurt het bouwen van een website?",
                a: "Een standaard website voor zelfstandigen is doorgaans klaar in 2 à 3 weken na de intake. Voor complexere projecten met automatisatie of maatwerk CRM-integratie rekenen we 4 tot 6 weken. De doorlooptijd hangt ook af van hoe snel je feedback geeft en je content aanlevert.",
              },
              {
                q: "Werk je ook buiten Brugge?",
                a: "Ja, zeker. Webamo werkt voor klanten in heel Vlaanderen — Gent, Antwerpen, Oostkamp en omgeving. Alles verloopt digitaal: intake, ontwerp, oplevering en opvolging. Een fysieke afspraak in Brugge is altijd mogelijk maar nooit verplicht.",
              },
              {
                q: "Wat is bedrijfsautomatisatie en heb ik dat nodig?",
                a: "Bedrijfsautomatisatie betekent dat terugkerende taken automatisch verlopen: leads worden automatisch opgevolgd, formulieren komen direct in je CRM terecht en je hoeft niet meer manueel te kopiëren of mailen. Als je merk dat je veel tijd verliest aan administratie of opvolging, dan is automatisatie waarschijnlijk de slimste investering die je kan doen.",
              },
              {
                q: "Wat is het verschil tussen een gewone website en een conversiegerichte website?",
                a: "Een gewone website staat online en toont informatie. Een conversiegerichte website is gebouwd rond één doel: bezoekers omzetten naar klanten. Dat betekent: duidelijke structuur, één centrale actie per pagina (contact, offerte, afspraak), en een opbouw die vertrouwen wekt voor iemand die je nog niet kent. Webamo bouwt altijd conversiegerichte websites.",
              },
              {
                q: "Hoe vraag ik een offerte of samenwerking aan?",
                a: "Ga naar de contactpagina en vul het formulier in. Je hoort binnen 24 uur van me. We plannen een gratis intakegesprek van 30 minuten waarin ik je situatie bekijk en zeg wat ik voor je kan doen — zonder verplichtingen.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="glass-card rounded-xl border border-white/10 p-5 md:p-6">
                <h3 className="text-sm md:text-base font-semibold text-white tracking-tight mb-2">{q}</h3>
                <p className="text-xs md:text-sm text-white/65 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Sectie */}
      <section className="relative px-6 md:px-12 lg:px-16 pb-12 md:pb-14">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center glass-card rounded-2xl px-6 py-8 md:px-10 md:py-10 border border-white/10">
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
            Niet zeker wat voor jou werkt?
          </h2>
          <p className="text-xs md:text-sm text-white/60 max-w-2xl mx-auto mb-6 tracking-tight">
            Ik kijk kort naar je huidige website en toon waar je klanten verliest en wat beter kan.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold text-sm tracking-tight button-glow hover:scale-105 transition-transform"
          >
            Vraag je gratis audit aan
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
