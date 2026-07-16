import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { AISparkle } from "@/components/ui/AISparkle";
import { ShowcaseLibrary } from "@/components/sections/showcase/ShowcaseLibrary";

// Hidden showcase — direct URL only, kept out of the nav, the homepage, and the
// sitemap, and marked noindex. A searchable, growing library of real client work.
export const metadata: Metadata = {
  title: "The Work - CampaignAI",
  description: "A growing library of campaign video made with CampaignAI.",
  robots: { index: false, follow: false },
};

export default function ShowcasePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-regal-navy pt-28 pb-16">
        <AISparkle size={15} color="#FF3366" glow className="sparkle-twinkle absolute left-[7%] top-[34%] z-0" style={{ ["--dur"]: "3s" } as CSSProperties} />
        <AISparkle size={12} color="#8E5CF7" glow className="sparkle-twinkle absolute right-[10%] top-[28%] z-0" style={{ ["--dur"]: "2.7s", animationDelay: "500ms" } as CSSProperties} />
        <AISparkle size={12} color="#4D9FFF" glow className="sparkle-twinkle absolute right-[16%] bottom-[18%] z-0" style={{ ["--dur"]: "3.3s", animationDelay: "300ms" } as CSSProperties} />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[1.5px] text-horizon-azure">The Work</span>
          <h1 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-1.5px] text-beacon-white sm:text-[44px] md:text-[56px]">
            Every campaign deserves to{" "}
            <span className="patriot-gradient-text-bright">own its narrative.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-beacon-white/80">
            Real video from candidates and causes across the spectrum &mdash; proof that a
            better path to campaign media isn&apos;t a promise, it&apos;s already being walked.
            This library grows with every video we help make.
          </p>
        </div>
      </section>

      <ShowcaseLibrary />
    </>
  );
}
