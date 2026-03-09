export default function Header() {
  return (
    <header className="sticky top-0 z-30 px-6 md:px-12 lg:px-16 pt-3 pb-2 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/images/Webamo-logo.png"
            alt="Webamo"
            className="h-24 w-auto block"
            style={{ filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.7))" }}
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {[
            { href: "/", label: "Home" },
            { href: "/diensten", label: "Diensten" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
