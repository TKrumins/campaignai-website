// /community Section 5 preview cards (6.1): STATIC cards built from the
// Substack post URLs Tom supplies (3-5 posts, optional one-line excerpt
// overrides). PLACEHOLDER entries below until the real URLs land; swap
// `url` values and adjust titles/excerpts, then rebuild. No iframes here;
// the subscribe embed in the final CTA is the page's only third-party
// element.

import { SOCIAL_SUBSTACK } from "@/lib/constants";

export interface CommunityPost {
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
  /** Full Substack post URL; placeholder entries point at the publication */
  url: string;
  placeholder?: boolean;
}

export const communityPosts: CommunityPost[] = [
  {
    category: "Ethics",
    categoryColor: "bg-verdant/15 text-verdant",
    title: "Building Trust: Ethical AI Use in Campaign Communications",
    excerpt:
      "How to use AI-assisted tools without sacrificing the authenticity voters are looking for. A practical framework for candidates and campaign teams.",
    readTime: "10 min read",
    url: SOCIAL_SUBSTACK,
    placeholder: true,
  },
  {
    category: "Compliance",
    categoryColor: "bg-freedom-blue/15 text-freedom-blue",
    title: "When to Disclose (Hint: Always)",
    excerpt:
      "A plain-language breakdown of AI disclosure requirements across the states. What's required, what's recommended, and why we think over-disclosing is always the right call.",
    readTime: "6 min read",
    url: SOCIAL_SUBSTACK,
    placeholder: true,
  },
  {
    category: "Strategy",
    categoryColor: "bg-liberty-crimson/15 text-liberty-crimson",
    title: "Fundamentals of a Policy Explainer Video",
    excerpt:
      "How to turn a complex policy position into a 60-second shareable video that actually moves voters. Step by step, with examples.",
    readTime: "12 min read",
    url: SOCIAL_SUBSTACK,
    placeholder: true,
  },
  {
    category: "Research",
    categoryColor: "bg-freedom-blue/15 text-freedom-blue",
    title: "The 50-State AI Disclosure Landscape: Where Things Stand in 2026",
    excerpt:
      "A comprehensive guide to AI disclosure requirements in every state, updated for the 2026 midterm cycle.",
    readTime: "15 min read",
    url: SOCIAL_SUBSTACK,
    placeholder: true,
  },
];
