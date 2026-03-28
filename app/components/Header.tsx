import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 px-6 md:px-12 lg:px-16 pt-3 pb-2 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center md:justify-between gap-2 md:gap-0">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center md:justify-start">
          <Image
            src="/images/Webamo-logo.png"
            alt="Webamo"
            width={192}
            height={96}
            priority
            className="h-8 md:h-24 w-auto block"
            style={{ filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.7))" }}
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center justify-center md:justify-end gap-4 md:gap-8 text-xs sm:text-sm">
          {[
            { href: "/", label: "Home" },
            { href: "/diensten", label: "Diensten" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
