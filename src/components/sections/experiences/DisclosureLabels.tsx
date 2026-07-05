"use client";

import { useState } from "react";
import { Lock, Copy, Check } from "lucide-react";
import { EmailCapture } from "@/components/forms/EmailCapture";

/**
 * The Disclosure Label Generator (4.5), v2. Reuses the 6.5 Demo C compose logic
 * verbatim: checked clauses join into a meaningful, plain-language label. A live
 * mock ad shows the generic label frozen in place (the argument: it never
 * changes). The email gate reveals the meaningful label composited onto the ad
 * in context, with the not-legal-advice line and the state reminder rendered
 * WITH the result every time. Results compute client-side and are never held
 * hostage to email verification. We gate the reveal, not the person. No statute
 * citations; no FEC specifics.
 */

const OPTIONS = [
  { key: "narration", label: "AI narration", clause: "The narration is an AI-generated voice." },
  { key: "visuals", label: "AI visuals", clause: "Some imagery was created with AI." },
  { key: "broll", label: "AI b-roll mix", clause: "Real footage is mixed with AI-generated b-roll." },
  { key: "script", label: "AI script assist", clause: "AI helped draft the script; the campaign approved every word." },
];
const MEANINGFUL_EMPTY = "Nothing in this ad was AI-generated.";
const MEANINGFUL_SUFFIX = "Everything else was captured in real life and reviewed by humans.";
const GENERIC_LABEL = "AI-GENERATED CONTENT";
const NOT_LEGAL_ADVICE =
  "We provide tools and guidance, not legal advice. Disclosure requirements vary by state and change often; when in doubt, consult your campaign's legal counsel.";
const STATE_REMINDER = "Your state may require specific wording. Check before you publish.";

/* A mock ad player with a disclosure chip composited at the bottom. */
function AdPreview({ label, generic }: { label: string; generic?: boolean }) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-regal-navy" style={{ aspectRatio: "16 / 9" }}>
      <svg viewBox="0 0 320 180" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <rect width="320" height="180" fill="#0D1B3E" />
        <circle cx="258" cy="46" r="16" fill="#FFB800" opacity="0.75" />
        <path d="M0 132 Q80 100 160 122 T320 116 V180 H0 Z" fill="#4D9FFF" opacity="0.28" />
        <rect x="140" y="92" width="40" height="42" rx="4" fill="#E8F4F8" opacity="0.85" />
        <circle cx="160" cy="78" r="11" fill="#E8F4F8" opacity="0.9" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-11 h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-beacon-white text-lg">▶</span>
      </div>
      <div className="absolute left-2 right-2 bottom-2">
        {generic ? (
          <span className="inline-block bg-granite text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded">
            {label}
          </span>
        ) : (
          <span className="inline-block bg-regal-navy/90 border-l-4 border-verdant text-beacon-white text-[10px] sm:text-xs px-2.5 py-1.5 rounded-r leading-snug max-w-full">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

export function DisclosureLabels() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [unlocked, setUnlocked] = useState(false);
  const [copied, setCopied] = useState(false);

  const selectedClauses = OPTIONS.filter((o) => checked[o.key]).map((o) => o.clause);
  const meaningful =
    selectedClauses.length === 0 ? MEANINGFUL_EMPTY : `${selectedClauses.join(" ")} ${MEANINGFUL_SUFFIX}`;

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
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: the composer */}
          <div>
            <p className="text-slate text-xs font-bold uppercase tracking-wider mb-4">What did AI do in this piece?</p>
            <div className="space-y-2.5">
              {OPTIONS.map((option) => {
                const on = !!checked[option.key];
                return (
                  <label key={option.key}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-sm font-semibold cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-freedom-blue ${on ? "border-verdant bg-verdant/10 text-regal-navy" : "border-gray-200 text-granite hover:border-freedom-blue"}`}>
                    <input type="checkbox" checked={on}
                      onChange={(e) => setChecked((prev) => ({ ...prev, [option.key]: e.target.checked }))}
                      className="sr-only" />
                    <span aria-hidden="true" className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 ${on ? "border-verdant bg-verdant text-white" : "border-gray-300"}`}>
                      {on && <Check className="w-3.5 h-3.5" />}
                    </span>
                    {option.label}
                  </label>
                );
              })}
            </div>
            <p className="text-slate text-xs mt-4">Check nothing if the piece is entirely real. The ad updates as you go.</p>

            {/* The frozen generic label: the argument, visible pre-gate */}
            <div className="mt-6 rounded-xl border border-gray-200 p-4">
              <p className="text-slate text-[11px] font-bold uppercase tracking-wider mb-2">The generic label most rules ask for</p>
              <AdPreview label={GENERIC_LABEL} generic />
              <p className="text-slate text-xs mt-2 leading-relaxed">
                Notice it never changes, no matter what you check. That is the problem it is trying to solve, and doesn&apos;t.
              </p>
            </div>
          </div>

          {/* Right: the meaningful result, email-gated */}
          <div>
            <p className="text-slate text-xs font-bold uppercase tracking-wider mb-4">The label that actually tells voters the truth</p>
            {unlocked ? (
              <div>
                <AdPreview label={meaningful} />
                <div className="mt-4 rounded-2xl border-2 border-verdant/50 bg-verdant/5 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-verdant text-xs font-bold uppercase tracking-wider">Your plain-language label</p>
                    <button type="button" onClick={copyLabel}
                      className="inline-flex items-center gap-1.5 text-freedom-blue text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue rounded">
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="bg-white border-l-4 border-verdant text-granite text-sm px-4 py-3 rounded leading-relaxed" aria-live="polite">
                    {meaningful}
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <p className="rounded-xl bg-dawn-frost border border-gray-200 px-4 py-3 text-granite text-sm leading-relaxed">
                    <span className="font-semibold text-regal-navy">Before you publish: </span>{STATE_REMINDER}
                  </p>
                  <p className="text-slate text-xs leading-relaxed">{NOT_LEGAL_ADVICE}</p>
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl border-2 border-gray-200 overflow-hidden">
                <div className="p-5 blur-[7px] select-none" aria-hidden="true">
                  <AdPreview label={meaningful} />
                </div>
                <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px] flex items-center justify-center p-6">
                  <div className="w-full max-w-sm text-center">
                    <div className="w-11 h-11 rounded-full bg-regal-navy/5 flex items-center justify-center mx-auto mb-3">
                      <Lock className="w-5 h-5 text-regal-navy" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-regal-navy mb-1">Your label is ready.</h3>
                    <p className="text-slate text-sm mb-4">
                      Enter your email to see it on the ad and copy it. Your answers already composed it, right here in your browser.
                    </p>
                    <EmailCapture purpose="labelgen" buttonLabel="Reveal my label →" compact onSuccess={() => setUnlocked(true)} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
