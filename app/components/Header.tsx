export default function Header() {
  return (
    <header className="sticky top-0 z-30 px-6 md:px-12 lg:px-16 pt-4 pb-3 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
            <span className="text-black font-bold text-sm">W</span>
          </div>
          <span className="text-white text-xl font-medium">WEBAMO</span>
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
