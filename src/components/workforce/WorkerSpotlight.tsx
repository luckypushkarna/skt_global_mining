"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Pause, Volume2 } from "lucide-react";

export function WorkerSpotlight() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playbackProgress = 25;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="bg-zinc-950 text-white py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-sky-400 uppercase block mb-12">
          ── Spotlight Testimony
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Audio Player */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] w-full border border-zinc-800 bg-zinc-900 overflow-hidden filter grayscale contrast-110">
              <Image
                src="/Charles Sakanya.webp"
                alt="Charles Sakanya Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Audio Waveform Player */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-400 text-zinc-950 flex items-center justify-center transition-colors focus:outline-none shrink-0"
                aria-label={isPlaying ? "Pause audio story" : "Play audio story"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-zinc-950" /> : <Play className="w-4 h-4 fill-zinc-950 translate-x-0.5" />}
              </button>

              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                  <span>Charles Sakanya - Audio Story</span>
                  <span>0:42 / 1:30</span>
                </div>

                {/* Waveform Visualization */}
                <div className="h-6 flex items-end gap-[3px] select-none">
                  {Array.from({ length: 32 }).map((_, idx) => {
                    const progressRatio = (idx / 32) * 100;
                    const isActive = progressRatio <= playbackProgress;
                    // Custom height variations for realistic waveform
                    const heights = [30, 60, 45, 80, 20, 50, 70, 40, 90, 35, 60, 50, 75, 25, 40, 65, 85, 30, 55, 45, 70, 20, 60, 80, 40, 95, 35, 50, 65, 30, 45, 20];
                    const barHeight = heights[idx % heights.length];

                    return (
                      <div
                        key={idx}
                        className={`flex-1 transition-all duration-300 ${
                          isActive ? "bg-sky-400" : "bg-zinc-800"
                        }`}
                        style={{
                          height: `${barHeight}%`,
                          animation: isPlaying && isActive ? "pulseWave 1.2s infinite ease-in-out" : "none",
                          animationDelay: `${idx * 0.04}s`,
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              <Volume2 className="w-4 h-4 text-zinc-500 shrink-0 hidden sm:block" />
            </div>
          </div>

          {/* Right Column: Testimony Content */}
          <div className="lg:col-span-7 space-y-8">
            <span className="font-mono text-xs text-sky-400 uppercase tracking-widest block">
              &ldquo;We own our technical destiny.&rdquo;
            </span>

            {/* Testimonial Quote */}
            <blockquote className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-white">
              &ldquo;I started here in 2017 as a junior refinery attendant. SKT sponsored my mineral engineering diploma at the Copperbelt University. Today, I direct the entire flotation loop processing grid. We aren&apos;t just mining copper; we are building our country&apos;s industrial backbone.&rdquo;
            </blockquote>

            <div>
              <p className="text-xl font-bold text-white leading-none">Charles Sakanya</p>
              <p className="text-xs font-mono text-zinc-500 uppercase mt-1.5">
                Senior Metallurgical Director · Chambishi Operations
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-900 grid grid-cols-2 gap-6 font-mono text-[11px]">
              <div>
                <span className="text-zinc-500 uppercase block">GRADUATED</span>
                <span className="text-white">Copperbelt University, 2021</span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase block">PROJECT SPONSORED</span>
                <span className="text-sky-300 font-bold">$12,500 Tuition Grant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulseWave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.4); }
        }
      `}</style>
    </section>
  );
}
