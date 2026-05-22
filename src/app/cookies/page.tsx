import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Cookiebeleid",
  description: "Cookiebeleid van Webamo. Informatie over cookies en vergelijkbare technologieën op webamo.be.",
  alternates: { canonical: "https://webamo.be/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookiebeleid">
      <p>
        Deze website gebruikt enkel technische en functionele cookies die nodig zijn om de site
        correct te laten werken.
      </p>
      <h2 className="font-semibold text-[#0A0A0A] text-[18px] pt-2">Wat zijn cookies?</h2>
      <p>
        Cookies zijn kleine bestanden die op je apparaat worden opgeslagen wanneer je een website
        bezoekt. Ze helpen onder meer om voorkeuren te onthouden of de site veilig te houden.
      </p>
      <h2 className="font-semibold text-[#0A0A0A] text-[18px] pt-2">Welke cookies gebruiken we?</h2>
      <p>
        Op dit moment plaatsen we geen marketing- of trackingcookies van derden. Eventuele
        analytische tools worden enkel gebruikt als ze privacyvriendelijk zijn ingesteld.
      </p>
      <h2 className="font-semibold text-[#0A0A0A] text-[18px] pt-2">Cookies beheren</h2>
      <p>
        Je kan cookies verwijderen of blokkeren via de instellingen van je browser. Let op: sommige
        onderdelen van de site werken dan mogelijk minder goed.
      </p>
      <p>
        Vragen? Mail naar{" "}
        <a href="mailto:info@webamo.be" className="text-[#2563EB] hover:underline">
          info@webamo.be
        </a>
        .
      </p>
    </LegalLayout>
  );
}
