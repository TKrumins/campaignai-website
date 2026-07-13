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
 * every 8s it steps forward, the outgoing card fading transparently. To keep the
 * direction consistent with only two films today, the first card is cloned onto
 * the end — the track advances past the last real card onto the clone, then
 * snaps back to the start with animation off, so it reads as one continuous
 * forward loop. Drops in more films with no code change. Same horizontal effect
 * on every breakpoint (no stacked cards on mobile), so pricing stays close.
 * Reduced-motion holds on card one.
 */
const CARD_FRACTION = 0.84; // card width as a share of the viewport (~16% peek)
const GAP = 16;
const STEP_MS = 8000;

export function HeroCarousel() {
  const vpRef = useRef<HTMLDivElement>(null);
  const [vw, setVw] = useState(0);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  const N = showcaseVideos.length;
  const cards = [...showcaseVideos, showcaseVideos[0]]; // clone first onto the end

  useEffect(() => {
    const el = vpRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setVw(el.clientWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Auto-advance forward every STEP_MS (skip when reduced motion is preferred or
  // the viewer has paused the rotation — WCAG 2.2.2, moving content over 5s).
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => i + 1), STEP_MS);
    return () => clearInterval(t);
  }, [paused]);

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

  return (
    <div className="relative">
      <AISparkle size={13} color="#FF3366" glow className="sparkle-twinkle absolute -right-2 bottom-8 z-20" style={{ ["--dur"]: "2.6s" } as CSSProperties} />

      <div ref={vpRef} className="overflow-hidden">
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: vw ? `translateX(${-index * step}px)` : undefined,
            transition: animate ? "transform 700ms cubic-bezier(0.4,0,0.2,1)" : "none",
          }}
        >
          {cards.map((v, i) => {
            const isActive = i === index;
            return (
              <Link
                key={`${v.id}-${i}`}
                href="/#our-work"
                className="shrink-0 rounded-xl bg-white/[0.055] shadow-2xl ring-1 ring-white/15"
                style={{
                  width: vw ? `${cardW}px` : `${CARD_FRACTION * 100}%`,
                  opacity: isActive ? 1 : 0.32,
                  // Fade with the slide, but hold opacity instant during the
                  // snap-back frame (animate=false) so card one never flashes.
                  transition: animate ? "opacity 700ms cubic-bezier(0.4,0,0.2,1)" : "none",
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
            style={{ width: i === activeDot ? 22 : 8, backgroundColor: i === activeDot ? "#7AB8FF" : "rgba(232,244,248,0.3)" }}
          />
        ))}
        <span className="ml-auto text-xs text-beacon-white/50">More films dropping soon</span>
      </div>
    </div>
  );
}
