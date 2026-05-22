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
  testimonialText: string;
  testimonialAuthor: string;
  testimonialRole: string;
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
};

export type FaqItem = { q: string; a: string };

export const cases: SiteCase[] = [
  {
    slug: "dakralux",
    name: "Dakralux",
    url: "dakralux.be",
    href: "https://www.dakralux.be",
    image: images.cases.dakralux,
    tags: ["Website", "CRM", "Lead Management"],
    quote: "Van 0 naar online gevonden in 6 maanden.",
    description: "Dakralux is een dakdekkersbedrijf uit West-Vlaanderen zonder sterke online aanwezigheid. Ze verloren dagelijks leads aan concurrenten.",
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
    testimonialText: "Ik ben enorm tevreden over mijn nieuwe website. Alles werd heel professioneel gemaakt en volledig naar mijn wensen.",
    testimonialAuthor: "Robby Seynaeve",
    testimonialRole: "Dakralux",
    variant: "dark",
  },
  {
    slug: "kh-reflexologie",
    name: "KH-Reflexologie",
    url: "kh-reflexologie.be",
    href: "https://kh-reflexologie.be",
    image: images.cases.khReflexologie,
    tags: ["Website", "Design", "Conversie"],
    quote: "Volledig op maat gebouwd.",
    description: "KH-Reflexologie is een reflexologiepraktijk in de regio Brugge. De verouderde website sloot niet aan bij de warme sfeer van de praktijk.",
    results: [
      "Professionele uitstraling die past bij de praktijk",
      "Nieuwe online boekingsaanvragen via het contactformulier",
      "Mobiel geoptimaliseerde website",
      "Duidelijke diensten-structuur voor bezoekers",
    ],
    whatWeBuilt: [
      "Volledig op maat ontworpen website",
      "Warme, rustgevende huisstijl vertaald naar web",
      "Contactformulier voor afspraken",
      "Mobile-first approach",
    ],
    testimonialText: "Een prachtige website die perfect aansluit bij mijn praktijk. Klanten vinden me nu gemakkelijk online.",
    testimonialAuthor: "Kimberley",
    testimonialRole: "KH-Reflexologie",
    variant: "warm",
  },
];

export const plans: Plan[] = [
  {
    id: "basis",
    name: "Basis",
    price: "€695",
    monthly: "+ €45/m",
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
    price: "€850",
    monthly: "+ €45/m",
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
    price: "€1.850",
    monthly: "+ €95/m",
    sub: "onderhoud",
    features: [
      "Alles van STARTER",
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
    price: "€300+",
    sub: "setup, eenmalig",
    features: ["Geen website nodig", "Missed-call text-back", "WhatsApp automation", "Offerte flows"],
    cta: "Vraag demo",
    ctaHref: "/contact",
  },
];

export const faqGeneral: FaqItem[] = [
  { q: "Hoe lang duurt het om een site te bouwen?", a: "Gemiddeld 1 tot 2 weken. Sneller dan agencies, zonder kwaliteitsverlies." },
  { q: "Zit domein en hosting inbegrepen?", a: "Ja, alles all-in. €45/m dekt domein, hosting, SSL, backups en onderhoud. Geen verborgen kosten, nooit." },
  { q: "Kan ik later upgraden?", a: "Altijd. Begin met BASIS, schaal naar STARTER of GROEI wanneer je klaar bent. Je betaalt enkel het verschil." },
  { q: "Werk je alleen in Brugge?", a: "Nee, heel Vlaanderen. Maar we kennen de lokale markt in Brugge en West-Vlaanderen het beste." },
  { q: "Wat als ik al een website heb?", a: "Dan kijken we eerst wat ontbreekt. Soms is enkel automatisatie genoeg om dezelfde site veel meer te laten opbrengen." },
];

export const faqPricing: FaqItem[] = [
  { q: "Wat zit er in de €45/m?", a: "Hosting, domein, SSL, technische updates en max 1u aanpassingen/maand." },
  { q: "Kan ik stoppen wanneer ik wil?", a: "Na een minimumperiode van 12 maanden kan je maandelijks opzeggen met 1 maand opzegtermijn." },
  { q: "Betaal ik de setup eenmalig?", a: "Ja, de setup betaal je éénmalig. Het maandelijks bedrag is voor hosting, domein en onderhoud." },
  { q: "Is BTW inbegrepen?", a: "Alle prijzen zijn excl. 21% BTW." },
  ...faqGeneral,
];
