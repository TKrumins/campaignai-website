import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { DisclosureGate } from "@/components/disclosure/DisclosureGate";

/**
 * Hidden Meaningful Disclosure page (6.5). Excluded from nav, footer,
 * sitemap, and internal links; robots.txt disallows it and the meta below
 * says noindex. Content ships AES-encrypted and unlocks at the gate.
 */
export const metadata: Metadata = {
  title: "CampaignAI",
  robots: { index: false, follow: false },
};

export default function CampaignAIDisclosurePage() {
  // Drop-in slots for real dogfooded clips:
  // public/assets/disclosure/mechanism-{1..5}.mp4
  const base = path.join(process.cwd(), "public", "assets", "disclosure");
  const clips = [1, 2, 3, 4, 5].map((n) =>
    fs.existsSync(path.join(base, `mechanism-${n}.mp4`))
  );

  return (
    <div className="pt-24">
      <DisclosureGate clips={clips} />
    </div>
  );
}
