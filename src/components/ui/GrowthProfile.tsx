import type { CSSProperties } from "react";
import { AISparkle } from "@/components/ui/AISparkle";
import {
  computeTraits,
  readinessPct,
  gotvReady,
  totalContent,
  TRAIT_COLOR,
  TYPE_LABEL,
  COUNTER_TYPES,
  LAUNCH,
  type Mix,
  type ContentKey,
} from "@/lib/growth";

// Direction B — the campaign profile fills in as videos are added (gamified),
// and once the profile is well-formed the visitor can unlock GOTV readiness. The
// GOTV panel only lights up when they check for it AND they've crossed the bar.

const TYPE_ACCENT: Record<ContentKey, string> = {
  launch: LAUNCH.accent,
  bio: COUNTER_TYPES[0].accent,
  fundraiser: COUNTER_TYPES[1].accent,
  explainer: COUNTER_TYPES[2].accent,
};

const LEGEND: { key: ContentKey; label: string }[] = [
  { key: "launch", label: "Launch" },
  { key: "bio", label: "Bio" },
  { key: "fundraiser", label: "Fundraising Appeal" },
  { key: "explainer", label: "Policy Explainer" },
];

export function GrowthProfile({ mix, checked }: { mix: Mix; checked: boolean }) {
  const traits = computeTraits(mix);
  const overall = readinessPct(mix);
  const ready = gotvReady(mix);
  const empty = totalContent(mix) === 0;
  const present: Record<ContentKey, boolean> = {
    launch: mix.launch,
    bio: mix.bio > 0,
    fundraiser: mix.fundraiser > 0,
    explainer: mix.explainer > 0,
  };
  const low = traits.filter((t) => t.pct < 50).map((t) => t.trait);

  return (
    <div className="mx-auto w-full max-w-[900px]">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
        {/* Profile card — traits light up and fill as the catalogue grows */}
        <div className="relative rounded-3xl bg-regal-navy p-6 shadow-lg ring-1 ring-white/10 sm:p-8">
          <div className="mb-6 flex items-center gap-4">
            <div
              className="grid h-16 w-16 shrink-0 place-items-center rounded-full p-[3px] motion-safe:transition-all motion-safe:duration-700"
              style={{ background: `conic-gradient(${empty ? "rgba(255,255,255,0.25)" : "#8E5CF7"} ${overall * 3.6}deg, rgba(255,255,255,0.08) 0deg)` }}
            >
              <div className="grid h-full w-full place-items-center rounded-full bg-[#16264f]">
                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-beacon-white/85" aria-hidden="true">
                  <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.7-8 6v2h16v-2c0-3.3-3.6-6-8-6z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-heading text-lg font-extrabold text-beacon-white">Your campaign profile</p>
              <p className="text-sm text-beacon-white/60">
                {empty ? "A blank page — for now." : "Built from your catalogue, growing with every video."}
              </p>
            </div>
            <span className="ml-auto text-right">
              <span className="block font-heading text-2xl font-extrabold text-beacon-white motion-safe:transition-all motion-safe:duration-700">{overall}%</span>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-beacon-white/50">to GOTV ready</span>
            </span>
          </div>

          {/* Trait meters */}
          <div className="space-y-3">
            {traits.map((t) => (
              <div key={t.trait}>
                <div className="mb-1 flex items-baseline justify-between gap-2">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-beacon-white/90">
                    <span className="h-2 w-2 rounded-full" style={{ background: t.pct > 0 ? TRAIT_COLOR[t.trait] : "rgba(255,255,255,0.2)" }} />
                    {t.trait}
                  </span>
                  <span className="flex items-center gap-2">
                    {t.boostedBy.length > 0 && (
                      <span className="hidden text-[10px] text-beacon-white/45 sm:inline">
                        from {t.boostedBy.map((k) => TYPE_LABEL[k]).join(", ")}
                      </span>
                    )}
                    <span className="w-9 text-right text-xs font-bold tabular-nums" style={{ color: t.pct > 0 ? TRAIT_COLOR[t.trait] : "rgba(232,244,248,0.4)" }}>
                      {t.pct}%
                    </span>
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full motion-safe:transition-[width] motion-safe:duration-700 motion-safe:ease-out"
                    style={{ width: `${t.pct}%`, background: TRAIT_COLOR[t.trait] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GOTV readiness — only resolves once the visitor checks for it */}
        <div
          className={`relative flex flex-col rounded-3xl p-6 shadow-lg motion-safe:transition-all motion-safe:duration-500 ${
            checked && ready ? "bg-regal-navy ring-2 ring-pioneer-gold/60" : "bg-regal-navy/95 ring-1 ring-white/10"
          }`}
        >
          {checked && ready && (
            <AISparkle
              size={16}
              color="#FFB800"
              glow
              className="sparkle-twinkle absolute -right-1.5 -top-1.5"
              style={{ ["--dur"]: "2.6s" } as CSSProperties}
            />
          )}
          <span className={`text-[11px] font-bold uppercase tracking-wider ${checked && ready ? "text-pioneer-gold" : "text-beacon-white/45"}`}>
            GOTV sprint
          </span>

          {!checked ? (
            <>
              <p className="mt-1 font-heading text-xl font-extrabold text-beacon-white/85">Is your GOTV ready?</p>
              <p className="mt-2 text-sm leading-relaxed text-beacon-white/60">
                Build up your catalogue, then check whether CampaignAI has enough to assemble your
                closing push on demand.
              </p>
              <p className="mt-auto pt-4 text-xs font-semibold text-beacon-white/45">
                Hit &ldquo;Check if I&apos;m GOTV-ready&rdquo; above.
              </p>
            </>
          ) : ready ? (
            <>
              <p className="mt-1 font-heading text-xl font-extrabold text-beacon-white">Your CampaignAI is ready.</p>
              <p className="mt-1 text-sm text-beacon-white/70">
                Your catalogue is deep enough to assemble the closing push &mdash; and production
                streamlines from here.
              </p>
              <ul className="mt-4 space-y-1.5">
                {traits.map((t) => {
                  const on = t.pct >= 50;
                  return (
                    <li key={t.trait} className="flex items-center gap-2 text-sm">
                      <span
                        className="grid h-4 w-4 place-items-center rounded-full text-[10px] font-bold text-regal-navy"
                        style={{ background: on ? TRAIT_COLOR[t.trait] : "rgba(255,255,255,0.15)" }}
                        aria-hidden="true"
                      >
                        {on ? "✓" : ""}
                      </span>
                      <span className={on ? "text-beacon-white/90" : "text-beacon-white/40"}>{t.trait} on file</span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-auto pt-4 text-xs font-semibold text-pioneer-gold">
                A closing push in your voice, on demand.
              </p>
            </>
          ) : (
            <>
              <p className="mt-1 font-heading text-xl font-extrabold text-beacon-white/90">Almost there.</p>
              <p className="mt-2 text-sm leading-relaxed text-beacon-white/65">
                {mix.launch
                  ? "A few more videos and CampaignAI can assemble your GOTV sprint from your own material."
                  : "Start with your launch video, then keep building — that's what unlocks the GOTV sprint."}
              </p>
              {low.length > 0 && (
                <p className="mt-3 text-xs text-beacon-white/50">
                  Still light on: <span className="font-semibold text-beacon-white/75">{low.join(", ")}</span>.
                </p>
              )}
              <p className="mt-auto pt-4 text-xs font-semibold text-beacon-white/45">
                Add more above and check again.
              </p>
            </>
          )}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-[560px] text-center text-sm text-slate">
        Every video fills in another part of the picture.
        <br />
        <span className="font-semibold text-regal-navy">
          {empty
            ? "Add a video above and watch the profile come to life."
            : ready
              ? "Cross the line, and your closing GOTV ad is halfway made before you start."
              : "Keep going — each one gets you closer to a GOTV-ready campaign."}
        </span>
      </p>

      {/* Which content types are feeding the profile */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        {LEGEND.map((t) => (
          <span key={t.key} className={`flex items-center gap-1.5 text-[11px] ${present[t.key] ? "text-granite" : "text-silver-mist"}`}>
            <span className="h-2 w-2 rounded-full" style={{ background: present[t.key] ? TYPE_ACCENT[t.key] : "#D9DEE6" }} />
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}
