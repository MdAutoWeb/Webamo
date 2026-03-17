import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact - Gratis Intakegesprek | Webamo",
  description:
    "Plan een gratis intakegesprek met Webamo. In 15-20 minuten bespreken we wat er mogelijk is voor jouw website en automatisatie. Geen verplichtingen.",
  keywords: [
    "contact webamo",
    "intakegesprek website",
    "gratis consultatie website",
    "website offerte aanvragen",
    "webdesign consultatie",
  ],
  alternates: {
    canonical: "https://webamo.be/contact",
  },
  openGraph: {
    title: "Contact - Gratis Intakegesprek | Webamo",
    description:
      "Plan een gratis intakegesprek. Bespreek je website en automatisatie project.",
    url: "https://webamo.be/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="relative z-10">
      <Header />
      <ContactSection />
      <Footer />
    </main>
  );
}
