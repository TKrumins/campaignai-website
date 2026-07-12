import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AISparkle } from "@/components/ui/AISparkle";
import { PURCHASE_URL, CTA_PRIMARY } from "@/lib/constants";

/**
 * Hero trial — "the gallery wall."
 *
 * A one-screen alternative to the scrolling proof reel (HeroComboB). Instead of
 * a tall column of stills that the visitor scrolls past, every frame is laid out
 * at once as a framed contact sheet — a wall of finished work — so the whole
 * hero lands inside a single laptop or phone viewport with nothing below the
 * fold.
 *
 * Design decisions, per Tom's brief:
 *  - ONE SCREEN: the content block is sized to the viewport minus the header, and
 *    centered, so the section is exactly one screen tall and no more.
 *  - NOT A PLAYER: the stills are matted like photographic prints and threaded
 *    onto a film strip with sprocket perforations, and each carries a frame
 *    number (01–07). There is deliberately NO play button — a single explicit
 *    "Watch them all" link is the only video affordance, so a still is never
 *    mistaken for a clickable video.
 *  - PRICE ANCHOR: the standard $1,999 finished-video rate is stated in the hero,
 *    so every discount elsewhere (candidate, nonprofit, America 250) reads as a
 *    cut FROM that anchor rather than a mystery number.
 *  - AMERICA 250: intentionally absent here. The announcement bar up top already
 *    carries the offer beside the Election-Day counter; repeating it in the hero
 *    would crowd a layout whose whole job is to fit one screen.
 */

type Still = { src: string; alt: string; caption?: string };

// All seven real 16:9 frames from the two campaign films we've produced — the
// same set the scrolling reel uses, shown all at once. Order runs Resiliency /
// SHASM / Resiliency … so both films read across the sheet; the two opening
// frames carry the film's name.
const STILLS: Still[] = [
  { src: "/assets/videos/posters/the-resiliency-act.jpg", alt: "The Resiliency Act — opening frame", caption: "The Resiliency Act" },
  { src: "/assets/videos/posters/shasm-act-2.jpg", alt: "The SHASM Act — opening frame", caption: "The SHASM Act" },
  { src: "/assets/videos/posters/the-resiliency-act-3.jpg", alt: "The Resiliency Act — still from the film" },
  { src: "/assets/videos/posters/shasm-act-34s.jpg", alt: "The SHASM Act — frame from the 34-second cutdown" },
  { src: "/assets/videos/posters/the-resiliency-act-2.jpg", alt: "The Resiliency Act — on-screen policy callout" },
  { src: "/assets/videos/posters/shasm-act.jpg", alt: "The SHASM Act — still from the film" },
  { src: "/assets/videos/posters/shasm-act-3.jpg", alt: "The SHASM Act — closing frame" },
];

// Static RWB sparkles scattered in the gutters of the backdrop (never over the
// prints), so the wall reads against a quiet starfield, not a busy one.
const BG_SPARKS = [
  { l: 2, t: 16, c: "#E8F4F8", s: 15 },
  { l: 3, t: 74, c: "#4D9FFF", s: 12 },
  { l: 1.5, t: 44, c: "#FF3366", s: 12 },
  { l: 96, t: 22, c: "#FF3366", s: 13 },
  { l: 97.5, t: 60, c: "#4D9FFF", s: 14 },
  { l: 95, t: 88, c: "#E8F4F8", s: 11 },
];

// One framed print. The white matte + shadow + frame number say "photograph /
// film still," and the absence of any play control keeps it from reading as a
// video the visitor can press.
function FramedStill({ still, index }: { still: Still; index: number }) {
  return (
    <figure className="group relative rounded-md bg-beacon-white/95 p-1.5 shadow-lg ring-1 ring-black/10">
      <div className="relative aspect-video overflow-hidden rounded-sm">
        <Image
          src={still.src}
          alt={still.alt}
          fill
          sizes="(max-width: 1024px) 30vw, 200px"
          className="object-cover"
          priority={index < 2}
        />
        {/* frame number — reads as a film frame index, not a control */}
        <span className="absolute left-1.5 top-1.5 rounded-sm bg-regal-navy/75 px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wider text-beacon-white/90">
          {String(index + 1).padStart(2, "0")}
        </span>
        {still.caption && (
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-regal-navy/85 to-transparent px-2 pb-1.5 pt-5 text-[11px] font-semibold text-beacon-white">
            {still.caption}
          </figcaption>
        )}
      </div>
    </figure>
  );
}

// Sprocket-hole rail — the perforation strip that runs above and below the
// sheet so the whole block reads unmistakably as film.
function SprocketRail() {
  return (
    <div
      aria-hidden
      className="h-2.5 w-full rounded-sm bg-regal-navy/40"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, transparent 0 6px, rgba(232,244,248,0.55) 6px 12px)",
      }}
    />
  );
}

export function HeroGalleryWall() {
  return (
    <section data-hero className="relative isolate overflow-hidden bg-regal-navy">
      {/* backdrop: waving flag, dimmed, with sheen + gutter sparkles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-[-6%] animate-flag-wave-strong">
          <Image src="/assets/images/hero-bg.png" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-regal-navy/74" />
        <div className="hero-sheen absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-regal-navy via-transparent to-regal-navy/40" />
        {BG_SPARKS.map((p, i) => (
          <AISparkle
            key={i}
            size={p.s}
            color={p.c}
            glow
            className="sparkle-twinkle absolute"
            style={{ left: `${p.l}%`, top: `${p.t}%`, ["--dur"]: `${3 + (i % 3)}s`, animationDelay: `${i * 0.4}s` } as CSSProperties}
          />
        ))}
      </div>

      {/* one-screen content block: min-height = viewport minus the announcement
          bar, top padding clears the fixed nav, and everything is centered. */}
      <div className="mx-auto flex min-h-[calc(100svh-var(--announce-h))] max-w-7xl flex-col justify-center gap-5 px-4 pb-6 pt-24 sm:gap-9 sm:pb-10 sm:px-6 sm:pt-28 lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14 lg:px-8 lg:pt-24">
        {/* left: message + price anchor + CTAs */}
        <div className="relative">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-beacon-white/60">
            Real films &middot; already made &middot; human-finished
          </p>

          <h1 className="font-heading text-[27px] font-extrabold leading-[1.08] tracking-[-1px] text-beacon-white sm:text-[44px] lg:text-[52px] lg:tracking-[-1.5px]">
            See the films
            <br />
            <span className="patriot-gradient-text-bright pb-[0.12em] leading-[1.12]">
              before you spend a dollar.
            </span>
          </h1>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-beacon-white/75 sm:mt-5 sm:text-base">
            Every frame here is a still from a real campaign film our team
            produced and a human editor finished. This is the quality your story
            gets.
          </p>

          {/* price anchor — the $1,999 standard rate stated up front */}
          <div className="mt-5 flex items-baseline gap-3 sm:mt-7">
            <span className="text-sm font-medium text-beacon-white/55">
              Finished video, starting at
            </span>
            <span className="font-heading text-[30px] font-extrabold leading-none text-beacon-white">
              $1,999
            </span>
          </div>
          <p className="mt-1.5 text-sm text-beacon-white/55">
            Candidates and causes pay less &mdash;{" "}
            <a href="#pricing" className="font-semibold text-horizon-azure underline-offset-2 hover:underline">
              see your rate
            </a>
            .
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 sm:mt-7">
            <Button variant="patriot" href={PURCHASE_URL} className="px-8 py-3.5 text-base">
              {CTA_PRIMARY}
            </Button>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-beacon-white/40 bg-beacon-white/5 px-5 py-2.5 text-sm font-semibold text-beacon-white transition-colors hover:border-beacon-white/70 hover:bg-beacon-white/10"
            >
              See pricing
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-3 text-sm text-beacon-white/55">
            Book your onboarding call today.{" "}
            <span className="font-semibold text-beacon-white/80">Nothing is charged upfront.</span>
          </p>
        </div>

        {/* right: the contact sheet — all seven frames at once, on a film strip */}
        <div className="relative">
          <div className="rounded-xl bg-regal-navy/25 p-3 shadow-2xl ring-1 ring-white/15 backdrop-blur-[2px] sm:p-4">
            <SprocketRail />
            <div className="my-3 grid grid-cols-3 gap-2.5 sm:gap-3">
              {STILLS.map((s, i) => (
                <div key={s.src} className={i === STILLS.length - 1 ? "col-start-2" : ""}>
                  <FramedStill still={s} index={i} />
                </div>
              ))}
            </div>
            <SprocketRail />
          </div>

          <div className="mt-3 flex items-center justify-between px-1">
            <p className="text-xs font-medium text-beacon-white/55">
              Seven frames &middot; two films we&apos;ve produced
            </p>
            <Link
              href="/#our-work"
              className="inline-flex items-center gap-1 text-sm font-semibold text-horizon-azure transition-colors hover:text-beacon-white"
            >
              Watch them all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
