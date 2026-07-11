"use client";

import { useState } from "react";
import { Ban, Check } from "lucide-react";
import { ethicsRefusals } from "@/components/sections/home/EthicsSection";

// Engagement piece for the Ethics page: red lines AND the responsible uses on the
// other side of them. A toggle keeps both without a wall of text. The refusals
// are the shipped, Tom-approved three; the "responsible uses" are positive
// commitments (including the human-review value-add that isn't a red line).
const RESPONSIBLE = [
  "We bring your real story to life — and disclose clearly when AI helped make it.",
  "We help you reach voters with the truth, in your own words.",
  "Your data makes your videos better, and never leaves for anywhere else.",
  "Nothing ships until a human has reviewed and approved it.",
];

export function RedLinesToggle() {
  const [tab, setTab] = useState<"lines" | "uses">("lines");
  const isLines = tab === "lines";

  const items = isLines ? ethicsRefusals : RESPONSIBLE;
  const accent = isLines ? "text-critical-scarlet" : "text-verdant";
  const chipBg = isLines ? "bg-critical-scarlet" : "bg-verdant";
  const ring = isLines ? "ring-critical-scarlet/25" : "ring-verdant/30";
  const Icon = isLines ? Ban : Check;

  return (
    <div className="mx-auto max-w-[860px]">
      {/* Toggle */}
      <div className="mx-auto mb-8 flex w-fit items-center gap-1 rounded-full border border-gray-200 bg-white p-1">
        {([
          { key: "lines", label: "Lines we won't cross" },
          { key: "uses", label: "How we use AI responsibly" },
        ] as const).map((t) => {
          const on = tab === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              aria-pressed={on}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-verdant sm:text-sm ${
                on ? "bg-regal-navy text-beacon-white shadow-sm" : "text-slate hover:text-regal-navy"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Panel — re-keyed so it settles in on switch */}
      <div key={tab} className="vh-settle rounded-3xl border-2 border-gray-100 bg-dawn-frost p-6 sm:p-8">
        <p className={`mb-5 text-center font-heading text-sm font-bold uppercase tracking-widest ${accent}`}>
          {isLines ? "We will never…" : "What we do instead"}
        </p>
        <ul className="space-y-4">
          {items.map((line) => (
            <li key={line} className="flex items-start gap-3">
              <span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full ${chipBg}`}>
                <Icon className="h-4 w-4 text-white" strokeWidth={2.75} />
              </span>
              <span className={`font-heading text-lg font-bold text-regal-navy ring-inset ${ring}`}>{line}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-5 text-center text-sm text-slate">
        {isLines
          ? "Hard limits — the same in every state, for every client."
          : "The technology does the heavy lifting. The judgment is always yours."}
      </p>
    </div>
  );
}
