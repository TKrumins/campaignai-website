"use client";

import { useState } from "react";
import { GrowthConversation } from "@/components/ui/GrowthConversation";
import { GrowthProfile } from "@/components/ui/GrowthProfile";
import {
  PRESETS,
  VIDEO_TYPES,
  totalVideos,
  type Mix,
  type Preset,
  type VideoTypeKey,
} from "@/lib/growth";

// The interactive "Built to Grow With You" widget. One shared control panel —
// pick your own mix of videos by type, or a preset, and flip on the GOTV sprint
// — drives BOTH views at once (conversation + profile), so the same input shows
// two ways of seeing the payoff. Client-side only; nothing stored or sent.

const DEFAULT: Preset = PRESETS[1]; // Mid-campaign — enough to show real growth

function sameMix(a: Mix, b: Mix): boolean {
  return VIDEO_TYPES.every((t) => a[t.key] === b[t.key]);
}

export function GrowthExplorer() {
  const [mix, setMix] = useState<Mix>({ ...DEFAULT.mix });
  const [gotv, setGotv] = useState<boolean>(DEFAULT.gotv);

  const n = totalVideos(mix);

  function setCount(key: VideoTypeKey, next: number) {
    const t = VIDEO_TYPES.find((v) => v.key === key);
    if (!t) return;
    setMix((m) => ({ ...m, [key]: Math.max(0, Math.min(t.max, next)) }));
  }

  function applyPreset(p: Preset) {
    setMix({ ...p.mix });
    setGotv(p.gotv);
  }

  const activePreset = PRESETS.find((p) => sameMix(p.mix, mix) && p.gotv === gotv);

  return (
    <div className="mx-auto w-full max-w-[1000px]">
      {/* Control panel */}
      <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate">
            Build your own example
          </p>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => applyPreset(p)}
                aria-pressed={activePreset?.key === p.key}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${
                  activePreset?.key === p.key
                    ? "border-regal-navy bg-regal-navy text-white"
                    : "border-gray-300 text-granite hover:border-regal-navy"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Per-type steppers */}
        <div className="grid gap-3 sm:grid-cols-2">
          {VIDEO_TYPES.map((t) => {
            const count = mix[t.key];
            return (
              <div
                key={t.key}
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-dawn-frost/60 px-4 py-3"
              >
                <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: count > 0 ? t.accent : "#D9DEE6" }} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-regal-navy">{t.label}</p>
                  <p className="truncate text-[11px] text-slate">{t.blurb}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setCount(t.key, count - 1)}
                    disabled={count <= 0}
                    aria-label={`Remove one ${t.label}`}
                    className="grid h-8 w-8 place-items-center rounded-full border border-gray-300 text-lg font-bold leading-none text-granite hover:border-regal-navy disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue"
                  >
                    &minus;
                  </button>
                  <span className="w-6 text-center font-heading text-lg font-extrabold tabular-nums text-regal-navy">{count}</span>
                  <button
                    type="button"
                    onClick={() => setCount(t.key, count + 1)}
                    disabled={count >= t.max}
                    aria-label={`Add one ${t.label}`}
                    className="grid h-8 w-8 place-items-center rounded-full border border-gray-300 text-lg font-bold leading-none text-granite hover:border-regal-navy disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* GOTV sprint toggle + tally */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
          <button
            type="button"
            onClick={() => setGotv((g) => !g)}
            aria-pressed={gotv}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-pioneer-gold ${
              gotv
                ? "border-pioneer-gold bg-pioneer-gold/15 text-regal-navy"
                : "border-gray-300 text-granite hover:border-pioneer-gold"
            }`}
          >
            <span
              className={`grid h-4 w-4 place-items-center rounded-full text-[10px] font-bold text-regal-navy ${gotv ? "bg-pioneer-gold" : "bg-gray-300"}`}
              aria-hidden="true"
            >
              {gotv ? "✓" : ""}
            </span>
            Running your GOTV sprint
          </button>
          <p className="text-xs text-slate">
            {n === 0 ? (
              "Add a video to begin."
            ) : (
              <>
                <span className="font-semibold text-regal-navy">{n}</span> {n === 1 ? "video" : "videos"} in your library
              </>
            )}
          </p>
        </div>
        <p className="mt-3 text-[11px] text-slate">Illustrative preview. Nothing you pick here leaves your browser.</p>
      </div>

      {/* Both views, driven by the same input */}
      <div className="mt-12">
        <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-liberty-crimson">
          As a conversation
        </p>
        <GrowthConversation mix={mix} gotv={gotv} />
      </div>

      <div className="my-14 flex items-center gap-4">
        <span className="h-px flex-1 bg-black/10" />
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate">Same campaign, two views</span>
        <span className="h-px flex-1 bg-black/10" />
      </div>

      <div>
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-freedom-blue">
          As a profile
        </p>
        <GrowthProfile mix={mix} gotv={gotv} />
      </div>
    </div>
  );
}
