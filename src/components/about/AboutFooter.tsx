"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutFooter() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-white border-t border-neutral-100 py-16 md:py-20 px-6 md:px-16 lg:px-24 xl:px-32 opacity-0"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p
              className="text-lg font-extralight text-neutral-900 tracking-[-0.01em] mb-4"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Global Mining &<br />
              Infrastructure Corporation
            </p>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xs">
              Building the foundations of progress through responsible resource
              development.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 mb-4 font-light">
              Company
            </p>
            <nav className="space-y-3">
              {["About", "Leadership", "Operations", "Sustainability"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-300 font-light"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 mb-4 font-light">
              Resources
            </p>
            <nav className="space-y-3">
              {["Annual Report", "Media", "Careers", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-300 font-light"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 mb-4 font-light">
              Connect
            </p>
            <nav className="space-y-3">
              {["LinkedIn", "Twitter", "YouTube"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-300 font-light"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] text-neutral-400 font-light">
            © 2024 Global Mining & Infrastructure Corporation. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[11px] text-neutral-400 hover:text-neutral-700 transition-colors font-light"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[11px] text-neutral-400 hover:text-neutral-700 transition-colors font-light"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="text-[11px] text-neutral-400 hover:text-neutral-700 transition-colors font-light"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
