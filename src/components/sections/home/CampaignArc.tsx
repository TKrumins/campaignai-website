import type { CSSProperties } from "react";
import { Flag } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * The Campaign Arc — a content calendar showing how the video types play out
 * over a race. Moved off the home page (which just teases it now) to the
 * Video Production Process page, where the "how your videos add up across a
 * campaign" story belongs. All the playhead / arc-beat animation is preserved.
 */
export function CampaignArc({ showHeader = true }: { showHeader?: boolean } = {}) {
  const lanes: {
    key: string;
    label: string;
    cadence: string;
    color: string;
    flag?: boolean;
    marks: number[];
  }[] = [
    // Bookend flags are Bridge Violet (red+blue united), not a red vs. blue
    // pair — keeps the launch/GOTV markers non-partisan. Candid runs two heavy
    // clusters (e.g. two stretches on the trail) among sparser drop-ins.
    { key: "announce", label: "Announcement", cadence: "Launch day", color: "#8E5CF7", flag: true, marks: [4] },
    { key: "fund", label: "Fundraising appeals", cadence: "Weekly", color: "#4D9FFF", marks: [12, 21, 30, 39, 48, 57, 66, 75, 84] },
    { key: "policy", label: "Policy explainers", cadence: "Every other week", color: "#8E5CF7", marks: [16, 32, 48, 64, 80] },
    { key: "rapid", label: "Rapid response", cadence: "As news breaks", color: "#FF6B8F", marks: [26, 44, 70, 88] },
    { key: "candid", label: "Candid footage", cadence: "From the trail", color: "#94A3B8", marks: [12, 28, 31, 34, 37, 40, 58, 68, 71, 74, 77, 80, 93] },
    { key: "gotv", label: "Get Out The Vote", cadence: "Final weekend", color: "#8E5CF7", flag: true, marks: [96] },
  ];
  return (
    <div>
      {showHeader && (
        <div className="mb-6 flex flex-col items-center gap-3 text-center">
          <SectionLabel text="The Campaign Arc" />
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy tracking-[-0.5px]">
            A campaign is a series of stories, told in new and exciting ways.
          </h3>
          <p className="max-w-[640px] text-granite">
            Every video is a chapter — your launch, your asks, the policies you
            fight for, the candid moments, the closing push. No single film is your
            campaign. Told together, over a race, they are.
          </p>
        </div>
      )}

      <div className="relative overflow-hidden rounded-3xl bg-regal-navy p-6 md:p-10 shadow-2xl">
        <div className="h-1.5 multipartisan-gradient absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-[880px]">
          {/* bookend axis labels, aligned over the lane tracks */}
          <div className="mb-2 flex items-center gap-3">
            <div className="w-[104px] shrink-0 sm:w-[136px]" />
            <div className="flex flex-1 justify-between text-[10px] font-bold uppercase tracking-[1.5px] text-beacon-white/50">
              <span>Launch</span>
              <span>Election Day</span>
            </div>
          </div>

          {/* lanes, with a playhead that sweeps launch -> election day and pops
              each release beat as it passes (delay per-mark keeps them in sync). */}
          <div className="relative">
            {lanes.map((lane) => (
              <div key={lane.key} className="flex items-center gap-3 py-1.5">
                <div className="w-[104px] shrink-0 text-right sm:w-[136px]">
                  <p className="font-heading text-[11px] font-bold leading-tight text-beacon-white sm:text-xs">
                    {lane.label}
                  </p>
                  <p className="text-[10px] leading-tight text-beacon-white/45">{lane.cadence}</p>
                </div>
                <div className="relative h-7 flex-1">
                  {/* lane baseline */}
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />
                  {lane.marks.map((pos, i) => {
                    const delay = `${((pos / 100) * 6 - 0.3).toFixed(2)}s`;
                    return (
                      <span
                        key={i}
                        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${pos}%` }}
                      >
                        {lane.flag ? (
                          <Flag
                            className="arc-beat h-[18px] w-[18px] drop-shadow"
                            style={{ color: lane.color, fill: lane.color, animationDelay: delay } as CSSProperties}
                            strokeWidth={1.5}
                          />
                        ) : (
                          <span
                            className="arc-beat block h-4 w-[3px] rounded-full"
                            style={{ color: lane.color, background: "currentColor", animationDelay: delay } as CSSProperties}
                          />
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* sweeping playhead over the track region (label col + gap offset) */}
            <div
              className="pointer-events-none absolute inset-y-0 left-[116px] right-0 z-20 overflow-hidden motion-reduce:hidden sm:left-[148px]"
              aria-hidden
            >
              <span className="arc-playhead absolute inset-y-1 w-[2px] rounded bg-beacon-white/80 shadow-[0_0_12px_2px_rgba(232,244,248,0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Section wrapper for the standalone page placement (Video Production Process). */
export function CampaignArcSection() {
  return (
    <section id="campaign-arc" className="scroll-mt-28 bg-dawn-frost py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <CampaignArc />
      </div>
    </section>
  );
}
