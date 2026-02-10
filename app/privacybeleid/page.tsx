import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid | Webamo",
  description:
    "Privacybeleid van Webamo – Websites & more. Lees hoe we omgaan met jouw persoonlijke gegevens.",
  alternates: {
    canonical: "https://webamo.be/privacybeleid",
  },
};

export default function PrivacybeleidPage() {
  return (
    <main className="relative z-10">
      <Header />

      <section className="px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[30px] md:text-[40px] font-extrabold text-white leading-tight mb-8">
            Privacybeleid
          </h1>

          <div className="space-y-6 text-white/75 text-[15px] md:text-[16px] leading-relaxed">
            <p>
              Webamo – Websites &amp; more hecht belang aan jouw privacy.
            </p>

            <p>
              Wanneer je via deze website contact opneemt, verzamelen we enkel
              de gegevens die nodig zijn om je aanvraag te behandelen, zoals je
              naam, e-mailadres en bericht.
            </p>

            <p>Deze gegevens worden uitsluitend gebruikt om:</p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>contact met je op te nemen</li>
              <li>je aanvraag te beantwoorden</li>
              <li>onze diensten correct uit te voeren</li>
            </ul>

            <p>
              Gegevens worden verwerkt via e-mail en interne tools (zoals een
              CRM) en worden niet doorgegeven aan derden.
            </p>

            <p>
              Je gegevens worden niet langer bewaard dan nodig. Je kan op elk
              moment vragen om je gegevens in te kijken, aan te passen of te
              laten verwijderen via{" "}
              <a
                href="mailto:info@webamo.be"
                className="text-[#40C4FF] hover:text-[#40C4FF]/80 transition-colors"
              >
                info@webamo.be
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
