"use client";

import { useEffect, useState } from "react";
import { A250_END, ELECTION_DAY_END, ELECTION_TARGET } from "@/lib/constants";

/**
 * Which clock is running.
 *
 *  - "election"     counting down to Election Day
 *  - "election-day" Election Day itself — the clock has already rolled over to
 *                   the days left on the Special, but the copy says the day
 *  - "offer"        Election Day has passed; counting the days left on the
 *                   America 250 Special
 *  - "ended"        the Special is over
 *
 * Election Day is the headline moment, so the clock leads with it. Once it
 * passes, the same clock keeps running against the Special's own deadline
 * rather than freezing — the offer runs six weeks past the election.
 */
export type CountdownPhase = "election" | "election-day" | "offer" | "ended";

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  phase: CountdownPhase;
  /** Election Day itself; the bar and the module both say so. */
  isElectionDay: boolean;
  /** The Special can still be claimed. */
  offerLive: boolean;
  /** false until the first client-side tick; render placeholders to avoid hydration mismatch */
  ready: boolean;
}

const electionAt = new Date(ELECTION_TARGET).getTime();
const electionEndsAt = new Date(ELECTION_DAY_END).getTime();
const offerEndsAt = new Date(A250_END).getTime();

function split(diff: number) {
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

function compute(): Omit<CountdownParts, "ready"> {
  const now = Date.now();

  if (now < electionAt) {
    return {
      ...split(electionAt - now),
      phase: "election",
      isElectionDay: false,
      offerLive: true,
    };
  }

  if (now < electionEndsAt) {
    return {
      ...split(offerEndsAt - now),
      phase: "election-day",
      isElectionDay: true,
      offerLive: true,
    };
  }

  if (now < offerEndsAt) {
    return {
      ...split(offerEndsAt - now),
      phase: "offer",
      isElectionDay: false,
      offerLive: true,
    };
  }

  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    phase: "ended",
    isElectionDay: false,
    offerLive: false,
  };
}

/** Shared clock; the announcement bar and the America 250 module both read it. */
export function useElectionCountdown(): CountdownParts {
  const [parts, setParts] = useState<CountdownParts>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    phase: "election",
    isElectionDay: false,
    offerLive: true,
    ready: false,
  });

  useEffect(() => {
    function tick() {
      setParts({ ...compute(), ready: true });
    }
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return parts;
}
