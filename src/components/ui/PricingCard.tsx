import Button from "@/components/ui/Button";
import type { Plan } from "@/lib/data";
import type { Billing } from "@/components/ui/PricingGrid";

const YEAR_MONTHS = 11;
const fmtEuro = (n: number) => n.toLocaleString("nl-BE");

export default function PricingCard({
  plan,
  billing = "monthly",
}: {
  plan: Plan;
  billing?: Billing;
}) {
  const { featured } = plan;

  const hasRecurring = typeof plan.monthlyAmount === "number";
  const isYearly = billing === "yearly";
  const recurringAmount = hasRecurring
    ? isYearly
      ? plan.monthlyAmount! * YEAR_MONTHS
      : plan.monthlyAmount!
    : 0;
  const periodLabel = isYearly ? "/jaar" : "/m";

  return (
    <div
      className={`relative flex flex-col rounded-[20px] p-7 border ${
        featured
          ? "bg-[#0A0A0A] border-white/10 text-white"
          : "bg-white border-[#E5E7EB] text-[#0A0A0A]"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-[13px] left-7 text-[11px] font-semibold tracking-[0.1em] uppercase bg-[#2563EB] text-white px-3 py-[5px] rounded-full">
          {plan.badge}
        </span>
      )}

      <div className={`text-[11px] font-semibold tracking-[0.14em] uppercase mb-4 ${featured ? "text-white/50" : "text-[#6B7280]"}`}>
        {plan.name}
      </div>

      <div className="mb-1">
        <span className={`text-[38px] font-bold tracking-[-0.03em] leading-none ${featured ? "text-white" : "text-[#0A0A0A]"}`}>
          {plan.price}
        </span>
      </div>

      {hasRecurring && plan.monthlyOptional ? (
        <div
          className={`text-[11px] leading-[1.45] mb-6 space-y-1 ${featured ? "text-white/45" : "text-[#9CA3AF]"}`}
        >
          <div>{plan.sub}</div>
          <div>
            Optioneel: + €{fmtEuro(recurringAmount)}
            {periodLabel}
            {isYearly && " (1 maand gratis)"}
          </div>
          {plan.monthlySub && <div>{plan.monthlySub}</div>}
        </div>
      ) : hasRecurring ? (
        <div className={`text-[13px] mb-6 ${featured ? "text-white/50" : "text-[#9CA3AF]"}`}>
          + €{fmtEuro(recurringAmount)}
          {periodLabel} {plan.sub}
          {isYearly && (
            <span className={featured ? "text-[#7DD3A0]" : "text-[#2563EB]"}>
              {" "}
              · 1 maand gratis
            </span>
          )}
        </div>
      ) : (
        <div className={`text-[13px] mb-6 ${featured ? "text-white/50" : "text-[#9CA3AF]"}`}>
          {plan.sub}
        </div>
      )}

      <ul
        className={`space-y-[10px] flex-1 mb-7 ${
          plan.id === "automation"
            ? "max-h-[200px] overflow-y-auto pr-1 pricing-card-features-scroll"
            : ""
        }`}
      >
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-[9px]">
            <svg
              className="w-[15px] h-[15px] mt-[1px] shrink-0 text-[#2563EB]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className={`text-[13px] leading-[1.5] ${featured ? "text-white/80" : "text-[#374151]"}`}>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        href={plan.ctaHref}
        variant={featured ? "primary" : "outline"}
        size="md"
        className="w-full justify-center"
      >
        {plan.cta}
      </Button>

      {hasRecurring && !plan.monthlyOptional && (
        <p className={`mt-4 text-[11px] leading-[1.5] ${featured ? "text-white/30" : "text-[#9CA3AF]"}`}>
          {isYearly ? (
            <>Jaarlijks vooraf betaald, dat is 1 maand gratis t.o.v. maandelijks.</>
          ) : (
            <>Minimumperiode: 12 maanden.<br />Daarna maandelijks opzegbaar met 1 maand opzegtermijn.</>
          )}
        </p>
      )}

      {plan.footnote && (
        <p className={`mt-4 text-[11px] leading-[1.5] ${featured ? "text-white/30" : "text-[#9CA3AF]"}`}>
          {plan.footnote}
        </p>
      )}
    </div>
  );
}
