/**
 * StatusBadge — a small "status stamp" for campaign-video statuses
 * (e.g. "COMING FALL 2026", "ON THE ROADMAP", "COMING SOON").
 *
 * Design intent: ballot stamp / ticket stub, not AI-startup pill.
 * A crisp double-rule frame (classic print stamp), one ink color per tone,
 * a single small crimson star as the campaign mark. No glows, no gradients,
 * no blur — flat ink on paper.
 *
 * Server-safe: no hooks, no "use client", no external deps.
 */

type StatusBadgeProps = {
  label: string;
  /** "light" = badge sits on a light background (default). "dark" = sits on dark navy. */
  tone?: "light" | "dark";
  /** Rotate ~-7deg, for pinning to a corner. */
  tilt?: boolean;
  className?: string;
};

function cx(...classes: Array<string | false | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Five-point star — the stamp's single accent mark. */
function StarMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 1.8l3.1 6.4 7.1.9-5.2 4.9 1.3 7-6.3-3.4-6.3 3.4 1.3-7L1.8 9.1l7.1-.9L12 1.8z" />
    </svg>
  );
}

export function StatusBadge({
  label,
  tone = "light",
  tilt = false,
  className,
}: StatusBadgeProps) {
  const dark = tone === "dark";

  return (
    <span
      className={cx(
        // Outer rule of the double stamp frame
        "inline-block select-none rounded-[3px] border p-[3px]",
        dark
          ? "border-beacon-white/40 bg-white/5 text-beacon-white"
          : "border-regal-navy/35 bg-beacon-white text-regal-navy",
        tilt && "-rotate-[7deg]",
        className,
      )}
    >
      <span
        className={cx(
          // Inner rule — the hairline gap between the two borders is the
          // whole "official stamp" effect, so keep both rules thin.
          "flex items-center gap-1.5 rounded-[1px] border px-2.5 py-1",
          dark ? "border-beacon-white/55" : "border-regal-navy/55",
        )}
      >
        <StarMark className="h-2 w-2 shrink-0 text-liberty-crimson" />
        <span className="whitespace-nowrap font-heading text-[11px] font-bold uppercase leading-none tracking-[0.16em]">
          {label}
        </span>
      </span>
    </span>
  );
}

export default StatusBadge;
