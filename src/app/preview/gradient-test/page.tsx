import type { Metadata } from "next";

/**
 * Hidden test bench for Patriot-gradient header text on a light background.
 * Noindex, unlinked, absent from sitemap. For reviewing legibility options
 * (the near-white middle of a real RWB gradient washes out on white).
 */
export const metadata: Metadata = {
  title: "Gradient Test",
  robots: { index: false, follow: false },
};

const SAMPLE = "Democracy shouldn't have a paywall.";

const options = [
  {
    label: "A · Plain navy (control)",
    note: "No gradient. Always legible, least expressive.",
    className: "text-regal-navy",
  },
  {
    label: "B · Real RWB Patriot, no shadow",
    note: "Matches the header exactly. Note the near-white middle washing out on white.",
    className: "patriot-gradient-text-bright",
  },
  {
    label: "C · Real RWB Patriot + faint navy under-shadow  (recommended)",
    note: "Same gradient as the header, kept legible by a faint navy drop-shadow that defines each glyph.",
    className: "patriot-gradient-text-shadowed",
  },
  {
    label: "D · Multi-Partisan (red–purple–blue)",
    note: "No white in the ramp, so nothing washes. But this is the Multi-Partisan Palette, not the Patriot gradient.",
    className: "patriot-gradient-text-onlight",
  },
];

export default function GradientTestPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[3px] text-slate">Internal test</p>
        <h1 className="mt-2 font-heading text-3xl font-extrabold text-regal-navy">
          Patriot-gradient header text on white
        </h1>
        <p className="mt-3 max-w-2xl text-granite">
          Four treatments of the same headline. Option C is my recommendation:
          the real Red/White/Blue Patriot gradient, kept crisp on a light
          background by a faint navy under-shadow.
        </p>

        <div className="mt-12 space-y-14">
          {options.map((o) => (
            <div key={o.label}>
              <p className="mb-3 text-sm font-semibold text-freedom-blue">{o.label}</p>
              <p
                className={`font-heading text-4xl font-extrabold tracking-[-1px] sm:text-5xl ${o.className}`}
              >
                {SAMPLE}
              </p>
              <p className="mt-3 text-sm text-slate">{o.note}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
