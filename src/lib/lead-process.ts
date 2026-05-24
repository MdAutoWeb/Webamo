import {
  AIRTABLE_BRON_WEBSITE,
  AIRTABLE_STATUS_NIEUW,
  getAirtableLeadsUrl,
} from "@/lib/airtable-lead";
import { formatLeadNotities, generateLeadInsights } from "@/lib/lead-ai";
import {
  calculateLeadScore,
  nextActionDate,
  normalizeDienstOptions,
  priorityFromScore,
  type LeadProcessInput,
} from "@/lib/lead-scoring";

function normalizeWebsiteUrl(raw: string | undefined): string | undefined {
  const value = raw?.trim();
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value}`;
}

function buildSituationText(input: LeadProcessInput): string | undefined {
  const parts: string[] = [];
  if (input.telefoon?.trim()) parts.push(`Telefoon: ${input.telefoon.trim()}`);
  if (input.situatie?.trim()) parts.push(input.situatie.trim());
  return parts.length > 0 ? parts.join("\n\n") : undefined;
}

export type ProcessLeadResult = {
  recordId: string;
  score: number;
  priority: string;
  nextAction: string;
};

export async function processLead(input: LeadProcessInput): Promise<ProcessLeadResult> {
  const score = calculateLeadScore(input);
  const priority = priorityFromScore(score);
  const nextAction = nextActionDate(priority);
  const insights = await generateLeadInsights(input, score);
  const notities = formatLeadNotities(score, insights);

  const dienst = normalizeDienstOptions(input.dienst);
  const situatie = buildSituationText(input);

  const fields: Record<string, unknown> = {
    Naam: input.naam.trim(),
    "E-mail": input.email.trim(),
    Status: AIRTABLE_STATUS_NIEUW,
    Bron: AIRTABLE_BRON_WEBSITE,
    Prioriteit: priority,
    "Volgende actie": nextAction,
    Notities: notities,
  };

  const bedrijf = input.bedrijfsnaam?.trim();
  if (bedrijf) fields.Bedrijfsnaam = bedrijf;

  const website = normalizeWebsiteUrl(input.website);
  if (website) fields.Website = website;

  if (dienst.length > 0) fields["Waarmee kan ik je helpen?"] = dienst;

  if (situatie) fields["Situatie / toelichting"] = situatie;

  const moment = input.voorkeurmoment?.trim();
  if (moment) fields.Voorkeurmoment = moment;

  const url = getAirtableLeadsUrl();
  const apiKey = process.env.AIRTABLE_API_KEY;

  if (!url || !apiKey) {
    throw new Error("AIRTABLE_NOT_CONFIGURED");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields, typecast: true }),
  });

  if (!res.ok) {
    console.error("Airtable create lead failed:", res.status, res.statusText);
    throw new Error("AIRTABLE_CREATE_FAILED");
  }

  const data = (await res.json()) as { id: string };

  return {
    recordId: data.id,
    score,
    priority,
    nextAction,
  };
}
