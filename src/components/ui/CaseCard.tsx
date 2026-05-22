import Image from "next/image";
import Link from "next/link";
import type { SiteCase } from "@/lib/data";

export default function CaseCard({
  c,
  featured = false,
}: {
  c: SiteCase;
  featured?: boolean;
}) {
  const dark = c.variant === "dark";

  return (
    <div
      className={`group rounded-[20px] overflow-hidden border transition-shadow hover:shadow-[0_20px_48px_-12px_rgba(10,10,10,.18)] ${
        dark ? "bg-[#0A0A0A] border-white/10" : "bg-[#FAF7F4] border-[#E5E7EB]"
      } ${featured ? "md:col-span-2" : ""}`}
    >
      <Link href={`/cases/${c.slug}`} tabIndex={-1} aria-hidden>
        <div
          className={`w-full h-[200px] ${dark ? "bg-[#1a1a1a]" : "bg-[#EDE9E3]"} relative overflow-hidden`}
        >
          <Image
            src={c.image}
            alt={`Screenshot ${c.name}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex gap-2 flex-wrap px-6 pb-5">
            {c.tags.map((t) => (
              <span
                key={t}
                className={`text-[10px] px-[8px] py-[4px] rounded-[5px] font-medium tracking-[0.06em] ${
                  dark
                    ? "bg-white/10 text-white/60"
                    : "bg-black/8 text-[#6B7280]"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="px-6 py-5">
        <a
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-[11px] mb-1 hover:underline block ${dark ? "text-white/40 hover:text-white/60" : "text-[#9CA3AF] hover:text-[#6B7280]"}`}
        >
          {c.url}
        </a>
        <Link href={`/cases/${c.slug}`}>
          <div
            className={`font-bold text-[20px] tracking-[-0.02em] leading-[1.2] mb-2 hover:text-[#2563EB] transition-colors ${dark ? "text-white" : "text-[#0A0A0A]"}`}
          >
            "{c.quote}"
          </div>
        </Link>
        <p
          className={`text-[13px] leading-[1.6] mb-4 ${dark ? "text-white/60" : "text-[#6B7280]"}`}
        >
          {c.description}
        </p>

        {/* Results */}
        <ul className="space-y-[6px]">
          {c.results.slice(0, 3).map((r) => (
            <li key={r} className="flex items-start gap-[8px]">
              <svg
                className="w-[14px] h-[14px] mt-[2px] shrink-0 text-[#2563EB]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span
                className={`text-[12px] leading-[1.5] ${dark ? "text-white/70" : "text-[#374151]"}`}
              >
                {r}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={`/cases/${c.slug}`}
          className="mt-5 inline-flex items-center gap-[6px] text-[13px] font-medium text-[#2563EB] hover:gap-[10px] transition-all"
        >
          Bekijk case
          <svg
            className="w-[14px] h-[14px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
