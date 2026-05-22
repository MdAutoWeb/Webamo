import Hero from "@/components/sections/Hero";
import SocialProofBar from "@/components/sections/SocialProofBar";
import PainSection from "@/components/sections/PainSection";
import DienstenSection from "@/components/sections/DienstenSection";
import HowItWorks from "@/components/sections/HowItWorks";
import CasesSection from "@/components/sections/CasesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import FadeUp from "@/components/ui/FadeUp";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FadeUp><SocialProofBar /></FadeUp>
      <FadeUp><PainSection /></FadeUp>
      <FadeUp><DienstenSection /></FadeUp>
      <FadeUp><HowItWorks /></FadeUp>
      <FadeUp><CasesSection /></FadeUp>
      <FadeUp><TestimonialSection /></FadeUp>
      <FadeUp><CTASection /></FadeUp>
    </>
  );
}
