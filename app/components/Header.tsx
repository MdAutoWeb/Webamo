export default function Header() {
  return (
    <header className="relative z-20 px-6 md:px-12 lg:px-16 pt-6 pb-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo (clickable to home) */}
        <a href="/" className="flex items-center gap-3">
          <div className="relative w-14 h-14">
            <svg
              viewBox="0 0 48 48"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer ring */}
              <circle
                cx="24"
                cy="24"
                r="22"
                stroke="#40C4FF"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              {/* Inner ring */}
              <circle
                cx="24"
                cy="24"
                r="18"
                stroke="#40C4FF"
                strokeWidth="1.5"
                fill="none"
                opacity="0.4"
              />
              {/* Network grid lines */}
              <path
                d="M12 12 L20 16 L28 12 L36 16"
                stroke="#40C4FF"
                strokeWidth="1.5"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M12 24 L20 20 L28 24 L36 20"
                stroke="#40C4FF"
                strokeWidth="1.5"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M12 36 L20 32 L28 36 L36 32"
                stroke="#40C4FF"
                strokeWidth="1.5"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M12 12 L12 24 L12 36"
                stroke="#40C4FF"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M20 16 L20 20 L20 32"
                stroke="#40C4FF"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M28 12 L28 24 L28 36"
                stroke="#40C4FF"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M36 16 L36 20 L36 32"
                stroke="#40C4FF"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              {/* Network nodes/dots */}
              <circle cx="12" cy="12" r="2" fill="#40C4FF" opacity="0.9" />
              <circle cx="20" cy="16" r="2" fill="#40C4FF" opacity="0.9" />
              <circle cx="28" cy="12" r="2" fill="#40C4FF" opacity="0.9" />
              <circle cx="36" cy="16" r="2" fill="#40C4FF" opacity="0.9" />
              <circle cx="12" cy="24" r="2" fill="#40C4FF" opacity="0.9" />
              <circle cx="20" cy="20" r="2" fill="#40C4FF" opacity="0.9" />
              <circle cx="28" cy="24" r="2" fill="#40C4FF" opacity="0.9" />
              <circle cx="36" cy="20" r="2" fill="#40C4FF" opacity="0.9" />
              <circle cx="12" cy="36" r="2" fill="#40C4FF" opacity="0.9" />
              <circle cx="20" cy="32" r="2" fill="#40C4FF" opacity="0.9" />
              <circle cx="28" cy="36" r="2" fill="#40C4FF" opacity="0.9" />
              <circle cx="36" cy="32" r="2" fill="#40C4FF" opacity="0.9" />
              {/* Glow effect */}
              <circle
                cx="24"
                cy="24"
                r="22"
                stroke="#40C4FF"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
                className="blur-sm"
              />
            </svg>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold">
              <span className="text-white">WEB</span>
              <span className="text-[#40C4FF]">AMO</span>
            </span>
            <span className="text-[13px] text-white -mt-0.5">
              Web &amp; More
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[16px]">
          {[
            { href: "/", label: "Home" },
            { href: "/diensten", label: "Diensten" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
