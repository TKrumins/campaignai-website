// Single sources of truth for site-wide copy, links, and offers.
// All components consume these; copy changes must be single-line diffs.

export const CALENDLY_PURCHASE =
  "https://calendly.com/campaignai/campaignai-purchase-call";
export const CALENDLY_DEMO = "https://calendly.com/campaignai/demo";

// Primary purchase flow: the "Get Started" CTA routes to the on-site Get Started
// page (answer three questions → see your rate → book onboarding call → we scope
// it, then invoice you). Agency-only launch: no self-serve checkout. Invoicing
// happens after the call. Consolidated from the old /purchase page (now redirected
// to /get-started) so there is one canonical path into a sales call.
export const PURCHASE_URL = "/get-started";

// Plan-tagged booking links. Calendly surfaces utm_* on the scheduled event, in
// the team's notification email, and on the webhook payload — so whoever takes
// the call already knows which plan the visitor picked. The A250 tag is what
// tells us they intend to buy two videos.
const bookingFor = (campaign: string) =>
  `${CALENDLY_PURCHASE}?utm_source=campaignai.us&utm_medium=purchase-flow&utm_campaign=${campaign}`;

export const CALENDLY_PROFESSIONAL = bookingFor("professional-video");
export const CALENDLY_CANDIDATE = bookingFor("candidate-campaign");
export const CALENDLY_A250 = bookingFor("america-250-special");

// Showcase films. Hosted on Vercel Blob (store `campaignai-public-media`, public,
// immutable 1-year cache) rather than committed: 55 MB of video would sit in a
// public repo permanently, and every clone would pay for it. Encoded from the
// masters by `npm run encode:media`. See docs/closeout/video-hosting.md.
//
// Posters stay in-repo (public/assets/videos/posters/) — they're small and must
// paint before the video byte one arrives.
const BLOB_MEDIA = "https://saymedxk6dunjd1t.public.blob.vercel-storage.com";

export const VIDEO_RESILIENCY_ACT = `${BLOB_MEDIA}/videos/the-resiliency-act.mp4`;
export const VIDEO_SHASM_ACT = `${BLOB_MEDIA}/videos/the-shasm-act.mp4`;

export const CTA_PRIMARY = "Get Started →";
export const CTA_MICROCOPY =
  "Pick your plan and book your onboarding call. We scope your video together, then invoice you — nothing is charged upfront.";
export const CTA_TEAM = "Talk to our team →";

export const WAITLIST_LONG =
  "Soon you'll be able to create your own videos end to end, faster and more affordably than ever. Join the waitlist to be first in line.";
export const WAITLIST_SHORT = "Be first in line when it launches.";

export const ETHICS_LINE =
  "We do the hard ethical work, so you can focus on the work only you can do.";

export const DELIVERY_LINE =
  "Your video is delivered 48 hours after you submit, excluding weekends. Need a weekend turnaround? We can arrange it at checkout.";

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

// Experience routing (Commit 7-8, Section 2). The five "/for/*" audience funnels
// that used to live alongside these are frozen as a future standalone project —
// their routes are removed and redirected to /get-started in vercel.json.
export const EXPERIENCE_ROUTES = [
  "/voters-eyes",
  "/day-on-the-trail",
  "/campaign-machine",
  "/story-arc-builder",
  "/disclosure-labels",
];
export const EXPERIENCE_EYEBROW = "A CampaignAI Experience";
export const CTA_TEAM_MICROCOPY_NONPROFIT =
  "Book a call and we'll find the fit for your budget.";

// Social URLs
export const SOCIAL_LINKEDIN = "https://www.linkedin.com/company/campaignai-us";
export const SOCIAL_FACEBOOK = "https://www.facebook.com/CampaignAI.US/";
export const SOCIAL_REDDIT = "https://www.reddit.com/user/campaignai-us/";
export const SOCIAL_BLUESKY =
  "https://bsky.app/profile/campaignai-us.bsky.social";
export const SOCIAL_SUBSTACK = "https://campaignai.substack.com";

// Feature flags
export const TEASER_DISCLOSURE_PAGE = false; // hidden Meaningful Disclosure teaser blocks (OFF)
export const TEASER_PROVENANCE_RECEIPT = false; // Demo D moved internal; teaser stays OFF
