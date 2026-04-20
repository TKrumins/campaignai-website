"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SubstackCapture } from "@/components/forms/SubstackCapture";
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
    tagColor: "bg-verdant/10 text-verdant border-verdant/20",
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
  "Agents & Automation": "border-l-verdant",
};

const categoryIconColors: Record<string, string> = {
  "Generative AI": "text-liberty-crimson",
  "Data & Analytics": "text-freedom-blue",
  "Algorithmic Targeting & Amplification": "text-pioneer-gold",
  "Deepfakes & Cloning": "text-critical-scarlet",
  "Agents & Automation": "text-verdant",
};

export function AILandscape() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-6">
            <SectionLabel text="The AI Landscape" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-4">
              AI is already reshaping campaigns.
            </h2>
            <p className="text-granite text-lg leading-relaxed max-w-[680px] mx-auto">
              From voter analysis to synthetic media, artificial intelligence is
              transforming every stage of the campaign cycle. Here is what the
              landscape looks like right now.
            </p>
          </div>
        </ScrollReveal>

        {/* Central hub */}
        <ScrollReveal>
          <div className="flex justify-center my-10">
            <div className="relative">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full patriot-gradient flex items-center justify-center shadow-lg shadow-freedom-blue/20">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="w-8 h-8 md:w-10 md:h-10 text-regal-navy mx-auto mb-1" />
                    <span className="text-regal-navy text-xs md:text-sm font-bold uppercase tracking-wider">
                      AI
                    </span>
                  </div>
                </div>
              </div>
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full border border-freedom-blue/15 animate-ping" style={{ animationDuration: "3s" }} />
              <div className="absolute -inset-4 rounded-full border border-liberty-crimson/10 animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }} />
            </div>
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
                      className={`group rounded-xl border border-gray-100 border-l-[3px] ${categoryAccentBorders[name]} bg-dawn-frost/50 p-5 h-full transition-all duration-300 hover:shadow-md hover:scale-[1.01]`}
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
            <div className="max-w-md mx-auto mt-8">
              <SubstackCapture variant="light" buttonText="Subscribe" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
