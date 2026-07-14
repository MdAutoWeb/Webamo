export type Agent = {
  id: string;
  tag: string;
  title: string;
  /** Korte tekst op homepage-kaart */
  body: string;
  /** Uitgebreide intro op /diensten */
  detailBody: string;
  bullets: string[];
};

export const agents: Agent[] = [
  {
    id: "offerte-agent",
    tag: "Offertes",
    title: "Offerte Agent",
    body: "Aanvraag binnen, offerte klaar met prijs per regel en bron erbij. Jij geeft akkoord vóór verzending, opvolging op dag 5 en dag 21 ingebouwd.",
    detailBody:
      "Formulier of mail binnenkomt, wij zetten een offerte klaar op basis van jouw prijslijst en eerdere jobs. Elke lijn heeft een bron, niets wordt verzonden zonder jouw goedkeuring. Na versturen herinnert de flow de klant automatisch op dag 5 en dag 21 als er nog geen reactie is.",
    bullets: [
      "Offerte op basis van jouw prijzen, geen gegok",
      "Bron per regel zichtbaar in het document",
      "Verzenden pas na jouw akkoord",
      "Opvolgmail op dag 5 en dag 21",
      "Werkt met je formulier, mailbox of CRM",
    ],
  },
  {
    id: "mailbox-controle",
    tag: "Mailbox",
    title: "Mailbox Controle",
    body: "Inkomende mails gelabeld en op dossier gezet. Bestaande klanten herkend, conceptantwoord klaar. Er gaat niets de deur uit zonder jouw OK.",
    detailBody:
      "Je inbox raakt vol met hetzelfde soort vragen: offerte, planning, factuur, klacht. Deze flow labelt elke mail, koppelt ze aan het juiste dossier en zet een antwoord klaar in jouw stijl. Jij leest na, past aan indien nodig en klikt op verzenden.",
    bullets: [
      "Sorteren op type: offerte, planning, factuur, …",
      "Klant en dossier automatisch herkend",
      "Concept in je mailbox, niet direct verstuurd",
      "Geen beloftes die jij niet gaf",
      "Minder scrollen, sneller prioriteit zetten",
    ],
  },
  {
    id: "support-agent",
    tag: "Support",
    title: "Support Agent",
    body: "Veelgestelde vragen beantwoord via chat of mail, uit je eigen FAQ en documenten. Antwoord binnen de minuut, ook buiten kantooruren.",
    detailBody:
      "Klanten stellen steeds dezelfde vragen over prijzen, werkwijze of beschikbaarheid. De supportflow zoekt het antwoord in je kennisbank en stuurt een antwoord via chat of mail. Bij twijfel of een uitzondering gaat het door naar jou, niet naar de klant.",
    bullets: [
      "Antwoord binnen de minuut via chat of mail",
      "Gebaseerd op jouw FAQ, prijslijst en werkwijze",
      "Werkt ook 's avonds en in het weekend",
      "Onzekere vragen komen bij jou terecht",
      "Minder herhaaldelijk hetzelfde typen",
    ],
  },
  {
    id: "insights-agent",
    tag: "Rapportage",
    title: "Insights Agent",
    body: "Maandelijks overzicht van omzet, leads en opvolging in platte taal. Geen dashboard vol grafieken, gewoon wat er toe doet.",
    detailBody:
      "Aan het einde van de maand krijg je een kort rapport: hoeveel leads binnenkwamen, welke offertes openstaan, wat er is binnengekomen en wat opvolging nodig heeft. Geschreven in gewone taal, zodat je snel weet waar je moet bijsturen zonder in spreadsheets te duiken.",
    bullets: [
      "Maandelijks rapport per mail of in je CRM",
      "Omzet, leads en openstaande offertes in één overzicht",
      "Geen jargon, wel concrete vervolgstappen",
      "Koppeling met Airtable, mailbox of boekhouding",
      "Jij ziet de cijfers, wij leggen ze uit",
    ],
  },
];
