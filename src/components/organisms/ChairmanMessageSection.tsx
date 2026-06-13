"use client";

import { type JSX, useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { MagicText } from "@/components/ui/magic-text";

export function ChairmanMessageSection(): JSX.Element {
  const quoteBlockRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll animations for Chairman Quote
  const { scrollYProgress } = useScroll({
    target: quoteBlockRef,
    offset: ["start 90%", "end 45%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const imageX = useTransform(smoothProgress, [0, 0.65], [isMobile ? "-40px" : "-120px", "0px"]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.5], [0, 1]);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white" aria-labelledby="chairman-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          ref={quoteBlockRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="border-neutral-100"
        >
          <div className="flex items-center gap-4 mb-10 lg:mb-16">
            <div className="w-10 h-px bg-neutral-300" />
            <span id="chairman-heading" className="text-eyebrow">
              From the Chairman
            </span>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <motion.div
              style={{ x: imageX, opacity: imageOpacity, willChange: "transform, opacity" }}
              className="w-full lg:col-span-5"
            >
              <div className="relative w-full mx-auto max-w-[440px] lg:mx-0">
                <div className="absolute -bottom-4 -right-4 w-full h-full border rounded-sm -z-10 border-neutral-200" />
                <div className="relative w-full overflow-hidden rounded-sm aspect-[4/5] bg-neutral-100 max-h-[400px] lg:max-h-none">
                  <Image
                    alt="Raj Talreja - Chairman & Managing Director"
                    src="/Raj Sir Photo.jpg"
                    fill
                    quality={100}
                    className="object-cover object-top"
                    sizes="(max-width:1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div
                aria-hidden="true"
                className="select-none mb-4 text-[#d4d4d4] font-sans text-[clamp(40px,8vw,96px)] leading-[0.85]"
              >
                &ldquo;
              </div>

              <blockquote>
                <MagicText
                  text="Our vision extends far beyond today's production. By investing in local talent, demanding operational excellence, and maintaining an absolute commitment to safety, we are building an enduring institution that powers Zambia's mining future."
                  className="flex flex-wrap p-0 m-0 leading-[1.35] font-sans text-[clamp(22px,3vw,38px)] font-light tracking-[-0.01em] max-w-full mb-8"
                  wordClassName="relative inline-block mr-[0.22em] font-light text-neutral-900"
                />

                <footer className="pt-7 border-t border-[#e5e5e5] max-w-full">
                  <div>
                    <cite className="block not-italic font-medium font-sans text-[17px] tracking-tight mb-1 text-neutral-900">
                      Raj Talreja
                    </cite>
                    <p className="text-eyebrow text-neutral-500">
                      Chairman · SKT Global Mining &amp; Services
                    </p>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
