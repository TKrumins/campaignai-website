"use client";

import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Mail, PlaySquare, Send, DoorOpen, Image as ImageIcon } from "lucide-react";

/**
 * Through the Voter's Eyes (4.1), v2. A realistic phone with a living feed:
 * texts, sponsored ads with disclosure chips, emails, a mailer, a door-knock,
 * a fundraising ask. Scrub the week and the touchpoints accumulate the way they
 * actually arrive. Tap any item to FLIP it and see the chain that produced it,
 * ending every time on the Verdant "what stayed human" line (the pattern is the
 * argument) and a Socratic question. The persona picker reshapes the feed,
 * teaching microtargeting from the receiving end. Facts are framed as
 * industry-wide reality, never as a CampaignAI capability claim. This page
 * describes the world; it does not sell the product.
 *
 * Flips work by tap, click, and keyboard; reduced motion swaps state instantly.
 */

type Channel = "text" | "ad" | "email" | "mailer" | "knock" | "donation";

interface Touch {
  day: number; // 0=Mon ... 6=Sun
  channel: Channel;
  app: string;
  front: React.ReactNode;
  behindTitle: string;
  steps: string[];
  human: string;
  question: string;
}

interface Persona {
  key: string;
  pick: string; // the visitor's own sentence
  name: string;
  descriptor: string;
  touches: Touch[];
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CHANNEL_META: Record<Channel, { icon: typeof Mail; label: string; tint: string }> = {
  text: { icon: MessageCircle, label: "Messages", tint: "#4D9FFF" },
  ad: { icon: PlaySquare, label: "Sponsored", tint: "#8E5CF7" },
  email: { icon: Mail, label: "Mail", tint: "#FF6B8F" },
  mailer: { icon: ImageIcon, label: "Your mailbox", tint: "#FFB800" },
  knock: { icon: DoorOpen, label: "At your door", tint: "#00D084" },
  donation: { icon: Send, label: "Messages", tint: "#FF3366" },
};

/* A small sponsored-ad thumbnail with an on-ad disclosure chip. */
function AdThumb({ label, chip }: { label: string; chip: string }) {
  return (
    <div className="relative h-24 rounded-lg overflow-hidden bg-gradient-to-br from-[#16295c] to-regal-navy my-2">
      <div className="absolute inset-0 flex items-center justify-center text-beacon-white/80 text-2xl">▶</div>
      <span className="absolute left-1.5 bottom-1.5 bg-regal-navy/90 border-l-2 border-verdant text-beacon-white text-[8px] leading-tight px-1.5 py-0.5 rounded-r max-w-[85%]">
        {chip}
      </span>
      <span className="absolute right-1.5 top-1.5 text-beacon-white/70 text-[9px] font-semibold">{label}</span>
    </div>
  );
}

const PERSONAS: Persona[] = [
  {
    key: "infrequent",
    pick: "I vote now and then",
    name: "Maria",
    descriptor: "Precinct 4 · votes in the big ones, skips the rest",
    touches: [
      {
        day: 0,
        channel: "text",
        app: "Messages",
        front: (
          <p>
            <b>Dana (Rivera campaign):</b> Hi Maria! I&apos;m Dana, a volunteer with Alex Rivera&apos;s
            city council campaign. We&apos;re asking neighbors what matters most this year. Mind sharing yours?
          </p>
        ),
        behindTitle: "Behind this text",
        steps: [
          "The voter file matched you as an infrequent voter in Precinct 4.",
          "AI drafted three opener variants for Dana to choose from.",
          "Dana picked one, edited it, and hit send herself.",
        ],
        human: "Dana is real. Every reply you send goes to a person.",
        question: "Software chose you first. Does that change whether Dana&apos;s question is genuine?",
      },
      {
        day: 1,
        channel: "ad",
        app: "Sponsored",
        front: (
          <>
            <p className="font-semibold">The Roads Bill, explained</p>
            <AdThumb label="0:30" chip="✓ AI visuals · AI narration, candidate-approved" />
            <p className="text-slate">Why your street floods every spring, in 30 seconds.</p>
          </>
        ),
        behindTitle: "Behind this ad",
        steps: [
          "An audience model flagged road funding as Precinct 4's top issue.",
          "The explainer used AI visuals and AI narration; the script was approved line by line.",
          "A plain-language disclosure was placed on the ad itself.",
        ],
        human: "The position, the words, and the sign-off were all human.",
        question: "The ad found you by your zip code. Modern outreach, or too far?",
      },
      {
        day: 2,
        channel: "email",
        app: "Mail",
        front: (
          <>
            <p className="font-semibold">What we heard on your street</p>
            <p className="text-slate">
              Last weekend our volunteers knocked 214 doors near you. Here&apos;s what your neighbors
              said, and what Alex plans to do about it.
            </p>
          </>
        ),
        behindTitle: "Behind this email",
        steps: [
          "Volunteers logged notes from 214 door conversations all weekend.",
          "AI summarized those 214 conversations into a few clear themes.",
          "Staff read it, corrected two mischaracterizations, and approved it.",
        ],
        human: "The doors were real. Every conversation in this email happened.",
        question: "AI summarized 214 conversations. Would you rather it hadn&apos;t?",
      },
      {
        day: 3,
        channel: "mailer",
        app: "Your mailbox",
        front: (
          <>
            <div className="h-20 rounded-lg bg-gradient-to-br from-horizon-azure/40 to-freedom-blue/30 my-2 flex items-center justify-center text-regal-navy/50 text-xs">
              postcard photo
            </div>
            <p className="font-semibold">Meet Alex Rivera</p>
            <p className="text-slate">A card arrives, addressed to you by name.</p>
          </>
        ),
        behindTitle: "Behind this mailer",
        steps: [
          "The print vendor pulled your address straight from the voter file.",
          "The layout is a template; the photo is a real one from a real day.",
          "It mailed to new and infrequent voters in a few precincts.",
        ],
        human: "The photo is real. Alex actually stood on that corner.",
        question: "You never gave them your address. Should a public file work this way?",
      },
      {
        day: 4,
        channel: "donation",
        app: "Messages",
        front: (
          <p>
            <b>Rivera for Council:</b> Maria, small donations keep this neighbor-to-neighbor. Could
            you chip in $10 today? <span className="text-freedom-blue underline">give.example/rivera</span>
          </p>
        ),
        behindTitle: "Behind this ask",
        steps: [
          "You are not a past donor, so the ask is small and framed as one-time.",
          "A timing model picked Friday evening, when replies run highest.",
          "The link quietly tracks that this ask is what brought you in.",
        ],
        human: "What the $10 funds is a real plan a campaign stands behind.",
        question: "The amount was tuned to you. Is a $10 ask still just a $10 ask?",
      },
      {
        day: 5,
        channel: "knock",
        app: "At your door",
        front: (
          <>
            <p className="font-semibold">A volunteer knocked. You weren&apos;t home.</p>
            <p className="text-slate">A handwritten note is tucked in your door: &quot;Sorry we missed you! &ndash; Dana&quot;</p>
          </>
        ),
        behindTitle: "Behind this knock",
        steps: [
          "A canvassing app routed the walker street by street to your door.",
          "The app suggested a script for the conversation you didn't have.",
          "Not home, so Dana left a real note in her own handwriting.",
        ],
        human: "The note, the handwriting, and the neighbor were all real.",
        question: "An app sent Dana to your door. Does that make the knock less personal?",
      },
      {
        day: 6,
        channel: "text",
        app: "Messages",
        front: (
          <p>
            <b>Rivera for Council:</b> Early voting is open near you! Your polling place is Lincoln
            Elementary, open 8&ndash;6. Every neighbor counts, Maria.
          </p>
        ),
        behindTitle: "Behind this reminder",
        steps: [
          "A turnout model still scores you as low-propensity to vote.",
          "That triggered you into the get-out-the-vote message sequence.",
          "Your polling place was matched from your address on file.",
        ],
        human: "The choice waiting inside the booth is yours alone.",
        question: "Everything above was measured and timed. What part was actually about you?",
      },
    ],
  },
  {
    key: "new-mover",
    pick: "I just moved here",
    name: "Sam",
    descriptor: "New address, new district, not yet registered here",
    touches: [
      {
        day: 0,
        channel: "mailer",
        app: "Your mailbox",
        front: (
          <>
            <div className="h-20 rounded-lg bg-gradient-to-br from-victory-rose/30 to-liberty-crimson/20 my-2 flex items-center justify-center text-regal-navy/50 text-xs">
              welcome card
            </div>
            <p className="font-semibold">Welcome to the neighborhood, Sam</p>
            <p className="text-slate">A card with your name, days after you moved in.</p>
          </>
        ),
        behindTitle: "Behind this mailer",
        steps: [
          "Change-of-address and voter-file updates flagged you as a new mover.",
          "The list assembled itself; no one typed your name in.",
          "New arrivals get reached first, before anyone else has.",
        ],
        human: "A person still decided new neighbors were worth welcoming.",
        question: "Your move was public data within days. Convenient, or unsettling?",
      },
      {
        day: 1,
        channel: "ad",
        app: "Sponsored",
        front: (
          <>
            <p className="font-semibold">New here? Here&apos;s how local votes work.</p>
            <AdThumb label="0:20" chip="✓ AI visuals · human-approved script" />
            <p className="text-slate">Your city council seat, and why it matters.</p>
          </>
        ),
        behindTitle: "Behind this ad",
        steps: [
          "Ad platforms model who is likely unregistered in a given area.",
          "You fit, so a &quot;new here&quot; creative was served to you.",
          "The explainer used AI visuals; the script was human-approved.",
        ],
        human: "The candidate wrote what they hope to do for the neighborhood.",
        question: "They reached you before you registered. Is that outreach, or pressure?",
      },
      {
        day: 2,
        channel: "text",
        app: "Messages",
        front: (
          <p>
            <b>Rivera for Council:</b> Hi Sam, welcome to the district! Your new polling place is
            Lincoln Elementary. Questions about registering? Just reply here.
          </p>
        ),
        behindTitle: "Behind this text",
        steps: [
          "A precinct lookup mapped your new address to a polling place.",
          "A send-time model picked the hour you actually read texts.",
          "Reply, and a real volunteer answers you.",
        ],
        human: "A volunteer answered when you texted back a real question.",
        question: "A machine picked the moment. Did that make the help less helpful?",
      },
      {
        day: 3,
        channel: "email",
        app: "Mail",
        front: (
          <>
            <p className="font-semibold">Your neighbors are organizing</p>
            <p className="text-slate">
              A few blocks from your new place, folks are meeting about the park. Want the details?
            </p>
          </>
        ),
        behindTitle: "Behind this email",
        steps: [
          "Feed and list tools surface local, active groups to new arrivals.",
          "The park issue ranked high for engagement in your area.",
          "The event, the people, and the meeting are all real.",
        ],
        human: "The neighbors in this email are real people, not an algorithm.",
        question: "The algorithm picked which neighbors you&apos;d hear about. Who did it skip?",
      },
      {
        day: 4,
        channel: "knock",
        app: "At your door",
        front: (
          <>
            <p className="font-semibold">A neighbor knocked, and already knew you&apos;re new.</p>
            <p className="text-slate">&quot;Saw you just moved in, wanted to say hi and share what&apos;s on the ballot.&quot;</p>
          </>
        ),
        behindTitle: "Behind this knock",
        steps: [
          "The canvassing app flagged your door as a new-resident stop.",
          "It noted, for the walker, that you're new to the district.",
          "The conversation on your porch was entirely their own.",
        ],
        human: "The porch conversation was one hundred percent human.",
        question: "They knew you were new before you said a word. Warm, or a little much?",
      },
      {
        day: 5,
        channel: "email",
        app: "Mail",
        front: (
          <>
            <p className="font-semibold">Deadline to register: this Friday</p>
            <p className="text-slate">Two minutes online, and you&apos;re set for this election, Sam.</p>
          </>
        ),
        behindTitle: "Behind this reminder",
        steps: [
          "Registration reminders fire on a schedule keyed to your state.",
          "New movers get the nudge because the deadline is easy to miss.",
          "Whether to register, and for whom, stays entirely up to you.",
        ],
        human: "The decision to register was yours, and only yours.",
        question: "A calendar, not a person, sent this. Does the reminder still count as care?",
      },
      {
        day: 6,
        channel: "text",
        app: "Messages",
        front: (
          <p>
            <b>Rivera for Council:</b> First election in your new home is tomorrow, Sam! Lincoln
            Elementary, 8&ndash;6. Welcome to the neighborhood, for real this time.
          </p>
        ),
        behindTitle: "Behind this reminder",
        steps: [
          "Because you registered, you moved into the turnout sequence.",
          "The final nudge lands the night before, by design.",
          "Your polling place came from the address you just changed.",
        ],
        human: "Casting the vote is a human act no system can do for you.",
        question: "The whole week found you by data. Did any of it feel like your choice?",
      },
    ],
  },
  {
    key: "donor",
    pick: "I chipped in once",
    name: "Devin",
    descriptor: "Gave $15 once · now a known supporter in the data",
    touches: [
      {
        day: 0,
        channel: "email",
        app: "Mail",
        front: (
          <>
            <p className="font-semibold">Thank you, Devin. Really.</p>
            <p className="text-slate">Your $15 just funded 300 door hangers. Here&apos;s the plan it&apos;s part of.</p>
          </>
        ),
        behindTitle: "Behind this thank-you",
        steps: [
          "The donation platform fired an instant receipt the second you gave.",
          "It tagged you as a proven donor for everything that follows.",
          "Someone chose words that thank you like a person, not a transaction.",
        ],
        human: "The gratitude is real, and the plan your $15 funds is real.",
        question: "An automated receipt, human words. Which one did you actually feel?",
      },
      {
        day: 1,
        channel: "donation",
        app: "Messages",
        front: (
          <p>
            <b>Rivera for Council:</b> Devin, could you make it $18 this time? Every dollar goes
            straight to reaching voters. <span className="text-freedom-blue underline">give.example/rivera</span>
          </p>
        ),
        behindTitle: "Behind this ask",
        steps: [
          "Your first gift was $15, so the next ask nudges just above it.",
          "Models test small increases against what donors like you give.",
          "What the money funds is a real plan the campaign stands behind.",
        ],
        human: "The cause behind the ask is real, whatever the number.",
        question: "$18, not $15, was chosen for you. Is the extra $3 persuasion or manipulation?",
      },
      {
        day: 2,
        channel: "email",
        app: "Mail",
        front: (
          <>
            <p className="font-semibold">Breaking: the council just delayed the roads vote</p>
            <p className="text-slate">This is exactly what Alex has been fighting. Can you help us respond?</p>
          </>
        ),
        behindTitle: "Behind this email",
        steps: [
          "Rapid-response tools trigger appeals off breaking local news.",
          "Past donors get the first send, because you already act.",
          "The news is real; the urgency only matters if the cause does.",
        ],
        human: "The event is real, and so is what the campaign wants to do about it.",
        question: "Urgency drove this send. Real emergency, or just good timing?",
      },
      {
        day: 3,
        channel: "ad",
        app: "Sponsored",
        front: (
          <>
            <p className="font-semibold">A message from Alex, to supporters</p>
            <AdThumb label="0:45" chip="✓ Real footage · no AI" />
            <p className="text-slate">Straight to camera, no script teleprompter.</p>
          </>
        ),
        behindTitle: "Behind this ad",
        steps: [
          "This creative is aimed at people who already gave.",
          "Length and format are tuned to what donors watch to the end.",
          "The footage is real; the person means what they say.",
        ],
        human: "The candidate on screen actually believes the words.",
        question: "It was made for donors like you. Does knowing that change how it lands?",
      },
      {
        day: 4,
        channel: "text",
        app: "Messages",
        front: (
          <p>
            <b>Rivera for Council:</b> Devin, you&apos;re one of our founding supporters. Want to join a
            call with Alex next week? Reply YES.
          </p>
        ),
        behindTitle: "Behind this invite",
        steps: [
          "Donor segments sort supporters into tiers by history.",
          "&quot;Founding supporter&quot; is the language matched to your tier.",
          "The community it invites you into is made of real people.",
        ],
        human: "The call is real, and the people on it are real.",
        question: "A tier decided you&apos;re &quot;founding.&quot; Flattering, or a label doing a job?",
      },
      {
        day: 5,
        channel: "donation",
        app: "Messages",
        front: (
          <p>
            <b>Rivera for Council:</b> A supporter is matching gifts for 24 hours, Devin. Your next
            $18 becomes $36. <span className="text-freedom-blue underline">give.example/rivera</span>
          </p>
        ),
        behindTitle: "Behind this match",
        steps: [
          "Countdowns and matches reliably lift donor response.",
          "You get it because you have given before and given again.",
          "Whether the cause has earned another gift is your call.",
        ],
        human: "Deciding it is worth another $18 is entirely up to you.",
        question: "The clock and the match are both tactics. Do they make the cause more worthy?",
      },
      {
        day: 6,
        channel: "email",
        app: "Mail",
        front: (
          <>
            <p className="font-semibold">One last thing before tomorrow</p>
            <p className="text-slate">
              Thank you for everything, Devin. Win or lose, you helped build this. Now go vote.
            </p>
          </>
        ),
        behindTitle: "Behind this send",
        steps: [
          "The closing sequence reaches every prior donor in the final stretch.",
          "Gratitude is the highest-performing closing message, and it's true.",
          "It ends by pointing you at the one thing left to do: vote.",
        ],
        human: "The thank-you only lands because a person meant it.",
        question: "The week asked a lot of you. Looking back, were you a supporter, or a target?",
      },
    ],
  },
];

function FeedCard({ touch, reduced }: { touch: Touch; reduced: boolean }) {
  const [flipped, setFlipped] = useState(false);
  const meta = CHANNEL_META[touch.channel];
  const Icon = meta.icon;

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={flipped ? "Showing what produced this. Activate to flip back." : "Activate to see what produced this."}
      className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue rounded-2xl"
      style={{ perspective: "1400px" }}
    >
      <div
        className="relative w-full min-h-[188px]"
        style={{
          transformStyle: reduced ? undefined : "preserve-3d",
          transition: reduced ? undefined : "transform 520ms cubic-bezier(0.4,0,0.2,1)",
          transform: !reduced && flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front: the touchpoint as it arrives */}
        <div
          className={`${reduced && flipped ? "hidden" : ""} ${reduced ? "" : "absolute inset-0"} flex flex-col rounded-2xl bg-white shadow-sm border border-black/5 p-3.5`}
          style={reduced ? undefined : { backfaceVisibility: "hidden" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider" style={{ color: meta.tint }}>
              <Icon className="w-3.5 h-3.5" /> {touch.app}
            </span>
            <span className="text-freedom-blue text-[10px] font-semibold group-hover:underline">flip &#x27F2;</span>
          </div>
          <div className="text-[13px] leading-snug text-granite flex-1">{touch.front}</div>
        </div>

        {/* Back: the chain that produced it */}
        <div
          className={`${reduced && !flipped ? "hidden" : ""} ${reduced ? "" : "absolute inset-0"} flex flex-col rounded-2xl bg-regal-navy p-3.5 overflow-auto`}
          style={reduced ? undefined : { backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-pioneer-gold text-[10px] font-bold uppercase tracking-wider mb-2">
            {touch.behindTitle}
          </span>
          <ol className="space-y-1 flex-1">
            {touch.steps.map((s, i) => (
              <li key={i} className="flex gap-1.5 text-beacon-white/85 text-[11.5px] leading-snug">
                <span className="text-horizon-azure font-semibold shrink-0">{i + 1}.</span>
                <span dangerouslySetInnerHTML={{ __html: s }} />
              </li>
            ))}
          </ol>
          <p className="mt-2 pt-2 border-t border-white/10 text-verdant text-[11.5px] font-semibold leading-snug">
            <span aria-hidden="true" className="mr-1">&#x2713;</span>
            <span dangerouslySetInnerHTML={{ __html: touch.human }} />
          </p>
          <p className="mt-1.5 text-beacon-white/55 text-[11px] italic leading-snug" dangerouslySetInnerHTML={{ __html: touch.question }} />
        </div>
      </div>
    </button>
  );
}

export function VotersEyes() {
  const [personaKey, setPersonaKey] = useState(PERSONAS[0].key);
  const [day, setDay] = useState(6);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() =>
      setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  const persona = PERSONAS.find((p) => p.key === personaKey) ?? PERSONAS[0];
  const visible = useMemo(
    () => persona.touches.filter((t) => t.day <= day).slice().reverse(),
    [persona, day]
  );

  return (
    <section className="py-14 md:py-20 bg-dawn-frost">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        {/* Persona picker: the visitor's own sentence */}
        <div className="text-center mb-8">
          <p className="text-slate text-xs font-bold uppercase tracking-wider mb-3">This week, you are&hellip;</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {PERSONAS.map((p) => {
              const active = p.key === personaKey;
              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setPersonaKey(p.key)}
                  aria-pressed={active}
                  className={`rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${
                    active ? "border-freedom-blue bg-freedom-blue text-white" : "border-gray-300 bg-white text-granite hover:border-freedom-blue"
                  }`}
                >
                  {p.pick}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
          {/* The phone */}
          <div className="mx-auto lg:sticky lg:top-24">
            <div className="w-[300px] rounded-[34px] border-[10px] border-[#12151f] bg-[#0f1830] overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2 text-beacon-white/70 text-[10px]">
                <span>9:41</span>
                <span>{persona.name}&apos;s phone &middot; {DAYS[day]}</span>
                <span>&#x25AE;&#x25AE;&#x25AE;</span>
              </div>
              <div className="bg-[#0f1830] px-2.5 pb-3 pt-1 flex flex-col gap-2.5 min-h-[440px] max-h-[560px] overflow-y-auto">
                {visible.map((t) => (
                  <FeedCard key={`${persona.key}-${t.day}-${t.channel}`} touch={t} reduced={reduced} />
                ))}
              </div>
            </div>
          </div>

          {/* Controls + reflection */}
          <div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6 mb-6">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-slate text-xs font-bold uppercase tracking-wider">Scrub the week</span>
                <span className="text-regal-navy font-heading font-bold text-sm">
                  {DAYS[day]} &middot; {visible.length} touchpoint{visible.length === 1 ? "" : "s"} so far
                </span>
              </div>
              <label htmlFor="ve-day" className="sr-only">Day of the week</label>
              <input
                id="ve-day"
                type="range"
                min={0}
                max={6}
                step={1}
                value={day}
                onChange={(e) => setDay(Number(e.target.value))}
                className="w-full accent-freedom-blue"
              />
              <div className="flex justify-between mt-1 text-[10px] text-slate">
                {DAYS.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              <p className="text-granite text-sm leading-relaxed mt-4">
                You are <b>{persona.name}</b>. {persona.descriptor}. Drag through the week and watch the
                campaign reach you. Tap any card to see what produced it.
              </p>
            </div>

            <div className="rounded-2xl bg-regal-navy p-6 text-beacon-white">
              <p className="text-horizon-azure text-xs font-bold uppercase tracking-wider mb-2">
                The thing to notice
              </p>
              <p className="text-beacon-white/90 text-sm leading-relaxed mb-3">
                Every touch was measured, modeled, and timed. Behind each one, a person still made a
                choice. Flip them all and the pattern is hard to miss.
              </p>
              <p className="text-beacon-white/60 text-sm leading-relaxed">
                None of this is unique to any one company. It is simply how modern campaigns work now.
                The only question left is whether they tell you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
