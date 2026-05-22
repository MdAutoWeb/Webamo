import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SocialProofBar from "@/components/sections/SocialProofBar";
import PainSection from "@/components/sections/PainSection";
import DienstenSection from "@/components/sections/DienstenSection";
import HowItWorks from "@/components/sections/HowItWorks";
import CasesSection from "@/components/sections/CasesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import HomeLocalSection from "@/components/sections/HomeLocalSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import FadeUp from "@/components/ui/FadeUp";
import { faqGeneral } from "@/lib/data";

const homeFaq = faqGeneral.slice(0, 4);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const metadata: Metadata = {
  title: "Website laten maken Brugge & West-Vlaanderen",
  description:
    "Website laten maken in Brugge, Oostkamp en West-Vlaanderen? Webamo bouwt conversiegerichte websites en automatisatie voor KMO's. Snel live, lokaal SEO-proof.",
  alternates: { canonical: "https://webamo.be" },
  openGraph: {
    title: "Website laten maken Brugge | Webamo",
    description:
      "Professionele websites en automatisatie voor kleine bedrijven in Brugge en West-Vlaanderen. Meer leads, minder handmatig werk.",
    url: "https://webamo.be",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <FadeUp>
        <SocialProofBar />
      </FadeUp>
      <FadeUp>
        <PainSection />
      </FadeUp>
      <FadeUp>
        <DienstenSection />
      </FadeUp>
      <FadeUp>
        <HowItWorks />
      </FadeUp>
      <FadeUp>
        <CasesSection />
      </FadeUp>
      <FadeUp>
        <TestimonialSection />
      </FadeUp>
      <FadeUp>
        <HomeLocalSection />
      </FadeUp>
      <FadeUp>
        <FAQSection items={homeFaq} />
      </FadeUp>
      <FadeUp>
        <CTASection />
      </FadeUp>
    </>
  );
}
