import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ThreePathsProps {
  /** Appended as an extra sentence to Path 1 (the agency route). */
  path1Extra?: string;
  /** Replaces Path 2's closing clause. */
  path2FinalClause?: string;
  /** Path 3's cost sentence, swapped per audience. */
  path3Cost?: string;
}

/**
 * ThreePaths (7.1): a narrative section, not a feature grid. Three story
 * panels with CampaignAI last and the heaviest visual weight, a diverging
 * paths motif, scroll-triggered reveals (CSS-only, inert under reduced
 * motion via ScrollReveal), and the honest-broker block beneath. Brand
 * tokens only; no competitor names, no invented agency figures.
 */
export function ThreePaths({
  path1Extra,
  path2FinalClause = "and the learning curve is the real price tag.",
  path3Cost = "Starting at $1,999, and yours to own outright.",
}: ThreePathsProps) {
  return (
    <section className="py-16 md:py-24 bg-dawn-frost overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-[1.1] text-regal-navy tracking-[-1px] text-center max-w-[760px] mx-auto mb-4">
            Three ways to get campaign video made. One was built for you.
          </h2>
        </ScrollReveal>

        {/* Diverging-paths motif: one line splits into three, CSS/SVG only */}
        <ScrollReveal delay={80}>
          <svg
            viewBox="0 0 720 60"
            className="w-full max-w-[560px] mx-auto mb-10 h-auto"
            fill="none"
            aria-hidden="true"
          >
            <path d="M360 2 C 240 2, 160 20, 120 58" stroke="#B8B8B8" strokeWidth="3" strokeLinecap="round" />
            <path d="M360 2 L 360 58" stroke="#B8B8B8" strokeWidth="3" strokeLinecap="round" />
            <path d="M360 2 C 480 2, 560 20, 600 58" stroke="url(#tp-diverge)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="120" cy="58" r="5" fill="#B8B8B8" />
            <circle cx="360" cy="58" r="5" fill="#B8B8B8" />
            <circle cx="600" cy="58" r="6" fill="#00D084" />
            <defs>
              <linearGradient id="tp-diverge" x1="360" y1="2" x2="600" y2="58" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3366" />
                <stop offset="0.5" stopColor="#8E5CF7" />
                <stop offset="1" stopColor="#4D9FFF" />
              </linearGradient>
            </defs>
          </svg>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Path 1 — the agency route */}
          <ScrollReveal>
            <div className="rounded-2xl bg-white border border-gray-200 p-7 h-full flex flex-col">
              <p className="text-slate text-xs font-bold uppercase tracking-wider mb-3">
                The agency route
              </p>
              <p className="text-granite text-sm leading-relaxed">
                Hand your story to professionals and get beautiful work back.
                Agencies earn their reputation, and their pricing reflects it:
                costs vary widely with the size and competitiveness of the race,
                and the timeline runs on their calendar. For campaigns that can
                absorb both, it works.
                {path1Extra ? ` ${path1Extra}` : ""}
              </p>
            </div>
          </ScrollReveal>

          {/* Path 2 — the do-it-yourself route */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl bg-white border border-gray-200 p-7 h-full flex flex-col">
              <p className="text-slate text-xs font-bold uppercase tracking-wider mb-3">
                The do-it-yourself route
              </p>
              <p className="text-granite text-sm leading-relaxed">
                Free tools, total control, and every hour comes out of your nights
                and weekends. You review your own work, you track the disclosure
                rules yourself, {path2FinalClause}
              </p>
            </div>
          </ScrollReveal>

          {/* Path 3 — CampaignAI, heaviest visual weight */}
          <ScrollReveal delay={200}>
            <div className="relative rounded-2xl bg-regal-navy p-7 h-full flex flex-col text-white shadow-lg lg:-translate-y-2">
              <span className="absolute -top-3 left-7 rounded-full bg-verdant text-regal-navy text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                Built for you
              </span>
              <p className="text-verdant text-xs font-bold uppercase tracking-wider mb-3">
                CampaignAI
              </p>
              <p className="text-white/90 text-sm leading-relaxed flex-1">
                Keep the control of doing it yourself. Gain the polish of an
                agency. Plan your video with AI-powered guidance, make every
                creative decision, and submit when you&apos;re ready. Our human
                editors return it polished within 48 hours, with state-specific AI
                disclosure labels applied and updated as rules change.
              </p>
              <p className="mt-4 pt-4 border-t border-white/15 font-heading font-bold text-base text-beacon-white">
                {path3Cost}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Section close */}
        <ScrollReveal delay={120}>
          <div className="text-center mt-8">
            <Link
              href="/#our-work"
              className="inline-flex items-center gap-1 text-freedom-blue font-semibold text-sm hover:underline"
            >
              Watch the work &rarr;
            </Link>
          </div>
        </ScrollReveal>

        {/* Honest broker block */}
        <ScrollReveal delay={80}>
          <div className="mt-12 max-w-[760px] mx-auto rounded-2xl border border-regal-navy/10 bg-white px-6 py-7 md:px-9">
            <p className="font-heading font-bold text-lg text-regal-navy mb-3">
              When we&apos;re not your best call, we&apos;ll say so.
            </p>
            <p className="text-granite text-sm leading-relaxed">
              A well-funded campaign should hire a boutique agency for its marquee
              primary spots, then use CampaignAI for the rest of its content
              library. A grassroots race running on authenticity should lean into
              genuine, guerrilla-style video, and use CampaignAI for its evergreen
              content. We are usually the right choice. We are also the vendor that
              tells you when we are not.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
