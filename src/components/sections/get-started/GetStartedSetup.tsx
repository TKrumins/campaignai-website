"use client";

import { useState, type CSSProperties } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AISparkle } from "@/components/ui/AISparkle";
import { CALENDLY_PURCHASE } from "@/lib/constants";

// The interactive heart of Get Started: three light questions assemble a
// tailored starting point and a booking link that carries the visitor's answers
// to the team (via utm_*), so the onboarding call opens already knowing their
// race and goal. Client-side only; nothing stored.

interface Audience {
  id: string;
  label: string;
  campaign: string; // utm_campaign
  price: string;
  priceNote: string;
}

// Pricing rules honored: candidates get the cycle rate; nonprofits are mission
// pricing (never an advertised discount); party/PAC/advocacy and consultants pay
// the standard rate.
const AUDIENCES: Audience[] = [
  { id: "candidate", label: "Candidate campaign", campaign: "candidate-campaign", price: "$599", priceNote: "per video, this cycle" },
  { id: "nonprofit", label: "Nonprofit organization", campaign: "nonprofit-mission", price: "Mission pricing", priceNote: "case by case — we'll find the fit" },
  { id: "party", label: "Party, PAC or advocacy", campaign: "professional-video", price: "$1,999", priceNote: "per finished video" },
  { id: "consultant", label: "Consultant or agency", campaign: "professional-video", price: "$1,999", priceNote: "per finished video" },
];

const GOALS: { id: string; label: string; line: string }[] = [
  { id: "introduce", label: "Introduce you", line: "an introduction — who you are and why you're running" },
  { id: "explain", label: "Explain an issue", line: "an issue explainer that makes your position clear" },
  { id: "raise", label: "Raise money", line: "a fundraising ask built to convert" },
  { id: "gotv", label: "Get out the vote", line: "a get-out-the-vote push for the final stretch" },
  { id: "rapid", label: "Respond to the moment", line: "a rapid-response video, ready when news breaks" },
];

const TIMELINES: { id: string; label: string; note: string }[] = [
  { id: "this-week", label: "This week", note: "We can move fast — your video is delivered within 48 hours of when you submit." },
  { id: "this-month", label: "This month", note: "Plenty of room to plan at your pace, then submit when you're confident." },
  { id: "exploring", label: "Just exploring", note: "No rush — the call is just to answer your questions and show you around." },
];

function ChipRow<T extends { id: string; label: string }>({
  legend,
  items,
  value,
  onChange,
}: {
  legend: string;
  items: T[];
  value: string | null;
  onChange: (id: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-slate sm:mb-2.5 sm:text-xs">{legend}</legend>
      <div className="grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:gap-2">
        {items.map((it) => {
          const on = it.id === value;
          return (
            <button
              key={it.id}
              type="button"
              onClick={() => onChange(it.id)}
              aria-pressed={on}
              className={`rounded-full border px-3 py-1.5 text-center text-[13px] font-semibold leading-tight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue sm:px-4 sm:py-2 sm:text-left sm:text-sm ${
                on ? "border-transparent bg-regal-navy text-white shadow-sm" : "border-gray-300 text-granite hover:border-regal-navy/50"
              }`}
            >
              {it.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function GetStartedSetup() {
  const [aud, setAud] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);

  const audience = AUDIENCES.find((a) => a.id === aud) ?? null;
  const goalObj = GOALS.find((g) => g.id === goal) ?? null;
  const timeObj = TIMELINES.find((t) => t.id === time) ?? null;

  const params = new URLSearchParams({ utm_source: "campaignai.us", utm_medium: "get-started" });
  params.set("utm_campaign", audience?.campaign ?? "get-started");
  if (goal) params.set("utm_content", goal);
  if (time) params.set("utm_term", time);
  const bookHref = `${CALENDLY_PURCHASE}?${params.toString()}`;

  return (
    <section className="bg-white pt-24 pb-12 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
        <div className="mx-auto mb-5 max-w-2xl text-center md:mb-10">
          <h1 className="font-heading text-[26px] font-extrabold leading-tight tracking-[-1px] text-regal-navy md:text-5xl">
            Let&apos;s make your first video.
          </h1>
          <p className="mx-auto mt-2 hidden max-w-md text-sm leading-snug text-granite sm:block md:mt-4 md:max-w-none md:text-xl md:leading-relaxed">
            Three quick answers and you&apos;ve got a plan. Nothing here is binding.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_360px] md:items-start md:gap-6">
          {/* The three questions */}
          <div className="space-y-4 rounded-2xl border border-gray-200 bg-dawn-frost/40 p-4 sm:space-y-6 sm:p-6 md:rounded-3xl md:p-8">
            <ChipRow legend="Who's this for?" items={AUDIENCES} value={aud} onChange={setAud} />
            <ChipRow legend="What should your first video do?" items={GOALS} value={goal} onChange={setGoal} />
            <ChipRow legend="When do you need it?" items={TIMELINES} value={time} onChange={setTime} />
            <p className="hidden text-xs text-slate sm:block">Nothing you pick here leaves your browser until you book a call.</p>
          </div>

          {/* The starting-point card — compact on mobile so the whole picker fits one screen */}
          <div className="relative rounded-2xl bg-regal-navy p-4 text-beacon-white shadow-xl ring-1 ring-white/10 sm:p-6 md:rounded-3xl md:p-7 md:sticky md:top-28">
            <AISparkle size={13} color="#7AB8FF" glow className="sparkle-twinkle absolute right-4 top-4" style={{ ["--dur"]: "2.8s" } as CSSProperties} />
            <p className="text-[10px] font-bold uppercase tracking-widest text-horizon-azure md:text-[11px]">Your starting point</p>

            {/* Price */}
            <div className="mt-2 flex items-baseline gap-2 border-b border-white/10 pb-3 md:mt-3 md:block md:pb-4">
              {audience ? (
                <>
                  <p className="font-heading text-2xl font-extrabold text-beacon-white md:text-3xl">{audience.price}</p>
                  <p className="text-xs text-beacon-white/60 md:text-sm">{audience.priceNote}</p>
                </>
              ) : (
                <>
                  <p className="font-heading text-xl font-extrabold text-beacon-white/70 md:text-2xl">Tell us who it&apos;s for</p>
                  <p className="text-xs text-beacon-white/50 md:text-sm">&mdash; we&apos;ll show your rate</p>
                </>
              )}
            </div>

            {/* Assembled summary — full on desktop, hidden on mobile to fit one screen */}
            <ul className="mt-4 hidden space-y-2.5 text-sm md:block">
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-freedom-blue" strokeWidth={3} />
                <span className="text-beacon-white/85">
                  {goalObj ? <>Your first video: {goalObj.line}.</> : <>You direct every creative call.</>}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-freedom-blue" strokeWidth={3} />
                <span className="text-beacon-white/85">
                  {timeObj ? timeObj.note : "Delivered within 48 hours of when you submit."}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-freedom-blue" strokeWidth={3} />
                <span className="text-beacon-white/85">Nothing is charged upfront — you approve the full cost first.</span>
              </li>
            </ul>

            <div className="mt-3 md:mt-6">
              <Button variant="patriot" href={bookHref} external className="w-full justify-center px-6 py-2.5 md:py-3">
                Book your onboarding call
              </Button>
              <p className="mt-2 text-center text-[11px] text-beacon-white/55 md:text-xs">
                A 30-min call to scope it. Nothing charged upfront.
              </p>
            </div>

            <p className="mt-3 hidden border-t border-white/10 pt-4 text-center text-xs text-beacon-white/60 md:block">
              Prefer to do it yourself later?{" "}
              <a href="#waitlist" className="inline-flex items-center gap-0.5 font-semibold text-freedom-blue hover:underline">
                Join the waitlist <ArrowRight className="h-3 w-3" />
              </a>
            </p>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate md:mt-6 md:text-sm">
          Want the full breakdown first?{" "}
          <a href="/pricing" className="font-semibold text-freedom-blue hover:underline">See all pricing &rarr;</a>
        </p>
      </div>
    </section>
  );
}
