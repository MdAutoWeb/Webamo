import { AIRTABLE_HELP_OPTIONS } from "@/lib/airtable-lead";

export type LeadPriority = "Hoog" | "Normaal" | "Laag";

export type LeadProcessInput = {
  naam: string;
  email: string;
  bedrijfsnaam?: string;
  website?: string;
  dienst?: string[];
  situatie?: string;
  voorkeurmoment?: string;
  telefoon?: string;
};

const SERVICE_SCORES: { match: (d: string) => boolean; points: number }[] = [
  { match: (d) => d.includes("website + automatisatie"), points: 40 },
  { match: (d) => d.includes("nieuwe website"), points: 25 },
  { match: (d) => d.includes("bestaande website"), points: 20 },
];

function normalizeDienstLabel(raw: string): string {
  return raw.trim().toLowerCase();
}

/** Mapt formulierwaarden naar geldige Airtable-opties */
export function normalizeDienstOptions(dienst: string[] | undefined): string[] {
  if (!dienst?.length) return [];

  const valid = new Set<string>(AIRTABLE_HELP_OPTIONS);
  const result: string[] = [];

  for (const item of dienst) {
    const trimmed = item.trim();
    if (valid.has(trimmed)) {
      result.push(trimmed);
      continue;
    }
    const lower = trimmed.toLowerCase();
    const match = AIRTABLE_HELP_OPTIONS.find(
      (opt) =>
        opt.toLowerCase() === lower ||
        opt.toLowerCase().includes(lower) ||
        lower.includes(opt.toLowerCase().slice(0, 20))
    );
    if (match && !result.includes(match)) result.push(match);
  }

  return result;
}

export function calculateLeadScore(input: LeadProcessInput): number {
  let score = 0;
  const dienst = normalizeDienstOptions(input.dienst);
  const situatie = (input.situatie ?? "").toLowerCase();

  let servicePoints = 0;
  for (const label of dienst) {
    const d = normalizeDienstLabel(label);
    for (const rule of SERVICE_SCORES) {
      if (rule.match(d)) {
        servicePoints = Math.max(servicePoints, rule.points);
      }
    }
  }
  score += servicePoints;

  if (!input.website?.trim()) {
    score += 20;
  }

  if (situatie.includes("geen tijd") || situatie.includes("veel werk")) {
    score += 15;
  }

  if (situatie.includes("klant") || situatie.includes("gevonden")) {
    score += 10;
  }

  if ((input.situatie ?? "").trim().length > 100) {
    score += 10;
  }

  return Math.min(score, 100);
}

export function priorityFromScore(score: number): LeadPriority {
  if (score >= 60) return "Hoog";
  if (score >= 30) return "Normaal";
  return "Laag";
}

export function nextActionDate(priority: LeadPriority): string {
  const days = priority === "Hoog" ? 1 : priority === "Normaal" ? 3 : 7;
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}
