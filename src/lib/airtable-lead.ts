export const AIRTABLE_HELP_OPTIONS = [
  "Nieuwe website",
  "Website + automatisatie (funnels, e-mails, CRM, etc)",
  "Bestaande website verbeteren (snelheid / conversie, automatisatie)",
  "Ik weet het nog niet precies",
] as const;

export const AIRTABLE_BRON_WEBSITE = "Website formulier";
export const AIRTABLE_STATUS_NIEUW = "Nieuw";

export type LeadInput = {
  name: string;
  email: string;
  company?: string;
  website?: string;
  phone?: string;
  helpTypes?: string[];
  situation?: string;
  preferredMoment?: string;
};

function normalizeWebsiteUrl(raw: string | undefined): string | undefined {
  const value = raw?.trim();
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value}`;
}

/** Alleen velden meesturen die Airtable verwacht — geen lege selects/urls. */
export function buildAirtableLeadFields(input: LeadInput): Record<string, unknown> {
  const fields: Record<string, unknown> = {
    Naam: input.name.trim(),
    "E-mail": input.email.trim(),
    Status: AIRTABLE_STATUS_NIEUW,
    Bron: AIRTABLE_BRON_WEBSITE,
  };

  const company = input.company?.trim();
  if (company) fields.Bedrijfsnaam = company;

  const website = normalizeWebsiteUrl(input.website);
  if (website) fields.Website = website;

  const helpTypes = (input.helpTypes ?? []).filter((h) =>
    AIRTABLE_HELP_OPTIONS.includes(h as (typeof AIRTABLE_HELP_OPTIONS)[number])
  );
  if (helpTypes.length > 0) {
    fields["Waarmee kan ik je helpen?"] = helpTypes;
  }

  const situationParts: string[] = [];
  const phone = input.phone?.trim();
  if (phone) situationParts.push(`Telefoon: ${phone}`);
  const situation = input.situation?.trim();
  if (situation) situationParts.push(situation);
  if (situationParts.length > 0) {
    fields["Situatie / toelichting"] = situationParts.join("\n\n");
  }

  const moment = input.preferredMoment?.trim();
  if (moment) fields.Voorkeurmoment = moment;

  return fields;
}

export function getAirtableLeadsUrl(): string | null {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const apiKey = process.env.AIRTABLE_API_KEY;
  if (!baseId || !apiKey) return null;

  const table =
    process.env.AIRTABLE_TABLE_ID?.trim() ||
    process.env.AIRTABLE_TABLE_NAME?.trim();

  if (!table) return null;

  return `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`;
}
