import type { Metadata } from "next";
import { ChannelsHero } from "@/components/sections/channels/ChannelsHero";
import { ChannelChooser } from "@/components/sections/channels/ChannelChooser";
import { ChannelsCTA } from "@/components/sections/channels/ChannelsCTA";

export const metadata: Metadata = {
  title: "Where to Share Your Video - CampaignAI",
  description:
    "Recommendations on where to put a finished campaign video and how to cut it for each spot — social, your website, email, texts, donation pages, and events — plus Connected TV (coming soon). CampaignAI does not place videos or buy ads, and broadcast television is not available.",
};

export default function ChannelsPage() {
  return (
    <>
      <ChannelsHero />
      <ChannelChooser />
      <ChannelsCTA />
    </>
  );
}
