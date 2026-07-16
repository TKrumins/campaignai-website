"use client";

import { useState } from "react";
import { Check, ShieldQuestion } from "lucide-react";
import { GrowthConversation } from "@/components/ui/GrowthConversation";
import { GrowthProfile } from "@/components/ui/GrowthProfile";
import {
  COUNTER_TYPES,
  LAUNCH,
  EMPTY_MIX,
  MAX_COUNT,
  gotvReady,
  type Mix,
  type CounterKey,
} from "@/lib/growth";

// The interactive "Built to Grow With You" widget. One shared control panel —
// a launch-video checkbox on top, then Bio / Fundraising Appeal / Policy
// Explainer counters (0–99), and a "Check if I'm GOTV-ready" toggle — drives
// BOTH views: the AI drafting your GOTV ad, and your campaign profile filling in.

const DEFAULT: Mix = { launch: true, bio: 1, fundraiser: 1, explainer: 1 };
const FULL: Mix = { launch: true, bio: 1, fundraiser: 5, explainer: 6 };

export function GrowthExplorer() {
  const [mix, setMix] = useState<Mix>({ ...DEFAULT });
  const [checked, setChecked] = useState<boolean>(false);
  const [view, setView] = useState<"profile" | "chat">("profile");

  function setCount(key: CounterKey, next: number) {
    setMix((m) => ({ ...m, [key]: Math.max(0, Math.min(MAX_COUNT, next)) }));
  }

  const ready = gotvReady(mix);

  return (
    <div className="mx-auto w-full max-w-[1000px]">
      {/* Control panel */}
      <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate">Build your own campaign</p>
          <div className="flex items-center gap-3 text-xs">
            <button type="button" onClick={() => { setMix({ ...FULL }); setChecked(true); }} className="font-semibold text-freedom-blue hover:underline">
              See a full campaign
            </button>
            <span className="text-gray-300">·</span>
            <button type="button" onClick={() => { setMix({ ...EMPTY_MIX }); setChecked(false); }} className="font-semibold text-slate hover:underline">
              Reset
            </button>
          </div>
        </div>

        {/* Launch / Announcement — standalone checkbox on top */}
        <button
          type="button"
          onClick={() => setMix((m) => ({ ...m, launch: !m.launch }))}
          aria-pressed={mix.launch}
          className={`mb-4 flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${
            mix.launch ? "border-transparent bg-regal-navy text-beacon-white shadow-md" : "border-gray-200 bg-dawn-frost/60 hover:border-regal-navy/40"
          }`}
        >
          <span
            className={`grid h-6 w-6 shrink-0 place-items-center rounded-md border-2 ${mix.launch ? "border-transparent" : "border-gray-300"}`}
            style={mix.launch ? { background: LAUNCH.accent } : undefined}
            aria-hidden="true"
          >
            {mix.launch && <Check className="h-4 w-4 text-white" strokeWidth={3} />}
          </span>
          <span className="min-w-0 flex-1">
            <span className={`block text-sm font-bold ${mix.launch ? "text-beacon-white" : "text-regal-navy"}`}>{LAUNCH.label}</span>
            <span className={`block text-[11px] ${mix.launch ? "text-beacon-white/60" : "text-slate"}`}>{LAUNCH.blurb} — every campaign starts here</span>
          </span>
        </button>

        {/* Bio / Fundraising Appeal / Policy Explainer — counters 0–99 */}
        <div className="grid gap-3 sm:grid-cols-3">
          {COUNTER_TYPES.map((t) => {
            const count = mix[t.key];
            return (
              <div key={t.key} className="flex flex-col rounded-2xl border border-gray-200 bg-dawn-frost/60 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: count > 0 ? t.accent : "#D9DEE6" }} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-regal-navy">{t.label}</p>
                    <p className="truncate text-[11px] text-slate">{t.blurb}</p>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCount(t.key, count - 1)}
                    disabled={count <= 0}
                    aria-label={`Remove one ${t.label}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-gray-300 text-xl font-bold leading-none text-granite hover:border-regal-navy disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue"
                  >
                    &minus;
                  </button>
                  <span className="font-heading text-2xl font-extrabold tabular-nums text-regal-navy">{count}</span>
                  <button
                    type="button"
                    onClick={() => setCount(t.key, count + 1)}
                    disabled={count >= MAX_COUNT}
                    aria-label={`Add one ${t.label}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-gray-300 text-xl font-bold leading-none text-granite hover:border-regal-navy disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* GOTV-ready check */}
        <div className="mt-5 border-t border-gray-100 pt-5">
          <button
            type="button"
            onClick={() => setChecked((c) => !c)}
            aria-pressed={checked}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pioneer-gold ${
              checked
                ? ready
                  ? "border-pioneer-gold bg-pioneer-gold/15 text-regal-navy"
                  : "border-gray-300 bg-dawn-frost text-granite"
                : "border-regal-navy bg-regal-navy text-beacon-white hover:bg-regal-navy/90"
            }`}
          >
            <ShieldQuestion className="h-4 w-4" />
            {checked ? (ready ? "You're GOTV-ready ✓" : "Not GOTV-ready yet") : "Check if I'm GOTV-ready"}
          </button>
          <p className="mt-3 text-[11px] text-slate">Illustrative preview. Nothing you pick here leaves your browser.</p>
        </div>
      </div>

      {/* One view at a time — a prominent toggle so the second view (Draft your
          GOTV ad) is clearly there to be explored, not easy to miss. */}
      <div className="mt-12">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-slate">
          Two ways to see it &mdash; switch anytime
        </p>
        <div className="mx-auto mb-8 flex w-fit items-center gap-1.5 rounded-full border-2 border-regal-navy/15 bg-white p-1.5 shadow-sm">
          {([
            { key: "profile", label: "Your campaign profile" },
            { key: "chat", label: "Draft your GOTV ad" },
          ] as const).map((t) => {
            const on = view === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setView(t.key)}
                aria-pressed={on}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${
                  on ? "bg-regal-navy text-beacon-white shadow" : "text-regal-navy/55 hover:text-regal-navy"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {view === "profile" ? (
          <GrowthProfile mix={mix} checked={checked} />
        ) : (
          <GrowthConversation mix={mix} />
        )}
      </div>
    </div>
  );
}
