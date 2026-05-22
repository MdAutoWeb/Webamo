const pains = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: "Niet gevonden op Google",
    body: "Je concurrent staat bovenaan, jij niet. Nieuwe klanten vinden je bedrijf gewoon niet, ook al ben je beter.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.34 2 2 0 0 1 3.6 2.13h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: "Leads die nergens naartoe gaan",
    body: "Iemand vult je formulier in en dan? Geen automatische bevestiging, geen CRM, geen opvolging. Kansen verdwijnen.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Verouderde website die niet converteert",
    body: "Bezoekers komen, maar bellen niet. Je site ziet er niet professioneel uit op mobiel en geeft geen vertrouwen.",
  },
];

export default function PainSection() {
  return (
    <section className="max-w-[1120px] mx-auto px-5 py-16 md:py-24">
      <div className="text-center mb-12">
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-3">Herken je dit?</div>
        <h2 className="font-bold text-[32px] md:text-[40px] tracking-[-0.025em] leading-[1.1]">
          Waarom kleine bedrijven<br />online achterop raken
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pains.map(({ icon, title, body }) => (
          <div key={title} className="bg-[#F5F5F5] rounded-[16px] p-7">
            <div className="w-11 h-11 rounded-[10px] bg-white border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] mb-5">
              {icon}
            </div>
            <h3 className="font-semibold text-[17px] tracking-[-0.01em] mb-2">{title}</h3>
            <p className="text-[14px] text-[#6B7280] leading-[1.6]">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
