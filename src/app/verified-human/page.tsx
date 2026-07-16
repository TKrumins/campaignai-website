import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/shared/ComingSoon";

// Verified Human ships as "Coming Soon" for the foundation launch. The full,
// built-out page is preserved verbatim at /verified-human-preview (dark, noindex)
// and can be moved back here to relaunch. Held out of the sitemap while it's a
// teaser; the nav marks "Stay Verified" as Soon.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Verified Human - Coming Soon - CampaignAI",
  description:
    "As AI makes it trivial to fake a candidate's face and voice, Verified Human will prove the opposite: that a real, accountable campaign made and approved the video. Coming soon.",
};

export default function VerifiedHumanPage() {
  return (
    <ComingSoon
      eyebrow="Verified Human"
      title="Proof a real campaign made it."
      description="As AI makes it trivial to fake a candidate's face and voice, Verified Human proves the opposite of what you'd expect — not that no AI was used, but that a real, accountable campaign made and approved the video. A badge, an embedded watermark, and a public provenance page. We're building it now."
    />
  );
}
