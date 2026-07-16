import type { CSSProperties } from "react";
import { AISparkle } from "@/components/ui/AISparkle";

export function ChannelsHero() {
  return (
    <section className="relative overflow-hidden bg-regal-navy pt-24">
      <AISparkle size={15} color="#4D9FFF" glow className="sparkle-twinkle absolute left-[7%] top-[30%] z-0" style={{ ["--dur"]: "3s" } as CSSProperties} />
      <AISparkle size={12} color="#FF3366" glow className="sparkle-twinkle absolute right-[9%] top-[24%] z-0" style={{ ["--dur"]: "2.7s", animationDelay: "500ms" } as CSSProperties} />
      <AISparkle size={12} color="#E8F4F8" glow className="sparkle-twinkle absolute right-[16%] bottom-[18%] z-0" style={{ ["--dur"]: "3.3s", animationDelay: "300ms" } as CSSProperties} />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 py-20 text-center">
        <span className="mb-6 inline-block text-sm font-semibold uppercase tracking-[1.5px] text-horizon-azure">
          Where to share your video
        </span>
        <h1 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-1.5px] text-beacon-white sm:text-[48px] md:text-[60px]">
          You made it. Now make it{" "}
          <span className="patriot-gradient-text-bright">work everywhere.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-beacon-white/80 md:text-xl">
          A finished video is the beginning, not the end. You&apos;re the one telling
          the story &mdash; we&apos;ll show you where it lands hardest, how to cut it
          for each place, and what&apos;s coming next as your reach grows.
        </p>
      </div>
    </section>
  );
}
