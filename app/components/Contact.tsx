"use client";

import { useState } from "react";

const contactReasons = [
  "De Snelle Start - Professionele website voor verenigingen & starters",
  "High-Performance Web - Maatwerk website voor groeiende bedrijven",
  "Slimme Workflows & AI - Automatisatie, CRM & AI-oplossingen",
  "Ik weet het nog niet precies",
] as const;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    helpTypes: [] as string[],
    situation: "",
    preferredMoment: "middag",
    websiteTrap: "", // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (reason: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        helpTypes: [...prev.helpTypes, reason],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        helpTypes: prev.helpTypes.filter((r) => r !== reason),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    // Validatie: minstens 1 hulpvraag gekozen
    if (formData.helpTypes.length === 0) {
      setSubmitStatus("error");
      setErrorMessage(
        "Kies minstens één optie bij 'Waarmee kan ik je helpen?'."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          website: formData.website,
          helpTypes: formData.helpTypes,
          situation: formData.situation,
          preferredMoment: formData.preferredMoment,
          websiteTrap: formData.websiteTrap,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        // Log de volledige error response voor debugging
        console.error("API Error Response:", data);

        // Toon meer details aan de gebruiker als beschikbaar
        const errorMsg = data?.error || "Fout bij verzenden";
        const airtableError = data?.airtable;
        const fullError = airtableError
          ? `${errorMsg}${
              airtableError?.error?.message
                ? `: ${airtableError.error.message}`
                : ""
            }`
          : errorMsg;

        throw new Error(fullError);
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        helpTypes: [],
        situation: "",
        preferredMoment: "middag",
        websiteTrap: "",
      });
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Er is iets misgegaan. Probeer het opnieuw."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[30px] md:text-[40px] font-extrabold text-white leading-tight">
            Plan een kort{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              intakegesprek
            </span>
          </h1>
          <p className="mt-4 text-white/75 text-[15px] md:text-[16px] leading-relaxed">
            In 15–20 minuten kijken we samen wat er mogelijk is voor jouw
            website en automatisatie. Geen verkooppraat, maar concreet meedenken
            over wat je nodig hebt.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-10 items-start">
          {/* Form */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            {submitStatus === "success" && (
              <div className="mb-5 p-4 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm">
                Bedankt! Je aanvraag is verzonden. We nemen binnen 1 werkdag
                contact met je op.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-5 p-4 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 text-sm">
                {errorMessage}
              </div>
            )}
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Honeypot field - visueel verborgen voor betere bot-detectie */}
              <input
                type="text"
                name="websiteTrap"
                value={formData.websiteTrap}
                onChange={(e) =>
                  setFormData({ ...formData, websiteTrap: e.target.value })
                }
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-10000px",
                  opacity: 0,
                  height: 0,
                }}
              />

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-[0.12em] text-white/60 mb-2">
                    Naam
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent"
                    placeholder="Voornaam Achternaam"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-[0.12em] text-white/60 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent"
                    placeholder="jij@bedrijf.be"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-[0.12em] text-white/60 mb-2">
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent"
                    placeholder="Naam van je zaak"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-[0.12em] text-white/60 mb-2">
                    Website (optioneel)
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                    className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent"
                    placeholder="https://"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.12em] text-white/60 mb-2">
                  Waarmee kan ik je helpen?
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {contactReasons.map((reason) => (
                    <label
                      key={reason}
                      className="flex items-start gap-2 rounded-lg border border-white/12 bg-white/5 px-3 py-2.5 text-xs text-white/80 cursor-pointer hover:border-blue-500/60 hover:bg-white/10 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.helpTypes.includes(reason)}
                        onChange={(e) =>
                          handleCheckboxChange(reason, e.target.checked)
                        }
                        className="mt-0.5 h-3.5 w-3.5 rounded border-white/30 bg-transparent text-blue-500 focus:ring-blue-500/70"
                      />
                      <span>{reason}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.12em] text-white/60 mb-2">
                  Vertel kort iets over je situatie
                </label>
                <textarea
                  rows={4}
                  value={formData.situation}
                  onChange={(e) =>
                    setFormData({ ...formData, situation: e.target.value })
                  }
                  className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent resize-none"
                  placeholder="Waar loop je nu tegenaan? Wat wil je verbeteren?"
                />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.12em] text-white/60 mb-2">
                  Voorkeur moment
                </label>
                <select
                  value={formData.preferredMoment}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      preferredMoment: e.target.value,
                    })
                  }
                  className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent"
                >
                  <option value="ochtend">Ochtend</option>
                  <option value="middag">Middag</option>
                  <option value="avond">Avond</option>
                </select>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-[14px] shadow-[0_18px_40px_rgba(37,99,235,0.28)] transition-all"
                >
                  {isSubmitting
                    ? "Verzenden..."
                    : "Gratis intakegesprek plannen"}
                </button>
                <p className="text-[12px] text-white/50">
                  Je krijgt binnen 1 werkdag een reactie met een voorstel voor
                  een moment.
                </p>
              </div>
            </form>
          </div>

          {/* Side info / reassurance */}
          <div className="space-y-6 text-[14px] text-white/75">
            <div>
              <h2 className="text-[20px] md:text-[22px] font-semibold text-white">
                Wat kun je verwachten?
              </h2>
              <p className="mt-3 leading-relaxed">
                We lopen kort door je huidige situatie, je doelen en wat je
                belangrijk vindt in een samenwerking. Op basis daarvan krijg je
                een concreet voorstel hoe je website en automatisatie er zouden
                kunnen uitzien.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-[15px] font-semibold text-white mb-3">
                Praktisch:
              </h3>
              <ul className="space-y-2 text-white/75 text-[13px]">
                <li>• 15–20 minuten videocall (Google Meet of Zoom)</li>
                <li>• Gericht op zelfstandigen en kleine teams</li>
                <li>
                  • Geen verplichtingen – jij beslist daarna of je verder wilt
                </li>
              </ul>
            </div>

            <div className="text-white/55 text-[12px]">
              Liever rechtstreeks mailen? Stuur je vraag naar{" "}
              <span className="text-white">info@webamo.be</span> met een korte
              beschrijving van je situatie.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
