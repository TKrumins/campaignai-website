"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";

interface VideoCardProps {
  party: "Democratic" | "Republican";
  partyColor: string;
  partyTextColor: string;
  typePill: string;
  levelPill: string;
  title: string;
  credit: string;
  src: string;
  posters: string[];
  isPlaying: boolean;
  onPlay: () => void;
}

function VideoCard({
  party,
  partyColor,
  partyTextColor,
  typePill,
  levelPill,
  title,
  credit,
  src,
  posters,
  isPlaying,
  onPlay,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activePoster, setActivePoster] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hasStarted || prefersReducedMotion || !isVisible || posters.length <= 1) return;
    const interval = setInterval(() => {
      setActivePoster((prev) => (prev + 1) % posters.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [hasStarted, prefersReducedMotion, isVisible, posters.length]);

  useEffect(() => {
    if (!isPlaying && hasStarted && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isPlaying, hasStarted]);

  const handlePlay = useCallback(() => {
    if (!videoRef.current) return;
    setHasStarted(true);
    onPlay();
    videoRef.current.play();
  }, [onPlay]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!hasStarted) {
          handlePlay();
        } else if (videoRef.current) {
          if (videoRef.current.paused) {
            onPlay();
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      }
    },
    [hasStarted, handlePlay, onPlay]
  );

  return (
    <div ref={containerRef} className="rounded-xl bg-regal-navy/60 border border-white/10 overflow-hidden">
      <div
        className="relative w-full"
        style={{ aspectRatio: "16 / 9" }}
        role="group"
        aria-label={`Video: ${title}`}
      >
        {/* Poster images with crossfade */}
        {!hasStarted && posters.map((poster, i) => (
          <Image
            key={poster}
            src={poster}
            alt={i === 0 ? title : ""}
            fill
            sizes="(max-width: 768px) 100vw, 550px"
            className="object-cover transition-opacity duration-1000 ease-in-out"
            style={{ opacity: activePoster === i ? 1 : 0 }}
            priority={i === 0}
          />
        ))}

        {/* Video element */}
        {isVisible && (
          <video
            ref={videoRef}
            src={src}
            preload="none"
            playsInline
            controls={hasStarted}
            className={`absolute inset-0 w-full h-full object-cover ${hasStarted ? "opacity-100" : "opacity-0"}`}
            onEnded={() => setHasStarted(false)}
          />
        )}

        {/* Party pill overlay */}
        <span
          className="absolute top-3 left-3 z-10 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded"
          style={{ backgroundColor: partyColor, color: partyTextColor }}
        >
          {party}
        </span>

        {/* Play button overlay */}
        {!hasStarted && (
          <button
            onClick={handlePlay}
            onKeyDown={handleKeyDown}
            className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue focus-visible:ring-offset-2 focus-visible:ring-offset-regal-navy group"
            aria-label={`Play ${title}`}
          >
            <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
              <Play className="w-7 h-7 text-white ml-1" fill="white" />
            </span>
          </button>
        )}
      </div>

      {/* Caption area */}
      <div className="p-4 min-h-[100px]">
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="text-xs font-medium text-beacon-white/60 border border-white/15 rounded-full px-2.5 py-0.5">
            {typePill}
          </span>
          <span className="text-xs font-medium text-beacon-white/60 border border-white/15 rounded-full px-2.5 py-0.5">
            {levelPill}
          </span>
        </div>
        <h3 className="font-heading font-bold text-base text-beacon-white leading-snug mb-1">
          {title}
        </h3>
        <p className="text-horizon-azure text-sm">
          {credit}
        </p>
      </div>
    </div>
  );
}

export function ShowcaseSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="our-work" className="py-20 md:py-28 bg-regal-navy">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <SectionLabel text="Our Work" color="horizon" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-[40px] md:text-[48px] md:leading-tight text-beacon-white tracking-[-1.5px] mt-3 mb-4">
              Don&apos;t take our word for it. Watch the work.
            </h2>
            <p className="font-body font-semibold text-lg text-beacon-white/90 max-w-[700px] mx-auto leading-relaxed">
              Two videos. Two co-founders. One Republican, one Democrat, the same story-first process.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <VideoCard
              party="Democratic"
              partyColor="#4D9FFF"
              partyTextColor="#0D1B3E"
              typePill="Policy Explainer"
              levelPill="Gubernatorial"
              title="The Resilience Act"
              credit="Produced by co-founder Jermaine Johnson"
              src="/assets/videos/the-resilience-act.mp4"
              posters={[
                "/assets/videos/posters/the-resilience-act.jpg",
                "/assets/videos/posters/the-resilience-act-2.jpg",
                "/assets/videos/posters/the-resilience-act-3.jpg",
              ]}
              isPlaying={activeVideo === "resilience"}
              onPlay={() => setActiveVideo("resilience")}
            />
            <VideoCard
              party="Republican"
              partyColor="#FF3366"
              partyTextColor="#FFFFFF"
              typePill="Policy Explainer"
              levelPill="State House"
              title="The Stop Harm from Addictive Social Media (SHASM) Act"
              credit="Produced by co-founder Brandon Guffey"
              src="/assets/videos/shasm-act.mp4"
              posters={[
                "/assets/videos/posters/shasm-act.jpg",
                "/assets/videos/posters/shasm-act-2.jpg",
                "/assets/videos/posters/shasm-act-3.jpg",
              ]}
              isPlaying={activeVideo === "shasm"}
              onPlay={() => setActiveVideo("shasm")}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="text-center">
            <Button
              variant="crimson"
              href="https://calendly.com/campaignai/campaignai-purchase-call"
              external
              className="px-8 py-3"
            >
              Buy your first video &rarr;
            </Button>
            <p className="text-horizon-azure text-sm mt-2">
              Book a 30-minute call to get started.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
