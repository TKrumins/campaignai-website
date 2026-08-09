"use client";

import { useState, type CSSProperties } from "react";
import { Check, Radio } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { StatusBadge } from "@/components/ui/StatusBadge";

// Illustrative interactive: pick the state you run in, and your finished video
// shows the disclosure label attached + "cleared to ship" for that state. The
// per-state text stays general on purpose — this is guidance, not legal advice,
// and the standing disclaimer says so.
//
// Marked "Coming Soon": the public regulation tracker that powers per-state
// clearance hasn't shipped, so all copy here is forward-looking on purpose.
const STATES: [string, string][] = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"], ["CA", "California"],
  ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"], ["FL", "Florida"], ["GA", "Georgia"],
  ["HI", "Hawaii"], ["ID", "Idaho"], ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"],
  ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"], ["MD", "Maryland"],
  ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"], ["MS", "Mississippi"], ["MO", "Missouri"],
  ["MT", "Montana"], ["NE", "Nebraska"], ["NV", "Nevada"], ["NH", "New Hampshire"], ["NJ", "New Jersey"],
  ["NM", "New Mexico"], ["NY", "New York"], ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"],
  ["OK", "Oklahoma"], ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"], ["SC", "South Carolina"],
  ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"], ["UT", "Utah"], ["VT", "Vermont"],
  ["VA", "Virginia"], ["WA", "Washington"], ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"],
  ["DC", "Washington, D.C."],
];

export function ComplianceClearance() {
  const [abbr, setAbbr] = useState<string | null>(null);
  const selected = STATES.find(([a]) => a === abbr) ?? null;
  const stateName = selected ? selected[1] : null;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel text="Cleared to ship" color="verdant" />
            <div className="mt-4 flex justify-center">
              <StatusBadge label="Coming Soon" />
            </div>
            <h2 className="mt-4 mb-4 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
              Wherever you&apos;re running, your video will ship clean.
            </h2>
            <p className="text-lg leading-relaxed text-granite">
              A look at what&apos;s coming: pick the state you&apos;re running in,
              and we attach the disclosure label and keep it current, so your video
              is ready to post. Our public regulation tracker isn&apos;t released
              yet &mdash; until it is, this is a preview, not a live feature.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* The video frame — reflects the selected state */}
          <ScrollReveal>
            <div className="relative">
              <AISparkle size={15} color="#2FAE7E" glow className="sparkle-twinkle absolute -left-2 top-1 z-20" style={{ ["--dur"]: "2.8s" } as CSSProperties} />
              <div className="absolute -inset-3 rounded-3xl bg-verdant/5 ring-1 ring-verdant/15" aria-hidden="true" />
              <div className="relative aspect-video overflow-hidden rounded-xl border-[3px] border-white bg-regal-navy shadow-2xl ring-1 ring-black/10">
                <div className="absolute inset-0 bg-gradient-to-br from-regal-navy via-[#23407E] to-freedom-blue/70" aria-hidden="true" />
                <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-beacon-white/85 shadow-lg">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-regal-navy"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </span>

                {/* localized disclosure label */}
                <div key={abbr ?? "none"} className="vh-settle absolute inset-x-0 bottom-0 p-3">
                  <span className="inline-flex items-center gap-1 rounded-md bg-verdant/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                    <Check className="h-3 w-3" strokeWidth={3} />
                    {stateName ? `AI-disclosed · ${abbr}` : "AI-disclosed"}
                  </span>
                </div>

                {/* cleared-to-ship stamp */}
                <div key={`stamp-${abbr ?? "none"}`} className="vh-settle absolute top-3 right-3 rotate-[-9deg]">
                  <div className="inline-flex items-center gap-1.5 rounded-md border-2 border-verdant/80 bg-white/95 px-2.5 py-1 shadow">
                    <Check className="h-3.5 w-3.5 text-verdant" strokeWidth={3} />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-verdant">
                      {stateName ? "Cleared to ship" : "Ready when you are"}
                    </span>
                  </div>
                </div>
              </div>
              <p key={`cap-${abbr ?? "none"}`} className="vh-settle mt-4 text-center text-sm text-slate">
                {stateName ? (
                  <>How it will look &mdash; disclosure attached for <span className="font-semibold text-regal-navy">{stateName}</span>, ready to post.</>
                ) : (
                  <>Pick a state to preview your video cleared for it.</>
                )}
              </p>
            </div>
          </ScrollReveal>

          {/* State picker */}
          <ScrollReveal delay={100}>
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Radio className="h-4 w-4 text-verdant" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate">
                  All 50 states, D.C. &amp; territories &mdash; tracked at launch
                </span>
              </div>
              <div className="grid grid-cols-5 gap-1.5 sm:grid-cols-7">
                {STATES.map(([a, name]) => {
                  const on = a === abbr;
                  return (
                    <button
                      key={a}
                      type="button"
                      onClick={() => setAbbr(on ? null : a)}
                      aria-pressed={on}
                      aria-label={name}
                      title={name}
                      className={`rounded-md py-2 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-verdant ${
                        on ? "bg-verdant text-white shadow" : "bg-verdant/8 text-regal-navy hover:bg-verdant/20"
                      }`}
                    >
                      {a}
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                {stateName ? (
                  <>At launch, we&apos;ll track {stateName}&apos;s disclosure requirements and pending
                  legislation, and attach a label built to the most current guidance we have &mdash;
                  updated as the rules change.</>
                ) : (
                  <>Every video will ship with a state-specific disclosure label, built to the most
                  current guidance we can identify and updated as the laws change.</>
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="mx-auto mt-12 max-w-[700px] text-center text-sm text-slate/80">
            Illustrative preview of a feature we haven&apos;t released yet. CampaignAI provides
            compliance tools and guidance, not legal advice &mdash; when in doubt, consult your
            campaign&apos;s legal counsel.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
