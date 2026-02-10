import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemCards from "./components/ProblemCards";
import Solution from "./components/Solution";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Website Laten Maken met Automatisatie | Webamo België",
  description:
    "Webamo bouwt moderne, conversiegerichte websites met slimme automatisatie voor zelfstandigen en KMO's in België. CRM-koppelingen, e-mailautomatisatie, leadgeneratie en meer. Plan je gratis intakegesprek.",
  keywords: [
    "website laten maken belgië",
    "webdesign belgië",
    "website met automatisatie",
    "conversiegerichte website",
    "CRM integratie",
    "e-mailautomatisatie",
    "website voor zelfstandige",
    "website voor KMO",
    "landingpage maken",
    "webdesign brugge",
    "website maken brugge",
    "webdesign west-vlaanderen",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Website Laten Maken met Automatisatie | Webamo België",
    description:
      "Moderne websites met slimme automatisatie voor zelfstandigen en KMO's. Gratis intakegesprek.",
    url: "https://webamo.be",
  },
};

export default function Page() {
  return (
    <main className="relative z-10">
      <Header />
      <Hero />
      <ProblemCards />
      <Solution showPortfolio={true} />
      <Footer />
    </main>
  );
}
