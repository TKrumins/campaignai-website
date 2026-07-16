import type { Metadata } from "next";
import { VerifiedHumanHero } from "@/components/sections/verified-human/VerifiedHumanHero";
import { WhatItMeans } from "@/components/sections/verified-human/WhatItMeans";
import { VerificationDemo } from "@/components/sections/verified-human/VerificationDemo";
import { ProvenanceTravels } from "@/components/sections/verified-human/ProvenanceTravels";
import { ClearingHouse } from "@/components/sections/verified-human/ClearingHouse";
import { VerifiedHumanCTA } from "@/components/sections/verified-human/VerifiedHumanCTA";

// DARK PRESERVE of the full Verified Human page. The public /verified-human URL
// shows a "Coming Soon" page for launch; this route keeps the complete built
// experience intact and viewable for the future standalone build. It is
// unlinked, omitted from the sitemap, and noindex — reachable only by URL.
// To relaunch Verified Human, move this composition back into /verified-human.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Verified Human (preview) - CampaignAI",
  description:
    "Internal preview of the full Verified Human page, held back while the public URL shows Coming Soon.",
};

export default function VerifiedHumanPreviewPage() {
  return (
    <>
      <VerifiedHumanHero />
      <WhatItMeans />
      <VerificationDemo />
      <ProvenanceTravels />
      <ClearingHouse />
      <VerifiedHumanCTA />
    </>
  );
}
