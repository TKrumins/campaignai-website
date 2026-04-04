interface SectionLabelProps {
  text: string;
  color?: "blue" | "crimson" | "verdant" | "gold";
}

const colorMap = {
  blue: "text-freedom-blue",
  crimson: "text-liberty-crimson",
  verdant: "text-verdant",
  gold: "text-pioneer-gold",
};

export function SectionLabel({ text, color = "blue" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-widest ${colorMap[color]}`}
    >
      {text}
    </span>
  );
}
