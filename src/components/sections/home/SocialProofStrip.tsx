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
  { name: "Marantha", quote: "Keep going \uD83D\uDCAA" },
];

function QuoteCard({ name, quote }: { name: string; quote: string }) {
  return (
    <div className="flex-shrink-0 w-[300px] bg-white rounded-[10px] shadow-sm p-5 mx-2">
      <p className="font-heading font-bold text-sm text-regal-navy mb-1.5">{name}</p>
      <p className="font-body font-medium text-sm text-granite leading-relaxed mb-2">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-slate text-xs">Comment on a CampaignAI-produced video</p>
    </div>
  );
}

export function SocialProofStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;

    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let pos = 0;
    const speed = 0.5; // px per frame

    function step() {
      pos += speed;
      // Reset when we've scrolled past the first set
      if (pos >= el!.scrollWidth / 2) {
        pos = 0;
      }
      el!.scrollLeft = pos;
      animId = requestAnimationFrame(step);
    }

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [prefersReducedMotion, isPaused]);

  // Duplicated cards for seamless loop
  const cards = [...quotes, ...quotes];

  if (prefersReducedMotion) {
    return (
      <section className="bg-dawn-frost py-6">
        <p className="text-center text-slate text-xs uppercase tracking-widest font-semibold mb-4">
          Real reactions to videos produced by CampaignAI
        </p>
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-3 pb-2">
            {quotes.map((q) => (
              <QuoteCard key={q.name} {...q} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-dawn-frost py-6">
      <p className="text-center text-slate text-xs uppercase tracking-widest font-semibold mb-4">
        Real reactions to videos produced by CampaignAI
      </p>
      <div
        ref={scrollRef}
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex w-max">
          {cards.map((q, i) => (
            <QuoteCard key={`${q.name}-${i}`} {...q} />
          ))}
        </div>
      </div>
    </section>
  );
}
