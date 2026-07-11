// Shared model for the "Built to Grow With You" interactive widget on
// /how-it-works. A visitor picks their own mix of videos (by type) — or a
// preset — and both the conversation view (A) and the profile view (B) react to
// the same input. Kept framework-free and pure so both views stay presentational
// and the growth math lives in one place.

export type VideoTypeKey = "bio" | "announcement" | "fundraiser" | "explainer";

export type Mix = Record<VideoTypeKey, number>;

export interface VideoType {
  key: VideoTypeKey;
  label: string;
  blurb: string; // what this piece teaches the platform, in plain terms
  accent: string; // brand-token hex, red→violet→blue progression
  max: number;
}

// Red → Bridge Violet → Blue progression, all brand tokens (multi-partisan).
export const VIDEO_TYPES: VideoType[] = [
  { key: "bio", label: "Bio", blurb: "who you are", accent: "#FF3366", max: 1 },
  { key: "announcement", label: "Announcement", blurb: "you're in the race", accent: "#FF6B8F", max: 3 },
  { key: "fundraiser", label: "Fundraiser", blurb: "what you're fighting for", accent: "#8E5CF7", max: 6 },
  { key: "explainer", label: "Policy explainer", blurb: "your whole platform", accent: "#4D9FFF", max: 8 },
];

export const TRAITS = ["Voice", "Values", "Policies", "Brand", "Strategy"] as const;
export type Trait = (typeof TRAITS)[number];

export const TRAIT_COLOR: Record<Trait, string> = {
  Voice: "#FF3366", // liberty-crimson
  Values: "#FF6B8F", // victory-rose
  Policies: "#8E5CF7", // bridge-violet
  Brand: "#7AB8FF", // horizon-azure
  Strategy: "#4D9FFF", // freedom-blue
};

// Points one video of each type adds to each trait (per Tom's direction: a bio
// teaches Voice + Values a lot and Brand a little; a fundraiser adds Policies +
// Voice; an explainer adds a lot of Policies plus Strategy + Brand). Summed
// across the chosen mix and capped at 100 per trait.
const CONTRIB: Record<VideoTypeKey, Partial<Record<Trait, number>>> = {
  bio: { Voice: 34, Values: 34, Brand: 12 },
  announcement: { Voice: 20, Values: 14, Brand: 22, Policies: 6, Strategy: 8 },
  fundraiser: { Voice: 16, Values: 10, Policies: 22, Brand: 6, Strategy: 10 },
  explainer: { Voice: 6, Values: 6, Policies: 22, Brand: 14, Strategy: 16 },
};

export const EMPTY_MIX: Mix = { bio: 0, announcement: 0, fundraiser: 0, explainer: 0 };

export interface Preset {
  key: string;
  label: string;
  mix: Mix;
  gotv: boolean;
}

export const PRESETS: Preset[] = [
  { key: "start", label: "Just starting", mix: { ...EMPTY_MIX, bio: 1 }, gotv: false },
  { key: "mid", label: "Mid-campaign", mix: { bio: 1, announcement: 1, fundraiser: 1, explainer: 1 }, gotv: false },
  { key: "full", label: "Full cycle", mix: { bio: 1, announcement: 1, fundraiser: 2, explainer: 5 }, gotv: true },
];

export function totalVideos(mix: Mix): number {
  return VIDEO_TYPES.reduce((sum, t) => sum + mix[t.key], 0);
}

export interface TraitState {
  trait: Trait;
  pct: number; // 0–100
  boostedBy: VideoTypeKey[]; // types in the mix that feed this trait
}

export function computeTraits(mix: Mix): TraitState[] {
  return TRAITS.map((trait) => {
    let points = 0;
    const boostedBy: VideoTypeKey[] = [];
    for (const t of VIDEO_TYPES) {
      const per = CONTRIB[t.key][trait] ?? 0;
      const count = mix[t.key];
      if (per > 0 && count > 0) {
        points += per * count;
        boostedBy.push(t.key);
      }
    }
    return { trait, pct: Math.min(100, Math.round(points)), boostedBy };
  });
}

// Overall completeness — the average of the five traits. Drives the GOTV
// readiness panel ("everything's pre-gathered").
export function completeness(mix: Mix): number {
  const traits = computeTraits(mix);
  return Math.round(traits.reduce((s, t) => s + t.pct, 0) / traits.length);
}

export type Tier = "cold" | "early" | "mid" | "deep";

export function tierOf(mix: Mix): Tier {
  const n = totalVideos(mix);
  if (n === 0) return "cold";
  if (n <= 2) return "early";
  if (n <= 4) return "mid";
  return "deep"; // the fifth video and up — "knows your race"
}

// A plain-English list of the library so far, e.g. "your bio, two fundraisers,
// and three policy explainers".
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

function countWord(n: number): string {
  return WORDS[n] ?? String(n);
}

export function describeMix(mix: Mix): string {
  const parts: string[] = [];
  for (const t of VIDEO_TYPES) {
    const n = mix[t.key];
    if (n <= 0) continue;
    if (t.key === "bio") {
      parts.push("your bio");
    } else {
      const noun = t.label.toLowerCase();
      parts.push(n === 1 ? `one ${noun}` : `${countWord(n)} ${noun}s`);
    }
  }
  if (parts.length === 0) return "nothing yet";
  if (parts.length === 1) return parts[0];
  return `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}
