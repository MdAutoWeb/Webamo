const items = [
  "Brugge, Oostkamp en West-Vlaanderen",
  "1 week levertijd",
  "Airtable CRM integratie",
  "Lokale SEO specialist",
  "Automatische lead opvolging",
  "Mobiel-first design",
];

export default function SocialProofBar() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#0A0A0A] overflow-hidden py-4 border-y border-white/5">
      <div className="ticker-track flex items-center gap-10 w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-[12px] text-white/50 whitespace-nowrap font-medium tracking-[0.04em]">
            <span className="w-[4px] h-[4px] rounded-full bg-[#2563EB] shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
