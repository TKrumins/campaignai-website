"use client";

import { useState } from "react";
import { MockPlayer } from "@/components/disclosure/MockPlayer";
import { TEASER_PROVENANCE_RECEIPT } from "@/lib/constants";

export interface DisclosureData {
  hero: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    ethicsLine: string;
  };
  mechanisms: {
    heading: string;
    intro: string;
    items: {
      title: string;
      duration: string;
      description: string;
      labelText: string;
    }[];
    producedTag: string;
  };
  skeptic: {
    heading: string;
    intro: string;
    treatments: { name: string; description: string; trustLevel: string }[];
    barsNote: string;
    aapcText: string;
    aapcUrl: string;
  };
  composer: {
    heading: string;
    intro: string;
    options: { key: string; label: string; clause: string }[];
    genericLabel: string;
    genericNote: string;
    meaningfulEmpty: string;
    meaningfulSuffix: string;
  };
  guardrails: { notLegalAdvice: string };
}

/* Illustrative, deliberately UNNUMBERED trust bars */
function TrustBar({ level }: { level: string }) {
  const width = level === "high" ? "82%" : level === "mid" ? "44%" : "18%";
  const color =
    level === "high" ? "bg-verdant" : level === "mid" ? "bg-pioneer-gold" : "bg-critical-scarlet/70";
  return (
    <div
      className="h-2.5 rounded-full bg-regal-navy/10 overflow-hidden"
      role="img"
      aria-label={`Illustrative trust level: ${level}`}
    >
      <div className={`h-full rounded-full ${color}`} style={{ width }} />
    </div>
  );
}

export function DisclosureContent({ data, clips }: { data: DisclosureData; clips: boolean[] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const selectedClauses = data.composer.options
    .filter((o) => checked[o.key])
    .map((o) => o.clause);

  // The meaningful disclosure recomposes precisely with each change (6.5 C)
  const meaningful =
    selectedClauses.length === 0
      ? data.composer.meaningfulEmpty
      : `${selectedClauses.join(" ")} ${data.composer.meaningfulSuffix}`;

  return (
    <div>
      {/* Hero */}
      <section className="pt-16 pb-14 bg-regal-navy text-center px-4">
        <div className="max-w-[760px] mx-auto">
          <span className="inline-block text-verdant text-sm font-semibold uppercase tracking-[1.5px] mb-4">
            {data.hero.eyebrow}
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-beacon-white tracking-[-1px] mb-5">
            {data.hero.headline}
          </h1>
          <p className="text-beacon-white/85 text-lg leading-relaxed mb-6">
            {data.hero.subtitle}
          </p>
          <p className="text-beacon-white font-medium">
            <span className="text-verdant mr-1.5">&#x2713;</span>
            {data.hero.ethicsLine}
          </p>
        </div>
      </section>

      {/* A · The mechanism library */}
      <section className="py-16 md:py-20 bg-white px-4">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-heading font-extrabold text-3xl text-regal-navy mb-3 text-center">
            {data.mechanisms.heading}
          </h2>
          <p className="text-granite text-base text-center max-w-[640px] mx-auto mb-12">
            {data.mechanisms.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.mechanisms.items.map((item, i) => (
              <div key={item.title}>
                <MockPlayer
                  mechanism={i + 1}
                  labelText={item.labelText}
                  producedTag={data.mechanisms.producedTag}
                  hasClip={clips[i] ?? false}
                />
                <div className="mt-3 flex items-baseline gap-2">
                  <h3 className="font-heading font-bold text-lg text-regal-navy">
                    {item.title}
                  </h3>
                  <span className="text-slate text-xs">{item.duration}</span>
                </div>
                <p className="text-granite text-sm leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B · The skeptic comparison */}
      <section className="py-16 md:py-20 bg-dawn-frost px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-heading font-extrabold text-3xl text-regal-navy mb-3 text-center">
            {data.skeptic.heading}
          </h2>
          <p className="text-granite text-base text-center max-w-[600px] mx-auto mb-10">
            {data.skeptic.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            {data.skeptic.treatments.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 flex flex-col">
                <h3 className="font-heading font-bold text-lg text-regal-navy mb-2">
                  {t.name}
                </h3>
                <p className="text-granite text-sm leading-relaxed mb-5 flex-1">
                  {t.description}
                </p>
                <TrustBar level={t.trustLevel} />
              </div>
            ))}
          </div>
          <p className="text-slate text-xs text-center mb-8">{data.skeptic.barsNote}</p>
          <p className="text-granite text-sm leading-relaxed text-center max-w-[640px] mx-auto">
            {data.skeptic.aapcText}{" "}
            <a
              href={data.skeptic.aapcUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-freedom-blue font-semibold hover:underline"
            >
              Read the framework &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* C · The Disclosure Composer */}
      <section className="py-16 md:py-20 bg-white px-4">
        <div className="max-w-[860px] mx-auto">
          <h2 className="font-heading font-extrabold text-3xl text-regal-navy mb-3 text-center">
            {data.composer.heading}
          </h2>
          <p className="text-granite text-base text-center max-w-[560px] mx-auto mb-10">
            {data.composer.intro}
          </p>

          <fieldset className="flex flex-wrap justify-center gap-3 mb-10 border-0">
            <legend className="sr-only">What did AI do in this spot?</legend>
            {data.composer.options.map((option) => (
              <label
                key={option.key}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 text-sm font-semibold cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-freedom-blue ${
                  checked[option.key]
                    ? "border-verdant bg-verdant/10 text-regal-navy"
                    : "border-gray-200 bg-white text-granite hover:border-freedom-blue"
                }`}
              >
                <input
                  type="checkbox"
                  checked={!!checked[option.key]}
                  onChange={(e) =>
                    setChecked((prev) => ({ ...prev, [option.key]: e.target.checked }))
                  }
                  className="sr-only"
                />
                <span aria-hidden="true" className={checked[option.key] ? "text-verdant" : "text-slate/40"}>
                  &#x2713;
                </span>
                {option.label}
              </label>
            ))}
          </fieldset>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The generic label: frozen, by design */}
            <div className="rounded-2xl border-2 border-gray-200 p-6">
              <p className="text-slate text-xs font-bold uppercase tracking-wider mb-3">
                The generic label
              </p>
              <div className="bg-granite text-white text-center font-heading font-bold text-sm px-4 py-3 rounded mb-3" aria-live="polite">
                {data.composer.genericLabel}
              </div>
              <p className="text-slate text-sm leading-relaxed">
                <span className="font-semibold text-granite">It {data.composer.genericNote}</span>
              </p>
            </div>

            {/* The meaningful disclosure: recomposes precisely */}
            <div className="rounded-2xl border-2 border-verdant/50 p-6 bg-verdant/5">
              <p className="text-verdant text-xs font-bold uppercase tracking-wider mb-3">
                The meaningful disclosure
              </p>
              <div className="bg-white border-l-4 border-verdant text-granite text-sm px-4 py-3 rounded mb-3 leading-relaxed" aria-live="polite">
                {meaningful}
              </div>
              <p className="text-slate text-sm leading-relaxed">
                Changes with every box, because the truth does.
              </p>
            </div>
          </div>

          {/* Standing not-legal-advice line (disclosure requirements discussed) */}
          <p className="text-slate text-xs leading-relaxed text-center max-w-[560px] mx-auto mt-10">
            {data.guardrails.notLegalAdvice}
          </p>
        </div>
      </section>

      {/* Demo D (Provenance Receipt) moved internal; teaser flagged OFF */}
      {TEASER_PROVENANCE_RECEIPT && (
        <section className="py-12 bg-dawn-frost px-4 text-center">
          <p className="text-granite">
            Next in the library: the Provenance Receipt.
          </p>
        </section>
      )}
    </div>
  );
}
