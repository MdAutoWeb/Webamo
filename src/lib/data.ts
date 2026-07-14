export type CaseVariant = "dark" | "warm";

import { images } from "@/lib/images";

export type SiteCase = {
  slug: string;
  name: string;
  url: string;
  href: string;
  image: string;
  tags: string[];
  quote: string;
  description: string;
  results: string[];
  whatWeBuilt: string[];
  testimonialText?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
  variant: CaseVariant;
};

export type Plan = {
  id: string;
  name: string;
  price: string;
  monthly?: string;
  sub: string;
  badge?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  /** Tekst naast maandprijs (bv. optioneel onderhoud bij Automation) */
  monthlySub?: string;
  footnote?: string;
  /** Maandbedrag (€) voor terugkerend onderhoud. Jaarlijks = 11x (1 maand gratis). */
  monthlyAmount?: number;
  /** Maandbedrag is optioneel (bv. Automation) i.p.v. verplicht onderdeel van het pakket. */
  monthlyOptional?: boolean;
};

export type FaqItem = { q: string; a: string };

/** Gedeeld op stadspagina's en webdesign-brugge */
export const faqMoetIkTekstenSchrijven: FaqItem = {
  q: "Moet ik zelf teksten schrijven?",
  a: "Nee, dat hoeft niet. In een kort gesprek vertel je wat je doet, voor wie je werkt en waar je actief bent. Wij schrijven de teksten en zetten ze helder op je site. Jij levert vooral foto's van realisaties. Wij zorgen dat alles overtuigend en makkelijk leesbaar is.",
};

export function faqWatKostWebsiteInCity(city: string): FaqItem {
  return {
    q: `Wat kost website laten maken in ${city}?`,
    a: `Een website start vanaf €695 eenmalig (setup) plus een vast maandelijks bedrag voor hosting, domein en onderhoud, bij BASIS is dat €45/m. Dat maandbedrag hoort bij het pakket; het is geen extra optie. Automatisatie los van een nieuwe site start vanaf €495+ setup. De exacte prijs hangt af van je wensen. Zie onze tarievenpagina of plan een gratis gesprek voor een voorstel op maat.`,
  };
}

/** Automatisatie-pagina's (footer Automatisatie), geen nieuwe site verplicht */
export const faqWatKostAutomatisatie: FaqItem = {
  q: "Wat kost het?",
  a: "Automatisatie start vanaf €495+ eenmalig (setup op maat). Je hebt geen nieuwe website nodig: we koppelen aan je bestaande site, formulier, mailbox of telefoon. Optioneel onderhoud en monitoring: + €45/m. De prijs hangt af van je flows, zie het Automation-pakket op onze tarievenpagina of plan een gratis gesprek.",
};

/** Website-pagina's waar een nieuwe site het hoofdproduct is */
export const faqWatKostWebsite: FaqItem = {
  q: "Wat kost het?",
  a: "Een website start vanaf €695 setup plus een vast maandbedrag voor hosting en onderhoud (vanaf €45/m bij BASIS). Op de tarievenpagina zie je BASIS, STARTER en GROEI; in een gratis gesprek krijg je een voorstel op maat.",
};

export const cases: SiteCase[] = [
  {
    slug: "van-waes-schilderwerken",
    name: "Van Waes Schilderwerken",
    url: "swvanwaes.be",
    href: "https://www.swvanwaes.be",
    image: images.cases.vanWaesSchilderwerken,
    tags: ["Website", "CRM", "Lead Management"],
    quote: "Vakmanschap dat blijft.",
    description:
      "Van Waes Schilderwerken is een schildersbedrijf uit Oostende, actief aan de kust en in het binnenland. Elke offerteaanvraag moest automatisch worden opgevolgd, zodat er meer tijd is voor het vakwerk en minder voor administratie.",
    results: [
      "Professionele uitstraling voor binnen- en buitenschilderwerk",
      "Automatische opvolging van elke lead via Airtable",
      "Automatische bevestigingsmail naar elke aanvrager",
      "Vindbaar in Oostende, Bredene, Middelkerke en De Haan",
    ],
    whatWeBuilt: [
      "Conversiegerichte website op maat",
      "Airtable CRM voor leadopvolging",
      "Automatische bevestigingsmail naar klant",
      "Realisatiesgalerij met totaal- en detailbeelden",
      "Lokale SEO voor de kustregio",
    ],
    variant: "warm",
  },
  {
    slug: "rb-schilderwerken",
    name: "RB Schilderwerken",
    url: "rbschilderwerken.be",
    href: "https://www.rbschilderwerken.be",
    image: images.cases.rbSchilderwerken,
    tags: ["Website", "Design", "Lokale SEO"],
    quote: "Een frisse start, meteen professioneel online.",
    description:
      "RB Schilderwerken is een schildersbedrijf uit Torhout dat in 2025 startte. Zonder online aanwezigheid moest de zaak meteen vertrouwen wekken en vindbaar zijn bij particulieren en aannemers in West-Vlaanderen.",
    results: [
      "Professionele uitstraling vanaf de eerste dag",
      "Vindbaar op 'schilder Torhout' en omstreken",
      "Offerteaanvragen via WhatsApp en e-mail",
      "Realisaties met voor- en na-beelden in de kijker",
    ],
    whatWeBuilt: [
      "Conversiegerichte website op maat",
      "Realisaties met voor-na beelden",
      "Lokale SEO voor Torhout en West-Vlaanderen",
      "Offerteflow via formulier en WhatsApp",
      "Mobiel-first design met snelle laadtijden",
    ],
    testimonialText:
      "Webamo zette mijn vakmanschap meteen professioneel online. De site oogt strak en klanten vinden me nu makkelijk terug.",
    testimonialAuthor: "Rufino",
    testimonialRole: "RB Schilderwerken",
    variant: "dark",
  },
  {
    slug: "dakralux",
    name: "Dakralux",
    url: "dakralux.be",
    href: "https://www.dakralux.be",
    image: images.cases.dakralux,
    tags: ["Website", "CRM", "Lead Management"],
    quote: "Van 0 naar online gevonden in 6 maanden.",
    description:
      "Dakralux is een dakdekkersbedrijf uit West-Vlaanderen zonder sterke online aanwezigheid. Ze verloren dagelijks leads aan concurrenten.",
    results: [
      "Van 0 naar online gevonden in 6 maanden",
      "Automatische opvolging van elke lead via Airtable",
    ],
    whatWeBuilt: [
      "Conversiegerichte website op maat",
      "Google Business Profile optimalisatie",
      "Airtable CRM voor leadopvolging",
      "Automatische bevestigingsmail naar klant",
      "Mobiel-first design met snelle laadtijden",
    ],
    testimonialText:
      "Ik ben enorm tevreden over mijn nieuwe website. Alles werd heel professioneel gemaakt en volledig naar mijn wensen.",
    testimonialAuthor: "Robby Seynaeve",
    testimonialRole: "Dakralux",
    variant: "dark",
  },
  {
    slug: "kh-reflexologie",
    name: "KH Reflexologie",
    url: "kimberleyhwong.com",
    href: "https://www.kimberleyhwong.com",
    image: images.cases.khReflexologie,
    tags: ["Website", "Design", "Conversie"],
    quote: "Even ontsnappen aan het 'moeten'.",
    description:
      "KH Reflexologie is een reflexologiepraktijk in Sint-Andries, bij Brugge. De nieuwe site moest de warme, rustgevende sfeer van de praktijk uitstralen en bezoekers uitnodigen om een afspraak te boeken.",
    results: [
      "Warme uitstraling die past bij de praktijk",
      "Nieuwe afspraakaanvragen via het contactformulier",
      "Vindbaar op voetreflexologie in en rond Brugge",
      "Mobiel geoptimaliseerde website",
    ],
    whatWeBuilt: [
      "Volledig op maat ontworpen website",
      "Rustgevende huisstijl vertaald naar web",
      "Contactformulier voor afspraken",
      "Lokale SEO voor Brugge en omgeving",
      "Mobiel-first design met snelle laadtijden",
    ],
    variant: "warm",
  },
];

export const plans: Plan[] = [
  {
    id: "basis",
    name: "Basis",
    price: "€695",
    monthly: "+ €45/m",
    monthlyAmount: 45,
    sub: "onderhoud",
    features: [
      "Professionele website",
      "Mobiel-first design",
      "Contactformulier",
      "Domein + hosting inbegrepen",
      "Onderhoud inbegrepen",
      "Basis SEO (meta, schema, sitemap)",
    ],
    cta: "Start met BASIS",
    ctaHref: "/contact",
  },
  {
    id: "starter",
    name: "Starter",
    price: "€895",
    monthly: "+ €67/m",
    monthlyAmount: 67,
    sub: "onderhoud",
    badge: "Populair",
    features: [
      "Alles van BASIS",
      "Airtable lead capture",
      "Auto-bevestiging klant",
      "1 extra landingspagina",
      "Google Business Profile setup",
    ],
    cta: "Meest gekozen",
    ctaHref: "/contact",
    featured: true,
  },
  {
    id: "groei",
    name: "Groei",
    price: "€1.295",
    monthly: "+ €95/m",
    monthlyAmount: 95,
    sub: "onderhoud",
    features: [
      "Alles van STARTER",
      "Automatische opvolging",
      "Review automation",
      "5 lokale landingspagina's + maandelijkse rapportage",
    ],
    cta: "Wil ik groeien",
    ctaHref: "/contact",
  },
  {
    id: "webshop",
    name: "Webshop",
    price: "€1.500",
    monthly: "+ €65/m",
    monthlyAmount: 65,
    sub: "onderhoud",
    features: [
      "Tot 50 producten",
      "Mollie of Stripe betaling",
      "Admin panel",
      "Domein + hosting inbegrepen",
      "Onderhoud inbegrepen",
    ],
    cta: "Vraag offerte aan",
    ctaHref: "/contact",
  },
  {
    id: "automation",
    name: "Automation",
    price: "€495+",
    sub: "setup op maat, eenmalig",
    monthly: "Optioneel: + €45/m",
    monthlyAmount: 45,
    monthlyOptional: true,
    monthlySub: "Onderhoud & monitoring van je automations",
    features: [
      "Werkt met je bestaande website, geen nieuwe site nodig",
      "Leadmachine: scoring, prioriteit & Airtable CRM",
      "Automatische bevestiging & opvolging van leads",
      "WhatsApp-automatisatie en chatflows op maat",
      "Review automation (meer Google-reviews, automatisch)",
      "Offerte-, intake- en afspraakflows",
      "E-mailflows & herinneringen (Resend / Make / Zapier)",
      "Koppelingen met tools die jij al gebruikt",
    ],
    cta: "Bespreek je flow",
    ctaHref: "/contact",
    footnote: "Zonder onderhoudscontract: fixes op regie aan €75/u",
  },
];

/** Uitgebreide automatisatie-diensten (dienstenpagina, SEO) */
export const automationServices = {
  title: "Automatisatie voor je bedrijf",
  body: "Je hoeft geen nieuwe website te laten maken om te profiteren van automatisatie. We koppelen slimme flows aan je bestaande site, telefoon en mailbox, zodat leads niet verloren gaan, klanten sneller antwoord krijgen en jij minder administratie doet.",
  bullets: [
    "Leadmachine: elk formulier → Airtable, met score, prioriteit en korte samenvatting",
    "Automatische bevestigingsmail en opvolg-reminders",
    "WhatsApp automatisatie: intake, FAQ en doorverwijzing zonder handmatig getik",
    "Chatflows op je website (lead kwalificeren, afspraak voorstellen)",
    "Review automation: tevreden klanten automatisch vragen om een Google-review",
    "Offerte- en intakeflows (formulier → PDF/offerte → opvolging)",
    "E-mailsequences: nurture, herinneringen, na-offerte opvolging",
    "Koppelingen: Airtable, Make, Zapier, Google Calendar, Mollie, …",
    "Maatwerk: we bouwen wat jouw proces nodig heeft, geen standaardpakket",
  ],
};

export const faqGeneral: FaqItem[] = [
  {
    q: "Hoe lang duurt het om een site te bouwen?",
    a: "Gemiddeld 1 week. Sneller dan agencies, zonder kwaliteitsverlies.",
  },
  {
    q: "Zit domein en hosting inbegrepen?",
    a: "Ja, alles all-in. €45/m dekt domein, hosting, SSL, backups en onderhoud. Geen verborgen kosten, nooit.",
  },
  {
    q: "Kan ik later upgraden?",
    a: "Altijd. Begin met BASIS, schaal naar STARTER of GROEI wanneer je klaar bent. Je betaalt enkel het verschil.",
  },
  {
    q: "Werk je alleen in Brugge?",
    a: "Nee, heel Vlaanderen. We werken het meest in Brugge, Oostkamp en West-Vlaanderen, maar ook daarbuiten.",
  },
  {
    q: "Wat als ik al een website heb?",
    a: "Dan kijken we eerst wat ontbreekt. Soms is enkel automatisatie genoeg om dezelfde site veel meer te laten opbrengen.",
  },
];

export const faqPricing: FaqItem[] = [
  {
    q: "Wat kan ik laten automatiseren?",
    a: "O.a. leadmachine met Airtable, bevestigingsmails, WhatsApp-automatisatie, review automation, offerteflows en e-mailopvolging. Prijs hangt af van complexiteit, setup vanaf €495+.",
  },
  {
    q: "Wat zit er in de €45/m?",
    a: "Hosting, domein, SSL, technische updates en max 1u aanpassingen/maand.",
  },
  {
    q: "Kan ik stoppen wanneer ik wil?",
    a: "Na een minimumperiode van 12 maanden kan je maandelijks opzeggen met 1 maand opzegtermijn.",
  },
  {
    q: "Betaal ik de setup eenmalig?",
    a: "Ja, de setup (€695 voor BASIS, €895 voor STARTER, enz.) betaal je éénmalig. Daarnaast betaal je een vast maandbedrag voor hosting, domein en onderhoud, dat hoort bij elk websitepakket. Automatisatie los van een nieuwe site start vanaf €495+ setup.",
  },
  { q: "Is BTW inbegrepen?", a: "Alle prijzen zijn excl. 21% BTW." },
  ...faqGeneral,
];
