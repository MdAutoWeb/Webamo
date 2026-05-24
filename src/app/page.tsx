import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/site-metadata";
import Hero from "@/components/sections/Hero";
import SocialProofBar from "@/components/sections/SocialProofBar";
import PainSection from "@/components/sections/PainSection";
import DienstenSection from "@/components/sections/DienstenSection";
import HowItWorks from "@/components/sections/HowItWorks";
import CasesSection from "@/components/sections/CasesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = withSocialMetadata({
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
});

export default function HomePage() {
  return (
    <>
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
        <CTASection />
      </FadeUp>
    </>
  );
}
