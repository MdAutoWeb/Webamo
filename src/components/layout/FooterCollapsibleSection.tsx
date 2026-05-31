"use client";

import Link from "next/link";
import { useRef } from "react";

type LinkItem = { href: string; label: string };

export default function FooterCollapsibleSection({
  title,
  links,
}: {
  title: string;
  links: LinkItem[];
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleSummaryClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const details = detailsRef.current;
    if (!details) return;

    const scrollY = window.scrollY;
    const opening = !details.open;
    details.open = opening;

    requestAnimationFrame(() => {
      if (opening) {
        // Sectie bovenaan in beeld, zodat je de links vanaf het begin kunt lezen
        details.scrollIntoView({ block: "start", behavior: "smooth" });
      } else {
        window.scrollTo({ top: scrollY, behavior: "instant" });
      }
    });
  };

  return (
    <details ref={detailsRef} className="group">
      <summary
        onClick={handleSummaryClick}
        className="flex cursor-pointer list-none items-center justify-between gap-3 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/30 hover:text-white/50 transition-colors select-none [&::-webkit-details-marker]:hidden"
      >
        <span>{title}</span>
        <svg
          className="w-3.5 h-3.5 shrink-0 text-white/40 transition-transform group-open:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <div className="pt-4">
        <ul className="space-y-[10px]">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[14px] text-white/60 hover:text-white transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
