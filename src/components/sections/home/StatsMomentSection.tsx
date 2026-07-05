"use client";

import { useEffect, useRef, useState } from "react";

/**
 * E.4 numbers-as-design moment. TRUE product facts only; never usage or
 * vanity metrics. Count-ups freeze at final values under reduced motion.
 */
const stats: {
  value: number;
  prefix: string;
  suffix: string;
  kicker?: string;
  label: string;
  color: string;
}[] = [
  {
    value: 48,
    prefix: "",
    suffix: "hr",
    label: "Post-production delivery once you submit",
    color: "text-liberty-crimson",
  },
  {
    value: 599,
    prefix: "$",
    suffix: "",
    kicker: "Starting at",
    label: "per video for candidates this cycle",
    color: "text-freedom-blue",
  },
  {
    value: 50,
    prefix: "",
    suffix: "",
    label: "States with disclosure rules tracked",
    color: "text-regal-navy",
  },
  {
    value: 3,
    prefix: "",
    suffix: "+1",
    label: "Revisions in production, plus one in post",
    color: "text-verdant",
  },
];

function CountUp({
  target,
  prefix,
  suffix,
  active,
  reduced,
}: {
  target: number;
  prefix: string;
  suffix: string;
  active: boolean;
  reduced: boolean;
}) {
  const [display, setDisplay] = useState(reduced ? target : 0);

  useEffect(() => {
    if (reduced) {
      const raf = requestAnimationFrame(() => setDisplay(target));
      return () => cancelAnimationFrame(raf);
    }
    if (!active) return;

    const duration = 1200;
    let frame: number;
    const start = performance.now();

    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, reduced]);

  return (
    <span className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function StatsMomentSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    });

    const el = ref.current;
    if (!el) return () => cancelAnimationFrame(raf);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div ref={ref} className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, prefix, suffix, kicker, label, color }) => (
            <div key={label} className="text-center">
              {kicker && (
                <p className="text-slate text-xs font-semibold uppercase tracking-wider mb-1">{kicker}</p>
              )}
              <p className={`font-heading font-extrabold text-4xl md:text-5xl ${color} mb-2`}>
                <CountUp
                  target={value}
                  prefix={prefix}
                  suffix={suffix}
                  active={active}
                  reduced={reduced}
                />
              </p>
              <p className="text-slate text-sm leading-snug max-w-[180px] mx-auto">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-regal-navy font-heading font-bold text-lg mt-10">
          One Republican. One Democrat. One Independent. One process.
        </p>
      </div>
    </section>
  );
}
