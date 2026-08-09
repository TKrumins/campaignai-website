/**
 * ComingSoonSeal — a notary/election-night rosette for features that are built
 * as a preview but not released yet.
 *
 * Design intent: pressed ink and ribbon, the same family as StatusBadge — a
 * beaded seal edge, a double rule, two crossed ribbon tails, and the CampaignAI
 * four-point sparkle as the center mark. Flat color only: no glow, no blur, no
 * gradient mesh. The single gradient is the brand's red → violet → blue ring.
 *
 * Motion is deliberately small: it thuds in once, then breathes a couple of
 * degrees. The beaded ring turns slowly enough to read as a seal, not a spinner.
 *
 * Server-safe: no hooks, no "use client".
 */

type ComingSoonSealProps = {
  /** Rendered width in px. Height follows the 120:152 viewBox. */
  size?: number;
  className?: string;
  /** Accessible text; set to "" when a nearby heading already says it. */
  label?: string;
};

export function ComingSoonSeal({
  size = 124,
  className = "",
  label = "Coming soon",
}: ComingSoonSealProps) {
  return (
    <svg
      viewBox="0 0 120 152"
      width={size}
      height={(size * 152) / 120}
      className={`cs-seal ${className}`}
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
    >
      <defs>
        <linearGradient id="cs-seal-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF3366" />
          <stop offset="50%" stopColor="#8E5CF7" />
          <stop offset="100%" stopColor="#4D9FFF" />
        </linearGradient>
      </defs>

      {/* Crossed ribbon tails, behind the disc */}
      <g>
        <path d="M44 92 L24 144 L36 138 L43 150 L63 98 Z" fill="#FF3366" />
        <path d="M44 92 L34 118 L48 112 Z" fill="#0D1B3E" opacity="0.18" />
        <path d="M76 92 L96 144 L84 138 L77 150 L57 98 Z" fill="#4D9FFF" />
        <path d="M76 92 L86 118 L72 112 Z" fill="#0D1B3E" opacity="0.18" />
      </g>

      {/* Seal disc */}
      <circle cx="60" cy="62" r="52" fill="#E8F4F8" />
      <circle cx="60" cy="62" r="52" fill="none" stroke="#0D1B3E" strokeWidth="2" />

      {/* Beaded edge — a dotted ring that turns slowly */}
      <circle
        cx="60"
        cy="62"
        r="46"
        fill="none"
        stroke="#0D1B3E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="0.1 8"
        opacity="0.55"
        className="cs-seal-beads"
        style={{ transformOrigin: "60px 62px" }}
      />

      {/* Inner double rule — the brand ring */}
      <circle cx="60" cy="62" r="40" fill="none" stroke="url(#cs-seal-ring)" strokeWidth="2.5" />
      <circle cx="60" cy="62" r="36" fill="none" stroke="#0D1B3E" strokeWidth="0.8" opacity="0.45" />
      <circle cx="60" cy="62" r="35" fill="#FFFFFF" opacity="0.75" />

      {/* Center mark — the four-point sparkle. The placement lives on the outer
          group so the inner group is free to take a CSS transform (a CSS
          transform would otherwise replace the attribute and move the mark). */}
      <g transform="translate(52.5 30) scale(0.62)">
        <g className="sparkle-twinkle cs-seal-spark">
          <path
            d="M12 0 C12.8 6.6 17.4 11.2 24 12 C17.4 12.8 12.8 17.4 12 24 C11.2 17.4 6.6 12.8 0 12 C6.6 11.2 11.2 6.6 12 0 Z"
            fill="#FF3366"
          />
        </g>
      </g>

      <text
        x="60"
        y="62"
        textAnchor="middle"
        className="font-heading"
        fontSize="12.5"
        fontWeight="800"
        letterSpacing="1.6"
        fill="#0D1B3E"
      >
        COMING
      </text>
      <text
        x="60"
        y="80"
        textAnchor="middle"
        className="font-heading"
        fontSize="16"
        fontWeight="800"
        letterSpacing="2.2"
        fill="#0D1B3E"
      >
        SOON
      </text>

      {/* Closing rule + three stars, the ballot-stamp footer */}
      <line x1="40" y1="88" x2="80" y2="88" stroke="#0D1B3E" strokeWidth="0.8" opacity="0.4" />
      <g fill="#FF3366">
        <circle cx="52" cy="93.5" r="1.5" />
        <circle cx="60" cy="93.5" r="1.5" />
        <circle cx="68" cy="93.5" r="1.5" />
      </g>
    </svg>
  );
}

export default ComingSoonSeal;
