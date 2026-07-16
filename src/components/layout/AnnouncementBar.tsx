"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { useElectionCountdown } from "@/lib/useElectionCountdown";
import { A250_KEY } from "@/lib/constants";

function Segment({ value, unit, ready }: { value: number; unit: string; ready: boolean }) {
  return (
    <span className="tabular-nums font-semibold" suppressHydrationWarning>
      {ready ? String(value).padStart(2, "0") : "--"}
      <span className="font-normal text-beacon-white/60 ml-0.5">{unit}</span>
    </span>
  );
}

/**
 * Renders on EVERY page including the homepage (7-8 doc Section 0.1).
 * Dismissal is session-scoped via sessionStorage under A250_KEY; a new offer
 * key resets visibility. Layout-shift safe: height reserved by --announce-h,
 * collapsed pre-paint by the inline script in the root layout when dismissed.
 */
export function AnnouncementBar() {
  const countdown = useElectionCountdown();
  // On the homepage the hero's floating America 250 card states the offer, so the bar
  // stating it too puts the same sentence on screen twice before a visitor has seen a
  // single thing about the product. Everywhere else the bar is the only place it appears,
  // so it keeps the full copy. The countdown and the "See pricing" link stay on every page.
  const isHome = usePathname() === "/";

  function dismiss() {
    try {
      sessionStorage.setItem(A250_KEY, "dismissed");
    } catch {
      // sessionStorage unavailable; hide for this page view only
    }
    document.documentElement.dataset.a250 = "dismissed";
  }

  return (
    <div className="announcement-bar fixed top-0 left-0 right-0 z-[60] bg-regal-navy text-beacon-white">
      {/* 3px underline included in --announce-h (3.5rem mobile / 2.5rem desktop) */}
      <div className="h-[53px] md:h-[37px] max-w-7xl mx-auto pl-3 pr-1 sm:px-4 flex items-center justify-between gap-2">
        <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center md:justify-center gap-x-4 gap-y-0.5 text-xs md:text-sm leading-tight">
          <span className="flex items-center gap-2 min-w-0">
            <Image
              src="/assets/icons/us-flag.svg"
              alt=""
              width={20}
              height={13}
              className="shrink-0 rounded-[1px]"
            />
            <strong className="font-heading whitespace-nowrap">
              {countdown.isElectionDay ? "It's Election Day." : "Election Day is coming."}
            </strong>
            {!countdown.isElectionDay && (
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <Segment value={countdown.days} unit="days" ready={countdown.ready} />
                <Segment value={countdown.hours} unit="hrs" ready={countdown.ready} />
                <Segment value={countdown.minutes} unit="min" ready={countdown.ready} />
                <Segment value={countdown.seconds} unit="sec" ready={countdown.ready} />
              </span>
            )}
          </span>
          {!countdown.isElectionDay && (
            <span className="min-w-0 truncate">
              {!isHome && (
                <>
                  {/* Desktop copy */}
                  <span className="hidden md:inline">
                    America 250 Special: buy two videos, get your first for just $250.{" "}
                  </span>
                  {/* Mobile truncation */}
                  <span className="md:hidden">First video $250 with any two. </span>
                </>
              )}
              <Link
                href="/#pricing"
                className="underline underline-offset-2 font-semibold hover:text-victory-rose transition-colors whitespace-nowrap"
              >
                See pricing &rarr;
              </Link>
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="shrink-0 w-11 h-11 flex items-center justify-center text-beacon-white/70 hover:text-beacon-white focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue rounded-full"
        >
          <X size={16} />
        </button>
      </div>
      {/* 3px Patriot gradient underline, slow 8s ease loop */}
      <div className="announce-underline h-[3px] w-full" aria-hidden="true" />
    </div>
  );
}
