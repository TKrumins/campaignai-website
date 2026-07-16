import Image from "next/image";

interface SectionLabelProps {
  text: string;
  color?: "blue" | "crimson" | "verdant" | "gold" | "horizon";
  /** Show the CampaignAI mark to the left of the label (branded home eyebrows). */
  favicon?: boolean;
  /** Use the light-on-dark mark variant when the section sits on a dark background. */
  onDark?: boolean;
}

const colorMap = {
  blue: "text-freedom-blue",
  crimson: "text-liberty-crimson",
  verdant: "text-verdant",
  gold: "text-pioneer-gold",
  horizon: "text-horizon-azure",
};

export function SectionLabel({ text, color = "blue", favicon = false, onDark = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest ${colorMap[color]}`}
    >
      {favicon && (
        <Image
          src={onDark ? "/assets/logos/favicon-mark-ondark.png" : "/assets/logos/favicon-mark.png"}
          alt=""
          width={18}
          height={18}
          className="h-[18px] w-[18px]"
          aria-hidden
        />
      )}
      {text}
    </span>
  );
}
