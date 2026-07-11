"use client";

import { useEffect, useRef, useState } from "react";

const quotes = [
  { name: "Emily", quote: "One of the most intelligent messages this campaign season." },
  { name: "South Carolina House Republican Caucus", quote: "This is amazing!" },
  { name: "Pete", quote: "Legit awesome candidate, she's got my support" },
  { name: "Johnny", quote: "Everyone needs to share this. Let's go!!!!" },
  { name: "Nortnic", quote: "THIS RIGHT HERE IS WHAT SC NEEDS!!!!! I LOVE THIS!!!!" },
  { name: "Aimee", quote: "I love this!!! Let's go build" },
  { name: "Kiammie", quote: "My sentiments exactly" },
  { name: "Debbie", quote: "I love this." },
  { name: "Marantha", quote: "Keep going 💪" },
];

// A restrained Multi-Partisan accent (red / violet / blue), cycled per card so
// the section reads with a little color without shouting.
const ACCENTS = ["#FF3366", "#8E5CF7", "#4D9FFF"];

function QuoteCard({ name, quote, accent }: { name: string; quote: string; accent: string }) {
  return (
    <div
      className="mx-2 w-[300px] flex-shrink-0 rounded-[10px] border-l-4 bg-white p-5 shadow-sm"
      style={{ borderLeftColor: accent }}
    >
      <p className="mb-1.5 font-heading text-sm font-bold text-regal-navy">{name}</p>
      <p className="font-body text-sm font-medium leading-relaxed text-granite">
        <span className="mr-0.5 font-heading text-lg font-extrabold leading-none" style={{ color: accent }}>
          &ldquo;
        </span>
        {quote}&rdquo;
      </p>
    </div>
  );
}

/**
 * A single auto-scrolling marquee row. Scrolls right-to-left by default, or
 * left-to-right when `reverse`, and pauses while hovered. Falls back to a
 * static horizontal scroll under prefers-reduced-motion.
 */
function MarqueeRow({
  items,
  reverse = false,
  prefersReducedMotion,
}: {
  items: { name: string; quote: string }[];
  reverse?: boolean;
  prefersReducedMotion: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;
    const el = scrollRef.current;
    if (!el) return;

    const half = el.scrollWidth / 2;
    let pos = reverse ? half : 0;
    let animId: number;
    const speed = 0.5; // px per frame

    function step() {
      if (!el) return;
      pos += reverse ? -speed : speed;
      if (pos >= half) pos = 0;
      if (pos <= 0) pos = half;
      el.scrollLeft = pos;
      animId = requestAnimationFrame(step);
    }

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [prefersReducedMotion, isPaused, reverse]);

  // Duplicated cards for a seamless loop.
  const cards = [...items, ...items];

  if (prefersReducedMotion) {
    return (
      <div className="mx-auto max-w-7xl overflow-x-auto px-4">
        <div className="flex gap-1 pb-2">
          {items.map((q, i) => (
            <QuoteCard key={q.name} {...q} accent={ACCENTS[i % ACCENTS.length]} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={scrollRef}
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex w-max">
        {cards.map((q, i) => (
          <QuoteCard key={`${q.name}-${i}`} {...q} accent={ACCENTS[i % ACCENTS.length]} />
        ))}
      </div>
    </div>
  );
}

export function SocialProofStrip() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Two rows drifting in opposite directions; the second is offset so the two
  // never line up.
  const rowA = quotes;
  const rowB = [...quotes].reverse();

  return (
    <section className="bg-dawn-frost py-7">
      {/* faint Multi-Partisan seam so the section is clearly its own beat */}
      <div className="mx-auto mb-5 h-[3px] w-24 rounded-full multipartisan-gradient" />
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-slate">
        Real reactions to videos produced by CampaignAI
      </p>
      <div className="flex flex-col gap-3">
        <MarqueeRow items={rowA} prefersReducedMotion={prefersReducedMotion} />
        <MarqueeRow items={rowB} reverse prefersReducedMotion={prefersReducedMotion} />
      </div>
    </section>
  );
}
