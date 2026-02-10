import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  website?: string;
  helpTypes?: string[]; // checkboxen
  situation?: string;
  preferredMoment?: string;

  // simpele anti-spam (honeypot)
  websiteTrap?: string; // hidden input

  brand?: "webamo" | "dakralux";
};

type BrandKey = "webamo" | "dakralux";

const BRAND_CONFIG: Record<
  BrandKey,
  {
    from: string;
    replyTo: string;
    signature: string;
  }
> = {
  webamo: {
    from: process.env.FROM_EMAIL ?? "Webamo <no-reply@webamo.be>",
    replyTo: "info@webamo.be",
    signature: "Met vriendelijke groet,\nWebamo – Websites & more",
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

    // Honeypot: als ingevuld => bot
    if (body.websiteTrap && body.websiteTrap.trim() !== "") {
      return NextResponse.json({ ok: true }); // stil "success" teruggeven
    }

    const name = body.name?.trim();
    const email = body.email?.trim();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Naam en e-mail zijn verplicht." },
        { status: 400 }
      );
    }

    const fields = {
      Naam: name,
      "E-mail": email,
      Bedrijfsnaam: body.company?.trim() || "",
      Website: body.website?.trim() || "",
      "Waarmee kan ik je helpen?": Array.isArray(body.helpTypes)
        ? body.helpTypes
        : [],
      "Situatie / toelichting": body.situation?.trim() || "",
      Voorkeurmoment: body.preferredMoment?.trim() || "",
      Status: "Nieuw",
    };

    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME || "Leads";
    const apiKey = process.env.AIRTABLE_API_KEY;

    console.log("AIRTABLE_BASE_ID =", process.env.AIRTABLE_BASE_ID);
    console.log("AIRTABLE_TABLE_NAME =", process.env.AIRTABLE_TABLE_NAME);
    console.log(
      "AIRTABLE_API_KEY =",
      apiKey ? `${apiKey.substring(0, 7)}...` : "MISSING"
    );

    if (!baseId || !apiKey) {
      console.error("Missing Airtable env vars:", {
        hasBaseId: !!baseId,
        hasApiKey: !!apiKey,
        hasTableName: !!tableName,
      });
      return NextResponse.json(
        { error: "Server configuratie mist Airtable env vars." },
        { status: 500 }
      );
    }

    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(
      tableName
    )}`;
    console.log("Airtable URL =", url);

    const airtableRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields, typecast: true }),
    });

    if (!airtableRes.ok) {
      const err = await airtableRes.json().catch(async () => ({
        raw: await airtableRes.text(),
      }));

      // Log de volledige error voor debugging
      console.error("Airtable API Error:", {
        status: airtableRes.status,
        statusText: airtableRes.statusText,
        error: err,
        url,
        fields,
      });

      return NextResponse.json(
        {
          error: "Airtable fout",
          airtable: err,
          status: airtableRes.status,
          statusText: airtableRes.statusText,
        },
        { status: 500 }
      );
    }

    // Airtable is OK – nu (best effort) bevestigingsmail sturen via Resend
    const brandKey: BrandKey =
      body.brand === "dakralux" ? "dakralux" : "webamo";
    const brand = BRAND_CONFIG[brandKey];

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY ontbreekt – e-mail wordt niet verzonden.");
    } else {
      const resend = new Resend(resendApiKey);

      const helpSummary =
        Array.isArray(body.helpTypes) && body.helpTypes.length > 0
          ? body.helpTypes.join(", ")
          : "Geen specifieke selectie opgegeven.";

      const companyLine = body.company?.trim()
        ? `Bedrijf: ${body.company.trim()}\n`
        : "";
      const websiteLine = body.website?.trim()
        ? `Website: ${body.website.trim()}\n`
        : "";

      const textBody = [
        `Dag ${name},`,
        "",
        "Bedankt voor je aanvraag – we hebben alles goed ontvangen.",
        "We bekijken je bericht en reageren normaal binnen 1 werkdag met een voorstel voor de volgende stap.",
        "",
        "Samenvatting van wat je doorgaf:",
        `- Hulpvraag: ${helpSummary}`,
        companyLine ? `- ${companyLine.trimEnd()}` : "",
        websiteLine ? `- ${websiteLine.trimEnd()}` : "",
        "",
        "Als je in de tussentijd nog extra info wil doorsturen of iets wil verduidelijken, kan je gewoon op deze e-mail antwoorden.",
        "",
        brand.signature,
      ]
        .filter(Boolean)
        .join("\n");

      try {
        await resend.emails.send({
          from: brand.from,
          to: email,
          replyTo: brand.replyTo,
          subject: "We hebben je aanvraag goed ontvangen",
          text: textBody,
        });
      } catch (mailErr) {
        // Lead is wel opgeslagen in Airtable – mailfout mag de response niet blokkeren
        console.error(
          "Fout bij versturen bevestigingsmail via Resend:",
          mailErr
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Onverwachte serverfout." },
      { status: 500 }
    );
  }
}
