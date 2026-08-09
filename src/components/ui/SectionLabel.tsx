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
        // The square favicon PNGs carry ~70px of transparent padding above and
        // below the artwork, so a 26px box only ever drew a ~7px-tall mark.
        // These are the same art cropped to the ink, sized off height so the
        // mark actually reads next to the eyebrow.
        <Image
          src={
            onDark
              ? "/assets/logos/favicon-mark-wide-ondark.png"
              : "/assets/logos/favicon-mark-wide.png"
          }
          alt=""
          width={182}
          height={54}
          className="h-[15px] w-auto md:h-[18px]"
          aria-hidden
        />
      )}
      {text}
    </span>
  );
}
