import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Solution from "../components/Solution";

export const metadata: Metadata = {
  title: "Diensten - Website + Automatisatie | Webamo",
  description:
    "Webamo biedt website + automatisatie pakketten en automatisatie voor bestaande websites. Conversiegerichte landingpages, CRM-koppelingen, e-mailautomatisatie en API-integraties voor zelfstandigen en KMO's.",
  keywords: [
    "website diensten",
    "website + automatisatie",
    "automatisatie voor website",
    "CRM koppeling",
    "e-mailautomatisatie",
    "API integratie",
    "conversiegerichte website",
    "landingpage maken",
    "website pakketten",
  ],
  alternates: {
    canonical: "/diensten",
  },
  openGraph: {
    title: "Diensten - Website + Automatisatie | Webamo",
    description:
      "Website + automatisatie pakketten en automatisatie voor bestaande websites. Bekijk onze diensten.",
    url: "https://webamo.be/diensten",
  },
};

const services = [
  {
    title: "Website + automatisatie",
    subtitle: "Alles-in-één systeem dat leads opvolgt en afspraken plant.",
    points: [
      "Conversiegerichte landingpages",
      "Geautomatiseerde opvolg-e-mails",
      "CRM-koppelingen & pipelines",
      "Online afspraken & herinneringen",
    ],
  },
  {
    title: "Automatisatie zonder nieuwe site",
    subtitle: "Koppel slimme automatisatie aan wat je nu al gebruikt.",
    points: [
      "Formulieren verbinden met CRM / mailbox",
      "Automatische herinneringen & notificaties",
      "Integraties met tools (bijv. Calendly, Notion, HubSpot)",
      "API-koppelingen op maat",
    ],
  },
] as const;

export default function DienstenPage() {
  return (
    <main className="relative z-10">
      <Header />

      <section className="px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-14 md:pb-18">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[30px] md:text-[40px] font-extrabold text-white leading-tight">
              Diensten voor{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                zelfstandigen en kleine teams
              </span>
            </h1>
            <p className="mt-4 text-white/75 text-[15px] md:text-[16px] leading-relaxed">
              Geen generieke templates, maar een strakke website met slimme
              automatisatie erachter. Hieronder zie je hoe we meestal starten –
              altijd afgestemd op jouw situatie.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6 lg:gap-7 max-w-4xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card rounded-2xl p-6 flex flex-col h-full"
              >
                <h2 className="text-[18px] md:text-[20px] font-semibold text-white">
                  {service.title}
                </h2>
                <p className="mt-2 text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                  {service.subtitle}
                </p>

                <ul className="mt-4 space-y-2 text-[13px] text-white/80">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[2px] h-4 w-4 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hergebruik de Solution-sectie als verdieping over de manier van werken */}
      <Solution />

      <Footer />
    </main>
  );
}
