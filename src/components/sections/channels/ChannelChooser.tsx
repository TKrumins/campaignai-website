"use client";

import { useState } from "react";
import {
  Share2,
  Globe,
  Mail,
  MessageSquare,
  HeartHandshake,
  CalendarDays,
  Tv,
  Antenna,
  Info,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface Channel {
  id: string;
  label: string;
  icon: LucideIcon;
  accent: string;
  soon?: boolean;
  status?: string; // small status pill in the detail panel (e.g. "Available now")
  why: string;
  length: string;
  format: string;
  tips: string[];
  pair: string;
  note?: string; // highlighted caveat (broadcast clearance)
  waitlist?: boolean; // render the CTV waitlist CTA
}

const CHANNELS: Channel[] = [
  {
    id: "social",
    label: "Social media",
    icon: Share2,
    accent: "#FF3366",
    why: "Where most voters will meet your message first — and where it spreads on its own if it lands.",
    length: "15–30 sec",
    format: "Vertical 9:16 for stories & reels · square or landscape for the feed",
    tips: [
      "Win the first 3 seconds — hook before the scroll.",
      "Caption everything; most people watch on mute.",
      "Post the short cut here, keep the full version on your site.",
    ],
    pair: "Link back to your website or donation page in the caption.",
  },
  {
    id: "website",
    label: "Campaign website",
    icon: Globe,
    accent: "#D14F9C",
    why: "Your home turf. A visitor who presses play is already interested — give them the fullest version of you.",
    length: "60–90 sec",
    format: "Landscape 16:9, autoplay muted with captions on",
    tips: [
      "Put your best video above the fold on the homepage.",
      "One clear ask directly beneath it — volunteer, donate, or learn more.",
    ],
    pair: "Feed traffic here from every social caption and email.",
  },
  {
    id: "email",
    label: "Email & newsletters",
    icon: Mail,
    accent: "#B15CE8",
    why: "Your warmest audience — supporters who already opted in and want to hear from you.",
    length: "Any length (linked, not embedded)",
    format: "An eye-catching thumbnail with a play button that links out",
    tips: [
      "Most email apps won't play video inline — use a thumbnail image, not an embed.",
      "Link the thumbnail to the video on your site or YouTube.",
    ],
    pair: "Send supporters to a landing page with the full video and a next step.",
  },
  {
    id: "text",
    label: "Text & volunteers",
    icon: MessageSquare,
    accent: "#8E5CF7",
    why: "The most personal channel there is. A clip a volunteer forwards carries the trust of the person who sent it.",
    length: "15–20 sec",
    format: "Vertical, small file size, mobile-first",
    tips: [
      "Keep it short and forwardable — built to pass hand to hand.",
      "Link out rather than attaching heavy files to texts.",
    ],
    pair: "Give your volunteer network a ready-to-send clip and a suggested message.",
  },
  {
    id: "donate",
    label: "Donation pages",
    icon: HeartHandshake,
    accent: "#6A81FB",
    why: "The moment of decision. A video beside the donate button makes the case at exactly the right time.",
    length: "30–60 sec",
    format: "Landscape or square, right beside the ask",
    tips: [
      "Make the case for support, then show the donate button immediately.",
      "Lead with why this race matters, close with the specific ask.",
    ],
    pair: "Drive here from email and social when you're mid-fundraising push.",
  },
  {
    id: "events",
    label: "In-person events",
    icon: CalendarDays,
    accent: "#5B9BF8",
    why: "Town halls, rallies, and fundraisers — a big screen turns your video into a shared moment in the room.",
    length: "60–90 sec",
    format: "High-resolution landscape, louder mix for a live room",
    tips: [
      "Ask for the highest-resolution export for big screens.",
      "Have a captioned version ready for noisy rooms.",
    ],
    pair: "Follow the screening with a QR code to your donation or volunteer page.",
  },
  {
    id: "ctv",
    label: "Connected TV",
    icon: Tv,
    accent: "#4D9FFF",
    soon: true,
    status: "Coming soon",
    why: "Streaming apps — Roku, Hulu, YouTube TV — reach cord-cutters with broadcast-style ads and the kind of precise targeting traditional TV never had. It's where a growing share of voters now watch.",
    length: "15 or 30 sec",
    format: "Broadcast-style landscape, built to streaming ad specs",
    tips: [
      "Reaches households that no longer watch traditional TV.",
      "Built for the videos we already make — no separate ad-tech stack to stitch together.",
      "We're building toward Connected TV delivery. It isn't live yet — but it's close.",
    ],
    pair: "Be first in line when it opens.",
    waitlist: true,
  },
  {
    id: "broadcast",
    label: "Broadcast TV",
    icon: Antenna,
    accent: "#7AB8FF",
    status: "Available now",
    why: "Traditional television still commands attention and a sense of credibility that's hard to buy anywhere else. Your video is produced to broadcast quality, ready for the air when you are.",
    length: "15 or 30 sec",
    format: "Produced to broadcast quality; airtime bought separately",
    tips: [
      "Your video is produced to broadcast-quality standards.",
      "Airtime and placement are bought separately from the video itself.",
    ],
    pair: "Confirm station requirements before you buy airtime.",
    note: "Broadcast quality isn't the same as broadcast clearance. Stations and networks set their own timing, technical, and legal-review requirements — we recommend confirming each station's rules and checking with your counsel before you air.",
  },
];

export function ChannelChooser() {
  const [id, setId] = useState(CHANNELS[0].id);
  const active = CHANNELS.find((c) => c.id === id) ?? CHANNELS[0];
  const Icon = active.icon;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionLabel text="Where it should go" />
          <h2 className="mt-3 mb-4 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
            Pick a channel. Get the playbook.
          </h2>
          <p className="text-lg leading-relaxed text-granite">
            One finished video works everywhere &mdash; but it works best when it&apos;s
            cut and placed for each spot. Here&apos;s how we&apos;d run it.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[280px_minmax(0,1fr)]">
          {/* Channel picker — pinned to the top on mobile (horizontal scroll),
              a sticky vertical list on desktop, so the options stay reachable. */}
          <div className="sticky top-[68px] z-20 -mx-4 bg-white/95 px-4 py-2 backdrop-blur md:top-24 md:mx-0 md:self-start md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none">
            <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
              {CHANNELS.map((c) => {
                const on = c.id === id;
                const CIcon = c.icon;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setId(c.id)}
                    aria-pressed={on}
                    className={`group inline-flex shrink-0 items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue md:w-full md:gap-3 md:px-4 md:py-3 ${
                      on ? "border-transparent bg-regal-navy text-beacon-white shadow-md" : "border-gray-200 bg-white text-granite hover:border-regal-navy/40"
                    }`}
                    style={on ? { boxShadow: `0 6px 18px ${c.accent}33` } : undefined}
                  >
                    <span
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: on ? c.accent : `${c.accent}18` }}
                    >
                      <CIcon className="h-4 w-4" style={{ color: on ? "#fff" : c.accent }} />
                    </span>
                    <span className="whitespace-nowrap text-sm font-semibold md:flex-1 md:whitespace-normal">{c.label}</span>
                    {c.soon && (
                      <span className="rounded-full bg-pioneer-gold/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-pioneer-gold">
                        Soon
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div key={id} className="vh-settle rounded-3xl border border-gray-200 bg-dawn-frost/50 p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${active.accent}1a` }}>
                <Icon className="h-6 w-6" style={{ color: active.accent }} />
              </span>
              <div>
                <h3 className="font-heading text-2xl font-extrabold text-regal-navy">{active.label}</h3>
                {active.status && (
                  <span className={`text-xs font-bold uppercase tracking-wider ${active.soon ? "text-pioneer-gold" : "text-freedom-blue"}`}>
                    {active.status}
                  </span>
                )}
              </div>
            </div>

            <p className="mb-5 text-granite leading-relaxed">{active.why}</p>

            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-regal-navy ring-1 ring-gray-200">
                Best length · {active.length}
              </span>
              <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-regal-navy ring-1 ring-gray-200">
                Format · {active.format}
              </span>
            </div>

            <ul className="space-y-2.5">
              {active.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: active.accent }} />
                  <span className="text-sm leading-relaxed text-granite">{tip}</span>
                </li>
              ))}
            </ul>

            {/* Broadcast clearance note (folded in from the old "Onto the screen" section) */}
            {active.note && (
              <div className="mt-5 rounded-xl bg-white p-4 ring-1 ring-horizon-azure/25">
                <div className="mb-1.5 flex items-center gap-2">
                  <Info className="h-4 w-4 text-horizon-azure" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate">One thing to know</span>
                </div>
                <p className="text-sm leading-relaxed text-granite">{active.note}</p>
              </div>
            )}

            <p className="mt-5 border-t border-gray-200 pt-4 text-sm leading-relaxed text-slate">
              <span className="font-semibold text-regal-navy">Works well with:</span> {active.pair}
            </p>

            {/* CTV waitlist (folded in) */}
            {active.waitlist && (
              <a
                href="/get-started#waitlist"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-freedom-blue hover:underline"
              >
                Join the Connected TV waitlist
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
