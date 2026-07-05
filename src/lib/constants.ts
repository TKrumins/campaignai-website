// Single sources of truth for site-wide copy, links, and offers.
// All components consume these; copy changes must be single-line diffs.

export const CALENDLY_PURCHASE =
  "https://calendly.com/campaignai/campaignai-purchase-call";
export const CALENDLY_DEMO = "https://calendly.com/campaignai/demo";

export const CTA_PRIMARY = "Buy your first video →";
export const CTA_MICROCOPY = "Book a 30-minute call to get started.";
export const CTA_TEAM = "Talk to our team →";

export const WAITLIST_LONG =
  "Soon you'll be able to create your own videos end to end, faster and more affordably than ever. Join the waitlist to be first in line.";
export const WAITLIST_SHORT = "Be first in line when it launches.";

export const ETHICS_LINE =
  "We do the hard ethical work, so you can focus on the work only you can do.";

export const DELIVERY_LINE =
  "48-hour post-production delivery once you submit. Weekends can shift timing, and we'll agree on a schedule that works for your campaign up front.";

export const EMAIL = "info@campaignai.us";

export const A250_HEADLINE = "America 250 Special";
export const A250_OFFER = "Buy two videos, get your first for just $250.";
export const A250_SCARCITY = "First 250 customers only. Ends Nov 3, 2026.";
// sessionStorage dismissal key (session-scoped per 7-8 doc Section 0.1);
// a new offer key resets visibility
export const A250_KEY = "announce-america250";

// 12:01am ET; DST ends Nov 1
export const ELECTION_TARGET = "2026-11-03T00:01:00-05:00";

export const PRIVACY_MICROCOPY =
  "We'll never share your information or use it to train major models.";

// Social URLs
export const SOCIAL_LINKEDIN = "https://www.linkedin.com/company/campaignai-us";
export const SOCIAL_FACEBOOK = "https://www.facebook.com/CampaignAI.US/";
export const SOCIAL_REDDIT = "https://www.reddit.com/user/campaignai-us/";
export const SOCIAL_BLUESKY =
  "https://bsky.app/profile/campaignai-us.bsky.social";
export const SOCIAL_SUBSTACK = "https://campaignai.substack.com";

// Feature flags
export const TEASER_DISCLOSURE_PAGE = false; // hidden Meaningful Disclosure teaser blocks (OFF)
