import type { Metadata } from "next";
import { Check, CalendarClock, Receipt, ListChecks, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { America250Popup } from "@/components/sections/home/hero-trials/America250Popup";
import {
  CALENDLY_PURCHASE,
  CALENDLY_DEMO,
  CALENDLY_PROFESSIONAL,
  CALENDLY_CANDIDATE,
  CTA_PRIMARY,
  CTA_TEAM,
  ETHICS_LINE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get started - CampaignAI",
  description:
    "Pick your plan and book your 30-minute onboarding call. We scope your video and price any add-ons on the call, then invoice you. Nothing is charged upfront.",
};

// Same three-up model as the homepage pricing, simplified for the booking flow.
// Each card carries its own utm-tagged Calendly link so the team knows which
// plan the visitor picked before the call.
const plans = [
  {
    key: "professional",
    name: "Professional Video",
    price: "$1,999",
    struck: null as string | null,
    tag: "Teams producing at scale",
    blurb:
      "Consultancies, party committees, PACs, and organizations. One flat rate for a finished video.",
    link: CALENDLY_PROFESSIONAL,
    cta: CTA_PRIMARY,
    variant: "patriot" as const,
    featured: false,
  },
  {
    key: "candidate",
    name: "Candidate Campaigns",
    price: "$599",
    struck: "$1,999" as string | null,
    tag: "2026 cycle mission rate",
    blurb:
      "School board to U.S. Senate. Cut from $1,999 because every campaign deserves a fair shot — this is the work we care about most.",
    link: CALENDLY_CANDIDATE,
    cta: CTA_PRIMARY,
    variant: "patriot" as const,
    featured: true,
  },
  {
    key: "nonprofit",
    name: "Nonprofit Organizations",
    price: "Let’s talk",
    struck: null as string | null,
    tag: "Mission pricing",
    blurb:
      "A community you serve, an issue you can’t stay quiet on. We price mission work case by case.",
    link: CALENDLY_DEMO,
    cta: CTA_TEAM,
    variant: "navy-outline" as const,
    featured: false,
  },
];

const included = [
  "One finished, human-reviewed video",
  "15-, 30-, and 60-second cuts, every format",
  "State-specific AI disclosure labels",
  "Full ownership. No watermark.",
];

const addOns = [
  "Custom footage",
  "Extra concepts",
  "More videos",
  "Additional languages",
  "Rush / weekend delivery",
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
          <div className="text-center max-w-[700px] mx-auto mb-10">
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

        {/* America 250 offer — hovering, in the home-hero aesthetic */}
        <ScrollReveal>
          <div className="mb-14 flex justify-center">
            <America250Popup />
          </div>
        </ScrollReveal>

        {/* Step 1 — plans (home pricing model, simplified) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-6">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.key} delay={i * 80}>
              <div
                className={`relative rounded-2xl bg-white h-full flex flex-col overflow-hidden ${
                  plan.featured
                    ? "shadow-2xl ring-2 ring-liberty-crimson/25 md:-translate-y-3"
                    : "shadow-md ring-1 ring-black/5"
                }`}
              >
                <div className={`${plan.featured ? "h-2" : "h-1.5"} multipartisan-gradient`} />
                {plan.featured && (
                  <div className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-liberty-crimson/10 via-bridge-violet/10 to-freedom-blue/10 py-2 text-[11px] font-bold uppercase tracking-wider text-regal-navy">
                    <Heart className="h-3.5 w-3.5 fill-liberty-crimson text-liberty-crimson" />
                    Our mission rate
                  </div>
                )}
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <p className="font-heading font-bold text-sm text-regal-navy uppercase tracking-wider mb-3">
                    {plan.name}
                  </p>
                  <div className="min-h-[56px]">
                    {plan.struck ? (
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading font-bold text-lg text-slate line-through decoration-2 decoration-liberty-crimson">
                          {plan.struck}
                        </span>
                        <span className="font-heading font-extrabold text-[40px] leading-none text-regal-navy">
                          {plan.price}
                        </span>
                      </div>
                    ) : (
                      <span className="font-heading font-extrabold text-[40px] leading-none text-regal-navy">
                        {plan.price}
                      </span>
                    )}
                  </div>
                  <span className="inline-block rounded-full bg-regal-navy/5 text-regal-navy text-xs font-semibold px-3 py-1 mb-4 mt-3 w-fit">
                    {plan.tag}
                  </span>
                  <p className="text-granite text-sm leading-relaxed mb-5 flex-1">{plan.blurb}</p>
                  <Button variant={plan.variant} href={plan.link} external className="w-full">
                    {plan.cta}
                  </Button>
                  <p className="text-slate text-xs text-center mt-2">
                    Books your call &middot; nothing charged today
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* What's included + add-ons */}
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
                Add-ons, priced on your call
              </p>
              <p className="text-granite text-sm leading-relaxed mb-3">
                Anything beyond your finished video — scoped and quoted on the
                call, and approved before a dollar is charged.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {addOns.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-regal-navy/5 px-3 py-1 text-xs font-medium text-regal-navy"
                  >
                    + {chip}
                  </span>
                ))}
              </div>
              <p className="text-slate text-xs leading-relaxed">
                <span className="font-semibold text-regal-navy">Example:</span> a
                candidate adds a second concept and Spanish-language cuts to their
                $599 announcement — quoted on the call, nothing charged until they
                approve it.
              </p>
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
