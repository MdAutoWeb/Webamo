"use client";

import { useState } from "react";
import PricingCard from "@/components/ui/PricingCard";
import type { Plan } from "@/lib/data";

export type Billing = "monthly" | "yearly";

export default function PricingGrid({ plans }: { plans: Plan[] }) {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <>
      <div className="flex justify-center mb-10">
        <div
          role="tablist"
          aria-label="Facturatie"
          className="inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-white p-1"
        >
          <button
            type="button"
            role="tab"
            aria-selected={billing === "monthly"}
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
              billing === "monthly"
                ? "bg-[#0A0A0A] text-white"
                : "text-[#6B7280] hover:text-[#0A0A0A]"
            }`}
          >
            Maandelijks
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={billing === "yearly"}
            onClick={() => setBilling("yearly")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
              billing === "yearly"
                ? "bg-[#0A0A0A] text-white"
                : "text-[#6B7280] hover:text-[#0A0A0A]"
            }`}
          >
            Jaarlijks
            <span
              className={`text-[11px] font-semibold ${
                billing === "yearly" ? "text-[#7DD3A0]" : "text-[#2563EB]"
              }`}
            >
              1 maand gratis
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} billing={billing} />
        ))}
      </div>
    </>
  );
}
