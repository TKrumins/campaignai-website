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
  "Your video is delivered 72 hours after you submit, excluding weekends. Need a weekend turnaround? We can arrange it on your onboarding call.";

// Shown on the pricing and get-started pages only — the two surfaces where
// someone is actually deciding what to pay.
export const PRICING_VALIDITY =
  "Pricing effective September 2026. Pricing holds through December 31, 2026.";

// The compliance page's "as of" date. Regulation in this area changes
// frequently and the AI-specific law is unsettled and actively litigated, so an
// undated claim about what the rules are quietly ages into a wrong one. Dating
// it turns a silent assertion into a checkable one.
//
// UPDATE THIS whenever the compliance research is genuinely refreshed — not on
// every deploy, or it becomes a lie of a different kind.
export const COMPLIANCE_AS_OF = "September 2026";

// Broadcast television. We produce at broadcast quality, but we do not prepare
// videos for broadcast: nothing is checked against station clearance rules or
// broadcast regulation, and we neither buy nor place airtime. Broadcast is
// therefore listed as NOT AVAILABLE NOW wherever it appears, with the same
// disclaimer attached, so the three surfaces that mention television can never
// drift apart on what we do and don't offer.
export const BROADCAST_STATUS = "NOT AVAILABLE NOW";
export const BROADCAST_DISCLAIMER =
  "Good news: your video is made to broadcast-quality standards. What we don't do is prepare it for broadcast — we don't check videos against station clearance rules or broadcast regulations, and we don't buy or place airtime. If television is part of your plan, talk it through with your station and your campaign's counsel first. Airing a video is your call, and CampaignAI is not liable for its use on broadcast.";

// /channels is a playbook, not a media-buying service. Said plainly wherever
// the channel guidance appears.
export const CHANNELS_PLACEMENT_NOTE =
  "Everything here is a recommendation for where to share the video you own. CampaignAI does not place videos or buy ads — the posting and any ad buys are yours to run.";

export const EMAIL = "info@campaignai.us";

export const A250_HEADLINE = "America 250 Special";
export const A250_OFFER = "Buy two videos, get your first for just $250.";
export const A250_SCARCITY =
  "Available through December 31, 2026. Not available on slate or party-affiliated purchases.";
// sessionStorage dismissal key (session-scoped per 7-8 doc Section 0.1);
// a new offer key resets visibility
export const A250_KEY = "announce-america250";

// 12:01am ET; DST ends Nov 1
export const ELECTION_TARGET = "2026-11-03T00:01:00-05:00";
// Midnight at the close of Election Day — the clock stops saying "It's Election
// Day" here and starts counting the days left on the Special instead.
export const ELECTION_DAY_END = "2026-11-04T00:00:00-05:00";
// The America 250 Special runs six weeks past the election.
export const A250_END = "2026-12-31T23:59:59-05:00";

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
