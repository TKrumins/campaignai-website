"use client";

import { useState, type CSSProperties } from "react";
import {
  Vote,
  Megaphone,
  FlaskConical,
  Scale,
  Landmark,
  GraduationCap,
  Users,
  Newspaper,
  Handshake,
  HeartHandshake,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { SOCIAL_SUBSTACK } from "@/lib/constants";

interface Group {
  id: string;
  label: string;
  icon: LucideIcon;
  hero: string; // the "you" line — hero framing
  benefits: string[];
}

const ACCENTS = ["#FF3366", "#FF6B8F", "#8E5CF7", "#7AB8FF", "#4D9FFF"];

const GROUPS: Group[] = [
  {
    id: "candidates",
    label: "Candidates",
    icon: Vote,
    hero: "You're running to serve — not to become a media company.",
    benefits: [
      "See what's actually working for candidates across the spectrum, on real budgets.",
      "Get plain-English breakdowns of new AI rules before they trip you up.",
      "Learn to tell your story like you — without a six-figure ad team.",
    ],
  },
  {
    id: "operatives",
    label: "Operatives",
    icon: Megaphone,
    hero: "You keep campaigns ahead of the curve. We keep you ahead of the tools.",
    benefits: [
      "Field-tested tactics and what's genuinely moving numbers.",
      "The ethics and compliance shifts your clients will ask about — before they ask.",
      "A back-channel with others solving the same problems in real time.",
    ],
  },
  {
    id: "researchers",
    label: "Researchers",
    icon: FlaskConical,
    hero: "You study this. We're living it — in the open.",
    benefits: [
      "Ground-truth from practitioners actually using these tools.",
      "Open questions worth studying, straight from the field.",
      "A venue to share findings with the people building and using AI in campaigns.",
    ],
  },
  {
    id: "ethicists",
    label: "Ethicists",
    icon: Scale,
    hero: "You ask the hard questions. We want them asked before we ship, not after.",
    benefits: [
      "Weigh in on the real calls as they're made — not in a post-mortem.",
      "Watch where we draw our lines, and push on them.",
      "Your arguments shape what gets built.",
    ],
  },
  {
    id: "policy",
    label: "Policy Experts",
    icon: Landmark,
    hero: "You write the rules. We show how they land in the real world.",
    benefits: [
      "Track how AI-in-campaigns rules actually play out on the ground.",
      "Help translate policy into practice campaigns can follow.",
      "Early read on where regulation is heading, state by state.",
    ],
  },
  {
    id: "educators",
    label: "Educators",
    icon: GraduationCap,
    hero: "You're teaching the next generation to navigate all of this.",
    benefits: [
      "Clear explainers and real examples for civic and digital-literacy classrooms.",
      "A community thinking hard about AI, media, and democracy.",
      "Material you can actually use next week.",
    ],
  },
  {
    id: "voters",
    label: "Voters",
    icon: Users,
    hero: "You just want to know what's real.",
    benefits: [
      "Understand how the video in your feed was actually made.",
      "Learn to spot what's genuine and what isn't.",
      "Join a conversation about the election you actually want.",
    ],
  },
  {
    id: "journalists",
    label: "Journalists",
    icon: Newspaper,
    hero: "This beat is about to explode. Get ahead of it.",
    benefits: [
      "Early signal on AI-in-campaigns trends and verification tools.",
      "Sources who'll go on the record about how this really works.",
      "Context before the story breaks everywhere else.",
    ],
  },
  {
    id: "party",
    label: "Party Leaders",
    icon: Handshake,
    hero: "You're building a bench. We help you equip it.",
    benefits: [
      "Practical guidance your candidates can use right now.",
      "A read on where the tools and the rules are heading in your state.",
      "Lower the barrier for the first-time candidates you're recruiting.",
    ],
  },
  {
    id: "advocates",
    label: "Advocates",
    icon: HeartHandshake,
    hero: "You've got a mission and a fraction of the budget. Punch above it.",
    benefits: [
      "Mission-driven video and outreach that works without an agency.",
      "What's actually landing with the communities you serve.",
      "A community that shares what works, openly.",
    ],
  },
];

export function CommunityWhyJoin() {
  const [id, setId] = useState(GROUPS[0].id);
  const idx = GROUPS.findIndex((g) => g.id === id);
  const active = GROUPS[idx] ?? GROUPS[0];
  const accent = ACCENTS[idx % ACCENTS.length];
  const Icon = active.icon;

  return (
    <section className="bg-dawn-frost py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionLabel text="Find your place" />
          <h2 className="mt-3 mb-4 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
            Whoever you are, there&apos;s a reason to be here.
          </h2>
          <p className="text-lg leading-relaxed text-granite">
            Pick your corner of the conversation and see what the community gives you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[260px_minmax(0,1fr)]">
          {/* Group picker — sticky on mobile (horizontal scroll) + desktop (vertical) */}
          <div className="sticky top-[68px] z-20 -mx-4 bg-dawn-frost/95 px-4 py-2 backdrop-blur md:top-24 md:mx-0 md:self-start md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none">
            <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
              {GROUPS.map((g, i) => {
                const on = g.id === id;
                const GIcon = g.icon;
                const ac = ACCENTS[i % ACCENTS.length];
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setId(g.id)}
                    aria-pressed={on}
                    className={`group inline-flex shrink-0 items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue md:w-full ${
                      on ? "border-transparent bg-regal-navy text-beacon-white shadow-md" : "border-gray-200 bg-white text-granite hover:border-regal-navy/40"
                    }`}
                    style={on ? { boxShadow: `0 6px 18px ${ac}33` } : undefined}
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: on ? ac : `${ac}18` }}>
                      <GIcon className="h-4 w-4" style={{ color: on ? "#fff" : ac }} />
                    </span>
                    <span className="whitespace-nowrap text-sm font-semibold md:flex-1 md:whitespace-normal">{g.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hero panel — the group as the hero */}
          <div key={id} className="vh-settle relative overflow-hidden rounded-3xl bg-regal-navy p-7 text-beacon-white shadow-xl ring-1 ring-white/10 sm:p-9">
            <AISparkle size={14} color={accent} glow className="sparkle-twinkle absolute right-5 top-5" style={{ ["--dur"]: "2.8s" } as CSSProperties} />
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${accent}26` }}>
                <Icon className="h-6 w-6" style={{ color: accent }} />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: accent }}>
                For {active.label}
              </span>
            </div>

            <p className="mb-6 font-heading text-2xl font-extrabold leading-tight text-beacon-white md:text-3xl">
              {active.hero}
            </p>

            <ul className="space-y-3">
              {active.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full" style={{ background: accent }}>
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-beacon-white/85 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href={SOCIAL_SUBSTACK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-beacon-white px-5 py-2.5 text-sm font-bold text-regal-navy transition-transform hover:-translate-y-0.5"
            >
              Join the conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
