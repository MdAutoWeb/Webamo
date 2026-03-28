import type { Metadata } from "next";
import Header from "./components/Header";
import AllInOneEngine from "./components/AllInOneEngine";
import SystemFlow from "./components/SystemFlow";
import PortfolioShowcase from "./components/PortfolioShowcase";
import Footer from "./components/Footer";
import { SplineSceneBasic } from "@/components/ui/demo";

export const metadata: Metadata = {
  title: "Webamo | High-End Websites & Automatisatie Brugge & Vlaanderen",
  description:
    "Op zoek naar een webdesigner in Brugge of Vlaanderen? Webamo bouwt high-end websites en slimme automatisaties (CRM, Airtable) die je business doen groeien. Ontdek onze cases.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webamo | High-End Websites & Automatisatie Brugge & Vlaanderen",
    description:
      "Webdesigner in Brugge en Vlaanderen. High-end websites en slimme automatisaties (CRM, Airtable) die je business doen groeien.",
    url: "https://www.webamo.be",
  },
};

export default function Page() {
  return (
    <main className="relative z-10 bg-black">
      <Header />
      <section className="relative z-10 px-6 md:px-12 lg:px-16 pt-20 md:pt-24 pb-8 md:pb-10 overflow-hidden">
        <SplineSceneBasic />
      </section>
      <AllInOneEngine />
      <SystemFlow />
      <PortfolioShowcase />
      <Footer />
    </main>
  );
}
