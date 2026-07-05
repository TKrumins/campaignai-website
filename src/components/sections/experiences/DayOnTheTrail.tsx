"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A Day on the Trail (4.2). A sectioned full-height scroll story with
 * time-of-day palette shifts and a persistent clock. One micro-interaction per
 * stop. The day-job beat and the doors beat are structural anchors on either
 * side of the digital absurdities (the candidate as a one-person media
 * company). The 3 hours AI gives back are visibly spent at doors and in
 * community. Party-neutral by design; soft-sell only, the page never pitches.
 *
 * Reduced motion: already a sectioned vertical story with static palette blocks;
 * the clock updates per section and micro-interaction motion is CSS-gated.
 */

type Kind = "anchor" | "digital" | "resolve";

interface Stop {
  time: string;
  kind: Kind;
  eyebrow: string;
  headline: string;
  body: string;
  bg: string; // inline background (palette)
  text: "light" | "dark";
  interaction: "retake" | "comments" | "aspect" | "notif" | "caption" | "doors" | "none";
}

const STOPS: Stop[] = [
  {
    time: "6:10 AM",
    kind: "anchor",
    eyebrow: "The day job",
    headline: "Before she is a candidate, she is at work.",
    body: "The alarm went off at five. She has a shift, a family, and a town she wants to serve. The campaign happens in the margins of a life that does not pause for it.",
    bg: "linear-gradient(160deg, #F7C9A8 0%, #E8A6B8 60%, #8E5CF7 130%)",
    text: "dark",
    interaction: "none",
  },
  {
    time: "8:05 AM",
    kind: "digital",
    eyebrow: "Between events",
    headline: "Filming retakes in a parked car.",
    body: "Fifteen seconds to camera, in the one quiet place she could find. The light is wrong, a truck rolls by, and she starts over. Again.",
    bg: "linear-gradient(160deg, #BFE0FF 0%, #7AB8FF 100%)",
    text: "dark",
    interaction: "retake",
  },
  {
    time: "10:20 AM",
    kind: "digital",
    eyebrow: "In the grocery line",
    headline: "Replying to comments between the eggs and the milk.",
    body: "Every reply matters, they said. So she thumbs out answers with a basket on her arm, and three more notifications arrive before she pockets the phone.",
    bg: "linear-gradient(160deg, #E8F4F8 0%, #B8D8F0 100%)",
    text: "dark",
    interaction: "comments",
  },
  {
    time: "12:40 PM",
    kind: "digital",
    eyebrow: "The lunch that wasn't",
    headline: "The same clip, exported three times.",
    body: "One video, three shapes: tall for stories, square for the feed, wide for the site. Same thirty seconds, re-rendered for every screen it has to fit.",
    bg: "linear-gradient(160deg, #F5FAFC 0%, #DCEBF5 100%)",
    text: "dark",
    interaction: "aspect",
  },
  {
    time: "4:15 PM",
    kind: "anchor",
    eyebrow: "The doors",
    headline: "And then, for an hour, the real thing.",
    body: "No screen. Just a porch, a handshake, and a neighbor telling her what actually keeps them up at night. This is the part she ran for.",
    bg: "linear-gradient(160deg, #FFD9A6 0%, #FF9E6B 60%, #FF6B8F 120%)",
    text: "dark",
    interaction: "doors",
  },
  {
    time: "7:30 PM",
    kind: "digital",
    eyebrow: "Back on the clock",
    headline: "The notification that never stops.",
    body: "One reply pulls in two more. A trend she should weigh in on. A metric that dipped. The little red number climbs no matter how fast she taps.",
    bg: "linear-gradient(160deg, #4A5AA8 0%, #2A2F6B 70%, #1A1E4A 100%)",
    text: "light",
    interaction: "notif",
  },
  {
    time: "12:15 AM",
    kind: "digital",
    eyebrow: "Long after the town slept",
    headline: "Editing captions at midnight.",
    body: "The footage from the parked car, finally cut. She types the captions herself, one line at a time, because there was never a spare minute before now.",
    bg: "linear-gradient(160deg, #14183A 0%, #0D1B3E 100%)",
    text: "light",
    interaction: "caption",
  },
  {
    time: "The next morning",
    kind: "resolve",
    eyebrow: "More doors, fewer screens",
    headline: "What if the screen work took three hours less?",
    body: "The planning, the retakes, the re-exports, the captions: handed off. Those three hours do not vanish. They go back to the porch, the diner counter, and the people she actually wants to reach.",
    bg: "linear-gradient(160deg, #C9F5E4 0%, #7AE0C0 60%, #00D084 130%)",
    text: "dark",
    interaction: "doors",
  },
];

/* ---- per-stop micro-interactions ---- */

function RetakeButton() {
  const [n, setN] = useState(1);
  return (
    <button
      type="button"
      onClick={() => setN((v) => (v >= 7 ? 1 : v + 1))}
      className="mt-6 inline-flex items-center gap-3 rounded-full bg-regal-navy/90 text-beacon-white px-5 py-3 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label={`Take ${n}. Tap to try another take.`}
    >
      <span className="w-2.5 h-2.5 rounded-full bg-liberty-crimson" />
      Take {n} &middot; tap to retake
    </button>
  );
}

function CommentsButton() {
  const [count, setCount] = useState(3);
  return (
    <button
      type="button"
      onClick={() => setCount((c) => c + 2)}
      className="mt-6 inline-flex items-center gap-3 rounded-full bg-white text-regal-navy px-5 py-3 text-sm font-semibold shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue"
      aria-label={`${count} comments waiting. Tap to reply to one.`}
    >
      Reply to one
      <span className="inline-flex items-center justify-center min-w-[24px] h-6 px-1.5 rounded-full bg-liberty-crimson text-white text-xs tabular-nums">
        {count}
      </span>
    </button>
  );
}

const ASPECTS = [
  { label: "9:16", w: 30, h: 54 },
  { label: "1:1", w: 46, h: 46 },
  { label: "16:9", w: 62, h: 35 },
];
function AspectToggle() {
  const [i, setI] = useState(0);
  const a = ASPECTS[i];
  return (
    <div className="mt-6 flex items-center gap-4">
      <div className="w-[70px] h-[60px] flex items-center justify-center">
        <div
          className="rounded-md bg-regal-navy/80 motion-safe:transition-all motion-safe:duration-300"
          style={{ width: a.w, height: a.h }}
        />
      </div>
      <div className="flex gap-2">
        {ASPECTS.map((opt, idx) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => setI(idx)}
            aria-pressed={i === idx}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${
              i === idx
                ? "border-regal-navy bg-regal-navy text-white"
                : "border-regal-navy/30 text-regal-navy"
            }`}
          >
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
    <button
      type="button"
      onClick={() => setN((v) => v + 3)}
      className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/25 text-beacon-white px-5 py-3 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label={`${n} notifications. Tap to clear one; more arrive.`}
    >
      Clear one
      <span className="inline-flex items-center justify-center min-w-[24px] h-6 px-1.5 rounded-full bg-liberty-crimson text-white text-xs tabular-nums">
        {n}
      </span>
    </button>
  );
}

function CaptionButton() {
  const lines = ["I'm running because", "our town deserves", "someone who shows up."];
  const [i, setI] = useState(0);
  return (
    <button
      type="button"
      onClick={() => setI((v) => (v + 1) % (lines.length + 1))}
      className="mt-6 block w-full max-w-sm text-left rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label="Tap to type the next caption line."
    >
      <span className="text-beacon-white/90 text-sm font-mono">
        {lines.slice(0, i).join(" ") || " "}
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
          <rect
            x="2"
            y="2"
            width="20"
            height="30"
            rx="2"
            fill={light ? "rgba(232,244,248,0.25)" : "rgba(13,27,62,0.18)"}
            stroke={light ? "#E8F4F8" : "#0D1B3E"}
            strokeWidth="1.5"
          />
          <circle cx="17" cy="18" r="1.6" fill={light ? "#FFB800" : "#FF6B8F"} />
        </svg>
      ))}
    </div>
  );
}

function Interaction({ stop }: { stop: Stop }) {
  switch (stop.interaction) {
    case "retake":
      return <RetakeButton />;
    case "comments":
      return <CommentsButton />;
    case "aspect":
      return <AspectToggle />;
    case "notif":
      return <NotifButton />;
    case "caption":
      return <CaptionButton />;
    case "doors":
      return <DoorsMark light={stop.text === "light"} />;
    default:
      return null;
  }
}

export function DayOnTheTrail() {
  const [activeTime, setActiveTime] = useState(STOPS[0].time);
  const [screenHours, setScreenHours] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            setActiveTime(STOPS[idx].time);
            // running tally of screen-time stops encountered (narrative, not a metric)
            const screensSoFar = STOPS.slice(0, idx + 1).filter(
              (s) => s.kind === "digital"
            ).length;
            setScreenHours(screensSoFar * 2 + (idx > 0 ? 1 : 0));
          }
        });
      },
      { threshold: 0.55 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Persistent clock */}
      <div
        className="sticky top-24 z-30 flex justify-center pointer-events-none"
        aria-hidden="true"
      >
        <span className="pointer-events-auto rounded-full bg-regal-navy/90 text-beacon-white text-sm font-heading font-bold px-4 py-2 shadow-lg backdrop-blur tabular-nums">
          {activeTime}
          <span className="ml-2 text-beacon-white/60 font-normal">
            {screenHours}h on a screen
          </span>
        </span>
      </div>

      {STOPS.map((stop, idx) => (
        <section
          key={idx}
          data-idx={idx}
          ref={(el) => {
            refs.current[idx] = el;
          }}
          className="min-h-[88vh] flex items-center"
          style={{ background: stop.bg }}
        >
          <div className="max-w-[760px] mx-auto px-5 sm:px-8 py-24 w-full">
            <div className={stop.text === "light" ? "text-beacon-white" : "text-regal-navy"}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                    stop.kind === "anchor"
                      ? "bg-liberty-crimson/15 text-liberty-crimson"
                      : stop.kind === "resolve"
                      ? "bg-white/70 text-regal-navy"
                      : stop.text === "light"
                      ? "bg-white/15 text-beacon-white"
                      : "bg-regal-navy/10 text-regal-navy"
                  }`}
                >
                  {stop.eyebrow}
                </span>
                <span className="font-heading font-bold text-sm tabular-nums opacity-70">
                  {stop.time}
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-[44px] md:leading-[1.08] tracking-[-1px] mb-4 max-w-[620px]">
                {stop.headline}
              </h2>
              <p
                className={`text-base md:text-lg leading-relaxed max-w-[560px] ${
                  stop.text === "light" ? "text-beacon-white/85" : "text-granite"
                }`}
              >
                {stop.body}
              </p>
              <Interaction stop={stop} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
