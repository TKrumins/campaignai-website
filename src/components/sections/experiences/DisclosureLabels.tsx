"use client";

import { useState } from "react";
import { Lock, Copy, Check } from "lucide-react";
import { EmailCapture } from "@/components/forms/EmailCapture";

/**
 * The Disclosure Label Generator (4.5). Reuses the 6.5 Demo C compose logic
 * verbatim: checked clauses join into a meaningful, plain-language label. The
 * reveal is email-gated, but the label computes client-side and is never held
 * hostage to email verification. We gate the reveal, not the person. The
 * not-legal-advice line and the state-label reminder render WITH every result,
 * never as a footnote. No statute citations; no FEC specifics.
 */

// Composer data, verbatim from the meaningful-disclosure content (6.5 C).
const OPTIONS = [
  { key: "narration", label: "AI narration", clause: "The narration is an AI-generated voice." },
  { key: "visuals", label: "AI visuals", clause: "Some imagery was created with AI." },
  { key: "broll", label: "AI b-roll mix", clause: "Real footage is mixed with AI-generated b-roll." },
  {
    key: "script",
    label: "AI script assist",
    clause: "AI helped draft the script; the campaign approved every word.",
  },
];
const MEANINGFUL_EMPTY = "Nothing in this ad was AI-generated.";
const MEANINGFUL_SUFFIX = "Everything else was captured in real life and reviewed by humans.";
const NOT_LEGAL_ADVICE =
  "We provide tools and guidance, not legal advice. Disclosure requirements vary by state and change often; when in doubt, consult your campaign's legal counsel.";
const STATE_REMINDER = "Your state may require specific wording. Check before you publish.";

export function DisclosureLabels() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [unlocked, setUnlocked] = useState(false);
  const [copied, setCopied] = useState(false);

  // Compose logic, verbatim (6.5 C): recomposes precisely with each change.
  const selectedClauses = OPTIONS.filter((o) => checked[o.key]).map((o) => o.clause);
  const meaningful =
    selectedClauses.length === 0
      ? MEANINGFUL_EMPTY
      : `${selectedClauses.join(" ")} ${MEANINGFUL_SUFFIX}`;

  function copyLabel() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(meaningful).then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      });
    }
  }

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[820px] mx-auto px-4 sm:px-6">
        {/* Composer inputs */}
        <fieldset className="mb-8">
          <legend className="text-slate text-xs font-bold uppercase tracking-wider mb-4 w-full text-center">
            What did AI do in this piece?
          </legend>
          <div className="flex flex-wrap justify-center gap-3">
            {OPTIONS.map((option) => {
              const on = !!checked[option.key];
              return (
                <label
                  key={option.key}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 text-sm font-semibold cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-freedom-blue ${
                    on
                      ? "border-verdant bg-verdant/10 text-regal-navy"
                      : "border-gray-200 bg-white text-granite hover:border-freedom-blue"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={(e) =>
                      setChecked((prev) => ({ ...prev, [option.key]: e.target.checked }))
                    }
                    className="sr-only"
                  />
                  <span aria-hidden="true" className={on ? "text-verdant" : "text-slate/40"}>
                    &#x2713;
                  </span>
                  {option.label}
                </label>
              );
            })}
          </div>
          <p className="text-slate text-xs text-center mt-4">
            Check nothing if the piece is entirely real. The label updates as you go.
          </p>
        </fieldset>

        {/* Result: gated reveal, computed client-side */}
        {unlocked ? (
          <div>
            <div className="rounded-2xl border-2 border-verdant/50 bg-verdant/5 p-6 md:p-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-verdant text-xs font-bold uppercase tracking-wider">
                  Your plain-language label
                </p>
                <button
                  type="button"
                  onClick={copyLabel}
                  className="inline-flex items-center gap-1.5 text-freedom-blue text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue rounded"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <div
                className="bg-white border-l-4 border-verdant text-granite text-base px-5 py-4 rounded leading-relaxed"
                aria-live="polite"
              >
                {meaningful}
              </div>
            </div>

            {/* Guardrails render WITH every result, never as a footnote */}
            <div className="mt-5 space-y-3">
              <p className="rounded-xl bg-dawn-frost border border-gray-200 px-5 py-3 text-granite text-sm leading-relaxed">
                <span className="font-semibold text-regal-navy">Before you publish: </span>
                {STATE_REMINDER}
              </p>
              <p className="text-slate text-xs leading-relaxed">{NOT_LEGAL_ADVICE}</p>
            </div>
          </div>
        ) : (
          <div className="relative rounded-2xl border-2 border-gray-200 overflow-hidden">
            {/* Preview of the result, blurred behind the gate */}
            <div className="p-6 md:p-8 blur-[6px] select-none" aria-hidden="true">
              <p className="text-verdant text-xs font-bold uppercase tracking-wider mb-3">
                Your plain-language label
              </p>
              <div className="bg-white border-l-4 border-verdant text-granite text-base px-5 py-4 rounded leading-relaxed">
                {meaningful}
              </div>
            </div>
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] flex items-center justify-center p-6">
              <div className="w-full max-w-sm text-center">
                <div className="w-11 h-11 rounded-full bg-regal-navy/5 flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-5 h-5 text-regal-navy" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-lg text-regal-navy mb-1">
                  Your label is ready.
                </h3>
                <p className="text-slate text-sm mb-4">
                  Enter your email to reveal it. Your answers already computed the label right
                  here in your browser.
                </p>
                <EmailCapture
                  purpose="labelgen"
                  buttonLabel="Reveal my label →"
                  compact
                  onSuccess={() => setUnlocked(true)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
