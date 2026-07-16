import type { Metadata } from "next";
import { ChannelsHero } from "@/components/sections/channels/ChannelsHero";
import { ChannelChooser } from "@/components/sections/channels/ChannelChooser";
import { ChannelsCTA } from "@/components/sections/channels/ChannelsCTA";

export const metadata: Metadata = {
  title: "Where to Share Your Video - CampaignAI",
  description:
    "Expert guidance on where to put a finished campaign video and how to cut it for each spot — social, your website, email, texts, donation pages, and events — plus Connected TV (coming soon) and broadcast television.",
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
