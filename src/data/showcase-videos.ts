// The hidden showcase library's data. Built to receive real client videos: add
// entries here (set comingSoon:false and a real src/poster) and the searchable
// gallery picks them up automatically. Until then, a few placeholder tiles show
// the shape of the library. Not linked anywhere — direct URL only.

export interface ShowcaseVideo {
  id: string;
  title: string;
  type: "Announcement" | "Fundraising" | "Policy Explainer" | "GOTV" | "Rapid Response";
  theme: string; // free-text tag (cause / race level), for search + filter
  blurb: string;
  accent: string; // brand-token hex
  comingSoon?: boolean;
  src?: string;
  poster?: string;
}

// Placeholder tiles — replace/extend with real client work as it clears to share.
export const showcaseVideos: ShowcaseVideo[] = [
  {
    id: "placeholder-announcement",
    title: "A first-time candidate introduces herself",
    type: "Announcement",
    theme: "Local · Introduction",
    blurb: "The launch video that tells a district who you are before anyone else defines you.",
    accent: "#FF3366",
    comingSoon: true,
  },
  {
    id: "placeholder-explainer",
    title: "Making the case on housing, in 60 seconds",
    type: "Policy Explainer",
    theme: "Statewide · Housing",
    blurb: "A complex issue, made clear and shareable — in the candidate's own words.",
    accent: "#8E5CF7",
    comingSoon: true,
  },
  {
    id: "placeholder-gotv",
    title: "The closing push, in the final week",
    type: "GOTV",
    theme: "Down-ballot · Turnout",
    blurb: "A get-out-the-vote ad assembled from a full cycle of a campaign's own material.",
    accent: "#4D9FFF",
    comingSoon: true,
  },
];
