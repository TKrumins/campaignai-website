"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  Brain,
  FileText,
  Target,
  TrendingUp,
  MessageSquare,
  Video,
  BarChart3,
  Mail,
  Search,
  Mic,
  Bot,
  Shield,
  Image,
  PenTool,
  Megaphone,
  Users,
  Globe,
  Gauge,
  Fingerprint,
  Phone,
  Wallet,
  Eye,
  Zap,
  Calendar,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";

const EMBLEM_SPARK =
  "M12 0 C12.8 6.6 17.4 11.2 24 12 C17.4 12.8 12.8 17.4 12 24 C11.2 17.4 6.6 12.8 0 12 C6.6 11.2 11.2 6.6 12 0 Z";

interface AICapability {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Category {
  name: string;
  tagColor: string;
  capabilities: AICapability[];
}

const categories: Category[] = [
  {
    name: "Generative AI",
    tagColor: "bg-liberty-crimson/10 text-liberty-crimson border-liberty-crimson/20",
    capabilities: [
      {
        icon: FileText,
        title: "Script & Speech Drafting",
        description: "First drafts of stump speeches, debate prep, ad scripts, and press releases generated in minutes.",
      },
      {
        icon: Video,
        title: "Video Production",
        description: "Automated editing, synthetic B-roll, AI voiceovers, and rapid ad variations for A/B testing.",
      },
      {
        icon: Image,
        title: "Image & Graphic Generation",
        description: "AI-created campaign graphics, social cards, event flyers, and branded visual content on demand.",
      },
      {
        icon: PenTool,
        title: "Copywriting & Messaging",
        description: "Fundraising emails, social captions, SMS blasts, and policy one-pagers tailored to audience segments.",
      },
      {
        icon: Globe,
        title: "Translation & Localization",
        description: "Instant multilingual content for diverse districts. Culturally adapted messaging at scale.",
      },
    ],
  },
  {
    name: "Data & Analytics",
    tagColor: "bg-freedom-blue/10 text-freedom-blue border-freedom-blue/20",
    capabilities: [
      {
        icon: BarChart3,
        title: "Voter Modeling & Prediction",
        description: "Predictive turnout models, persuadability scores, and precinct-level targeting from voter file data.",
      },
      {
        icon: Brain,
        title: "Sentiment Analysis",
        description: "Real-time monitoring of voter sentiment across social platforms, news cycles, and community forums.",
      },
      {
        icon: Search,
        title: "Opposition Research",
        description: "Automated scanning of public records, voting histories, financial disclosures, and social media archives.",
      },
      {
        icon: Gauge,
        title: "Poll Analysis & Forecasting",
        description: "Aggregating public and internal polling data to generate probabilistic race forecasts and trend lines.",
      },
      {
        icon: Wallet,
        title: "Fundraising Optimization",
        description: "Predictive donor modeling, optimal ask amounts, lapsed donor reactivation, and event revenue forecasting.",
      },
    ],
  },
  {
    name: "Algorithmic Targeting & Amplification",
    tagColor: "bg-pioneer-gold/15 text-pioneer-gold border-pioneer-gold/25",
    capabilities: [
      {
        icon: Target,
        title: "Hypertargeted Advertising",
        description: "Micro-segmented ad delivery across platforms based on demographics, behavior, and voter file overlays.",
      },
      {
        icon: Mail,
        title: "Email Personalization",
        description: "Dynamic subject lines, personalized ask amounts, send-time optimization, and automated donor journeys.",
      },
      {
        icon: TrendingUp,
        title: "Social Media Amplification",
        description: "Algorithmic content optimization, AI-scheduled posting, engagement automation, and trend hijacking.",
      },
      {
        icon: Megaphone,
        title: "Programmatic Media Buying",
        description: "AI-driven ad placement across digital, streaming, and connected TV. Real-time bid optimization.",
      },
      {
        icon: Users,
        title: "Lookalike Audience Building",
        description: "Identifying new supporters by modeling the traits and behaviors of existing donors and volunteers.",
      },
    ],
  },
  {
    name: "Deepfakes & Cloning",
    tagColor: "bg-critical-scarlet/10 text-critical-scarlet border-critical-scarlet/20",
    capabilities: [
      {
        icon: Mic,
        title: "Voice Cloning",
        description: "Synthetic voice generation for robocalls, audio ads, and multilingual content. Increasingly indistinguishable.",
      },
      {
        icon: Eye,
        title: "Deepfake Video",
        description: "AI-generated video of candidates, manipulated footage, and fabricated endorsements. A growing threat to trust.",
      },
      {
        icon: Image,
        title: "Synthetic Photography",
        description: "AI-generated rally crowds, fake endorsement photos, and manipulated event imagery shared as real.",
      },
      {
        icon: Fingerprint,
        title: "Identity Impersonation",
        description: "Cloned social media accounts, AI-generated candidate personas, and synthetic constituent communications.",
      },
    ],
  },
  {
    name: "Agents & Automation",
    tagColor: "bg-bridge-violet/10 text-bridge-violet border-bridge-violet/20",
    capabilities: [
      {
        icon: Bot,
        title: "AI Campaign Agents",
        description: "Autonomous systems that research, draft, schedule, and optimize campaign operations end-to-end.",
      },
      {
        icon: MessageSquare,
        title: "Voter Chatbots",
        description: "AI-powered outreach via text, web chat, and social DMs. Automated phone banking and canvass scripts.",
      },
      {
        icon: Phone,
        title: "Automated Phone Banking",
        description: "AI callers conducting voter ID, persuasion, and GOTV calls at scale with natural-sounding conversations.",
      },
      {
        icon: Shield,
        title: "Compliance Agents",
        description: "Automated FEC reporting, disclosure tracking, contribution limit monitoring, and real-time regulatory alerts.",
      },
      {
        icon: Calendar,
        title: "Field Operations",
        description: "AI-optimized canvass routes, volunteer scheduling, event logistics, and resource allocation across districts.",
      },
      {
        icon: Zap,
        title: "Rapid Response",
        description: "Automated monitoring of opponent activity, news cycles, and social media with instant counter-messaging drafts.",
      },
    ],
  },
];

const categoryAccentBorders: Record<string, string> = {
  "Generative AI": "border-l-liberty-crimson",
  "Data & Analytics": "border-l-freedom-blue",
  "Algorithmic Targeting & Amplification": "border-l-pioneer-gold",
  "Deepfakes & Cloning": "border-l-critical-scarlet",
  "Agents & Automation": "border-l-bridge-violet",
};

const categoryIconColors: Record<string, string> = {
  "Generative AI": "text-liberty-crimson",
  "Data & Analytics": "text-freedom-blue",
  "Algorithmic Targeting & Amplification": "text-pioneer-gold",
  "Deepfakes & Cloning": "text-critical-scarlet",
  "Agents & Automation": "text-bridge-violet",
};

export function AILandscape() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-6">
            <SectionLabel text="The AI Landscape" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-4">
              What AI can do in a campaign today.
            </h2>
            <p className="text-granite text-lg leading-relaxed max-w-[680px] mx-auto">
              From voter analysis to synthetic media, artificial intelligence is
              transforming every stage of the campaign cycle. Here is what the
              landscape looks like right now.
            </p>
          </div>
        </ScrollReveal>

        {/* Central emblem — the four-point AI mark on a navy disc, ringed by a
            rotating multi-partisan orbit. A bespoke brand mark, not a stock brain. */}
        <ScrollReveal>
          <div className="flex justify-center my-12">
            <svg viewBox="0 0 160 160" className="h-32 w-32 md:h-40 md:w-40" role="img" aria-label="CampaignAI">
              <defs>
                <linearGradient id="ail-ring" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#FF3366" />
                  <stop offset="0.5" stopColor="#8E5CF7" />
                  <stop offset="1" stopColor="#4D9FFF" />
                </linearGradient>
                <linearGradient id="ail-spark" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#FF6B8F" />
                  <stop offset="0.5" stopColor="#8E5CF7" />
                  <stop offset="1" stopColor="#7AB8FF" />
                </linearGradient>
              </defs>
              {/* rotating dashed multi-partisan orbit */}
              <circle cx="80" cy="80" r="62" fill="none" stroke="url(#ail-ring)" strokeWidth="3" strokeDasharray="5 9" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" from="0 80 80" to="360 80 80" dur="28s" repeatCount="indefinite" />
              </circle>
              {/* navy disc */}
              <circle cx="80" cy="80" r="46" fill="#0D1B3E" />
              <circle cx="80" cy="80" r="46" fill="none" stroke="#4D9FFF" strokeOpacity="0.3" strokeWidth="1.5" />
              {/* center AI sparkle */}
              <g transform="translate(80 80) scale(2.5) translate(-12 -12)">
                <path d={EMBLEM_SPARK} fill="url(#ail-spark)" className="ga-glow" />
              </g>
              {/* orbiting sparkles */}
              {[
                { x: 118, y: 52, s: 12, c: "#FF3366", d: 0 },
                { x: 44, y: 110, s: 11, c: "#4D9FFF", d: 0.6 },
                { x: 116, y: 116, s: 9, c: "#8E5CF7", d: 0.3 },
              ].map((p, i) => {
                const k = p.s / 24;
                return (
                  <g key={i} transform={`translate(${p.x} ${p.y}) scale(${k}) translate(-12 -12)`}>
                    <path d={EMBLEM_SPARK} fill={p.c} className="sparkle-twinkle" style={{ ["--dur"]: `${2.6 + i * 0.4}s`, animationDelay: `${p.d}s` } as CSSProperties} />
                  </g>
                );
              })}
            </svg>
          </div>
        </ScrollReveal>

        {/* Category sections */}
        <div className="space-y-12">
          {categories.map(({ name, tagColor, capabilities: caps }, catIdx) => (
            <div key={name}>
              {/* Category header */}
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-silver-mist/50 to-transparent" />
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest ${tagColor}`}
                  >
                    {name}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-silver-mist/50 to-transparent" />
                </div>
              </ScrollReveal>

              {/* Capability cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {caps.map(({ icon: Icon, title, description }, i) => (
                  <ScrollReveal key={title} delay={i * 50}>
                    <div
                      className={`group rounded-xl border border-gray-100 border-l-[3px] ${categoryAccentBorders[name]} bg-white p-5 h-full transition-all duration-300 hover:shadow-md hover:scale-[1.01]`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                          <Icon className={`w-5 h-5 ${categoryIconColors[name]}`} strokeWidth={1.75} />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-base text-regal-navy mb-1.5">
                            {title}
                          </h3>
                          <p className="text-slate text-sm leading-relaxed">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <ScrollReveal>
          <div className="text-center max-w-[700px] mx-auto mt-14">
            <div className="h-1 w-16 patriot-gradient rounded-full mx-auto mb-6" />
            <p className="text-granite text-lg leading-relaxed font-medium">
              The question isn&apos;t whether AI will be used in campaigns.
              <br />
              <span className="text-regal-navy font-bold">
                It&apos;s whether we shape how it&apos;s used, together.
              </span>
            </p>
            <div className="mt-8">
              <a
                href="/community"
                className="btn-hover inline-flex items-center justify-center text-center rounded-full bg-regal-navy px-6 py-3 text-white text-sm font-semibold"
              >
                Join the conversation &rarr;
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
