// Shared model for the "Built to Grow With You" interactive widget on
// /how-it-works. The visitor builds up a campaign catalogue — a launch video,
// plus any number of bios, fundraising appeals, and policy explainers — and both
// views react: the profile fills in (gamified), and the AI's help drafting the
// final GOTV ad gets richer and more specific. Pure + framework-free.

export type CounterKey = "bio" | "fundraiser" | "explainer";
export type ContentKey = "launch" | CounterKey;

export interface Mix {
  launch: boolean; // the Launch / Announcement video — a standalone yes/no
  bio: number;
  fundraiser: number;
  explainer: number;
}

export const EMPTY_MIX: Mix = { launch: false, bio: 0, fundraiser: 0, explainer: 0 };
export const MAX_COUNT = 99;

// The Launch / Announcement video is its own thing (you have one, or you don't).
export const LAUNCH = {
  label: "Launch / Announcement Video",
  blurb: "You're in the race",
  accent: "#FF6B8F",
};

// The three that stack up over a campaign — each 0–99.
export const COUNTER_TYPES: { key: CounterKey; label: string; blurb: string; accent: string }[] = [
  { key: "bio", label: "Bio", blurb: "Who you are", accent: "#FF3366" },
  { key: "fundraiser", label: "Fundraising Appeal", blurb: "What you're fighting for", accent: "#8E5CF7" },
  { key: "explainer", label: "Policy Explainer", blurb: "Your platform", accent: "#4D9FFF" },
];

export const TYPE_LABEL: Record<ContentKey, string> = {
  launch: "launch video",
  bio: "bio",
  fundraiser: "fundraising appeals",
  explainer: "policy explainers",
};

export const TRAITS = ["Voice", "Values", "Policies", "Brand", "Strategy"] as const;
export type Trait = (typeof TRAITS)[number];

export const TRAIT_COLOR: Record<Trait, string> = {
  Voice: "#FF3366",
  Values: "#FF6B8F",
  Policies: "#8E5CF7",
  Brand: "#7AB8FF",
  Strategy: "#4D9FFF",
};

// Points each content type adds to each trait. Summed across the catalogue, then
// run through a saturating curve so every added video nudges the meter (gamified
// growth) while it approaches but rarely maxes.
const CONTRIB: Record<ContentKey, Partial<Record<Trait, number>>> = {
  launch: { Voice: 22, Values: 14, Brand: 20 },
  bio: { Voice: 30, Values: 30, Brand: 12 },
  fundraiser: { Voice: 14, Policies: 22, Strategy: 12 },
  explainer: { Voice: 6, Values: 6, Policies: 22, Brand: 14, Strategy: 18 },
};

const SATURATION_K = 55;
export const READY_THRESHOLD = 62; // overall completeness that unlocks GOTV readiness

function counts(mix: Mix): Record<ContentKey, number> {
  return { launch: mix.launch ? 1 : 0, bio: mix.bio, fundraiser: mix.fundraiser, explainer: mix.explainer };
}

export function totalContent(mix: Mix): number {
  const c = counts(mix);
  return c.launch + c.bio + c.fundraiser + c.explainer;
}

export interface TraitState {
  trait: Trait;
  pct: number; // 0–100
  boostedBy: ContentKey[];
}

export function computeTraits(mix: Mix): TraitState[] {
  const c = counts(mix);
  const keys: ContentKey[] = ["launch", "bio", "fundraiser", "explainer"];
  return TRAITS.map((trait) => {
    let pts = 0;
    const boostedBy: ContentKey[] = [];
    for (const k of keys) {
      const per = CONTRIB[k][trait] ?? 0;
      if (per > 0 && c[k] > 0) {
        pts += per * c[k];
        boostedBy.push(k);
      }
    }
    const pct = pts > 0 ? Math.round((100 * pts) / (pts + SATURATION_K)) : 0;
    return { trait, pct, boostedBy };
  });
}

export function completeness(mix: Mix): number {
  const t = computeTraits(mix);
  return Math.round(t.reduce((s, x) => s + x.pct, 0) / t.length);
}

// GOTV readiness is a real threshold the visitor unlocks: a launch video plus
// enough of a catalogue that the profile is well-formed.
export function gotvReady(mix: Mix): boolean {
  return mix.launch && completeness(mix) >= READY_THRESHOLD;
}

// "% to GOTV ready" — progress toward the readiness threshold, shaped so a small
// catalogue climbs to ~60% quickly, then slows through the final stretch (a low
// bar to be broadly "understood", a hard climb to fully GOTV-ready).
export function readinessPct(mix: Mix): number {
  const x = Math.min(1, completeness(mix) / READY_THRESHOLD);
  return Math.round(100 * (1 - Math.pow(1 - x, 1.4)));
}

export type Tier = "cold" | "early" | "building" | "deep";

export function tierOf(mix: Mix): Tier {
  const n = totalContent(mix);
  if (n === 0) return "cold";
  if (n <= 3) return "early";
  if (n <= 8) return "building";
  return "deep";
}

// A qualitative list of what's in the catalogue — no counts (the visitor already
// knows how many they made; what matters is what the AI can draw on).
export function describeCatalogue(mix: Mix): string {
  const parts: string[] = [];
  if (mix.launch) parts.push("your launch video");
  if (mix.bio > 0) parts.push("your bio");
  if (mix.fundraiser > 0) parts.push("your fundraising appeals");
  if (mix.explainer > 0) parts.push("your policy explainers");
  if (parts.length === 0) return "nothing yet";
  if (parts.length === 1) return parts[0];
  return `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}
