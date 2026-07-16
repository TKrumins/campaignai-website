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
 * A single auto-scrolling marquee row. Drifts right-to-left by default, or
 * left-to-right when `reverse`, and pauses while hovered. Falls back to a
 * static horizontal scroll under prefers-reduced-motion.
 *
 * The track is driven by a CSS transform on a persistent position ref (not the
 * container's scrollLeft), and hover pauses by flipping a ref — not by tearing
 * down and restarting the animation. That keeps the position across pause/resume
 * and takes the row out of the browser's scroll path, so hovering or nudging the
 * wheel no longer makes it jump.
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
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const track = trackRef.current;
    if (!track) return;

    let animId: number;
    const speed = 0.5; // px per frame
    // Start a reverse row mid-track so it drifts rightward from the seam
    // instead of a hard left edge.
    if (reverse && posRef.current === 0) posRef.current = track.scrollWidth / 2;

    function step() {
      if (!track) return;
      const half = track.scrollWidth / 2; // one copy of the duplicated set
      if (!pausedRef.current && half > 0) {
        posRef.current += reverse ? -speed : speed;
        if (posRef.current >= half) posRef.current -= half;
        if (posRef.current < 0) posRef.current += half;
      }
      track.style.transform = `translate3d(${-posRef.current}px,0,0)`;
      animId = requestAnimationFrame(step);
    }

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [prefersReducedMotion, reverse]);

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
      className="overflow-hidden"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
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
