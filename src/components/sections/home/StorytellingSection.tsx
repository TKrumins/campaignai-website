import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

function FlywheelMarkers({ prefix }: { prefix: string }) {
  return (
    <defs>
      <marker id={`${prefix}Navy`} markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
        <path d="M 0 0 L 8 4 L 0 8 Z" fill="#0D1B3E" />
      </marker>
      <marker id={`${prefix}Blue`} markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
        <path d="M 0 0 L 8 4 L 0 8 Z" fill="#4D9FFF" />
      </marker>
      <marker id={`${prefix}Crimson`} markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
        <path d="M 0 0 L 8 4 L 0 8 Z" fill="#FF3366" />
      </marker>
    </defs>
  );
}

function PulsingDot({ path, color, duration, delay }: { path: string; color: string; duration: number; delay: number }) {
  return (
    <>
      <circle r="4" fill={color} opacity="0.8">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`}>
          <mpath href={`#${path}`} />
        </animateMotion>
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle r="7" fill={color} opacity="0">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`}>
          <mpath href={`#${path}`} />
        </animateMotion>
        <animate attributeName="opacity" values="0;0.3;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </>
  );
}

function DesktopFlywheel() {
  const p = "d";
  return (
    <svg
      viewBox="0 0 1100 380"
      className="w-full hidden lg:block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <FlywheelMarkers prefix={p} />

      {/* ============================== */}
      {/* LEFT: Launch + Build Phase */}
      {/* ============================== */}

      <rect x="120" y="60" width="160" height="42" rx="21" fill="#0D1B3E" />
      <text x="200" y="87" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
        Launch
      </text>

      <line x1="200" y1="102" x2="200" y2="122" stroke="#0D1B3E" strokeWidth="2" markerEnd={`url(#${p}Navy)`} />

      <rect x="100" y="128" width="200" height="30" rx="7" fill="white" stroke="#4D9FFF" strokeWidth="1.5" />
      <text x="200" y="148" textAnchor="middle" fill="#0D1B3E" fontSize="11" fontWeight="600">
        Fundraising Appeal
      </text>

      <rect x="100" y="168" width="200" height="30" rx="7" fill="white" stroke="#4D9FFF" strokeWidth="1.5" />
      <text x="200" y="188" textAnchor="middle" fill="#0D1B3E" fontSize="11" fontWeight="600">
        Policy Explainer
      </text>

      <rect x="100" y="208" width="200" height="30" rx="7" fill="white" stroke="#4D9FFF" strokeWidth="1.5" />
      <text x="200" y="228" textAnchor="middle" fill="#0D1B3E" fontSize="11" fontWeight="600">
        Community Spotlight
      </text>

      <text x="70" y="188" textAnchor="middle" fill="#4D9FFF" fontSize="9" fontWeight="600" transform="rotate(-90 70 188)">
        Messaging builds
      </text>
      <line x1="86" y1="132" x2="86" y2="234" stroke="#4D9FFF" strokeWidth="1" opacity="0.25" />

      <line x1="300" y1="190" x2="340" y2="190" stroke="#0D1B3E" strokeWidth="2" />
      <text x="375" y="184" textAnchor="middle" dominantBaseline="middle" fill="#FF3366" fontSize="9" fontWeight="700">
        FLYWHEEL
      </text>
      <text x="375" y="198" textAnchor="middle" dominantBaseline="middle" fill="#FF3366" fontSize="9" fontWeight="700">
        ACTIVATES
      </text>
      <line x1="410" y1="190" x2="420" y2="190" stroke="#0D1B3E" strokeWidth="2" markerEnd={`url(#${p}Navy)`} />

      {/* ============================== */}
      {/* CENTER: Flywheel */}
      {/* ============================== */}

      <circle cx="550" cy="190" r="118" fill="none" stroke="#0D1B3E" strokeWidth="1" opacity="0.04" />
      <circle cx="550" cy="190" r="108" fill="none" stroke="#0D1B3E" strokeWidth="1.5" opacity="0.06" />

      {/* Flywheel arcs with IDs for animation */}
      <path id="d-arc1"
        d="M 574 118 A 96 96 0 0 1 622 166"
        fill="none" stroke="#4D9FFF" strokeWidth="2.5" strokeLinecap="round"
        markerEnd={`url(#${p}Blue)`}
      />
      <path id="d-arc2"
        d="M 622 214 A 96 96 0 0 1 574 262"
        fill="none" stroke="#FF3366" strokeWidth="2.5" strokeLinecap="round"
        markerEnd={`url(#${p}Crimson)`}
      />
      <path id="d-arc3"
        d="M 526 262 A 96 96 0 0 1 478 214"
        fill="none" stroke="#4D9FFF" strokeWidth="2.5" strokeLinecap="round"
        markerEnd={`url(#${p}Blue)`}
      />
      <path id="d-arc4"
        d="M 478 166 A 96 96 0 0 1 526 118"
        fill="none" stroke="#FF3366" strokeWidth="2.5" strokeLinecap="round"
        markerEnd={`url(#${p}Crimson)`}
      />

      {/* Pulsing dots on flywheel arcs */}
      <PulsingDot path="d-arc1" color="#4D9FFF" duration={2} delay={0} />
      <PulsingDot path="d-arc2" color="#FF3366" duration={2} delay={0.5} />
      <PulsingDot path="d-arc3" color="#4D9FFF" duration={2} delay={1} />
      <PulsingDot path="d-arc4" color="#FF3366" duration={2} delay={1.5} />

      {/* Center label */}
      <text x="550" y="185" textAnchor="middle" fill="#0D1B3E" fontSize="14" fontWeight="800">
        Storytelling
      </text>
      <text x="550" y="203" textAnchor="middle" fill="#0D1B3E" fontSize="14" fontWeight="800">
        Flywheel
      </text>

      <circle cx="550" cy="94" r="34" fill="#0D1B3E" />
      <text x="550" y="98" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
        Create
      </text>

      <circle cx="646" cy="190" r="34" fill="#0D1B3E" />
      <text x="646" y="194" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
        Share
      </text>

      <circle cx="550" cy="286" r="34" fill="#0D1B3E" />
      <text x="550" y="290" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
        Engage
      </text>

      <circle cx="454" cy="190" r="34" fill="#0D1B3E" />
      <text x="454" y="194" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
        Learn
      </text>

      {/* ============================== */}
      {/* RIGHT: Mobilize */}
      {/* ============================== */}

      {/* Outbound dashed — navy */}
      <path
        d="M 630 140 C 690 110 740 98 800 98"
        fill="none" stroke="#0D1B3E" strokeWidth="2.5" strokeLinecap="round"
        strokeDasharray="8 4"
        markerEnd={`url(#${p}Navy)`}
      />

      <circle cx="670" cy="120" r="2.5" fill="#0D1B3E" opacity="0.3" />
      <circle cx="715" cy="108" r="3" fill="#0D1B3E" opacity="0.2" />
      <circle cx="760" cy="100" r="3.5" fill="#0D1B3E" opacity="0.15" />

      <rect x="800" y="60" width="120" height="38" rx="19" fill="#FF3366" />
      <text x="860" y="84" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
        Mobilize
      </text>

      <line x1="860" y1="98" x2="860" y2="126" stroke="#FF3366" strokeWidth="2" strokeLinecap="round" markerEnd={`url(#${p}Crimson)`} />

      <rect x="803" y="130" width="115" height="28" rx="6" fill="white" stroke="#FF3366" strokeWidth="1.5" />
      <text x="860" y="149" textAnchor="middle" fill="#0D1B3E" fontSize="9" fontWeight="600">
        Updates
      </text>

      <rect x="803" y="168" width="115" height="28" rx="6" fill="white" stroke="#FF3366" strokeWidth="1.5" />
      <text x="860" y="187" textAnchor="middle" fill="#0D1B3E" fontSize="9" fontWeight="600">
        Thank-You Videos
      </text>

      <rect x="803" y="206" width="115" height="28" rx="6" fill="white" stroke="#FF3366" strokeWidth="1.5" />
      <text x="860" y="225" textAnchor="middle" fill="#0D1B3E" fontSize="9" fontWeight="600">
        Issue Responses
      </text>

      <text x="940" y="182" textAnchor="middle" fill="#FF3366" fontSize="9" fontWeight="600" transform="rotate(90 940 182)">
        Ongoing messaging
      </text>
      <line x1="928" y1="134" x2="928" y2="230" stroke="#FF3366" strokeWidth="1" opacity="0.25" />

      {/* Return dashed — navy */}
      <path
        d="M 840 234 C 800 280 700 290 622 260"
        fill="none" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round"
        strokeDasharray="6 4"
        markerEnd={`url(#${p}Navy)`}
      />
    </svg>
  );
}

function MobileFlywheel() {
  const p = "m";
  return (
    <svg
      viewBox="0 0 800 800"
      className="w-full lg:hidden"
      xmlns="http://www.w3.org/2000/svg"
    >
      <FlywheelMarkers prefix={p} />

      {/* ============================== */}
      {/* TOP: Launch */}
      {/* ============================== */}
      <rect x="320" y="8" width="160" height="42" rx="21" fill="#0D1B3E" />
      <text x="400" y="35" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
        Launch
      </text>

      <line x1="400" y1="50" x2="400" y2="78" stroke="#0D1B3E" strokeWidth="2" markerEnd={`url(#${p}Navy)`} />

      <rect x="300" y="82" width="200" height="30" rx="7" fill="white" stroke="#4D9FFF" strokeWidth="1.5" />
      <text x="400" y="102" textAnchor="middle" fill="#0D1B3E" fontSize="11" fontWeight="600">
        Fundraising Appeal
      </text>

      <rect x="300" y="126" width="200" height="30" rx="7" fill="white" stroke="#4D9FFF" strokeWidth="1.5" />
      <text x="400" y="146" textAnchor="middle" fill="#0D1B3E" fontSize="11" fontWeight="600">
        Policy Explainer
      </text>

      <rect x="300" y="170" width="200" height="30" rx="7" fill="white" stroke="#4D9FFF" strokeWidth="1.5" />
      <text x="400" y="190" textAnchor="middle" fill="#0D1B3E" fontSize="11" fontWeight="600">
        Community Spotlight
      </text>

      <text x="262" y="142" textAnchor="middle" fill="#4D9FFF" fontSize="9" fontWeight="600" transform="rotate(-90 262 142)">
        Messaging builds
      </text>
      <line x1="280" y1="86" x2="280" y2="196" stroke="#4D9FFF" strokeWidth="1" opacity="0.25" />

      <line x1="400" y1="200" x2="400" y2="220" stroke="#0D1B3E" strokeWidth="2" />
      <text x="400" y="233" textAnchor="middle" dominantBaseline="middle" fill="#FF3366" fontSize="9" fontWeight="700">
        FLYWHEEL ACTIVATES
      </text>
      <line x1="400" y1="242" x2="400" y2="268" stroke="#0D1B3E" strokeWidth="2" markerEnd={`url(#${p}Navy)`} />

      {/* ============================== */}
      {/* CENTER: Flywheel */}
      {/* ============================== */}

      <circle cx="400" cy="400" r="120" fill="none" stroke="#0D1B3E" strokeWidth="1" opacity="0.04" />
      <circle cx="400" cy="400" r="108" fill="none" stroke="#0D1B3E" strokeWidth="1.5" opacity="0.06" />

      {/* Flywheel arcs with IDs for animation */}
      <path id="m-arc1"
        d="M 424 318 A 100 100 0 0 1 482 376"
        fill="none" stroke="#4D9FFF" strokeWidth="2.5" strokeLinecap="round"
        markerEnd={`url(#${p}Blue)`}
      />
      <path id="m-arc2"
        d="M 482 424 A 100 100 0 0 1 424 482"
        fill="none" stroke="#FF3366" strokeWidth="2.5" strokeLinecap="round"
        markerEnd={`url(#${p}Crimson)`}
      />
      <path id="m-arc3"
        d="M 376 482 A 100 100 0 0 1 318 424"
        fill="none" stroke="#4D9FFF" strokeWidth="2.5" strokeLinecap="round"
        markerEnd={`url(#${p}Blue)`}
      />
      <path id="m-arc4"
        d="M 318 376 A 100 100 0 0 1 376 318"
        fill="none" stroke="#FF3366" strokeWidth="2.5" strokeLinecap="round"
        markerEnd={`url(#${p}Crimson)`}
      />

      {/* Pulsing dots on flywheel arcs */}
      <PulsingDot path="m-arc1" color="#4D9FFF" duration={2} delay={0} />
      <PulsingDot path="m-arc2" color="#FF3366" duration={2} delay={0.5} />
      <PulsingDot path="m-arc3" color="#4D9FFF" duration={2} delay={1} />
      <PulsingDot path="m-arc4" color="#FF3366" duration={2} delay={1.5} />

      {/* Center label */}
      <text x="400" y="395" textAnchor="middle" fill="#0D1B3E" fontSize="14" fontWeight="800">
        Storytelling
      </text>
      <text x="400" y="413" textAnchor="middle" fill="#0D1B3E" fontSize="14" fontWeight="800">
        Flywheel
      </text>

      <circle cx="400" cy="294" r="34" fill="#0D1B3E" />
      <text x="400" y="298" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
        Create
      </text>

      <circle cx="506" cy="400" r="34" fill="#0D1B3E" />
      <text x="506" y="404" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
        Share
      </text>

      <circle cx="400" cy="506" r="34" fill="#0D1B3E" />
      <text x="400" y="510" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
        Engage
      </text>

      <circle cx="294" cy="400" r="34" fill="#0D1B3E" />
      <text x="294" y="404" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
        Learn
      </text>

      {/* ============================== */}
      {/* BOTTOM: Mobilize */}
      {/* ============================== */}

      {/* Outbound dashed — navy */}
      <path
        d="M 465 465 C 510 510 505 565 470 601"
        fill="none" stroke="#0D1B3E" strokeWidth="2.5" strokeLinecap="round"
        strokeDasharray="8 4"
        markerEnd={`url(#${p}Navy)`}
      />

      <circle cx="480" cy="490" r="2.5" fill="#0D1B3E" opacity="0.3" />
      <circle cx="492" cy="525" r="3" fill="#0D1B3E" opacity="0.2" />
      <circle cx="486" cy="560" r="3.5" fill="#0D1B3E" opacity="0.15" />

      <rect x="330" y="580" width="140" height="42" rx="21" fill="#FF3366" />
      <text x="400" y="606" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
        Mobilize
      </text>

      <line x1="400" y1="622" x2="400" y2="648" stroke="#FF3366" strokeWidth="2" strokeLinecap="round" markerEnd={`url(#${p}Crimson)`} />

      <rect x="343" y="660" width="115" height="28" rx="6" fill="white" stroke="#FF3366" strokeWidth="1.5" />
      <text x="400" y="679" textAnchor="middle" fill="#0D1B3E" fontSize="9" fontWeight="600">
        Updates
      </text>

      <rect x="343" y="698" width="115" height="28" rx="6" fill="white" stroke="#FF3366" strokeWidth="1.5" />
      <text x="400" y="717" textAnchor="middle" fill="#0D1B3E" fontSize="9" fontWeight="600">
        Thank-You Videos
      </text>

      <rect x="343" y="736" width="115" height="28" rx="6" fill="white" stroke="#FF3366" strokeWidth="1.5" />
      <text x="400" y="755" textAnchor="middle" fill="#0D1B3E" fontSize="9" fontWeight="600">
        Issue Responses
      </text>

      <text x="321" y="718" textAnchor="middle" fill="#FF3366" fontSize="9" fontWeight="600" transform="rotate(-90 321 718)">
        Ongoing messaging
      </text>
      <line x1="333" y1="664" x2="333" y2="760" stroke="#FF3366" strokeWidth="1" opacity="0.25" />

      {/* Return dashed — navy */}
      <path
        d="M 330 601 C 295 565 290 510 335 465"
        fill="none" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round"
        strokeDasharray="6 4"
        markerEnd={`url(#${p}Navy)`}
      />
    </svg>
  );
}

export function StorytellingSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <SectionLabel text="Why It Matters" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
              Every campaign is a story being told in real time.
            </h2>
            <p className="text-granite text-xl font-semibold leading-relaxed mb-4">
              Your announcement introduces you to the world.
              <br />
              Your fundraising appeal shows what&apos;s at stake.
              <br />
              Your policy explainers offer a plan.
              <br />
              Your GOTV spot rallies the people.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex items-center justify-center">
            <DesktopFlywheel />
            <MobileFlywheel />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
