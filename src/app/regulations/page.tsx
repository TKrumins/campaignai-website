import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AISparkle } from "@/components/ui/AISparkle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { EmailCapture } from "@/components/forms/EmailCapture";
import RegulationsTrackerGraphic from "@/components/ui/graphics/RegulationsTrackerGraphic";
import { COMPLIANCE_AS_OF } from "@/lib/constants";

/**
 * The Regulations Tracker pitch page.
 *
 * Previously a single unlinked screen that was hidden by nothing but the
 * absence of links to it — and, unlike every other dark page on this site, it
 * was never marked noindex, so it could have been indexed at any time. Rather
 * than hide it properly, Tom's call (2026-09-20) was to finish the thought:
 * make it a real Coming Soon pitch page with a waitlist, and launch it.
 *
 * COPY RULE, inherited from the compliance page: we describe what we are
 * building and how we think about it. No coverage guarantee, no promise of a
 * date, and nothing that reads as a commitment we would have to keep in every
 * state on every day. The strongest thing this page says is that we will hold
 * it back until it is defensible — a promise about our restraint, not about
 * the law.
 *
 * Compliance keeps to one sub-brand: staged verdant greens. No red or blue.
 */
export const metadata: Metadata = {
  title: "Regulations Tracker - Coming Soon - CampaignAI",
  description:
    "We are building a plain-language tracker for the AI rules that apply to political advertising, state by state. It is not released yet, and we will not release it until it is ready to stand behind. Join the waitlist.",
};

const pillars = [
  {
    title: "State by state, in plain language",
    body: "Every state writes its own rules, and they are written for lawyers. We are building a version a campaign manager can read between door knocks — what the rule is, what it means for a video, and what it does not cover.",
  },
  {
    title: "Sourced, dated, and shown",
    body: "Every entry carries its citation, the date it took effect, and the date we last looked at it. If you cannot see where a rule came from and when we checked it, you cannot rely on it — so we are building it to show its working.",
  },
  {
    title: "Federal and platform rules alongside",
    body: "State law is only part of it. FEC guidance sits on top, and the platforms run their own labelling policies underneath. The tracker is being built to hold all three, because a video has to satisfy all three.",
  },
  {
    title: "Honest about the gaps",
    body: "Coverage will be uneven, especially where AI-specific law is new or being litigated. The tracker is designed to say “we do not know yet” where that is the truth, rather than quietly leaving a space blank.",
  },
];

export default function RegulationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-regal-navy pt-28 pb-16 md:pb-20">
        <AISparkle
          size={28}
          gradient="verdant"
          glow
          className="sparkle-twinkle absolute left-[7%] top-[22%]"
          style={{ ["--dur"]: "4.2s" } as CSSProperties}
        />
        <AISparkle
          size={16}
          gradient="verdant-deep"
          className="sparkle-twinkle absolute left-[15%] bottom-[18%] hidden sm:block"
          style={{ ["--dur"]: "5.4s", animationDelay: "600ms" } as CSSProperties}
        />
        <AISparkle
          size={30}
          gradient="verdant-pale"
          className="sparkle-twinkle absolute right-[8%] top-[28%]"
          style={{ ["--dur"]: "3.6s" } as CSSProperties}
        />
        <AISparkle
          size={18}
          gradient="verdant"
          glow
          className="sparkle-twinkle absolute right-[17%] bottom-[20%] hidden sm:block"
          style={{ ["--dur"]: "6s", animationDelay: "300ms" } as CSSProperties}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="mb-6 flex justify-center">
            <StatusBadge label="Coming Soon" tone="dark" tilt />
          </div>

          <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[1.5px] text-verdant">
            Regulations Tracker
          </span>

          <h1 className="font-heading text-[32px] font-extrabold leading-[1.08] tracking-[-1.5px] text-beacon-white sm:text-[46px] md:text-[58px]">
            Fifty states. Fifty rulebooks.
            <span className="block text-verdant">One place to see them all.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-beacon-white/85">
            The rules for using AI in campaigns are different in every state, and
            they change fast. We are building a tracker that puts them in one
            place, in plain language, so you can see what applies to your race
            without reading fifty statutes to find out.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <RegulationsTrackerGraphic />
          </div>
        </div>
      </section>

      {/* What it will be */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel text="What we are building" color="verdant" />
            <h2 className="mt-3 mb-5 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
              A reference you can actually use mid-campaign.
            </h2>
            <p className="mb-12 max-w-[760px] text-lg leading-[1.7] text-granite">
              Not a database of statutes. A working reference for the person who
              has to decide, this afternoon, whether a video can run.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-verdant/25 bg-dawn-frost p-6 md:p-7">
                  <h3 className="mb-3 font-heading text-lg font-bold text-regal-navy">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-granite">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why it is not out yet — the honest bit, and the reason to trust it later */}
      <section className="bg-dawn-frost py-20 md:py-28">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="border-l-[6px] border-l-verdant pl-6 md:pl-8">
              <h2 className="mb-6 font-heading text-3xl font-bold text-regal-navy md:text-4xl">
                Why it is not out yet.
              </h2>
              <div className="max-w-[760px] space-y-5 text-lg leading-[1.7] text-granite">
                <p>
                  We could ship something today. A partial tracker, confidently
                  presented, would look impressive and would probably win us
                  business.
                </p>
                <p>
                  We are not going to do that. A campaign that relies on a
                  half-finished compliance reference is worse off than a campaign
                  that knows it has to ask a lawyer. Getting this wrong does not
                  produce a bug report &mdash; it produces a news cycle, for
                  somebody who cannot afford one.
                </p>
                <p className="font-semibold text-regal-navy">
                  So the tracker stays unreleased until it is complete enough and
                  documented enough that we would stand behind any single entry in
                  it. We would rather ship it late than have someone rely on it
                  early.
                </p>
                <p>
                  When it does arrive, it will still be research rather than legal
                  advice, and it will still tell you to take it to your counsel.
                  That part is not a limitation we are working to remove. It is
                  the honest shape of the thing.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Waitlist */}
      <section className="relative overflow-hidden bg-regal-navy py-20 md:py-24">
        <AISparkle
          size={20}
          gradient="verdant"
          glow
          className="sparkle-twinkle absolute left-[10%] top-[22%] hidden sm:block"
          style={{ ["--dur"]: "4.8s" } as CSSProperties}
        />
        <AISparkle
          size={14}
          gradient="verdant-pale"
          className="sparkle-twinkle absolute right-[12%] bottom-[24%] hidden sm:block"
          style={{ ["--dur"]: "5.6s", animationDelay: "400ms" } as CSSProperties}
        />

        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-heading text-3xl font-extrabold tracking-[-1px] text-beacon-white md:text-[40px] md:leading-tight">
            Want to know the moment it is ready?
          </h2>
          <p className="mx-auto mb-8 max-w-xl leading-relaxed text-beacon-white/80">
            Join the waitlist and we will tell you first &mdash; and we will tell
            you plainly what it does and does not cover when we do.
          </p>

          <div className="mx-auto max-w-md text-beacon-white">
            <EmailCapture purpose="waitlist" buttonLabel="Join the waitlist &rarr;" />
          </div>

          <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-beacon-white/60">
            In the meantime, our team follows this landscape for every video we
            produce, and our compliance page explains how we go about it.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="verdant-outline" href="/compliance" className="!text-verdant">
              How we handle compliance &rarr;
            </Button>
            <Link
              href="/ethics"
              className="text-sm text-beacon-white/70 underline transition-colors hover:text-beacon-white"
            >
              Read our ethics commitment
            </Link>
          </div>
        </div>
      </section>

      {/* The caveat, in the same voice as the compliance page */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm leading-relaxed text-slate">
            This page describes something we are building, as of {COMPLIANCE_AS_OF}.
            It is not a product announcement, not a release date, and not legal
            advice. CampaignAI does not approve, certify or clear any video for
            release &mdash; your campaign&apos;s counsel always should.
          </p>
        </div>
      </section>
    </>
  );
}
