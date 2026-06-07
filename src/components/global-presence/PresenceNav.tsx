"use client";

import { useEffect, useState } from "react";

export default function PresenceNav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[2px] z-[200] bg-transparent">
        <div
          className="h-full bg-neutral-900 origin-left transition-transform duration-100 ease-linear"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-700 ${
          scrolled ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">
          <div
            className={`bg-white/80 backdrop-blur-xl rounded-full px-5 py-2.5 shadow-sm border border-neutral-100/60 transition-all duration-700 ${
              scrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3"
            }`}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-light">
              Global Presence
            </span>
          </div>
          <div
            className={`transition-all duration-700 ${
              scrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3"
            }`}
          >
            <a
              href="/about"
              className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 hover:text-neutral-800 transition-colors duration-300 font-light flex items-center gap-2"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              About
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
