import Image from "next/image";
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
              <Image
                src="/images/Webamo-logo.png"
                alt="Webamo"
                width={192}
                height={96}
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
            <div className="flex flex-col items-center md:items-end gap-3">
              {/* Contact Links */}
              <div className="flex flex-col items-center md:items-end gap-2">
                <a
                  href="tel:+32493527360"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  +32 493 527 360
                </a>
                <a
                  href="mailto:info@webamo.be"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  info@webamo.be
                </a>
              </div>
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="mailto:info@webamo.be"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/webamo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/32493527360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* SEO Text Block */}
          <div className="mb-8 pt-8 border-t border-white/10">
            <p className="text-white/50 text-xs text-center max-w-3xl mx-auto leading-relaxed">
              Webamo: Jouw partner voor webdesign en automatisatie in Brugge, Oostkamp, Zedelgem, Gent, Antwerpen en heel Vlaanderen.{" "}
              <a href="/website-dakwerker-brugge" className="underline hover:text-white/70 transition-colors">Website voor dakwerkers in Brugge</a>{" "}·{" "}
              <a href="/website-kinesist-brugge" className="underline hover:text-white/70 transition-colors">Website voor kinesisten in Brugge</a>.
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
