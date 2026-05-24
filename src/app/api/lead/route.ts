import { NextResponse } from "next/server";
import { Resend } from "resend";
import { processLead } from "@/lib/lead-process";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  phone?: string;
  helpTypes?: string[];
  situation?: string;
  preferredMoment?: string;
  websiteTrap?: string;
  brand?: "webamo" | "dakralux";
  /** Nederlands formaat (zelfde als /api/leads/process) */
  naam?: string;
  bedrijfsnaam?: string;
  dienst?: string[];
  situatie?: string;
  voorkeurmoment?: string;
  telefoon?: string;
};

type BrandKey = "webamo" | "dakralux";

const BRAND_CONFIG: Record<
  BrandKey,
  { from: string; replyTo: string; signature: string }
> = {
  webamo: {
    from: process.env.FROM_EMAIL ?? "Webamo <no-reply@webamo.be>",
    replyTo: "info@webamo.be",
    signature: "Met vriendelijke groet,\nWebamo, Websites & more",
  },
  dakralux: {
    from: process.env.DAKRALUX_FROM_EMAIL ?? "Dakralux <no-reply@dakralux.be>",
    replyTo: "info@dakralux.be",
    signature: "Met vriendelijke groet,\nDakralux",
  },
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadPayload;

    if (body.websiteTrap?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const naam = (body.naam ?? body.name)?.trim();
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
      bedrijfsnaam: body.bedrijfsnaam ?? body.company,
      website: body.website,
      dienst: body.dienst ?? body.helpTypes,
      situatie: body.situatie ?? body.situation,
      voorkeurmoment: body.voorkeurmoment ?? body.preferredMoment,
      telefoon: body.telefoon ?? body.phone,
    });

    const brandKey: BrandKey =
      body.brand === "dakralux" ? "dakralux" : "webamo";
    const brand = BRAND_CONFIG[brandKey];
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const textBody = [
        `Dag ${naam},`,
        "",
        "Bedankt voor je aanvraag. We hebben alles goed ontvangen.",
        "We bekijken je bericht en reageren normaal binnen 1 werkdag.",
        "",
        brand.signature,
      ].join("\n");

      try {
        await resend.emails.send({
          from: brand.from,
          to: email,
          replyTo: brand.replyTo,
          subject: "We hebben je aanvraag goed ontvangen",
          text: textBody,
        });
      } catch (mailErr) {
        console.error("Resend:", mailErr);
      }
    }

    return NextResponse.json({ ok: true, recordId: result.recordId });
  } catch (err) {
    const message = err instanceof Error ? err.message : "";

    if (message === "AIRTABLE_NOT_CONFIGURED" || message === "AIRTABLE_CREATE_FAILED") {
      return NextResponse.json(
        {
          error:
            "Je bericht kon niet worden opgeslagen. Probeer opnieuw of mail naar info@webamo.be.",
        },
        { status: 500 }
      );
    }

    console.error("Lead API:", err);
    return NextResponse.json(
      { error: "Onverwachte serverfout. Probeer later opnieuw." },
      { status: 500 }
    );
  }
}
