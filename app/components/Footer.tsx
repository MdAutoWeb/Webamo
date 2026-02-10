import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050812]">
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 mb-8">
            {/* Brand Section */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex flex-col leading-tight">
                <span className="text-[17px] font-semibold text-white">
                  WEB<span className="text-[#40C4FF]">AMO</span>
                </span>
                <span className="text-[11px] text-white/65">
                  Web &amp; More
                </span>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="flex flex-row flex-wrap gap-4 md:gap-6">
              <Link
                href="/"
                className="text-white/70 hover:text-white text-[13px] md:text-[14px] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/diensten"
                className="text-white/70 hover:text-white text-[13px] md:text-[14px] transition-colors"
              >
                Diensten
              </Link>
              <Link
                href="/contact"
                className="text-white/70 hover:text-white text-[13px] md:text-[14px] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacybeleid"
                className="text-white/70 hover:text-white text-[13px] md:text-[14px] transition-colors"
              >
                Privacybeleid
              </Link>
            </nav>

            {/* Contact Section */}
            <a
              href="mailto:info@webamo.be"
              className="text-white/70 hover:text-[#40C4FF] text-[13px] md:text-[14px] transition-colors"
            >
              info@webamo.be
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-white/40 text-[12px] text-center">
              © {currentYear} Webamo – Websites &amp; more. Alle rechten
              voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
