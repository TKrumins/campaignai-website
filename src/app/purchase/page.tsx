import type { Metadata } from "next";
import Link from "next/link";
import { Check, CalendarClock, Receipt, ListChecks } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import {
  CALENDLY_PURCHASE,
  CALENDLY_DEMO,
  CALENDLY_PROFESSIONAL,
  CALENDLY_CANDIDATE,
  CALENDLY_A250,
  CTA_PRIMARY,
  ETHICS_LINE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get started - CampaignAI",
  description:
    "Pick your plan and book your 30-minute onboarding call. We scope your video and price any add-ons on the call, then invoice you. Nothing is charged upfront.",
};

const plans = [
  {
    key: "professional",
    name: "Professional Video",
    price: "$1,999",
    tag: "Teams producing at scale",
    blurb: "Consultancies, party committees, PACs, and organizations.",
    link: CALENDLY_PROFESSIONAL,
  },
  {
    key: "candidate",
    name: "Candidate Campaigns",
    price: "$599",
    tag: "2026 cycle mission rate",
    blurb: "School board to U.S. Senate. Discounted from $1,999.",
    link: CALENDLY_CANDIDATE,
    featured: true,
  },
  {
    key: "a250",
    name: "America 250 Special",
    price: "$250",
    tag: "First of two videos",
    blurb:
      "Buy two videos, get your first for just $250 — your second is billed at your standard rate. First 250 customers.",
    link: CALENDLY_A250,
  },
];

const included = [
  "One finished, human-reviewed video",
  "15-, 30-, and 60-second cuts, every format",
  "State-specific AI disclosure labels",
  "Full ownership. No watermark.",
];

const steps = [
  {
    icon: ListChecks,
    title: "1. Choose your plan",
    body: "Pick the option that fits your race. Every plan is the same story-first production and human review.",
  },
  {
    icon: CalendarClock,
    title: "2. Book your onboarding call",
    body: "Grab a 30-minute slot. We talk through your race, your story, and exactly what you need before anything is committed.",
  },
  {
    icon: Receipt,
    title: "3. We scope it, then invoice you",
    body: "We finalize your scope and price any add-ons on the call. Your invoice follows — so nothing is charged before you know the full cost.",
  },
];

export default function PurchasePage() {
  return (
    <main className="pt-40 pb-24 bg-dawn-frost">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <SectionLabel text="Get Started" />
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-4">
              Get started.
            </h1>
            <p className="text-granite text-lg leading-relaxed">
              Three quick steps: pick your plan, book your 30-minute onboarding
              call, and we&apos;ll scope your video together. Add-ons are priced
              on the call and your invoice follows, so nothing is charged upfront.
            </p>
          </div>
        </ScrollReveal>

        {/* Step 1 — plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.key} delay={i * 80}>
              <div
                className={`rounded-2xl bg-white h-full flex flex-col overflow-hidden ${
                  plan.featured ? "shadow-xl ring-2 ring-regal-navy/10" : "shadow-md ring-1 ring-black/5"
                }`}
              >
                <div className="h-1.5 multipartisan-gradient" />
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <p className="font-heading font-bold text-sm text-regal-navy uppercase tracking-wider mb-3">
                    {plan.name}
                  </p>
                  <p className="font-heading font-extrabold text-[40px] leading-none text-regal-navy mb-2">
                    {plan.price}
                  </p>
                  <span className="inline-block rounded-full bg-regal-navy/5 text-regal-navy text-xs font-semibold px-3 py-1 mb-4 w-fit">
                    {plan.tag}
                  </span>
                  <p className="text-granite text-sm leading-relaxed mb-5 flex-1">{plan.blurb}</p>
                  <Button variant="patriot" href={plan.link} external className="w-full">
                    {CTA_PRIMARY}
                  </Button>
                  <p className="text-slate text-xs text-center mt-2">
                    Books your call &middot; nothing charged today
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* What's included + nonprofit note */}
        <ScrollReveal>
          <div className="rounded-2xl bg-white ring-1 ring-black/5 p-6 md:p-8 mb-14 grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-heading font-bold text-sm text-regal-navy uppercase tracking-wider mb-3">
                Every plan includes
              </p>
              <ul className="space-y-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-granite">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-freedom-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:border-l md:border-gray-200 md:pl-6">
              <p className="font-heading font-bold text-sm text-regal-navy uppercase tracking-wider mb-3">
                Nonprofit organization?
              </p>
              <p className="text-granite text-sm leading-relaxed mb-4">
                We price mission work case by case, so your budget never decides
                whether your story gets told.
              </p>
              <Link
                href="/for/nonprofits"
                className="inline-flex items-center gap-1 text-freedom-blue text-sm font-semibold hover:underline"
              >
                See mission pricing &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Steps 1-3 explainer */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl bg-white ring-1 ring-black/5 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-regal-navy/5">
                  <Icon className="h-5 w-5 text-regal-navy" />
                </div>
                <h3 className="font-heading font-bold text-lg text-regal-navy mb-2">{title}</h3>
                <p className="text-granite text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Fallback: book the call directly */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <p className="text-granite text-sm mb-3">
              Not sure which plan fits? Book the call anyway and we&apos;ll work it out together.
            </p>
            <Button variant="navy-outline" href={CALENDLY_PURCHASE} external>
              Book your onboarding call &rarr;
            </Button>
            <p className="text-slate text-xs mt-4">
              Questions about mission pricing?{" "}
              <a href={CALENDLY_DEMO} target="_blank" rel="noopener noreferrer" className="text-freedom-blue font-semibold hover:underline">
                Talk to our team
              </a>
              .
            </p>
          </div>
        </ScrollReveal>

        {/* Ethics */}
        <ScrollReveal>
          <p className="text-center text-granite text-base mt-12">
            <span className="text-verdant mr-1.5">&#x2713;</span>
            {ETHICS_LINE}
          </p>
        </ScrollReveal>
      </div>
    </main>
  );
}
