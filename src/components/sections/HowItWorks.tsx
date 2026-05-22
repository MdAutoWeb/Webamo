const steps = [
  {
    num: "01",
    title: "Gratis gesprek",
    body: "We leren je bedrijf kennen: wie je klanten zijn, wat je doelen zijn, wat er nu ontbreekt. Geen verplichtingen.",
  },
  {
    num: "02",
    title: "Bouwen & lanceren",
    body: "In 1 à 2 weken bouwen we je website en automatisaties. Jij keurt goed, wij lanceren. Snel en zonder gedoe.",
  },
  {
    num: "03",
    title: "Leads binnenhalen",
    body: "Je site staat live, Google vindt je, leads komen automatisch binnen in Airtable. Jij focust op je vak.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0A0A0A]">
      <div className="max-w-[1120px] mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/30 mb-3">Hoe het werkt</div>
          <h2 className="font-bold text-[32px] md:text-[40px] tracking-[-0.025em] leading-[1.1] text-white">
            Van gesprek tot leads<br />in 3 stappen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ num, title, body }) => (
            <div key={num} className="border border-white/10 rounded-[16px] p-7">
              <div className="font-bold text-[40px] tracking-[-0.04em] text-[#2563EB] mb-5 leading-none">{num}</div>
              <h3 className="font-semibold text-[18px] text-white tracking-[-0.01em] mb-2">{title}</h3>
              <p className="text-[14px] text-white/50 leading-[1.6]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
