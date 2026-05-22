"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ naam: "", email: "", telefoon: "", bericht: "" });

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.naam,
          email: form.email,
          situation: `Telefoon: ${form.telefoon}\n\n${form.bericht}`,
          brand: "webamo",
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="max-w-[1120px] mx-auto px-5 pt-16 pb-12 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-4">Contact</div>
          <h1 className="font-bold text-[38px] md:text-[48px] tracking-[-0.03em] leading-[1.05] mb-5">
            Plan een gratis<br />gesprek
          </h1>
          <p className="text-[15px] text-[#6B7280] leading-[1.65] mb-8 max-w-[400px]">
            We bekijken samen wat er ontbreekt en hoe snel we dat kunnen oplossen. Geen verplichtingen.
          </p>

          <ul className="space-y-4 text-[14px] text-[#374151]">
            <li className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[9px] bg-[#F5F5F5] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.34 2 2 0 0 1 3.6 2.13h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <a href="tel:+32493527360" className="hover:text-[#2563EB] transition-colors">+32 493 527 360</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[9px] bg-[#F5F5F5] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <a href="mailto:info@webamo.be" className="hover:text-[#2563EB] transition-colors">info@webamo.be</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[9px] bg-[#F5F5F5] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              Brugge, West-Vlaanderen
            </li>
          </ul>
        </div>

        {/* Right — Form */}
        <div className="bg-[#F5F5F5] rounded-[20px] p-8">
          {status === "success" ? (
            <div className="py-8 text-center">
              <div className="w-12 h-12 rounded-full bg-[#2563EB] flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-bold text-[20px] mb-2">Bericht ontvangen!</h2>
              <p className="text-[14px] text-[#6B7280]">We nemen zo snel mogelijk contact met je op.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-[12px] font-medium text-[#374151] mb-1" htmlFor="naam">Naam *</label>
                <input
                  id="naam"
                  type="text"
                  required
                  value={form.naam}
                  onChange={(e) => set("naam", e.target.value)}
                  className="w-full bg-white border border-[#E5E7EB] rounded-[10px] px-4 py-3 text-[14px] outline-none focus:border-[#2563EB] transition-colors"
                  placeholder="Jan Janssens"
                />
              </div>
              <div>
                <label className="block text-[12px] font-medium text-[#374151] mb-1" htmlFor="email">E-mail *</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className="w-full bg-white border border-[#E5E7EB] rounded-[10px] px-4 py-3 text-[14px] outline-none focus:border-[#2563EB] transition-colors"
                  placeholder="jan@bedrijf.be"
                />
              </div>
              <div>
                <label className="block text-[12px] font-medium text-[#374151] mb-1" htmlFor="telefoon">Telefoon</label>
                <input
                  id="telefoon"
                  type="tel"
                  value={form.telefoon}
                  onChange={(e) => set("telefoon", e.target.value)}
                  className="w-full bg-white border border-[#E5E7EB] rounded-[10px] px-4 py-3 text-[14px] outline-none focus:border-[#2563EB] transition-colors"
                  placeholder="+32 4xx xx xx xx"
                />
              </div>
              <div>
                <label className="block text-[12px] font-medium text-[#374151] mb-1" htmlFor="bericht">Bericht</label>
                <textarea
                  id="bericht"
                  rows={4}
                  value={form.bericht}
                  onChange={(e) => set("bericht", e.target.value)}
                  className="w-full bg-white border border-[#E5E7EB] rounded-[10px] px-4 py-3 text-[14px] outline-none focus:border-[#2563EB] transition-colors resize-none"
                  placeholder="Vertel kort wat je nodig hebt…"
                />
              </div>

              {status === "error" && (
                <p className="text-[13px] text-red-600">Er liep iets mis. Probeer opnieuw of stuur een mail naar info@webamo.be.</p>
              )}

              <Button
                href="#"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={(e) => { e.preventDefault(); submit(e as unknown as React.FormEvent); }}
                aria-disabled={status === "loading"}
              >
                {status === "loading" ? "Versturen…" : "Verstuur bericht"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
