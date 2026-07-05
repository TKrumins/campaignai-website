"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A Day on the Trail (4.2), v2. A sectioned full-height scroll story with an
 * illustrated scene per stop, time-of-day palette shifts, a persistent clock,
 * and a live screen-vs-people hours meter that visualizes "17 hours, 3 back."
 * One micro-interaction per stop and a Socratic aside. The day-job beat and the
 * doors beat are structural anchors around the digital absurdities (the
 * candidate as a one-person media company); the 3 hours AI gives back are
 * visibly spent at doors and in community. Party-neutral; soft-sell only.
 *
 * Reduced motion: sectioned vertical story, static palette blocks, clock and
 * meter update per section, micro-interaction motion CSS-gated.
 */

type Kind = "anchor" | "digital" | "resolve";
type Art = "dayjob" | "car" | "grocery" | "aspect" | "doors" | "notif" | "night" | "sunrise";

interface Stop {
  time: string;
  kind: Kind;
  eyebrow: string;
  headline: string;
  body: string;
  aside: string;
  bg: string;
  text: "light" | "dark";
  art: Art;
  hours: number; // hours logged by end of this stop
  screen: boolean; // does this block count as screen time?
  interaction: "retake" | "comments" | "aspect" | "notif" | "caption" | "doors" | "none";
}

const STOPS: Stop[] = [
  {
    time: "6:10 AM",
    kind: "anchor",
    eyebrow: "The day job",
    headline: "Before she is a candidate, she is at work.",
    body: "The alarm went off at five. She has a shift, a family, and a town she wants to serve. The campaign happens in the margins of a life that does not pause for it.",
    aside: "She has no staff. Every task on this page is hers. Keep count.",
    bg: "linear-gradient(160deg, #F7C9A8 0%, #E8A6B8 60%, #8E5CF7 130%)",
    text: "dark",
    art: "dayjob",
    hours: 2,
    screen: false,
    interaction: "none",
  },
  {
    time: "8:05 AM",
    kind: "digital",
    eyebrow: "Between events",
    headline: "Filming retakes in a parked car.",
    body: "Fifteen seconds to camera, in the one quiet place she could find. The light is wrong, a truck rolls by, and she starts over. Again.",
    aside: "A studio would fix this in one take. She is the studio.",
    bg: "linear-gradient(160deg, #BFE0FF 0%, #7AB8FF 100%)",
    text: "dark",
    art: "car",
    hours: 3,
    screen: true,
    interaction: "retake",
  },
  {
    time: "10:20 AM",
    kind: "digital",
    eyebrow: "In the grocery line",
    headline: "Replying to comments between the eggs and the milk.",
    body: "Every reply matters, they said. So she thumbs out answers with a basket on her arm, and three more arrive before she pockets the phone.",
    aside: "When does answering the public become never putting the phone down?",
    bg: "linear-gradient(160deg, #E8F4F8 0%, #B8D8F0 100%)",
    text: "dark",
    art: "grocery",
    hours: 5,
    screen: true,
    interaction: "comments",
  },
  {
    time: "12:40 PM",
    kind: "digital",
    eyebrow: "The lunch that wasn't",
    headline: "The same clip, exported three times.",
    body: "One video, three shapes: tall for stories, square for the feed, wide for the site. Same thirty seconds, re-rendered for every screen it has to fit.",
    aside: "Who decided one message needs three aspect ratios? Not her.",
    bg: "linear-gradient(160deg, #F5FAFC 0%, #DCEBF5 100%)",
    text: "dark",
    art: "aspect",
    hours: 8,
    screen: true,
    interaction: "aspect",
  },
  {
    time: "4:15 PM",
    kind: "anchor",
    eyebrow: "The doors",
    headline: "And then, for an hour, the real thing.",
    body: "No screen. Just a porch, a handshake, and a neighbor telling her what actually keeps them up at night. This is the part she ran for.",
    aside: "Notice how much lighter this stop feels. That is the whole point.",
    bg: "linear-gradient(160deg, #FFD9A6 0%, #FF9E6B 60%, #FF6B8F 120%)",
    text: "dark",
    art: "doors",
    hours: 9,
    screen: false,
    interaction: "doors",
  },
  {
    time: "7:30 PM",
    kind: "digital",
    eyebrow: "Back on the clock",
    headline: "The notification that never stops.",
    body: "One reply pulls in two more. A trend she should weigh in on. A metric that dipped. The little red number climbs no matter how fast she taps.",
    aside: "Is she reaching voters right now, or feeding a feed?",
    bg: "linear-gradient(160deg, #4A5AA8 0%, #2A2F6B 70%, #1A1E4A 100%)",
    text: "light",
    art: "notif",
    hours: 12,
    screen: true,
    interaction: "notif",
  },
  {
    time: "12:15 AM",
    kind: "digital",
    eyebrow: "Long after the town slept",
    headline: "Editing captions at midnight.",
    body: "The footage from the parked car, finally cut. She types the captions herself, one line at a time, because there was never a spare minute before now.",
    aside: "Every hour here is an hour not knocking, not sleeping, not living.",
    bg: "linear-gradient(160deg, #14183A 0%, #0D1B3E 100%)",
    text: "light",
    art: "night",
    hours: 17,
    screen: true,
    interaction: "caption",
  },
  {
    time: "The next morning",
    kind: "resolve",
    eyebrow: "More doors, fewer screens",
    headline: "What if the screen work took three hours less?",
    body: "The planning, the retakes, the re-exports, the captions: handed off. Those three hours do not vanish. They go back to the porch, the diner counter, and the people she actually wants to reach.",
    aside: "Same 17-hour day. Three hours moved back to where they belong.",
    bg: "linear-gradient(160deg, #C9F5E4 0%, #7AE0C0 60%, #00D084 130%)",
    text: "dark",
    art: "sunrise",
    hours: 17,
    screen: false,
    interaction: "doors",
  },
];

/* ---- illustrated scenes (compact, brand-token SVG) ---- */
function Scene({ art, light }: { art: Art; light: boolean }) {
  const ink = light ? "#E8F4F8" : "#0D1B3E";
  const soft = light ? "rgba(232,244,248,0.25)" : "rgba(13,27,62,0.16)";
  const common = "w-full max-w-[360px] h-auto";
  switch (art) {
    case "dayjob":
      return (
        <svg viewBox="0 0 240 150" className={common} aria-hidden="true">
          <rect x="30" y="60" width="180" height="70" rx="6" fill={soft} />
          <rect x="46" y="74" width="60" height="42" rx="3" fill={ink} opacity="0.7" />
          <rect x="120" y="74" width="74" height="10" rx="3" fill={ink} opacity="0.5" />
          <rect x="120" y="92" width="54" height="8" rx="3" fill={ink} opacity="0.35" />
          <circle cx="150" cy="44" r="12" fill={ink} opacity="0.8" />
          <path d="M134 62a16 16 0 0 1 32 0z" fill={ink} opacity="0.8" />
        </svg>
      );
    case "car":
      return (
        <svg viewBox="0 0 240 150" className={common} aria-hidden="true">
          <path d="M28 96 q10 -34 40 -40 h84 q30 6 40 40 z" fill={soft} />
          <rect x="28" y="96" width="184" height="26" rx="8" fill={ink} opacity="0.75" />
          <circle cx="66" cy="122" r="14" fill={ink} />
          <circle cx="174" cy="122" r="14" fill={ink} />
          <rect x="150" y="60" width="30" height="20" rx="3" fill="#FF3366" opacity="0.9" />
          <circle cx="165" cy="70" r="4" fill="#E8F4F8" />
        </svg>
      );
    case "grocery":
      return (
        <svg viewBox="0 0 240 150" className={common} aria-hidden="true">
          <rect x="34" y="40" width="30" height="90" rx="3" fill={soft} />
          <rect x="74" y="40" width="30" height="90" rx="3" fill={soft} />
          <rect x="114" y="40" width="30" height="90" rx="3" fill={soft} />
          <rect x="40" y="52" width="18" height="12" rx="2" fill={ink} opacity="0.4" />
          <rect x="80" y="70" width="18" height="12" rx="2" fill={ink} opacity="0.4" />
          <rect x="120" y="58" width="18" height="12" rx="2" fill={ink} opacity="0.4" />
          <rect x="172" y="70" width="34" height="56" rx="6" fill={ink} opacity="0.85" />
          <rect x="177" y="76" width="24" height="40" rx="2" fill="#4D9FFF" opacity="0.6" />
        </svg>
      );
    case "aspect":
      return (
        <svg viewBox="0 0 240 150" className={common} aria-hidden="true">
          <rect x="30" y="34" width="46" height="82" rx="5" fill={soft} stroke={ink} strokeOpacity="0.4" />
          <rect x="98" y="52" width="46" height="46" rx="5" fill={soft} stroke={ink} strokeOpacity="0.4" />
          <rect x="166" y="58" width="58" height="34" rx="5" fill={soft} stroke={ink} strokeOpacity="0.4" />
          <path d="M53 122 l0 12 M121 122 l0 12 M195 122 l0 12" stroke={ink} strokeOpacity="0.3" strokeWidth="2" />
          <circle cx="53" cy="75" r="7" fill="#8E5CF7" />
          <circle cx="121" cy="75" r="7" fill="#8E5CF7" />
          <circle cx="195" cy="75" r="7" fill="#8E5CF7" />
        </svg>
      );
    case "doors":
      return (
        <svg viewBox="0 0 240 150" className={common} aria-hidden="true">
          <rect x="84" y="28" width="72" height="102" rx="4" fill={soft} stroke={ink} strokeWidth="2.5" strokeOpacity="0.7" />
          <rect x="96" y="42" width="48" height="34" rx="3" fill="#FFB800" opacity="0.5" />
          <circle cx="146" cy="88" r="4" fill="#FF6B8F" />
          <path d="M40 118 q10 -20 24 -12 M40 118 h20" stroke={ink} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
          <circle cx="52" cy="96" r="8" fill={ink} opacity="0.7" />
        </svg>
      );
    case "notif":
      return (
        <svg viewBox="0 0 240 150" className={common} aria-hidden="true">
          <rect x="96" y="24" width="48" height="102" rx="8" fill={soft} stroke={ink} strokeOpacity="0.5" />
          <rect x="102" y="34" width="36" height="70" rx="3" fill={ink} opacity="0.25" />
          <circle cx="150" cy="30" r="12" fill="#FF3366" />
          <path d="M110 50 h20 M110 62 h24 M110 74 h16" stroke="#4D9FFF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    case "night":
      return (
        <svg viewBox="0 0 240 150" className={common} aria-hidden="true">
          <circle cx="196" cy="34" r="14" fill="#E8F4F8" opacity="0.25" />
          <rect x="50" y="70" width="140" height="54" rx="5" fill={soft} stroke={ink} strokeOpacity="0.4" />
          <rect x="62" y="82" width="116" height="8" rx="2" fill="#00D084" opacity="0.7" />
          <rect x="62" y="96" width="90" height="6" rx="2" fill={ink} opacity="0.4" />
          <rect x="62" y="106" width="70" height="6" rx="2" fill={ink} opacity="0.3" />
        </svg>
      );
    case "sunrise":
      return (
        <svg viewBox="0 0 240 150" className={common} aria-hidden="true">
          <circle cx="120" cy="118" r="34" fill="#FFB800" opacity="0.85" />
          <path d="M120 60 v-16 M156 74 l12 -12 M84 74 l-12 -12 M176 118 h16 M48 118 h16" stroke="#FF9E6B" strokeWidth="3" strokeLinecap="round" />
          <path d="M30 122 q40 -18 90 -14 t90 14" stroke={ink} strokeWidth="3" fill="none" opacity="0.5" />
        </svg>
      );
    default:
      return null;
  }
}

/* ---- per-stop micro-interactions ---- */
function RetakeButton() {
  const [n, setN] = useState(1);
  return (
    <button type="button" onClick={() => setN((v) => (v >= 7 ? 1 : v + 1))}
      className="mt-6 inline-flex items-center gap-3 rounded-full bg-regal-navy/90 text-beacon-white px-5 py-3 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label={`Take ${n}. Tap to try another take.`}>
      <span className="w-2.5 h-2.5 rounded-full bg-liberty-crimson" /> Take {n} &middot; tap to retake
    </button>
  );
}
function CommentsButton() {
  const [count, setCount] = useState(3);
  return (
    <button type="button" onClick={() => setCount((c) => c + 2)}
      className="mt-6 inline-flex items-center gap-3 rounded-full bg-white text-regal-navy px-5 py-3 text-sm font-semibold shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue"
      aria-label={`${count} comments waiting. Tap to reply to one.`}>
      Reply to one
      <span className="inline-flex items-center justify-center min-w-[24px] h-6 px-1.5 rounded-full bg-liberty-crimson text-white text-xs tabular-nums">{count}</span>
    </button>
  );
}
const ASPECTS = [{ label: "9:16", w: 30, h: 54 }, { label: "1:1", w: 46, h: 46 }, { label: "16:9", w: 62, h: 35 }];
function AspectToggle() {
  const [i, setI] = useState(0);
  const a = ASPECTS[i];
  return (
    <div className="mt-6 flex items-center gap-4">
      <div className="w-[70px] h-[60px] flex items-center justify-center">
        <div className="rounded-md bg-regal-navy/80 motion-safe:transition-all motion-safe:duration-300" style={{ width: a.w, height: a.h }} />
      </div>
      <div className="flex gap-2">
        {ASPECTS.map((opt, idx) => (
          <button key={opt.label} type="button" onClick={() => setI(idx)} aria-pressed={i === idx}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${i === idx ? "border-regal-navy bg-regal-navy text-white" : "border-regal-navy/30 text-regal-navy"}`}>
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
function NotifButton() {
  const [n, setN] = useState(4);
  return (
    <button type="button" onClick={() => setN((v) => v + 3)}
      className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/25 text-beacon-white px-5 py-3 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label={`${n} notifications. Tap to clear one; more arrive.`}>
      Clear one
      <span className="inline-flex items-center justify-center min-w-[24px] h-6 px-1.5 rounded-full bg-liberty-crimson text-white text-xs tabular-nums">{n}</span>
    </button>
  );
}
function CaptionButton() {
  const lines = ["I'm running because", "our town deserves", "someone who shows up."];
  const [i, setI] = useState(0);
  return (
    <button type="button" onClick={() => setI((v) => (v + 1) % (lines.length + 1))}
      className="mt-6 block w-full max-w-sm text-left rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label="Tap to type the next caption line.">
      <span className="text-beacon-white/90 text-sm font-mono">
        {lines.slice(0, i).join(" ") || " "}
        <span className="text-verdant">{i <= lines.length ? " ▍" : ""}</span>
      </span>
    </button>
  );
}
function DoorsMark({ light }: { light: boolean }) {
  return (
    <div className="mt-6 flex items-center gap-2" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((k) => (
        <svg key={k} viewBox="0 0 24 34" className="w-6 h-9">
          <rect x="2" y="2" width="20" height="30" rx="2" fill={light ? "rgba(232,244,248,0.25)" : "rgba(13,27,62,0.18)"} stroke={light ? "#E8F4F8" : "#0D1B3E"} strokeWidth="1.5" />
          <circle cx="17" cy="18" r="1.6" fill={light ? "#FFB800" : "#FF6B8F"} />
        </svg>
      ))}
    </div>
  );
}
function Interaction({ stop }: { stop: Stop }) {
  switch (stop.interaction) {
    case "retake": return <RetakeButton />;
    case "comments": return <CommentsButton />;
    case "aspect": return <AspectToggle />;
    case "notif": return <NotifButton />;
    case "caption": return <CaptionButton />;
    case "doors": return <DoorsMark light={stop.text === "light"} />;
    default: return null;
  }
}

export function DayOnTheTrail() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.idx));
        });
      },
      { threshold: 0.55 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stop = STOPS[active];
  const isResolve = stop.kind === "resolve";
  // Screen hours accrued so far; people hours are the remainder of the day logged.
  const screenHours = STOPS.slice(0, active + 1)
    .reduce((sum, s, i) => {
      const prev = i === 0 ? 0 : STOPS[i - 1].hours;
      return sum + (s.screen ? s.hours - prev : 0);
    }, 0);
  const totalHours = stop.hours;
  const peopleHours = totalHours - screenHours;
  // At the resolve beat, 3 hours move from screen back to people.
  const shownScreen = isResolve ? Math.max(screenHours - 3, 0) : screenHours;
  const shownPeople = isResolve ? peopleHours + 3 : peopleHours;
  const screenPct = totalHours ? (shownScreen / totalHours) * 100 : 0;

  return (
    <div className="relative">
      {/* Persistent clock + screen-vs-people meter */}
      <div className="sticky top-24 z-30 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto rounded-2xl bg-regal-navy/92 text-beacon-white px-4 py-2.5 shadow-lg backdrop-blur w-full max-w-[420px]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-heading font-bold text-sm tabular-nums">{stop.time}</span>
            <span className="text-beacon-white/60 text-[11px]">
              <span className="text-victory-rose font-semibold">{Math.round(shownScreen)}h screen</span>
              {" · "}
              <span className="text-verdant font-semibold">{Math.round(shownPeople)}h people</span>
            </span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden flex" aria-hidden="true">
            <div className="h-full bg-victory-rose motion-safe:transition-all motion-safe:duration-500" style={{ width: `${screenPct}%` }} />
            <div className="h-full bg-verdant motion-safe:transition-all motion-safe:duration-500" style={{ width: `${100 - screenPct}%` }} />
          </div>
        </div>
      </div>

      {STOPS.map((s, idx) => (
        <section
          key={idx}
          data-idx={idx}
          ref={(el) => { refs.current[idx] = el; }}
          className="min-h-[92vh] flex items-center"
          style={{ background: s.bg }}
        >
          <div className="max-w-[1000px] mx-auto px-5 sm:px-8 py-24 w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={s.text === "light" ? "text-beacon-white" : "text-regal-navy"}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                  s.kind === "anchor" ? "bg-liberty-crimson/15 text-liberty-crimson"
                  : s.kind === "resolve" ? "bg-white/70 text-regal-navy"
                  : s.text === "light" ? "bg-white/15 text-beacon-white" : "bg-regal-navy/10 text-regal-navy"}`}>
                  {s.eyebrow}
                </span>
                <span className="font-heading font-bold text-sm tabular-nums opacity-70">{s.time}</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-[1.08] tracking-[-1px] mb-4 max-w-[560px]">
                {s.headline}
              </h2>
              <p className={`text-base md:text-lg leading-relaxed max-w-[520px] ${s.text === "light" ? "text-beacon-white/85" : "text-granite"}`}>
                {s.body}
              </p>
              <p className={`mt-4 text-sm italic max-w-[480px] ${s.text === "light" ? "text-beacon-white/65" : "text-regal-navy/65"}`}>
                {s.aside}
              </p>
              <Interaction stop={s} />
            </div>
            <div className="flex justify-center md:justify-end order-first md:order-last">
              <Scene art={s.art} light={s.text === "light"} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
