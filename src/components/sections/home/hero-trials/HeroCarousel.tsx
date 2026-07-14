"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause } from "lucide-react";
import { AISparkle } from "@/components/ui/AISparkle";
import { showcaseVideos } from "@/components/sections/home/ShowcaseSection";

/**
 * Trial visual D (rework): a rotating carousel of our films that ALWAYS advances
 * in the same direction. The current card is centered with the next peeking in;
 * every 7s it steps forward, the outgoing card fading transparently. To keep the
 * direction consistent with only two films today, the first card is cloned onto
 * the end — the track advances past the last real card onto the clone, then
 * snaps back to the start with animation off, so it reads as one continuous
 * forward loop. Drops in more films with no code change. Same horizontal effect
 * on every breakpoint (no stacked cards on mobile), so pricing stays close.
 *
 * On load it starts on a RANDOM film (so we never favour one party over another)
 * and holds off-screen for ~1s before the first film scrolls in from the right.
 * Reduced-motion holds still, on that random film.
 */
const CARD_FRACTION = 0.84; // card width as a share of the viewport (~16% peek)
const GAP = 16;
const STEP_MS = 7000;
const INTRO_MS = 1000; // hold blank this long, then the first film scrolls in

export function HeroCarousel() {
  const vpRef = useRef<HTMLDivElement>(null);
  const [vw, setVw] = useState(0);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const N = showcaseVideos.length;
  const cards = [...showcaseVideos, showcaseVideos[0]]; // clone first onto the end

  useEffect(() => {
    const el = vpRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setVw(el.clientWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Pick a random starting film (post-mount, so no hydration mismatch and no
  // party favoured), then reveal after the intro delay. setState lives in async
  // callbacks (rAF/timeout), never synchronously in the effect body.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const raf = requestAnimationFrame(() => setIndex(Math.floor(Math.random() * N)));
    const t = setTimeout(() => setRevealed(true), reduced ? 0 : INTRO_MS);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [N]);

  // Auto-advance forward every STEP_MS once revealed (skip when reduced motion is
  // preferred or the viewer paused — WCAG 2.2.2, moving content over 5s).
  useEffect(() => {
    if (!revealed || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => i + 1), STEP_MS);
    return () => clearInterval(t);
  }, [revealed, paused]);

  // When we land on the cloned card (index === N), let the slide finish, then
  // snap back to the real first card with animation disabled for one frame.
  useEffect(() => {
    if (index !== N) return;
    const t = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, 720);
    return () => clearTimeout(t);
  }, [index, N]);

  // Re-enable animation the frame after a snap (two rAFs so the no-transition
  // paint commits first).
  useEffect(() => {
    if (animate) return;
    let r2 = 0;
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => setAnimate(true));
    });
    return () => {
      cancelAnimationFrame(r1);
      if (r2) cancelAnimationFrame(r2);
    };
  }, [animate]);

  const cardW = vw ? vw * CARD_FRACTION : 0;
  const step = cardW + GAP;
  const activeDot = index % N;
  // Before reveal, push the whole reel one viewport to the right so the frame is
  // blank; on reveal it slides back to 0 and the first film scrolls in.
  const introOffset = revealed ? 0 : vw || 2000;

  return (
    <div className="relative">
      <AISparkle size={13} color="#FF3366" glow className="sparkle-twinkle absolute -right-2 bottom-8 z-20" style={{ ["--dur"]: "2.6s" } as CSSProperties} />

      <div ref={vpRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${-index * step + introOffset}px)`,
            // Inline "none" wins for the snap-back frame; otherwise the class
            // controls it, so motion-reduce still disables the transition.
            transition: animate ? undefined : "none",
          }}
        >
          {cards.map((v, i) => {
            const isActive = i === index;
            return (
              <Link
                key={`${v.id}-${i}`}
                href="/#our-work"
                className="shrink-0 rounded-xl bg-white/[0.055] shadow-2xl ring-1 ring-white/15 transition-opacity duration-700 ease-out motion-reduce:transition-none"
                style={{
                  width: vw ? `${cardW}px` : `${CARD_FRACTION * 100}%`,
                  opacity: isActive ? 1 : 0.32,
                  // Hold opacity instant during the snap-back frame so card one
                  // never flashes; the class otherwise fades it with the slide.
                  transition: animate ? undefined : "none",
                }}
                aria-hidden={!isActive}
                tabIndex={isActive ? 0 : -1}
              >
                <div className="h-1 rounded-t-xl multipartisan-gradient" />
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image src={v.heroPoster} alt={v.title} fill sizes="480px" className="object-cover" />
                  <span
                    className="absolute left-3 top-3 rounded px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide"
                    style={{ backgroundColor: v.partyColor, color: v.partyTextColor }}
                  >
                    {v.party}
                  </span>
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-white/20 ring-1 ring-white/40 backdrop-blur-sm">
                      <Play className="ml-0.5 h-6 w-6 fill-beacon-white text-beacon-white" />
                    </span>
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-base font-bold leading-snug text-beacon-white">{v.title}</h3>
                  <p className="mt-1 text-sm text-horizon-azure">{v.credit}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* progress dots */}
      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? "Play film rotation" : "Pause film rotation"}
          className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-beacon-white/80 ring-1 ring-white/20 transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue"
        >
          {paused ? <Play className="ml-0.5 h-3 w-3 fill-current" /> : <Pause className="h-3 w-3 fill-current" />}
        </button>
        {showcaseVideos.map((v, i) => (
          <span
            key={v.id}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === activeDot ? 22 : 8,
              // Active pill takes the current film's party colour (matches the
              // party tag on the card); scales automatically as films are added.
              backgroundColor: i === activeDot ? v.partyColor : "rgba(232,244,248,0.3)",
            }}
          />
        ))}
        <span className="ml-auto text-xs text-beacon-white/50">More films dropping soon</span>
      </div>
    </div>
  );
}
