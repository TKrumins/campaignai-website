import Image from "next/image";

interface SectionLabelProps {
  text: string;
  /** Status-coded colour only. Omit for the brand default: Regal Navy on light,
   *  Beacon White on dark (brand Rule 2: labels are never red or blue). */
  color?: "verdant" | "gold";
  /** Show the CampaignAI mark to the left of the label (branded home eyebrows). */
  favicon?: boolean;
  /** The section sits on a dark background: Beacon White text and the light-on-dark mark. */
  onDark?: boolean;
}

const colorMap = {
  verdant: "text-verdant",
  gold: "text-pioneer-gold",
};

export function SectionLabel({ text, color, favicon = false, onDark = false }: SectionLabelProps) {
  const colorClass = color ? colorMap[color] : onDark ? "text-beacon-white" : "text-regal-navy";
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest ${colorClass}`}
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
