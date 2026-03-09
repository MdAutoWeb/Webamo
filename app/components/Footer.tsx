import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black">
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 mb-12">
            {/* Brand Section */}
            <Link href="/" className="flex w-full justify-center md:w-auto md:justify-start">
              <img
                src="/images/Webamo-logo.png"
                alt="Webamo"
                className="h-16 md:h-24 w-auto block"
                style={{
                  filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.7))",
                }}
              />
            </Link>

            {/* Navigation Links */}
            <nav className="flex flex-row flex-wrap gap-6 md:gap-8">
              <Link
                href="/"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                href="/diensten"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Diensten
              </Link>
              <Link
                href="/contact"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacybeleid"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Privacybeleid
              </Link>
            </nav>

            {/* Contact Section */}
            <a
              href="mailto:info@webamo.be"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              info@webamo.be
            </a>
          </div>

          {/* SEO Text Block */}
          <div className="mb-8 pt-8 border-t border-white/10">
            <p className="text-white/50 text-xs text-center max-w-3xl mx-auto leading-relaxed">
              Webamo: Jouw partner voor webdesign en automatisatie in Brugge, Gent, Antwerpen en heel Vlaanderen.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-white/40 text-xs text-center">
              © {currentYear} Webamo – Websites &amp; more. Alle rechten
              voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
