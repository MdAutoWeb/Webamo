"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

const links = [
  { href: "/diensten", label: "Diensten" },
  { href: "/cases", label: "Cases" },
  { href: "/tarieven", label: "Tarieven" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
      <nav className="max-w-[1120px] mx-auto px-5 min-h-[72px] py-3 flex items-center justify-between gap-4">
        <Logo />

        <ul className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-[14px] transition-colors ${
                  pathname === href
                    ? "text-[#0A0A0A] font-medium"
                    : "text-[#6B7280] hover:text-[#0A0A0A]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary" size="sm">
            Gratis gesprek
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-[8px] border border-[#E5E7EB] text-[#0A0A0A]"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white px-5 py-4">
          <ul className="space-y-1 mb-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-[15px] ${
                    pathname === href ? "font-medium text-[#0A0A0A]" : "text-[#6B7280]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" variant="primary" size="md" className="w-full justify-center">
            Gratis gesprek
          </Button>
        </div>
      )}
    </header>
  );
}
