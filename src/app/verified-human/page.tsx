import type { Metadata } from "next";
import { VerifiedHumanHero } from "@/components/sections/verified-human/VerifiedHumanHero";
import { WhatItMeans } from "@/components/sections/verified-human/WhatItMeans";
import { VerificationDemo } from "@/components/sections/verified-human/VerificationDemo";
import { ProvenanceTravels } from "@/components/sections/verified-human/ProvenanceTravels";
import { ClearingHouse } from "@/components/sections/verified-human/ClearingHouse";
import { VerifiedHumanCTA } from "@/components/sections/verified-human/VerifiedHumanCTA";

export const metadata: Metadata = {
  title: "Verified Human - CampaignAI",
  description:
    "As AI makes it trivial to fake a candidate's face and voice, Verified Human proves the opposite of what you'd expect: not that no AI was used, but that a real, accountable campaign made and approved the video. A badge, an embedded watermark, and a public provenance page — with a clearing house to check videos made anywhere coming next.",
};

export default function VerifiedHumanPage() {
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
