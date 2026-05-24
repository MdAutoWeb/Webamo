import type { LeadProcessInput } from "@/lib/lead-scoring";

const GROQ_MODEL = "llama-3.3-70b-versatile";
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

export type LeadAiInsights = {
  summary: string;
  qualification: string;
};

export async function generateLeadInsights(
  lead: LeadProcessInput,
  score: number
): Promise<LeadAiInsights> {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return fallbackInsights(lead, score);
  }

  const prompt = `Je bent sales-assistent voor Webamo (webdesign en automatisatie, Brugge/Vlaanderen).

Analyseer deze lead en antwoord ALLEEN met geldig JSON (geen markdown):
{
  "samenvatting": "2-3 zinnen: wie, wat ze nodig hebben, relevante context",
  "kwalificatie": "1-2 zinnen: concrete suggestie voor opvolging (prioriteit, aanpak)"
}

Lead (score ${score}/100):
- Naam: ${lead.naam}
- E-mail: ${lead.email}
- Bedrijf: ${lead.bedrijfsnaam || "n.v.t."}
- Website: ${lead.website || "niet opgegeven"}
- Dienst(en): ${(lead.dienst ?? []).join(", ") || "n.v.t."}
- Voorkeurmoment: ${lead.voorkeurmoment || "n.v.t."}
- Situatie: ${lead.situatie || "n.v.t."}
${lead.telefoon ? `- Telefoon: ${lead.telefoon}` : ""}

Taal: Nederlands (BE). Zakelijk en bondig.`;

  try {
    const res = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 300,
      }),
    });

    if (!res.ok) {
      console.error("Groq API:", res.status, await res.text());
      return fallbackInsights(lead, score);
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };

    const text = data.choices?.[0]?.message?.content?.trim();
    if (!text) return fallbackInsights(lead, score);

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(jsonMatch?.[0] ?? text) as {
      samenvatting?: string;
      kwalificatie?: string;
      summary?: string;
      qualification?: string;
    };

    const fallback = fallbackInsights(lead, score);

    return {
      summary:
        parsed.samenvatting?.trim() ||
        parsed.summary?.trim() ||
        fallback.summary,
      qualification:
        parsed.kwalificatie?.trim() ||
        parsed.qualification?.trim() ||
        fallback.qualification,
    };
  } catch (err) {
    console.error("Groq:", err);
    return fallbackInsights(lead, score);
  }
}

function fallbackInsights(lead: LeadProcessInput, score: number): LeadAiInsights {
  const dienst = (lead.dienst ?? []).join(", ") || "algemene aanvraag";
  return {
    summary: `${lead.naam}${lead.bedrijfsnaam ? ` (${lead.bedrijfsnaam})` : ""} vraagt info over ${dienst}.`,
    qualification:
      score >= 60
        ? "Hoge prioriteit: plan snel een intakegesprek en stuur een concreet voorstel."
        : score >= 30
          ? "Normale prioriteit: reageer binnen enkele dagen met een korte terugkoppeling."
          : "Lage prioriteit: standaard opvolging via e-mail volstaat.",
  };
}

export function formatLeadNotities(
  score: number,
  insights: LeadAiInsights
): string {
  return [
    `Score: ${score}/100. ${insights.qualification}`,
    "",
    `Samenvatting: ${insights.summary}`,
  ].join("\n");
}
