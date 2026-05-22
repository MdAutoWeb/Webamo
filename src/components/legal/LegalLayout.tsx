import Link from "next/link";
import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="max-w-[720px] mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[13px] text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors mb-10"
      >
        ← Terug naar home
      </Link>
      <h1 className="font-bold text-[36px] md:text-[44px] tracking-[-0.03em] leading-[1.1] mb-8 text-[#0A0A0A]">
        {title}
      </h1>
      <div className="space-y-5 text-[15px] text-[#374151] leading-[1.75]">{children}</div>
    </section>
  );
}
