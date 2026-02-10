export default function ProblemCards() {
  const problems = [
    {
      icon: (
        <svg
          className="w-[18px] h-[18px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ),
      text: (
        <>
          Leads vergeten
          <br />
          op te volgen
        </>
      ),
      variant: "red",
    },
    {
      icon: (
        <svg
          className="w-[18px] h-[18px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      text: (
        <>
          Afspraken via
          <br />
          bellen &amp; mailen
        </>
      ),
      variant: "purple",
    },
    {
      icon: (
        <svg
          className="w-[18px] h-[18px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      text: (
        <>
          Te veel manueel
          <br />
          werk
        </>
      ),
      variant: "blue",
    },
  ];

  type Variant = "red" | "purple" | "blue";

  const badge = (variant: Variant) => {
    if (variant === "red")
      return "bg-red-500/15 border-red-500/30 text-red-300";
    if (variant === "purple")
      return "bg-purple-500/15 border-purple-500/30 text-purple-300";
    return "bg-blue-500/15 border-blue-500/30 text-blue-300";
  };

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-16 pt-6 md:pt-8 pb-2 md:pb-3">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[34px] md:text-[44px] font-extrabold text-white text-center">
          Herken je dit?
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl px-6 py-7 text-center"
            >
              <div
                className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center border ${badge(
                  p.variant as Variant
                )}`}
              >
                {p.icon}
              </div>
              <p className="mt-4 text-white/90 text-[15px] font-semibold leading-snug">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[20px] md:text-[24px] font-semibold text-white/90">
            Dit kan{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              slimmer
            </span>
            . En{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              automatisch
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
