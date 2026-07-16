// Semantic party colors (C.2 exclusion: never restyled by decorative sweeps)
const partyColors: Record<string, string> = {
  Republican: "bg-red-600 text-white",
  Democrat: "bg-blue-600 text-white",
  Democratic: "bg-blue-600 text-white",
  Independent: "bg-purple-600 text-white",
  Forward: "bg-purple-600 text-white",
};

interface PartyPillProps {
  party: string;
  /** Optional tailwind color classes override */
  color?: string;
  className?: string;
}

export function PartyPill({ party, color, className = "" }: PartyPillProps) {
  const colors = color || partyColors[party] || "bg-slate text-white";
  return (
    <span
      className={`inline-block text-xs font-semibold px-3 py-0.5 rounded-full shadow-sm ${colors} ${className}`}
    >
      {party}
    </span>
  );
}
