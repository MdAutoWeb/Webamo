import { NextResponse } from "next/server";
import { processLead } from "@/lib/lead-process";
import type { LeadProcessInput } from "@/lib/lead-scoring";

export const runtime = "nodejs";

type ProcessBody = LeadProcessInput & {
  websiteTrap?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ProcessBody;

    if (body.websiteTrap?.trim()) {
      return NextResponse.json({ ok: true, recordId: null });
    }

    const naam = body.naam?.trim();
    const email = body.email?.trim();

    if (!naam || !email) {
      return NextResponse.json(
        { error: "Naam en e-mail zijn verplicht." },
        { status: 400 }
      );
    }

    const result = await processLead({
      naam,
      email,
      bedrijfsnaam: body.bedrijfsnaam,
      website: body.website,
      dienst: body.dienst,
      situatie: body.situatie,
      voorkeurmoment: body.voorkeurmoment,
      telefoon: body.telefoon,
    });

    return NextResponse.json({
      ok: true,
      recordId: result.recordId,
      score: result.score,
      priority: result.priority,
      nextAction: result.nextAction,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "UNKNOWN";

    if (message === "AIRTABLE_NOT_CONFIGURED") {
      return NextResponse.json(
        { error: "Leadopslag is niet geconfigureerd." },
        { status: 500 }
      );
    }

    if (message === "AIRTABLE_CREATE_FAILED") {
      return NextResponse.json(
        { error: "Lead kon niet worden opgeslagen in Airtable." },
        { status: 500 }
      );
    }

    console.error("POST /api/leads/process:", err);
    return NextResponse.json({ error: "Onverwachte serverfout." }, { status: 500 });
  }
}
