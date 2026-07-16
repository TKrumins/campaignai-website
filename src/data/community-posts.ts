// /community Section 5 preview cards (6.1): STATIC cards built from the
// Substack post URLs Tom supplied (July 5, 2026). Titles and excerpts pulled
// from the live posts; read times are estimates pending Substack's displayed
// values. Edit here and rebuild to change the cards; no iframes on this
// section (the subscribe embed in the final CTA is the page's only
// third-party element).

export interface CommunityPost {
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
  /** Full Substack post URL */
  url: string;
  placeholder?: boolean;
}

export const communityPosts: CommunityPost[] = [
  {
    category: "For Candidates",
    categoryColor: "bg-liberty-crimson/15 text-liberty-crimson",
    title: "So You Decided to Run. Now What?",
    excerpt:
      "You got into this because you care about your community. You shouldn't have to become a digital marketing expert to prove it.",
    readTime: "6 min read",
    url: "https://campaignai.substack.com/p/so-you-decided-to-run-now-what",
  },
  {
    category: "The Mission",
    categoryColor: "bg-freedom-blue/15 text-freedom-blue",
    title: "Democracy Shouldn't Have a Paywall",
    excerpt:
      "The real cost of modern campaigning, and how good people are shut out.",
    readTime: "7 min read",
    url: "https://campaignai.substack.com/p/democracy-shouldnt-have-a-paywall",
  },
  {
    category: "Start Here",
    categoryColor: "bg-verdant/15 text-verdant",
    title: "Welcome to CampaignAI",
    excerpt:
      "A community space at the intersection of AI, democracy, and campaigns.",
    readTime: "4 min read",
    url: "https://campaignai.substack.com/p/welcome-to-campaignai",
  },
];
