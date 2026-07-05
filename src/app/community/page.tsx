import type { Metadata } from "next";
import { CommunityHero } from "@/components/sections/community/CommunityHero";
import { AILandscape } from "@/components/sections/community/AILandscape";
import { WhatWereBuilding } from "@/components/sections/community/WhatWereBuilding";
import { BuildingInPublic } from "@/components/sections/community/BuildingInPublic";
import { UpcomingContent } from "@/components/sections/community/UpcomingContent";
import { CommunityFinalCTA } from "@/components/sections/community/CommunityFinalCTA";
import { ExperiencesRow } from "@/components/sections/experiences/ExperiencesRow";

export const metadata: Metadata = {
  title: "Substack Community",
  description:
    "Deep dives on AI and democracy. Practical campaign guides. Community discussions and polls. Join the conversation about the responsible use of AI in political campaigns.",
};

export default function CommunityPage() {
  return (
    <>
      <CommunityHero />
      <BuildingInPublic />
      <AILandscape />
      <WhatWereBuilding />
      <UpcomingContent />
      <ExperiencesRow
        routes={["/voters-eyes", "/campaign-machine"]}
        heading="Two experiences worth sharing."
        subhead="Short, interactive, and built to make the conversation concrete."
      />
      <CommunityFinalCTA />
    </>
  );
}
