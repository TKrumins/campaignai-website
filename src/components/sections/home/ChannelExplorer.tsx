"use client";

import { useState } from "react";
import type { CSSProperties, ComponentType } from "react";
import { Share2, Globe, Mail, Users, HandCoins, Presentation, Tv, Antenna, AlertTriangle, MousePointerClick } from "lucide-react";
import { Hub } from "@/components/ui/DistributionHub";
import { AISparkle } from "@/components/ui/AISparkle";

/**
 * The interactive "everywhere" hub for the home page. The shared DistributionHub
 * graphic renders eight clickable destination bubbles around the central "Your
 * Video" hub — the original six channels plus Connected TV and Broadcast TV.
 * Picking a bubble opens a detail card below with a quick branded animation and
 * the specifics for that channel. The /for/* funnels keep the non-interactive
 * six-channel Hub + TelevisionReach; this component is home-only.
 */
type Channel = {
  key: string;
  /** Bubble label inside the hub (\n splits lines). */
  label: string;
  /** Bubble sub-text inside the hub. */
  hubDesc: string;
  angle: number;
  icon: ComponentType<{ className?: string }>;
  accent: string;
  title: string;
  desc: string;
  art: "screen" | "ctv" | "broadcast";
  status?: string;
  statusTone?: "live" | "soon";
  callout?: string;
};

const CHANNELS: Channel[] = [
  {
    key: "social",
    label: "Social\nMedia",
    hubDesc: "Facebook · TikTok · IG\nX · LinkedIn · BlueSky",
    angle: 0,
    icon: Share2,
    accent: "#FF3366",
    title: "Social Media",
    desc: "The first place your video travels. Post the full film and platform-ready cutdowns across Facebook, Instagram, TikTok, X, LinkedIn, and BlueSky.",
    art: "screen",
  },
  {
    key: "website",
    label: "Campaign\nWebsite",
    hubDesc: "Anchor your homepage,\nbuild trust fast",
    angle: 45,
    icon: Globe,
    accent: "#4D9FFF",
    title: "Campaign Website",
    desc: "Anchor your homepage with a launch film, so first-time visitors meet the real you within seconds of landing.",
    art: "screen",
  },
  {
    key: "email",
    label: "Email &\nNewsletters",
    hubDesc: "Update supporters\nwith engaging content",
    angle: 90,
    icon: Mail,
    accent: "#8E5CF7",
    title: "Email & Newsletters",
    desc: "Drop your video into supporter updates and appeals — a warm, human touch that lifts opens and clicks.",
    art: "screen",
  },
  {
    key: "volunteer",
    label: "Volunteer\nNetworks",
    hubDesc: "Group chats and\ntext campaigns",
    angle: 135,
    icon: Users,
    accent: "#FF3366",
    title: "Volunteer Networks",
    desc: "Hand your team something worth forwarding. Your video moves through group chats and text banks, person to person.",
    art: "screen",
  },
  {
    key: "donation",
    label: "Donation\nPages",
    hubDesc: "Embed to convert\nmore donors",
    angle: 180,
    icon: HandCoins,
    accent: "#4D9FFF",
    title: "Donation Pages",
    desc: "Embed the appeal right on your donation page, where a clear ask converts more visitors into donors.",
    art: "screen",
  },
  {
    key: "events",
    label: "In-Person\nEvents",
    hubDesc: "Town halls, rallies,\nand fundraisers",
    angle: 225,
    icon: Presentation,
    accent: "#8E5CF7",
    title: "In-Person Events",
    desc: "Open the room at town halls, rallies, and fundraisers — a big-screen moment that sets the tone before you speak.",
    art: "screen",
  },
  {
    key: "ctv",
    label: "Connected\nTV",
    hubDesc: "Roku · Hulu\nYouTube TV",
    angle: 270,
    icon: Tv,
    accent: "#4D9FFF",
    title: "Connected TV (CTV)",
    desc: "Reach cord-cutters on Roku, Hulu, and YouTube TV with broadcast-style ads and precise targeting.",
    art: "ctv",
  },
  {
    key: "broadcast",
    label: "Broadcast\nTV",
    hubDesc: "Produced to\nbroadcast quality",
    angle: 315,
    icon: Antenna,
    accent: "#7AB8FF",
    title: "Broadcast TV",
    desc: "Produced to broadcast quality and ready for the air. Stations set their own clearance rules, and airtime is bought separately.",
    art: "broadcast",
    callout:
      "CampaignAI does not review our videos to meet every broadcast-clearance requirement. Our focus is digital-first delivery at broadcast quality. Before you air, confirm your station's requirements and check with your campaign's counsel. You air any video at your own discretion, and CampaignAI is not liable for content shared over broadcast.",
  },
];

const HUB_CHANNELS = CHANNELS.map(({ label, hubDesc, angle }) => ({ label, desc: hubDesc, angle }));

/** Quick branded animation shown at the top of the detail card. */
function ChannelArt({ channel }: { channel: Channel }) {
  const { accent, icon: Icon, art } = channel;
  return (
    <div className="relative h-[132px] w-full overflow-hidden bg-[linear-gradient(135deg,#0D1B3E_0%,#16234d_100%)]">
      <svg viewBox="0 0 320 132" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        {art === "broadcast" ? (
          <>
            {/* tower emitting waves */}
            {[0, 1, 2, 3].map((i) => (
              <circle key={i} cx="150" cy="40" r={14 + i * 16} fill="none" stroke={accent} strokeWidth="2" opacity={0.5 - i * 0.1} className="ga-glow" style={{ animationDelay: `${i * 0.4}s` } as CSSProperties} />
            ))}
            <circle cx="150" cy="40" r="5" fill={accent} className="ga-blink" />
            <path d="M150 40 L134 112 M150 40 L166 112" stroke="#4D9FFF" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
            <path d="M142 74 h16 M139 94 h22" stroke="#4D9FFF" strokeWidth="1.6" opacity="0.4" />
            <g transform="translate(232 54)">
              <rect x="0" y="0" width="62" height="18" rx="9" fill="#FF3366" opacity="0.16" />
              <circle cx="13" cy="9" r="4" fill="#FF3366" className="ga-blink" />
              <text x="26" y="12.5" fontSize="8.5" fontWeight="bold" fill="#FF6B8F" fontFamily="sans-serif" letterSpacing="0.5">ON AIR</text>
            </g>
          </>
        ) : (
          <>
            {/* streaming / signal arcs on the right */}
            <g transform="translate(266 66)">
              <circle r="3" fill={accent} className="ga-blink" />
              <path d="M-9 -7 A 11 11 0 0 1 9 -7" fill="none" stroke={accent} strokeWidth="2" className="ga-blink" style={{ animationDelay: "0.2s" } as CSSProperties} />
              <path d="M-15 -13 A 19 19 0 0 1 15 -13" fill="none" stroke={accent} strokeWidth="2" className="ga-blink" style={{ animationDelay: "0.4s" } as CSSProperties} />
            </g>
            {/* small tiles bottom-left */}
            {[0, 1, 2].map((i) => (
              <rect key={i} x={26 + i * 20} y="96" width="16" height="16" rx="3" fill={accent} opacity={i === 1 ? 0.9 : 0.3} className={i === 1 ? "ga-glow" : ""} />
            ))}
          </>
        )}
      </svg>

      {/* the device/screen carrying the channel icon */}
      {art !== "broadcast" && (
        <div className="absolute left-1/2 top-[46px] grid h-16 w-24 -translate-x-1/2 place-items-center rounded-lg bg-[#0b1633]" style={{ boxShadow: `0 0 0 2px ${accent}55` }}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 ga-glow">
            <Icon className="h-5 w-5 text-beacon-white" />
          </span>
        </div>
      )}

      <AISparkle size={18} color={accent} glow className="sparkle-twinkle absolute left-[12%] top-[18%]" style={{ ["--dur"]: "3s" } as CSSProperties} />
      <AISparkle size={13} color="#E8F4F8" glow className="sparkle-twinkle absolute right-[14%] bottom-[20%]" style={{ ["--dur"]: "2.4s" } as CSSProperties} />
    </div>
  );
}

export function ChannelExplorer() {
  // No channel is selected on load — the card shows the prompt until the
  // visitor taps a destination in the hub.
  const [selected, setSelected] = useState<number | null>(null);
  const channel = selected === null ? null : CHANNELS[selected];

  return (
    <div>
      {/* hub + detail card side by side on laptop (both visible in one screen),
          stacked compactly on mobile */}
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
        <div>
          <Hub
            cx={450}
            cy={450}
            spokeLen={300}
            rectW={182}
            rectH={88}
            hubR={70}
            viewBox="40 40 820 820"
            idp="ce-d-"
            channels={HUB_CHANNELS}
            onSelect={setSelected}
            selectedIdx={selected ?? undefined}
            className="mx-auto hidden w-full max-w-[560px] lg:block"
          />
      <Hub
        cx={300}
        cy={300}
        spokeLen={198}
        rectW={158}
        rectH={74}
        hubR={50}
        viewBox="20 20 560 560"
        idp="ce-m-"
        channels={HUB_CHANNELS}
        onSelect={setSelected}
        selectedIdx={selected ?? undefined}
        className="mx-auto w-full max-w-[340px] lg:hidden"
      />
        </div>

        {/* detail card — shows the prompt until a destination is picked, then
            swaps in that channel's art + specifics */}
        <div className="mx-auto flex min-h-[360px] w-full max-w-[440px] flex-col overflow-hidden rounded-2xl border border-freedom-blue/25 bg-white shadow-sm">
          {channel ? (
            <>
              <ChannelArt channel={channel} />
              <div className="p-5">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${channel.accent}1F` }}>
                    <channel.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-lg font-bold leading-tight text-regal-navy">{channel.title}</h3>
                  {channel.status && (
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
                        channel.statusTone === "live"
                          ? "bg-freedom-blue/12 text-freedom-blue"
                          : "bg-alert-amber/15 text-[#C2410C] ring-1 ring-alert-amber/30"
                      }`}
                    >
                      {channel.statusTone !== "live" && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-alert-amber" />}
                      {channel.status}
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-granite">{channel.desc}</p>

                {channel.callout && (
                  <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-liberty-crimson/25 bg-liberty-crimson/[0.05] p-3.5">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-liberty-crimson" />
                    <p className="text-xs leading-relaxed text-regal-navy">{channel.callout}</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
              <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-freedom-blue/10">
                <MousePointerClick className="h-7 w-7 text-freedom-blue" />
                <AISparkle size={14} color="#FF3366" glow className="sparkle-twinkle absolute -right-1.5 -top-1.5" style={{ ["--dur"]: "2.6s" } as CSSProperties} />
              </span>
              <div>
                <p className="font-heading text-lg font-bold text-regal-navy">Tap any destination</p>
                <p className="mt-1 text-sm leading-relaxed text-granite">
                  See how your video shows up there — pick a channel from the hub.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="mt-5 text-center">
        <a href="/channels" className="inline-flex items-center gap-1 text-sm font-semibold text-freedom-blue hover:underline">
          See where to share your video &rarr;
        </a>
      </p>
    </div>
  );
}
