"use client";

export default function Portfolio() {
  return (
    <div className="max-w-sm mx-auto">
      {/* Mini case */}
      <a
        href="https://www.dakralux.be"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="glass-card rounded-lg px-3 py-2.5 md:px-3.5 md:py-2.5 hover:translate-y-[-1px] transition-transform">
          <h2 className="text-[14px] md:text-[15px] font-semibold text-white mb-1">
            Dakralux
          </h2>
          <p className="text-[11px] md:text-[12px] text-white/60 mb-2">
            Website + offerte-aanvragen voor een lokaal bedrijf
          </p>

          <ul className="space-y-0.5 text-[11px] md:text-[12px] text-white/75 mb-2">
            <li>• Nieuwe, moderne website</li>
            <li>• Duidelijke offerte-aanvragen</li>
            <li>• Snellere opvolging van leads</li>
          </ul>

          <div className="inline-flex items-center gap-1.5 text-[11px] md:text-[12px] text-cyan-400 font-medium">
            <span>👉 Bekijk website</span>
          </div>
        </div>
      </a>
    </div>
  );
}
