import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import FAQSection from "@/components/sections/FAQSection";
import type { SeoPageConfig } from "@/lib/seo-landing-pages";
import { withSocialMetadata } from "@/lib/site-metadata";

export function buildSeoMetadata(config: SeoPageConfig): Metadata {
  const url = `https://webamo.be${config.path}`;
  return withSocialMetadata({
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url,
    },
  });
}

export default function SeoLandingPage({ config }: { config: SeoPageConfig }) {
  const url = `https://webamo.be${config.path}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.h1,
    provider: { "@id": "https://webamo.be/#organization" },
    areaServed: config.areaServed,
    url,
    description: config.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="max-w-[1120px] mx-auto px-5 pt-16 pb-12 md:pt-24">
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#2563EB] mb-4">
          {config.eyebrow}
        </div>
        <h1 className="font-bold text-[40px] md:text-[52px] tracking-[-0.03em] leading-[1.05] mb-5 max-w-[800px]">
          {config.h1}
        </h1>
        {config.intro.map((paragraph, i) => (
          <p
            key={i}
            className={`text-[15px] md:text-[16px] text-[#6B7280] leading-[1.7] max-w-[720px] ${
              i < config.intro.length - 1 ? "mb-4" : "mb-8"
            }`}
          >
            {paragraph}
          </p>
        ))}
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="primary" size="lg">
            Gratis gesprek plannen
          </Button>
          <Button href="/tarieven" variant="outline" size="lg">
            Bekijk tarieven
          </Button>
        </div>
      </section>

      {config.sections.map((section, index) => (
        <section
          key={section.h2}
          className={
            index % 2 === 1
              ? "bg-[#F5F5F5] border-y border-[#E5E7EB]"
              : undefined
          }
        >
          <div className="max-w-[720px] mx-auto px-5 py-14 md:py-16">
            <h2 className="font-bold text-[24px] md:text-[28px] tracking-[-0.02em] mb-4 text-[#0A0A0A]">
              {section.h2}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[15px] text-[#6B7280] leading-[1.7] mb-4 last:mb-0"
              >
                {p}
              </p>
            ))}
            {index === config.sections.length - 1 && (
              <p className="text-[14px] text-[#6B7280] leading-[1.7] mt-2">
                <Link href="/tarieven" className="font-medium text-[#2563EB] hover:underline">
                  Tarieven bekijken
                </Link>
                {" · "}
                <Link href="/contact" className="font-medium text-[#2563EB] hover:underline">
                  Contact opnemen
                </Link>
              </p>
            )}
          </div>
        </section>
      ))}

      <section className="max-w-[1120px] mx-auto px-5 py-14 md:py-16">
        <h2 className="font-bold text-[24px] md:text-[28px] tracking-[-0.02em] mb-6 text-[#0A0A0A]">
          {config.benefitsTitle}
        </h2>
        <ul className="space-y-3 text-[15px] text-[#374151] max-w-[640px]">
          {config.benefits.map((item) => (
            <li key={item} className="flex items-start gap-[9px]">
              <svg
                className="w-[15px] h-[15px] mt-[3px] shrink-0 text-[#2563EB]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[14px] text-[#6B7280]">
          Wil je weten wat het concreet kost?{" "}
          <Link href="/tarieven" className="font-medium text-[#2563EB] hover:underline">
            Bekijk onze tarieven
          </Link>
          {" "}of{" "}
          <Link href="/contact" className="font-medium text-[#2563EB] hover:underline">
            plan een gratis gesprek
          </Link>
          .
        </p>
      </section>

      <FAQSection items={config.faq} />

      <section className="bg-[#0A0A0A]">
        <div className="max-w-[720px] mx-auto px-5 py-16 md:py-20 text-center">
          <h2 className="font-bold text-[28px] md:text-[36px] tracking-[-0.025em] leading-[1.15] text-white mb-5">
            {config.ctaTitle}
          </h2>
          <p className="text-[15px] text-white/50 leading-[1.65] mb-8 max-w-[520px] mx-auto">
            {config.ctaText}
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Neem contact op
          </Button>
        </div>
      </section>
    </>
  );
}
