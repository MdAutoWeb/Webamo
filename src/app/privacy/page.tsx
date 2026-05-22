import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Privacybeleid van Webamo. Lees hoe we omgaan met jouw persoonlijke gegevens.",
  alternates: { canonical: "https://webamo.be/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacybeleid">
      <p>
        Webamo hecht belang aan jouw privacy. Dit beleid beschrijft welke gegevens we verzamelen en
        waarvoor we ze gebruiken.
      </p>
      <h2 className="font-semibold text-[#0A0A0A] text-[18px] pt-2">Welke gegevens?</h2>
      <p>
        Wanneer je contact opneemt via het formulier, verzamelen we enkel wat nodig is om je
        aanvraag te behandelen: naam, e-mailadres, telefoonnummer (optioneel) en je bericht.
      </p>
      <h2 className="font-semibold text-[#0A0A0A] text-[18px] pt-2">Waarvoor gebruiken we ze?</h2>
      <ul className="list-disc list-inside space-y-2 ml-1">
        <li>Om contact met je op te nemen</li>
        <li>Om je aanvraag te beantwoorden</li>
        <li>Om onze diensten correct uit te voeren</li>
      </ul>
      <p>
        Gegevens worden verwerkt via e-mail en interne tools (zoals een CRM) en worden niet
        verkocht aan derden.
      </p>
      <h2 className="font-semibold text-[#0A0A0A] text-[18px] pt-2">Bewaartermijn</h2>
      <p>
        We bewaren gegevens niet langer dan nodig voor opvolging van je aanvraag of onze
        administratie.
      </p>
      <h2 className="font-semibold text-[#0A0A0A] text-[18px] pt-2">Jouw rechten</h2>
      <p>
        Je kan op elk moment vragen om inzage, aanpassing of verwijdering via{" "}
        <a href="mailto:info@webamo.be" className="text-[#2563EB] hover:underline">
          info@webamo.be
        </a>
        .
      </p>
    </LegalLayout>
  );
}
