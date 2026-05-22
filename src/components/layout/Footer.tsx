import Link from "next/link";
import Logo from "@/components/ui/Logo";

const nav = [
  { href: "/diensten", label: "Diensten" },
  { href: "/cases", label: "Cases" },
  { href: "/tarieven", label: "Tarieven" },
  { href: "/webdesign-brugge", label: "Webdesign Brugge" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-[1120px] mx-auto px-5 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Logo href="/" variant="dark" />
            <p className="mt-4 text-[13px] text-white/50 leading-[1.7] max-w-[260px]">
              Websites en automatisaties voor kleine bedrijven in Brugge, Oostkamp, West-Vlaanderen en Vlaanderen.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/30 mb-4">Pagina&apos;s</div>
            <ul className="space-y-[10px]">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-[14px] text-white/60 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/30 mb-4">Contact</div>
            <ul className="space-y-[10px] text-[14px] text-white/60">
              <li>
                <a href="tel:+32493527360" className="hover:text-white transition-colors">+32 493 527 360</a>
              </li>
              <li>
                <a href="mailto:info@webamo.be" className="hover:text-white transition-colors">info@webamo.be</a>
              </li>
              <li>Brugge, West-Vlaanderen</li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61577447082676"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/webamo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="https://wa.me/32493527360"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.848L.057 23.077a.75.75 0 0 0 .921.919l5.352-1.46A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.799-.538-5.376-1.472l-.385-.228-3.99 1.088 1.1-3.898-.251-.4A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-[12px] text-white/30">
          <span>© {new Date().getFullYear()} Webamo. Alle rechten voorbehouden.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacybeleid</Link>
            <Link href="/cookies" className="hover:text-white/60 transition-colors">Cookiebeleid</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
