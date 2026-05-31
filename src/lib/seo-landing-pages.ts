import {
  faqMoetIkTekstenSchrijven,
  faqWatKostAutomatisatie,
  faqWatKostWebsite,
  faqWatKostWebsiteInCity,
  type FaqItem,
} from "@/lib/data";

export type { FaqItem };

export type SeoPageConfig = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  sections: { h2: string; paragraphs: string[] }[];
  benefitsTitle: string;
  benefits: string[];
  faq: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  areaServed?: { "@type": string; name: string } | string;
};

const cityIntro = (city: string, nearby: string): string[] => {
  const keyword = `Website laten maken ${city}`;
  return [
    `Je bent druk met klanten in ${city}, maar online blijf je onzichtbaar. Terwijl mensen in de regio Brugge en West-Vlaanderen eerst Google raadplegen voordat ze een vakman of zaak kiezen. Zonder sterke site verlies je offertes aan concurrenten die wél professioneel online staan. ${keyword} hoeft geen maanden durend project te zijn. Het moet vooral werken: gevonden worden, vertrouwen wekken en aanvragen opleveren.`,
    `Webamo helpt zelfstandigen en KMO's in ${city}, ${nearby} en de hele regio. ${keyword} betekent bij ons een mobiel-first site met lokale SEO, duidelijke diensten en een contactflow die leads niet laat verdwijnen. Geen standaardtemplate die overal hetzelfde oogt. Of je nu schrijnwerker, schilder, dakwerker of andere vakman bent: wij bouwen voor ondernemers die liever op de werf zitten dan achter een scherm.`,
    `Wil je weten wat ${keyword} concreet oplevert? We starten met een kort gesprek, kijken naar je huidige situatie en stappenplan. Meestal staat je site binnen één tot twee weken live, inclusief hosting, beveiliging en de basis voor Google. Bekijk onze tarieven voor transparante pakketten of neem contact op voor een gratis gesprek. We reageren snel en zonder verkooppraat.`,
  ];
};

const citySections = (city: string, regionDetail: string) => [
  {
    h2: `Waarom online zichtbaarheid in ${city} geen luxe meer is`,
    paragraphs: [
      `Klanten in ${city} en ${regionDetail} zoeken lokaal. "Dakwerker Oostkamp", "schilder Torhout" of "schrijnwerker regio Brugge", wie bovenaan staat of een overtuigende site heeft, krijgt de telefoon. Een verouderde site of alleen een Facebookpagina geeft twijfel: is deze zaak nog actief? Werken ze professioneel?`,
      `Een moderne website beantwoordt die vragen in seconden: wat je doet, waar je actief bent, realisaties en een duidelijke manier om contact op te nemen. Daarbovenop zorgen we voor technische snelheid en structuur die Google begrijpt. Zo bouw je aan duurzame zichtbaarheid in plaats van alleen mond-tot-mond.`,
    ],
  },
  {
    h2: "Wat Webamo voor jou bouwt",
    paragraphs: [
      `We leveren een conversiegerichte website op maat: heldere dienstenpagina's, sterke call-to-actions en een mobiel ontwerp dat er op elke telefoon professioneel uitziet. Je krijgt lokale SEO voor jouw gemeente en omstreken, een contactformulier en optioneel automatisatie zodat aanvragen niet in je mailbox blijven liggen.`,
      `Hosting, SSL, updates en onderhoud nemen we mee. Jij hoeft geen technische keuzes te maken. Wil je later landingspagina's, review-automatisatie of koppeling met je planning? Dat kan stap voor stap, zonder opnieuw van nul te beginnen.`,
    ],
  },
  {
    h2: "Van eerste gesprek tot live site",
    paragraphs: [
      `We houden het proces simpel. Eerst een gratis gesprek: wat doe je, wie is je ideale klant, wat mis je nu online? Daarna schrijven wij de teksten en werken we de structuur uit. Jij levert vooral foto's van realisaties. Na goedkeuring bouwen we, testen we op mobiel en zetten we alles live.`,
      `Na oplevering blijven we bereikbaar voor aanpassingen en groei. Veel klanten in West-Vlaanderen starten met een solide basissite en schakelen later automatisatie in voor opvolging en administratie. Transparante tarieven vind je op onze tarievenpagina; vragen? Neem gerust contact op.`,
    ],
  },
];

export const cityFaq = (city: string) => [
  faqWatKostWebsiteInCity(city),
  {
    q: "Hoe snel kan mijn website online staan?",
    a: "Gemiddeld één tot twee weken na het startgesprek, mits we tijdig je teksten en foto's ontvangen. We werken niet met maandenlange trajecten: liever snel live en bijsturen op basis van echte reacties van klanten.",
  },
  {
    q: "Help je ook met Google en lokale vindbaarheid?",
    a: `Ja. Elke site bevat een solide SEO-basis: titels, beschrijvingen, snelheid en lokale structuur voor ${city} en de regio Brugge. Optioneel helpen we met Google Business Profile en extra landingspagina's voor specifieke diensten.`,
  },
  faqMoetIkTekstenSchrijven,
  {
    q: "Kan ik later automatisatie toevoegen?",
    a: "Absoluut. Veel vakmannen starten met een website en schakelen later leadopvolging, review-verzoeken of minder administratie in via onze automatisatiepakketten. Alles bouwen we modulair op.",
  },
];

export const seoPages: Record<string, SeoPageConfig> = {
  "website-laten-maken-oostkamp": {
    path: "/website-laten-maken-oostkamp",
    metaTitle: "Website laten maken Oostkamp | Webamo",
    metaDescription:
      "Website laten maken in Oostkamp? Webamo bouwt snelle, conversiegerichte sites voor vakmannen en KMO's in de regio Brugge. Lokale SEO, live in 1-2 weken. Vanaf €695.",
    eyebrow: "Webdesign · Oostkamp",
    h1: "Website laten maken Oostkamp",
    intro: cityIntro("Oostkamp", "Wingene, Hertsberge en de Brugse regio"),
    sections: citySections("Oostkamp", "Wingene, Ardooie en Torhout"),
    benefitsTitle: "Voordelen van een website met Webamo in Oostkamp",
    benefits: [
      "Lokale SEO gericht op Oostkamp en de regio Brugge",
      "Mobiel-first design. De meeste aanvragen komen vanop de werf",
      "Duidelijke diensten en offerte-aanvragen zonder gedoe",
      "Snelle oplevering, meestal binnen 1 tot 2 weken",
      "Optionele automatisatie voor opvolging en minder administratie",
    ],
    faq: cityFaq("Oostkamp"),
    ctaTitle: "Klaar om zichtbaar te worden in Oostkamp?",
    ctaText:
      "Plan een gratis gesprek. We bekijken samen wat je nodig hebt en hoe snel je online meer aanvragen kunt binnenhalen.",
    areaServed: { "@type": "City", name: "Oostkamp" },
  },

  "website-laten-maken-zedelgem": {
    path: "/website-laten-maken-zedelgem",
    metaTitle: "Website laten maken Zedelgem | Webamo",
    metaDescription:
      "Website laten maken in Zedelgem? Professionele sites voor zelfstandigen en vakmannen in West-Vlaanderen. Lokale SEO, snelle oplevering. Webamo, regio Brugge.",
    eyebrow: "Webdesign · Zedelgem",
    h1: "Website laten maken Zedelgem",
    intro: cityIntro("Zedelgem", "Loppem, Aartrijke en de kuststreek"),
    sections: citySections("Zedelgem", "Oostkamp, Torhout en Brugge"),
    benefitsTitle: "Voordelen van een website met Webamo in Zedelgem",
    benefits: [
      "Gevonden worden op lokale zoekopdrachten in Zedelgem",
      "Professionele uitstraling die vertrouwen wekt bij nieuwe klanten",
      "Contactformulier en opvolging zodat geen lead verloren gaat",
      "Geen technisch gedoe, hosting en onderhoud inbegrepen",
      "Uitbreidbaar met automatisatie voor reviews en administratie",
    ],
    faq: cityFaq("Zedelgem"),
    ctaTitle: "Start in Zedelgem met een website die werkt",
    ctaText:
      "Vertel ons over je zaak. We maken een concreet plan zonder verplichtingen.",
    areaServed: { "@type": "City", name: "Zedelgem" },
  },

  "website-laten-maken-torhout": {
    path: "/website-laten-maken-torhout",
    metaTitle: "Website laten maken Torhout | Webamo",
    metaDescription:
      "Website laten maken in Torhout? Webamo helpt vakmannen en KMO's in West-Vlaanderen met een snelle, leadgerichte website. Regio Brugge. Gratis gesprek.",
    eyebrow: "Webdesign · Torhout",
    h1: "Website laten maken Torhout",
    intro: cityIntro("Torhout", "Ichtegem, Jabbeke en West-Vlaanderen"),
    sections: citySections("Torhout", "Oostkamp, Zedelgem en de Brugse regio"),
    benefitsTitle: "Voordelen van een website met Webamo in Torhout",
    benefits: [
      "Sterke lokale vindbaarheid voor Torhout en omgeving",
      "Duidelijke structuur voor diensten, realisaties en contact",
      "Snel ladend, belangrijk voor Google en voor bezoekers",
      "Persoonlijke opvolging vanuit de regio Brugge",
      "Koppeling mogelijk met automatisatie en CRM later",
    ],
    faq: cityFaq("Torhout"),
    ctaTitle: "Meer aanvragen uit Torhout en omstreken?",
    ctaText:
      "Eén gesprek volstaat om te zien of we matchen. Daarna krijg je een helder voorstel.",
    areaServed: { "@type": "City", name: "Torhout" },
  },

  "website-laten-maken-wingene": {
    path: "/website-laten-maken-wingene",
    metaTitle: "Website laten maken Wingene | Webamo",
    metaDescription:
      "Website laten maken in Wingene? Conversiegerichte websites voor vakmannen en kleine bedrijven in de regio Brugge en West-Vlaanderen. Webamo, snel live.",
    eyebrow: "Webdesign · Wingene",
    h1: "Website laten maken Wingene",
    intro: cityIntro("Wingene", "Oostkamp, Beernem en de Brugse regio"),
    sections: citySections("Wingene", "Oostkamp, Ruiselede en Torhout"),
    benefitsTitle: "Voordelen van een website met Webamo in Wingene",
    benefits: [
      "Lokale focus op Wingene en West-Vlaanderen",
      "Website op maat, geen generieke template",
      "Meer vertrouwen via cases, reviews en duidelijke info",
      "Eenvoudig contact en offerteaanvragen voor klanten",
      "Optionele groei met SEO-pagina's en automatisatie",
    ],
    faq: cityFaq("Wingene"),
    ctaTitle: "Zichtbaar worden in Wingene?",
    ctaText:
      "Neem contact op voor een gratis gesprek. We antwoorden snel en concreet.",
    areaServed: { "@type": "City", name: "Wingene" },
  },

  "meer-offertes-met-website": {
    path: "/meer-offertes-met-website",
    metaTitle: "Meer offertes met website | Webamo voor vakmannen",
    metaDescription:
      "Meer offertes met website? Zo trek je als schrijnwerker, schilder of dakwerker meer aanvragen aan via Google. Webamo bouwt sites die converteren in West-Vlaanderen.",
    eyebrow: "Leads · Vakmannen",
    h1: "Meer offertes met website",
    intro: [
      "Je hebt mond-tot-mond en misschien wat Facebook, maar structureel te weinig offerte-aanvragen. Terwijl klanten in Brugge en West-Vlaanderen eerst online zoeken: wie een sterke site heeft met duidelijke diensten en vertrouwenwekkende realisaties, krijgt het formulier ingevuld. Meer offertes met website begint niet bij meer verkeer alleen. Het begint bij een pagina die bezoekers geruststelt en naar actie duwt.",
      "Webamo bouwt websites voor vakmannen: schrijnwerkers, schilders, dakwerkers, elektriciens en andere zelfstandigen die op de werf verdienen, niet achter marketingsoftware. Meer offertes met website betekent bij ons: snelle laadtijd, mobiel ontwerp, lokale SEO en een contactflow die elke aanvraag opvolgt. Geen vage beloftes. Wel een concreet plan en transparante tarieven.",
      "Wil je weten hoeveel extra aanvragen haalbaar zijn in jouw situatie? We bekijken je huidige online aanwezigheid en wat ontbreekt. Meer offertes met website is realistischer dan je denkt, zeker als je nu nog afhankelijk bent van toeval. Bekijk onze tarieven of plan direct een gratis gesprek via contact.",
    ],
    sections: [
      {
        h2: "Waarom je nu offertes misloopt",
        paragraphs: [
          "Veel vakmannen hebben geen site, een verouderde site of alleen social media. Bezoekers zien geen prijsindicatie, geen duidelijke werkgebieden en geen recente projecten. En klikken door naar de concurrent. Of ze vullen je formulier in en je antwoordt te laat, waardoor de klant al elders getekend heeft.",
          "Google beloont ook snelheid en structuur. Zonder die basis kom je zelfs niet in beeld bij mensen die wél zoeken naar jouw dienst in de regio Brugge of heel Vlaanderen.",
        ],
      },
      {
        h2: "Hoe een website meer offertes oplevert",
        paragraphs: [
          "We zetten je diensten scherp neer, tonen realisaties en maken één duidelijke actie: offerte aanvragen of bellen. Elke pagina is gebouwd voor mensen die op hun telefoon beslissen tussen twee vakmannen.",
          "Daarnaast koppelen we optioneel automatisatie: directe bevestiging naar de klant, notificatie naar jou en opvolging als iemand niet meteen antwoordt. Zo verlies je minder warme leads.",
        ],
      },
      {
        h2: "Wat je concreet krijgt bij Webamo",
        paragraphs: [
          "Een maatwerk site, lokale SEO, hosting en onderhoud. En indien gewenst koppeling met je mailbox of CRM. We kennen de markt van kleine bouw- en ambachtsbedrijven en praten jouw taal, zonder jargon.",
          "Start met een gratis gesprek. We zijn eerlijk over wat nodig is en wat niet. Geen verplicht pakket dat te groot is voor een eenmanszaak.",
        ],
      },
    ],
    benefitsTitle: "Voordelen: meer offertes met een professionele website",
    benefits: [
      "Duidelijke diensten- en regiopagina's die Google en klanten begrijpen",
      "Mobiel-first, waar de meeste offerteaanvragen starten",
      "Sterke call-to-actions en formulieren die vertrouwen wekken",
      "Optionele automatische opvolging van elke lead",
      "Vaste tarieven en snelle oplevering, meestal binnen 1-2 weken",
    ],
    faq: [
      {
        q: "Hoe snel zie ik meer offertes?",
        a: "Na livegang hangt het af van je dienst, regio en concurrentie. Een goede site is de basis; lokale SEO en eventueel Google Business Profile versnellen resultaat. Veel klanten merken binnen weken meer aanvragen zodra ze vindbaar zijn voor relevante zoektermen.",
      },
      {
        q: "Werkt dit ook voor kleine zelfstandigen?",
        a: "Juist dan. Je hoeft geen groot marketingbudget. Eén sterke site met lokale focus en opvolging kan al het verschil maken ten opzichte van collega's zonder professionele online aanwezigheid.",
      },
      {
        q: "Moet ik zelf aan Google Ads?",
        a: "Nee, dat is optioneel. Organisch verkeer via SEO en een goed profiel volstaat vaak om te starten. Later kun je campagnes toevoegen als je wilt versnellen.",
      },
      {
        q: "Kunnen jullie mijn huidige site verbeteren?",
        a: "Ja, we bekijken of een redesign of een nieuwe site logischer is. Soms is een frisse start goedkoper en effectiever dan lapwerk op een oude template.",
      },
      faqWatKostAutomatisatie,
    ],
    ctaTitle: "Klaar voor meer offertes?",
    ctaText:
      "Plan een gratis gesprek. We laten zien wat je site nu mist en wat de snelste winst is.",
    areaServed: "West-Vlaanderen",
  },

  "website-met-automatische-opvolging": {
    path: "/website-met-automatische-opvolging",
    metaTitle: "Website met automatische opvolging | Webamo",
    metaDescription:
      "Website met automatische opvolging voor vakmannen en KMO's. Geen leads meer vergeten. Webamo: site + CRM-flow in Brugge en West-Vlaanderen.",
    eyebrow: "Automatisatie · Leads",
    h1: "Website met automatische opvolging",
    intro: [
      "Een aanvraag binnen, even niet kunnen antwoorden. En de klant is weg. Herkenbaar? Vakmannen en kleine bedrijven verliezen dagelijks opdrachten omdat opvolging manueel blijft: mailtjes in de inbox, notities op papier, geen systeem. Een website met automatische opvolging lost dat op: elke lead wordt geregistreerd, bevestigd en op het juiste moment terug opgepikt.",
      "Webamo combineert een conversiegerichte website met slimme workflows. Website met automatische opvolging betekent bij ons: formulier op je site, directe bevestiging naar de klant, melding naar jou en herinneringen als er nog geen antwoord is. Ideaal voor schrijnwerkers, schilders, dakwerkers en andere zelfstandigen in Brugge en West-Vlaanderen die op de werf werken, niet in Excel.",
      "Je hoeft geen complex CRM te leren. We bouwen het zo eenvoudig mogelijk. En koppelen waar nodig met tools die je al gebruikt. Wil je weten hoe dat voor jouw zaak werkt? Bekijk onze tarieven of neem contact op voor een gratis gesprek.",
    ],
    sections: [
      {
        h2: "Het probleem met handmatige opvolging",
        paragraphs: [
          "Na een lange dag op de werf is mail beantwoorden geen prioriteit. Toch verwachten klanten binnen enkele uren reactie. Wie niet volgt, verliest de offerte aan iemand die wél snel antwoordt. Ook al ben jij de betere vakman.",
          "Zonder systeem vergeet je leads, dubbel je werk of antwoord je inconsistent. Dat kost omzet en reputatie.",
        ],
      },
      {
        h2: "Hoe automatische opvolging werkt",
        paragraphs: [
          "Iemand vult je formulier in → de klant krijgt meteen een bevestiging → jij krijgt een melding (mail of app) → na X uur zonder reactie gaat een herinnering naar jou of een vriendelijke follow-up naar de klant.",
          "Alles wordt gelogd: wie, wanneer, welke status. Zo zie je in één oogopslag welke offertes warm zijn en welke aandacht nodig hebben.",
        ],
      },
      {
        h2: "Website + automatisatie in één pakket",
        paragraphs: [
          "We starten met een professionele site die vertrouwen wekt en aanvragen binnenhaalt. Daarna koppelen we de opvolging, op maat van jouw proces, niet omgekeerd.",
          "Gevestigd in de regio Brugge, kennen we lokale KMO's en vakmannen. Geen enterprise-software, wel iets dat je echt gebruikt.",
        ],
      },
    ],
    benefitsTitle: "Voordelen van een website met automatische opvolging",
    benefits: [
      "Geen lead meer vergeten door drukte op de werf",
      "Snellere reactie richting klant, professionele indruk",
      "Overzicht van alle aanvragen op één plek",
      "Minder tijd kwijt aan losse mailtjes en herinneringen",
      "Uitbreidbaar met reviews en administratie-automatisatie",
    ],
    faq: [
      {
        q: "Is dit alleen voor grote bedrijven?",
        a: "Nee. Juist eenmanszaken profiteren: jij bent vaak alleen verantwoordelijk voor sales én uitvoering. Automatisatie vangt dat gat op.",
      },
      {
        q: "Moet ik een apart CRM gebruiken?",
        a: "Niet per se. We kunnen een licht systeem opzetten of koppelen met wat je al hebt (bijv. Airtable). Het moet simpel blijven.",
      },
      {
        q: "Werkt dit met mijn bestaande website?",
        a: "Soms ja, als de technische basis goed is. Vaak bouwen we samen een nieuwe site zodat design, snelheid en opvolging in één geheel zitten.",
      },
      {
        q: "Kan ik zelf templates aanpassen?",
        a: "Ja, we leggen uit hoe je teksten en timing aanpast. Grote technische wijzigingen doen we samen.",
      },
      faqWatKostAutomatisatie,
    ],
    ctaTitle: "Stop met verloren leads",
    ctaText:
      "Vertel ons hoe je nu opvolgt. We tonen wat automatisch kan, zonder overkill.",
    areaServed: "West-Vlaanderen",
  },

  "google-reviews-automatiseren": {
    path: "/google-reviews-automatiseren",
    metaTitle: "Google reviews automatiseren | Webamo",
    metaDescription:
      "Google reviews automatiseren voor vakmannen en KMO's. Meer 5-sterren reviews zonder handmatig zeuren. Webamo in Brugge en West-Vlaanderen.",
    eyebrow: "Automatisatie · Reviews",
    h1: "Google reviews automatiseren",
    intro: [
      "Je levert goed werk, maar op Google sta je nog met weinig reviews. Ondertussen kiest een nieuwe klant tussen jou en een concurrent met tientallen 5-sterren scores. Handmatig iedereen na een job vragen? Dat vergeet je op drukke weken. Google reviews automatiseren lost dat structureel op: tevreden klanten krijgen op het juiste moment een eenvoudige link. Jij hoeft er niet meer aan te denken.",
      "Webamo helpt vakmannen en kleine bedrijven in Brugge en West-Vlaanderen om meer echte reviews te verzamelen, op een eerlijke manier. Google reviews automatiseren betekent: na afronding van een opdracht een vriendelijk verzoek, gefilterd zodat alleen tevreden klanten naar je publieke reviewpagina gaan. Geen nepaccounts, geen gekochte reviews. Wel een proces dat werkt.",
      "Sterke reviews versterken je website en je lokale SEO. Samen met een professionele site bouw je aan vertrouwen vóór iemand belt. Bekijk onze tarieven of neem contact op. We leggen uit hoe het past bij jouw workflow.",
    ],
    sections: [
      {
        h2: "Waarom reviews cruciaal zijn voor vakmannen",
        paragraphs: [
          "Bij 'dakwerker Torhout' of 'schilder regio Brugge' vergelijken mensen in seconden. Reviews zijn sociaal bewijs: kwaliteit, betrouwbaarheid en bereikbaarheid. Weinig reviews = twijfel, ook als je vakmanschap top is.",
          "Wie systematisch reviews verzamelt, groeit sneller in zichtbaarheid en conversie. Zowel op Google Maps als op je eigen site waar we ze kunnen tonen.",
        ],
      },
      {
        h2: "Hoe automatiseren wij het verzoek",
        paragraphs: [
          "Na een afgesloten job (of op een moment dat jij kiest) stuurt het systeem een korte mail of SMS met een link. Tevreden klanten gaan naar Google; bij neutrale feedback kunnen ze eerst intern reageren, zodat je problemen oplost vóór ze publiek gaan.",
          "Jij bepaalt de timing en de boodschap. Wij bouwen en koppelen het aan je site of CRM-flow.",
        ],
      },
      {
        h2: "Eerlijk en duurzaam, geen shortcuts",
        paragraphs: [
          "Google straft nepreviews af. Wij werken alleen met processen die voldoen aan de richtlijnen: echte klanten, echte ervaringen. Gecombineerd met een sterke website en lokale SEO is dat een duurzame strategie.",
          "Veel klanten combineren review-automatisatie met leadopvolging en minder administratie in één pakket.",
        ],
      },
    ],
    benefitsTitle: "Voordelen van Google reviews automatiseren",
    benefits: [
      "Meer reviews zonder elke klant persoonlijk te moeten vragen",
      "Betere lokale SEO en hoger vertrouwen in zoekresultaten",
      "Professionele uitstraling t.o.v. concurrenten met weinig scores",
      "Tevreden klanten worden actief, ontevreden feedback intern afgehandeld",
      "Koppeling met website en opvolging in één geheel",
    ],
    faq: [
      {
        q: "Is automatisch review vragen toegestaan door Google?",
        a: "Ja, zolang je echte klanten vraagt om hun eerlijke ervaring te delen. Geen incentives die tegen de richtlijnen ingaan en geen valse reviews.",
      },
      {
        q: "Werkt dit voor kleine zelfstandigen?",
        a: "Absoluut. Juist als je weinig tijd hebt voor marketing, haal je het meeste uit automatisering na elke succesvolle job.",
      },
      {
        q: "Moet ik al een Google Business Profile hebben?",
        a: "Dat helpt sterk. Geen profiel? We begeleiden je bij de basis zodat reviews op de juiste plek landen.",
      },
      {
        q: "Kan ik de tekst van het verzoek aanpassen?",
        a: "Ja, volledig in jouw toon, informeel maar professioneel, zoals je klanten van je kennen.",
      },
      faqWatKostAutomatisatie,
    ],
    ctaTitle: "Bouw aan sterke Google-reviews",
    ctaText:
      "Plan een gesprek. We tonen hoe automatiseren er voor jouw zaak uitziet.",
    areaServed: "West-Vlaanderen",
  },

  "minder-administratie": {
    path: "/minder-administratie",
    metaTitle: "Minder administratie voor vakmannen | Webamo",
    metaDescription:
      "Minder administratie dankzij automatisatie. Websites, leads en opvolging voor schrijnwerkers, schilders en dakwerkers in Brugge en West-Vlaanderen.",
    eyebrow: "Automatisatie · Efficiëntie",
    h1: "Minder administratie",
    intro: [
      "Offertes, mails, facturen, planning, na een volle werkdag zit je 's avonds nog administratie te doen. Veel vakmannen en kleine bedrijven in West-Vlaanderen verliezen uren per week aan taken die niet direct geld opleveren. Minder administratie begint niet met harder werken, maar met processen die zichzelf deels afhandelen.",
      "Webamo automatiseert wat kan: leads van je website naar één overzicht, standaardmails, herinneringen en koppelingen met tools die je al gebruikt. Minder administratie betekent bij ons: minder dubbel werk, minder vergeten opvolging en meer tijd op de werf of bij de klant. We richten ons op schrijnwerkers, schilders, dakwerkers en andere zelfstandigen in de regio Brugge.",
      "Samen met een sterke website vormt automatisatie het fundament onder groei zonder extra personeel. Wil je zien wat haalbaar is? Bekijk onze tarieven of neem contact op. We starten altijd met wat je het meeste tijd kost.",
    ],
    sections: [
      {
        h2: "Waar gaat je tijd nu naartoe?",
        paragraphs: [
          "Hetzelfde antwoord typen op offerteaanvragen. Status bijhouden in WhatsApp. Gegevens overtypen van mail naar spreadsheet. Dat stapelt op tot een halve dag per week, tijd die je niet factureert.",
          "Veel administratie komt doordat systemen niet met elkaar praten. Website hier, mailbox daar, planning ergens anders.",
        ],
      },
      {
        h2: "Wat we automatiseren",
        paragraphs: [
          "Leadregistratie en opvolging, bevestigingsmails, review-verzoeken, eenvoudige statusflows en koppelingen met bijvoorbeeld Airtable of je CRM. Geen groot IT-project: we bouwen wat nodig is.",
          "Elke automatisatie moet tijd winnen, niet extra complexiteit toevoegen. Daarom testen we met jouw echte workflow.",
        ],
      },
      {
        h2: "Website als startpunt",
        paragraphs: [
          "Een goede site brengt structuur: duidelijke aanvragen, vaste velden, minder heen-en-weer-mail. Van daaruit koppelen we de rest.",
          "Gevestigd in Brugge, werken we met lokale KMO's die geen enterprise-budget hebben maar wél professioneel willen werken.",
        ],
      },
    ],
    benefitsTitle: "Voordelen van minder administratie met Webamo",
    benefits: [
      "Uren per week terug voor productief werk",
      "Minder fouten door manueel overtypen",
      "Alle leads en statussen op één plek",
      "Automatische mails en herinneringen",
      "Modulair uitbreidbaar wanneer je zaak groeit",
    ],
    faq: [
      {
        q: "Moet ik alles in één keer automatiseren?",
        a: "Nee. We beginnen met de grootste tijdvreter, vaak leadopvolging of standaardmails , en breiden daarna uit.",
      },
      {
        q: "Werkt dit met mijn boekhouder of facturatiesoftware?",
        a: "Sommige koppelingen zijn mogelijk via exports of tools als Zapier/Airtable. In een gesprek bekijken we wat jij al gebruikt.",
      },
      {
        q: "Is dit alleen voor tech-savvy ondernemers?",
        a: "Integendeel. We bouwen het zo dat jij alleen het dagelijkse overzicht nodig hebt.",
      },
      {
        q: "Wat als ik nu alles op papier doe?",
        a: "Dan is er veel winst te halen. We migreren stap voor stap zonder je operatie stil te leggen.",
      },
      faqWatKostAutomatisatie,
    ],
    ctaTitle: "Win tijd terug",
    ctaText:
      "Vertel ons welke administratie je het meest frustreert. We zoeken de snelste automatisatie-winst.",
    areaServed: "West-Vlaanderen",
  },

  "website-voor-vakmannen": {
    path: "/website-voor-vakmannen",
    metaTitle: "Website voor vakmannen | Webamo Brugge",
    metaDescription:
      "Website voor vakmannen: schrijnwerkers, schilders, dakwerkers. Conversiegericht webdesign en automatisatie in Brugge en West-Vlaanderen. Vanaf €695.",
    eyebrow: "Webdesign · Vakmannen",
    h1: "Website voor vakmannen",
    intro: [
      "Als vakman win je klanten met kwaliteit op de werf, maar online moet je net zo overtuigen. Veel schrijnwerkers, schilders en dakwerkers hebben geen site, een verouderde pagina of alleen social media. Daardoor mis je offertes van mensen die in Brugge en West-Vlaanderen eerst Google raadplegen. Een website voor vakmannen moet snel laden, duidelijk tonen wat je doet en één simpele actie hebben: contact of offerte.",
      "Webamo bouwt websites voor vakmannen die weinig tijd hebben en geen marketingteam. Website voor vakmannen betekent bij ons: mobiel-first, realisaties tonen, lokale SEO en optioneel automatisatie voor opvolging en reviews. Geen woordenwolk over 'digitale transformatie'. Wel iets dat leads oplevert terwijl jij werkt.",
      "Of je nu in Oostkamp, Torhout, Brugge of elders in Vlaanderen actief bent: we spreken jouw taal. Website voor vakmannen is onze kern. Bekijk onze tarieven of neem contact op voor een gratis gesprek zonder verplichtingen.",
    ],
    sections: [
      {
        h2: "Waarom vakmannen een andere website nodig hebben",
        paragraphs: [
          "Generieke templates zijn vaak te breed: te veel blog, te weinig bewijs van vakwerk. Jouw klant wil weten: wat doe je, waar werk je, hoe snel reageer je, en wat heb je al gebouwd of afgewerkt?",
          "Wij structureren rond diensten, regio, realisaties en vertrouwenssignalen, reviews, garanties, keurmerken waar van toepassing.",
        ],
      },
      {
        h2: "Wat op je site moet staan",
        paragraphs: [
          "Heldere diensten (bv. dakwerken, gevelbekleding, binnenschrijnwerk), werkgebied, contact en een formulier dat op mobiel werkt. Snelle laadtijd en foto's die je expertise tonen, geen stockfoto's van modellen in helm.",
          "Optioneel: landingspagina's per gemeente of dienst voor extra lokale vindbaarheid.",
        ],
      },
      {
        h2: "Van website naar volledige groei",
        paragraphs: [
          "Na de site kunnen we leadopvolging, Google reviews automatiseren en administratie verminderen. Alles modulair, je groeit wanneer jij er klaar voor bent.",
          "We zijn gevestigd in de regio Brugge en kennen de markt van lokale ambachtslui en bouwbedrijven.",
        ],
      },
    ],
    benefitsTitle: "Voordelen van een website voor vakmannen bij Webamo",
    benefits: [
      "Ontwerp en teksten afgestemd op schrijnwerkers, schilders, dakwerkers en meer",
      "Mobiel-first, waar klanten je vinden en contact opnemen",
      "Lokale SEO voor Brugge, West-Vlaanderen en jouw werkgebied",
      "Snelle oplevering, vanaf €695 setup plus vast maandbedrag voor hosting en onderhoud",
      "Optionele automatisatie voor leads, reviews en minder admin",
    ],
    faq: [
      {
        q: "Voor welke vakmannen bouwen jullie?",
        a: "Schrijnwerkers, schilders, dakwerkers, elektriciens, loodgieters, tuinaannemers en andere zelfstandigen in de bouw en afwerking, plus gerelateerde KMO's.",
      },
      {
        q: "Heb ik professionele foto's nodig?",
        a: "Eigen foto's van realisaties werken het best. Heb je weinig beeldmateriaal, dan adviseren we wat je snel op de werf kunt vastleggen.",
      },
      {
        q: "Kunnen klanten online een offerte aanvragen?",
        a: "Ja, met een formulier op maat, zo gedetailleerd als nodig, zonder bezoekers te overweldigen.",
      },
      {
        q: "Hoe zit het met onderhoud?",
        a: "Hosting, updates en beveiliging zitten in onze formules. Jij focust op je vak, wij op de techniek.",
      },
      {
        q: "Werken jullie alleen lokaal?",
        a: "Onze focus ligt op Brugge en West-Vlaanderen, maar we helpen ook vakmannen elders in Vlaanderen die dezelfde aanpak willen.",
      },
      faqWatKostWebsite,
    ],
    ctaTitle: "Een website die past bij jouw vak",
    ctaText:
      "Plan een gratis gesprek. We bespreken je diensten, regio en wat je site moet opleveren.",
    areaServed: "West-Vlaanderen",
  },
};

export function getSeoPage(slug: string): SeoPageConfig {
  const page = seoPages[slug];
  if (!page) {
    throw new Error(`Unknown SEO page: ${slug}`);
  }
  return page;
}
