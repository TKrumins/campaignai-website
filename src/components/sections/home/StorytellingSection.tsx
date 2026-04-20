"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const channels = [
  { label: "Social Media", desc: "Facebook \u00b7 TikTok \u00b7 Instagram\nX/Twitter \u00b7 LinkedIn \u00b7 BlueSky", angle: 0 },
  { label: "Campaign Website", desc: "Build trust with visitors\nright on your homepage", angle: 60 },
  { label: "Email &\nNewsletters", desc: "Update supporters with\nengaging content", angle: 120 },
  { label: "Volunteer\nNetworks", desc: "Send through group chats\nor text campaigns", angle: 180 },
  { label: "Donation\nPages", desc: "Embed video to convert\nmore donors", angle: 240 },
  { label: "In-Person\nEvents", desc: "Share at town halls,\nrallies, and fundraisers", angle: 300 },
];

// Each spoke gets two dots (one blue, one red) with staggered delays
const pulsePairs = [
  { blue: 0, red: 1.4 },
  { blue: 2.6, red: 0.5 },
  { blue: 1.1, red: 3.3 },
  { blue: 3.8, red: 2.0 },
  { blue: 1.8, red: 4.2 },
  { blue: 4.5, red: 0.9 },
];

function makeNodes(cx: number, cy: number, spokeLen: number) {
  return channels.map(({ label, desc, angle }, i) => {
    const rad = (angle - 90) * (Math.PI / 180);
    const nx = cx + spokeLen * Math.cos(rad);
    const ny = cy + spokeLen * Math.sin(rad);
    return { label, desc, nx, ny, angle, idx: i };
  });
}

function HubAndSpoke() {
  const cx = 450;
  const cy = 450;
  const nodes = makeNodes(cx, cy, 290);
  const mNodes = makeNodes(300, 300, 185);
  const rectW = 190;
  const rectH = 90;
  const mRectW = 160;
  const mRectH = 76;

  return (
    <>
    <svg viewBox="60 60 780 780" className="w-full max-w-[900px] mx-auto hidden md:block" xmlns="http://www.w3.org/2000/svg">
      {/* Spoke path definitions for animateMotion */}
      {nodes.map(({ label, nx, ny, idx }) => (
        <path
          key={`path-${idx}`}
          id={`spoke-${idx}`}
          d={`M ${cx} ${cy} L ${nx} ${ny}`}
          fill="none"
          stroke="none"
        />
      ))}

      {/* Spoke lines */}
      {nodes.map(({ label, nx, ny }) => (
        <line
          key={label}
          x1={cx}
          y1={cy}
          x2={nx}
          y2={ny}
          stroke="#0D1B3E"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.15"
        />
      ))}

      {/* Pulsing energy dots — two per spoke (blue + red) */}
      {nodes.map(({ idx }) => (
        <g key={`pulse-${idx}`}>
          {/* Blue dot */}
          <circle r="6" fill="#4D9FFF" opacity="0">
            <animateMotion dur="2.8s" repeatCount="indefinite" begin={`${pulsePairs[idx].blue}s`}>
              <mpath href={`#spoke-${idx}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2.8s" repeatCount="indefinite" begin={`${pulsePairs[idx].blue}s`} />
          </circle>
          <circle r="12" fill="#4D9FFF" opacity="0">
            <animateMotion dur="2.8s" repeatCount="indefinite" begin={`${pulsePairs[idx].blue}s`}>
              <mpath href={`#spoke-${idx}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.25;0.25;0" dur="2.8s" repeatCount="indefinite" begin={`${pulsePairs[idx].blue}s`} />
          </circle>
          {/* Red dot */}
          <circle r="6" fill="#FF3366" opacity="0">
            <animateMotion dur="2.8s" repeatCount="indefinite" begin={`${pulsePairs[idx].red}s`}>
              <mpath href={`#spoke-${idx}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2.8s" repeatCount="indefinite" begin={`${pulsePairs[idx].red}s`} />
          </circle>
          <circle r="12" fill="#FF3366" opacity="0">
            <animateMotion dur="2.8s" repeatCount="indefinite" begin={`${pulsePairs[idx].red}s`}>
              <mpath href={`#spoke-${idx}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.25;0.25;0" dur="2.8s" repeatCount="indefinite" begin={`${pulsePairs[idx].red}s`} />
          </circle>
        </g>
      ))}

      {/* Outer nodes — rounded rectangles with navy borders */}
      {nodes.map(({ label, desc, nx, ny }) => {
        const labelLines = label.split("\n");
        const descLines = desc.split("\n");
        const labelBlockH = labelLines.length * 15;
        const totalH = labelBlockH + 4 + descLines.length * 12;
        const startY = ny - totalH / 2;

        return (
          <g key={label}>
            <rect
              x={nx - rectW / 2}
              y={ny - rectH / 2}
              width={rectW}
              height={rectH}
              rx="14"
              fill="white"
              stroke="#0D1B3E"
              strokeWidth="2"
            />
            {/* Title */}
            {labelLines.map((line, j) => (
              <text
                key={`t-${j}`}
                x={nx}
                y={startY + j * 15 + 8}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#0D1B3E"
                fontSize="13"
                fontWeight="700"
              >
                {line}
              </text>
            ))}
            {/* Description */}
            {descLines.map((line, j) => (
              <text
                key={`d-${j}`}
                x={nx}
                y={startY + labelBlockH + 6 + j * 12 + 6}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#0D1B3E"
                fontSize="9.5"
                fontWeight="400"
                opacity="0.7"
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}

      {/* Center hub */}
      <circle cx={cx} cy={cy} r="72" fill="#0D1B3E" />
      <circle cx={cx} cy={cy} r="72" fill="none" stroke="#4D9FFF" strokeWidth="2" opacity="0.3" />

      {/* Play button triangle */}
      <polygon
        points={`${cx - 22},${cy - 30} ${cx - 22},${cy + 30} ${cx + 28},${cy}`}
        fill="white"
        opacity="0.9"
      />

      {/* Label */}
      <text x={cx} y={cy + 58} textAnchor="middle" fill="white" fontSize="10" fontWeight="600" opacity="0.7">
        Your Video
      </text>
    </svg>

    {/* Mobile version — compact layout, larger text */}
    <svg viewBox="30 30 540 540" className="w-full md:hidden" xmlns="http://www.w3.org/2000/svg">
      {/* Spoke path definitions */}
      {mNodes.map(({ nx, ny, idx }) => (
        <path
          key={`mpath-${idx}`}
          id={`mspoke-${idx}`}
          d={`M 300 300 L ${nx} ${ny}`}
          fill="none"
          stroke="none"
        />
      ))}

      {/* Spoke lines */}
      {mNodes.map(({ label, nx, ny }) => (
        <line
          key={`ml-${label}`}
          x1={300}
          y1={300}
          x2={nx}
          y2={ny}
          stroke="#0D1B3E"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.15"
        />
      ))}

      {/* Pulsing dots */}
      {mNodes.map(({ idx }) => (
        <g key={`mpulse-${idx}`}>
          <circle r="6" fill="#4D9FFF" opacity="0">
            <animateMotion dur="2.8s" repeatCount="indefinite" begin={`${pulsePairs[idx].blue}s`}>
              <mpath href={`#mspoke-${idx}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2.8s" repeatCount="indefinite" begin={`${pulsePairs[idx].blue}s`} />
          </circle>
          <circle r="6" fill="#FF3366" opacity="0">
            <animateMotion dur="2.8s" repeatCount="indefinite" begin={`${pulsePairs[idx].red}s`}>
              <mpath href={`#mspoke-${idx}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2.8s" repeatCount="indefinite" begin={`${pulsePairs[idx].red}s`} />
          </circle>
        </g>
      ))}

      {/* Outer nodes */}
      {mNodes.map(({ label, desc, nx, ny }) => {
        const labelLines = label.split("\n");
        const descLines = desc.split("\n");
        const labelBlockH = labelLines.length * 15;
        const totalH = labelBlockH + 4 + descLines.length * 12;
        const startY = ny - totalH / 2;

        return (
          <g key={`m-${label}`}>
            <rect
              x={nx - mRectW / 2}
              y={ny - mRectH / 2}
              width={mRectW}
              height={mRectH}
              rx="12"
              fill="white"
              stroke="#0D1B3E"
              strokeWidth="2"
            />
            {labelLines.map((line, j) => (
              <text
                key={`mt-${j}`}
                x={nx}
                y={startY + j * 15 + 8}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#0D1B3E"
                fontSize="13"
                fontWeight="700"
              >
                {line}
              </text>
            ))}
            {descLines.map((line, j) => (
              <text
                key={`md-${j}`}
                x={nx}
                y={startY + labelBlockH + 6 + j * 12 + 6}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#0D1B3E"
                fontSize="10"
                fontWeight="400"
                opacity="0.7"
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}

      {/* Center hub */}
      <circle cx={300} cy={300} r="52" fill="#0D1B3E" />
      <circle cx={300} cy={300} r="52" fill="none" stroke="#4D9FFF" strokeWidth="2" opacity="0.3" />

      {/* Play button */}
      <polygon
        points="284,278 284,322 316,300"
        fill="white"
        opacity="0.9"
      />

      <text x={300} y={342} textAnchor="middle" fill="white" fontSize="9" fontWeight="600" opacity="0.7">
        Your Video
      </text>
    </svg>
    </>
  );
}

export function StorytellingSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-[760px] mx-auto mb-12">
            <SectionLabel text="Take Your Message Everywhere" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
              Share your video far and wide.
            </h2>
            <p className="text-granite text-lg leading-relaxed mb-6">
              Videos are your most powerful tool on a campaign. Once produced,
              it&apos;s ready to work hard wherever your audience spends their
              time.
            </p>
            <p className="font-heading font-bold text-xl text-regal-navy">
              Post it. Share it. Run it. Repeat.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <HubAndSpoke />
        </ScrollReveal>
      </div>
    </section>
  );
}
