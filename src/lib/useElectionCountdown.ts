"use client";

import { useEffect, useState } from "react";
import { ELECTION_TARGET } from "@/lib/constants";

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  /** true once the target has passed: render "It's Election Day." and drop the offer */
  isElectionDay: boolean;
  /** false until the first client-side tick; render placeholders to avoid hydration mismatch */
  ready: boolean;
}

const target = new Date(ELECTION_TARGET).getTime();

function compute(): Omit<CountdownParts, "ready"> {
  const diff = target - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isElectionDay: true };
  }
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
    isElectionDay: false,
  };
}

/** Shared countdown to ELECTION_TARGET; bar and module consume the same clock. */
export function useElectionCountdown(): CountdownParts {
  const [parts, setParts] = useState<CountdownParts>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isElectionDay: false,
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
