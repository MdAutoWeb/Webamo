import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { cases } from "@/lib/data";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `Case: ${c.name}`,
    description: c.description,
    alternates: { canonical: `https://webamo.be/cases/${c.slug}` },
    openGraph: {
      title: `${c.name} — Case | Webamo`,
      description: c.description,
      url: `https://webamo.be/cases/${c.slug}`,
    },
  };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  const dark = c.variant === "dark";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://webamo.be" },
      { "@type": "ListItem", position: 2, name: "Cases", item: "https://webamo.be/cases" },
      { "@type": "ListItem", position: 3, name: c.name, item: `https://webamo.be/cases/${c.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className={dark ? "bg-[#0A0A0A]" : "bg-[#FAF7F4]"}>
        <div className="max-w-[1120px] mx-auto px-5 pt-16 pb-16 md:pt-24">
          <Link
            href="/cases"
            className={`inline-flex items-center gap-2 text-[13px] mb-8 ${dark ? "text-white/40 hover:text-white/70" : "text-[#9CA3AF] hover:text-[#6B7280]"} transition-colors`}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Alle cases
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {c.tags.map((t) => (
              <span
                key={t}
                className={`text-[10px] font-semibold tracking-[0.08em] uppercase px-[9px] py-[4px] rounded-full ${dark ? "bg-white/10 text-white/50" : "bg-black/8 text-[#6B7280]"}`}
              >
                {t}
              </span>
            ))}
          </div>

          <h1
            className={`font-bold text-[38px] md:text-[50px] tracking-[-0.03em] leading-[1.05] mb-4 max-w-[700px] ${dark ? "text-white" : "text-[#0A0A0A]"}`}
          >
            "{c.quote}"
          </h1>
          <p
            className={`text-[16px] leading-[1.65] max-w-[520px] ${dark ? "text-white/50" : "text-[#6B7280]"}`}
          >
            {c.description}
          </p>
        </div>
      </section>

      {/* Results + What we built */}
      <section className="max-w-[1120px] mx-auto px-5 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-5">
            Resultaten
          </div>
          <ul className="space-y-[12px]">
            {c.results.map((r) => (
              <li key={r} className="flex items-start gap-[10px]">
                <svg
                  className="w-[15px] h-[15px] mt-[2px] shrink-0 text-[#2563EB]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[15px] text-[#374151] leading-[1.5]">
                  {r}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-5">
            Wat we gebouwd hebben
          </div>
          <ul className="space-y-[12px]">
            {c.whatWeBuilt.map((w) => (
              <li key={w} className="flex items-start gap-[10px]">
                <svg
                  className="w-[15px] h-[15px] mt-[2px] shrink-0 text-[#9CA3AF]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
                <span className="text-[15px] text-[#374151] leading-[1.5]">
                  {w}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#F5F5F5]">
        <div className="max-w-[720px] mx-auto px-5 py-16 text-center">
          <blockquote className="font-bold text-[20px] md:text-[24px] tracking-[-0.02em] leading-[1.35] text-[#0A0A0A] mb-6">
            "{c.testimonialText}"
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white font-bold text-[13px]">
              {c.testimonialAuthor
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="text-left">
              <div className="font-semibold text-[14px] text-[#0A0A0A]">
                {c.testimonialAuthor}
              </div>
              <div className="text-[12px] text-[#9CA3AF]">
                {c.testimonialRole}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live site link */}
      <section className="max-w-[1120px] mx-auto px-5 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E5E7EB]">
        <div>
          <div className="text-[13px] text-[#9CA3AF] mb-1">Live website</div>
          <a
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[16px] text-[#0A0A0A] hover:text-[#2563EB] transition-colors"
          >
            {c.url} ↗
          </a>
        </div>
        <Button href="/contact" variant="primary" size="md">
          Zelfde resultaten voor mij
        </Button>
      </section>

      <CTASection />
    </>
  );
}
