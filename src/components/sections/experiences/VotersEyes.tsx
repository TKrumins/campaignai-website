"use client";

import { useEffect, useState } from "react";

/**
 * Through the Voter's Eyes (4.1). Flip-card voter POV, a real range-input week
 * scrubber, and a persona picker. Every flip ends on the Verdant "what stayed
 * human" line (the pattern is the argument). Creative leaps reach down to basic
 * algorithms, framed as industry-wide reality, never as a CampaignAI capability
 * claim. This page describes the world; it does not sell the product.
 *
 * Flips work by tap, click, and keyboard; reduced motion swaps state instantly.
 */

interface Moment {
  front: string;
  tech: string;
  human: string;
}

interface Persona {
  key: string;
  label: string;
  blurb: string;
  moments: Moment[]; // one per week
}

const WEEKS = [
  "10 weeks out",
  "8 weeks out",
  "6 weeks out",
  "4 weeks out",
  "3 weeks out",
  "2 weeks out",
  "1 week out",
  "Election week",
];

const PERSONAS: Persona[] = [
  {
    key: "new-mover",
    label: "New mover",
    blurb: "Just changed address. New to the district.",
    moments: [
      {
        front: "A mailer arrives with your name on it, days after you moved in.",
        tech: "Change-of-address and voter-file updates flag new movers automatically. The list built itself.",
        human: "A person still decided new neighbors were worth reaching first.",
      },
      {
        front: "You see a local candidate's ad before you've even registered here.",
        tech: "Ad platforms model who is likely unregistered in an area and target accordingly.",
        human: "A candidate still wrote what they hope to do for the neighborhood.",
      },
      {
        front: "A text welcomes you to the district and points to your new polling place.",
        tech: "Precinct lookups map your address to a location and send-time tools pick the hour you read texts.",
        human: "A volunteer still answered when you texted back a real question.",
      },
      {
        front: "Your social feed fills with people organizing on issues nearby.",
        tech: "Feed ranking surfaces local, high-engagement posts to newly-located accounts.",
        human: "The people in those posts are real neighbors, not an algorithm.",
      },
      {
        front: "A neighbor knocks and already knows you just moved in.",
        tech: "Canvassing apps route walkers to updated addresses with a note about who is new.",
        human: "The conversation on your porch was entirely their own.",
      },
      {
        front: "An email nudges you about the registration deadline this week.",
        tech: "Deadline reminders fire off a schedule keyed to your state's calendar.",
        human: "Whether to register, and for whom, stayed entirely up to you.",
      },
      {
        front: "A reminder lands the night before, with your polling hours.",
        tech: "Automated get-out-the-vote sequences trigger for anyone who has not yet voted.",
        human: "The choice waiting inside the booth was yours alone.",
      },
      {
        front: "You vote in your new precinct, mailer still on the counter.",
        tech: "Every touch above was measured, modeled, and timed by software.",
        human: "The vote itself was a human act no system could cast for you.",
      },
    ],
  },
  {
    key: "infrequent-voter",
    label: "Infrequent voter",
    blurb: "Votes sometimes. Not on every campaign's radar, until now.",
    moments: [
      {
        front: "You get a friendly text asking if you plan to vote this year.",
        tech: "Turnout scores rank each voter's likelihood, and low-propensity voters get the early nudge.",
        human: "A real organizer decided your vote was worth asking for.",
      },
      {
        front: "An ad reminds you of an issue you actually care about.",
        tech: "Interest models infer what topics move you from public, aggregate signals.",
        human: "The stance in the ad was a candidate's genuine position.",
      },
      {
        front: "\"Why am I seeing this?\" shows the ad found you by neighborhood and age.",
        tech: "Ad transparency panels reveal the broad targeting criteria behind a placement.",
        human: "A person chose to spend limited dollars reaching people like you.",
      },
      {
        front: "A short video autoplays, sized perfectly for your phone.",
        tech: "Videos are auto-cropped and captioned for the format each platform rewards.",
        human: "The story it told came from a real campaign with real stakes.",
      },
      {
        front: "A volunteer calls, and somehow it's a good time to talk.",
        tech: "Call tools dial when models predict you are most likely to pick up.",
        human: "The listening on the other end of the line was real.",
      },
      {
        front: "A friend's post about the race lands in your feed at just the right moment.",
        tech: "Ranking rewards posts from close connections and boosts them near deadlines.",
        human: "Your friend meant every word they wrote.",
      },
      {
        front: "A reminder tells you early voting is open near you.",
        tech: "Location and early-vote data trigger a nudge to nearby occasional voters.",
        human: "Making the time to go was a decision only you could make.",
      },
      {
        front: "You vote for the first time in a few cycles.",
        tech: "The whole path to you was scored and scheduled by campaign software.",
        human: "Showing up was the one part no model could do for you.",
      },
    ],
  },
  {
    key: "small-dollar-donor",
    label: "Small-dollar donor",
    blurb: "Chipped in $15 once. Now part of the data.",
    moments: [
      {
        front: "A thank-you email arrives seconds after your $15 gift.",
        tech: "Donation platforms fire an instant receipt and tag you as a proven giver.",
        human: "Someone chose the words that thanked you like a person, not a transaction.",
      },
      {
        front: "The next ask is for $18, not $15.",
        tech: "Models test small increases against what past donors like you tend to give.",
        human: "What the money funds is a real plan a campaign stands behind.",
      },
      {
        front: "An email lands the moment news breaks about your issue.",
        tech: "Rapid-response tools trigger appeals off trending events automatically.",
        human: "The urgency is only worth anything if the cause behind it is real.",
      },
      {
        front: "A video appeal features a candidate speaking straight to camera.",
        tech: "Formats and lengths are tuned to what donors watch to the end.",
        human: "The person on screen actually believes what they are saying.",
      },
      {
        front: "A text calls you a \"founding supporter\" of the push.",
        tech: "Segments sort donors into tiers and match the language to each one.",
        human: "The community it invites you into is made of real people.",
      },
      {
        front: "A match offer says your next gift doubles, for 24 hours.",
        tech: "Countdown mechanics and matches are proven to lift donor response.",
        human: "Whether the cause has earned another $15 is your call.",
      },
      {
        front: "A final email thanks donors and asks for one last push.",
        tech: "Closing sequences hit every prior giver in the last stretch.",
        human: "The gratitude only lands because a person meant it.",
      },
      {
        front: "You give once more, then watch the returns come in.",
        tech: "Every ask you saw was timed, tiered, and tested by software.",
        human: "Believing in something enough to give is entirely human.",
      },
    ],
  },
];

function FlipCard({ moment, reduced }: { moment: Moment; reduced: boolean }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={
        flipped
          ? "Showing what the technology did. Activate to flip back."
          : `${moment.front} Activate to see what technology did.`
      }
      className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue rounded-2xl"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative w-full min-h-[220px]"
        style={{
          transformStyle: reduced ? undefined : "preserve-3d",
          transition: reduced ? undefined : "transform 500ms cubic-bezier(0.4,0,0.2,1)",
          transform: !reduced && flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front: the voter's experience */}
        <div
          className={`${reduced && flipped ? "hidden" : ""} ${
            reduced ? "" : "absolute inset-0"
          } flex flex-col rounded-2xl bg-white border border-gray-200 p-6`}
          style={reduced ? undefined : { backfaceVisibility: "hidden" }}
        >
          <span className="text-slate text-xs font-bold uppercase tracking-wider mb-3">
            What you experience
          </span>
          <p className="text-regal-navy font-heading font-bold text-lg leading-snug flex-1">
            {moment.front}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-freedom-blue text-sm font-semibold">
            Flip it &rarr;
          </span>
        </div>

        {/* Back: the technology + the Verdant human line */}
        <div
          className={`${reduced && !flipped ? "hidden" : ""} ${
            reduced ? "" : "absolute inset-0"
          } flex flex-col rounded-2xl bg-regal-navy p-6`}
          style={
            reduced ? undefined : { backfaceVisibility: "hidden", transform: "rotateY(180deg)" }
          }
        >
          <span className="text-horizon-azure text-xs font-bold uppercase tracking-wider mb-3">
            What the technology did
          </span>
          <p className="text-beacon-white/90 text-sm leading-relaxed flex-1">{moment.tech}</p>
          <p className="mt-4 pt-4 border-t border-white/15 text-verdant text-sm font-semibold leading-snug">
            <span aria-hidden="true" className="mr-1.5">&#x2713;</span>
            {moment.human}
          </p>
        </div>
      </div>
    </button>
  );
}

export function VotersEyes() {
  const [personaKey, setPersonaKey] = useState(PERSONAS[0].key);
  const [week, setWeek] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() =>
      setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  const persona = PERSONAS.find((p) => p.key === personaKey) ?? PERSONAS[0];
  const moment = persona.moments[week];

  return (
    <section className="py-14 md:py-20 bg-dawn-frost">
      <div className="max-w-[820px] mx-auto px-4 sm:px-6">
        {/* Persona picker */}
        <fieldset className="mb-10">
          <legend className="text-slate text-xs font-bold uppercase tracking-wider mb-3 text-center w-full">
            Pick a voter
          </legend>
          <div className="flex flex-wrap justify-center gap-3">
            {PERSONAS.map((p) => {
              const active = p.key === personaKey;
              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => {
                    setPersonaKey(p.key);
                    setWeek(0);
                  }}
                  aria-pressed={active}
                  className={`rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${
                    active
                      ? "border-freedom-blue bg-freedom-blue text-white"
                      : "border-gray-300 bg-white text-granite hover:border-freedom-blue"
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
          <p className="text-slate text-sm text-center mt-3">{persona.blurb}</p>
        </fieldset>

        {/* Week scrubber (real range input) */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate text-xs font-bold uppercase tracking-wider">
              Scrub the cycle
            </span>
            <span className="text-regal-navy font-heading font-bold text-sm tabular-nums">
              {WEEKS[week]}
            </span>
          </div>
          <label htmlFor="ve-week" className="sr-only">
            Week of the election cycle
          </label>
          <input
            id="ve-week"
            type="range"
            min={0}
            max={WEEKS.length - 1}
            step={1}
            value={week}
            onChange={(e) => setWeek(Number(e.target.value))}
            className="w-full accent-freedom-blue"
          />
          <div className="flex justify-between mt-1 text-[10px] text-slate">
            <span>Early</span>
            <span>Election Day</span>
          </div>
        </div>

        {/* The moment for this persona + week */}
        <FlipCard key={`${persona.key}-${week}`} moment={moment} reduced={reduced} />

        <p className="text-slate text-xs text-center mt-5">
          Every touch above is standard practice across the industry today. None of
          it is unique to any one company.
        </p>
      </div>
    </section>
  );
}
