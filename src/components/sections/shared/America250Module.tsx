"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PatriotPurchaseButton } from "@/components/ui/PatriotPurchaseButton";
import { useElectionCountdown } from "@/lib/useElectionCountdown";
import {
  A250_HEADLINE,
  A250_OFFER,
  CTA_MICROCOPY,
} from "@/lib/constants";

function CountdownBox({ value, label, ready }: { value: number; label: string; ready: boolean }) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-regal-navy text-beacon-white px-3 py-2 min-w-[64px]">
      <span
        className="font-heading font-extrabold text-2xl md:text-3xl leading-none tabular-nums"
        suppressHydrationWarning
      >
        {ready ? String(value).padStart(2, "0") : "--"}
      </span>
      <span className="text-[10px] uppercase tracking-wider text-beacon-white/70 mt-1">
        {label}
      </span>
    </div>
  );
}

/**
 * America 250 module (5.12, amended). One per page, never in a hero, never
 * within a screen height of another gradient module. Border animation starts
 * on viewport entry; static under reduced motion.
 */
export function America250Module({ className = "" }: { className?: string }) {
  const countdown = useElectionCountdown();
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-patriot-module
      className={`a250-border ${animate ? "a250-animate" : ""} rounded-2xl p-[3px] ${className}`}
    >
      <div className="bg-beacon-white rounded-[13px] px-6 py-8 md:px-10 text-center">
        <Image
          src="/assets/icons/us-flag.svg"
          alt=""
          width={36}
          height={24}
          className="mx-auto mb-3 rounded-[2px] shadow-sm"
        />
        <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy mb-2">
          {countdown.isElectionDay ? "It's Election Day." : A250_HEADLINE}
        </h3>
        {!countdown.isElectionDay && (
          <>
            <p className="font-heading font-bold text-lg text-liberty-crimson mb-1">
              {A250_OFFER}
            </p>
            <p className="text-slate text-sm mb-6">
              Available for the first 250 customers.
            </p>
            <div className="flex justify-center gap-2 sm:gap-3 mb-2">
              <CountdownBox value={countdown.days} label="Days" ready={countdown.ready} />
              <CountdownBox value={countdown.hours} label="Hours" ready={countdown.ready} />
              <CountdownBox value={countdown.minutes} label="Minutes" ready={countdown.ready} />
              <CountdownBox value={countdown.seconds} label="Seconds" ready={countdown.ready} />
            </div>
            <p className="text-slate text-xs mb-6">
              Until Election Day &middot; November 3, 2026
            </p>
          </>
        )}
        <div>
          <PatriotPurchaseButton />
          <p className="text-slate text-sm mt-2">{CTA_MICROCOPY}</p>
        </div>
      </div>
    </div>
  );
}
