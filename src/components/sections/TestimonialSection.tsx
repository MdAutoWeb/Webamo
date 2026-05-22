import Link from "next/link";
import { cases } from "@/lib/data";

export default function TestimonialSection() {
  return (
    <section className="bg-[#F5F5F5]" aria-label="Klantreviews">
      <div className="max-w-[1120px] mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-3">
            Reviews
          </div>
          <h2 className="font-bold text-[32px] md:text-[38px] tracking-[-0.025em] leading-[1.1]">
            Wat klanten zeggen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {cases.map((c) => (
            <figure
              key={c.slug}
              className="bg-white rounded-[16px] border border-[#E5E7EB] p-7 text-left"
              itemScope
              itemType="https://schema.org/Review"
            >
              <meta itemProp="itemReviewed" content="Webamo" />
              <blockquote
                className="font-bold text-[17px] tracking-[-0.02em] leading-[1.35] text-[#0A0A0A] mb-5"
                itemProp="reviewBody"
              >
                &ldquo;{c.testimonialText}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white font-bold text-[13px]"
                  aria-hidden
                >
                  {c.testimonialAuthor
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-[14px] text-[#0A0A0A]" itemProp="author">
                    {c.testimonialAuthor}
                  </div>
                  <div className="text-[12px] text-[#9CA3AF]">{c.testimonialRole}</div>
                </div>
              </figcaption>
              <Link
                href={`/cases/${c.slug}`}
                className="mt-4 inline-block text-[13px] font-medium text-[#2563EB] hover:underline"
              >
                Bekijk case {c.name} →
              </Link>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
