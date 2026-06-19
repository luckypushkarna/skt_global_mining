"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Custom hook for intersection observer
function useInView(options: IntersectionObserverInit = {}) {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting) {
        setHasBeenInView(true);
      }
    }, { threshold: 0.15, ...options });

    observer.observe(element);
    return () => observer.unobserve(element);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, isInView, hasBeenInView };
}

// Custom hook for scroll progress
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      const scrolled = windowHeight - rect.top;
      const total = windowHeight + elementHeight;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, progress };
}

// Fade-in component
function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const { ref, hasBeenInView } = useInView();

  const transforms: Record<string, string> = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(40px)",
    right: "translateX(-40px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hasBeenInView ? 1 : 0,
        transform: hasBeenInView ? "none" : transforms[direction],
        transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}


// Value word component
function ValueWord({
  word,
  index,
}: {
  word: string;
  index: number;
}) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="flex items-center justify-center py-8 md:py-12"
      style={{
        opacity: hasBeenInView ? 1 : 0,
        transform: hasBeenInView ? "scale(1)" : "scale(0.85)",
        transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`,
      }}
    >
      <span
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-white/90"
        
      >
        {word}
      </span>
    </div>
  );
}

export default function ChairpersonsMessage() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScrollable = docHeight - winHeight;
      const progress = totalScrollable > 0 ? (currentScrollY / totalScrollable) * 100 : 0;
      setScrollProgress(Math.min(100, progress));
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const chapters = [
    {
      number: "01",
      title: "Responsible Growth",
      content:
        "Growth without responsibility is not growth at all - it is extraction in its most shortsighted form. Over the past year, we have deepened our commitment to responsible resource development, ensuring that every tonne extracted creates lasting value not only for our shareholders, but for the communities and ecosystems that surround our operations.\n\nWe have expanded our environmental monitoring capabilities, invested in water recycling infrastructure, and strengthened our land rehabilitation programs. These are not costs to our business - they are investments in our future legitimacy and our enduring social license to operate.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=600&fit=crop",
    },
    {
      number: "02",
      title: "Operational Excellence",
      content:
        "Excellence in mining is not achieved through grand gestures. It is built shift by shift, decision by decision, in the disciplined execution of fundamentals. This year, our operations have demonstrated that precision and consistency are the truest measures of a mature mining enterprise.\n\nAcross our portfolio, we have achieved record throughput while simultaneously reducing unit costs. Our investment in autonomous systems, predictive maintenance, and data-driven mine planning is yielding returns that exceed our initial projections - not because we pursued technology for its own sake, but because we applied it where it matters most.",
      image:
        "https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=900&h=600&fit=crop",
    },
    {
      number: "03",
      title: "People First",
      content:
        "Every achievement documented in this report was made possible by people - their expertise, their courage, their commitment to one another. A mining company is only as strong as the trust between the individuals who plan, execute, and safeguard its operations every day.\n\nWe have made significant investments in leadership development, mental health support, and skills training. Our workforce represents over forty nationalities, and this diversity is among our greatest strengths. When people feel valued, heard, and safe, they bring their best work - and in mining, that best work can be the difference between an ordinary operation and an exceptional one.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&h=600&fit=crop",
    },
    {
      number: "04",
      title: "Sustainable Mining",
      content:
        "Sustainability in mining is often perceived as paradoxical. We extract finite resources from the earth - how can that be sustainable? The answer lies not in what we take, but in how we take it, what we leave behind, and what we enable for the world.\n\nOur decarbonization roadmap is ahead of schedule. We have reduced Scope 1 and 2 emissions by thirty-four percent against our 2019 baseline. We have committed to science-based targets, and our water intensity per tonne has decreased for the fourth consecutive year. These numbers reflect a genuine transformation in how we operate - not a marketing exercise.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&h=600&fit=crop",
    },
    {
      number: "05",
      title: "Future Generations",
      content:
        "The true measure of our leadership will not be found in this year's production figures or share price. It will be found in the condition of the land we mine, the strength of the communities we touch, and the caliber of the leaders we develop to carry this enterprise forward.\n\nWe are building a company that the next generation of mining professionals will be proud to join - one that combines commercial ambition with genuine stewardship, technical excellence with human compassion, and global reach with local accountability. This is the legacy we intend to leave.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&h=600&fit=crop",
    },
  ];

  const values = [
    "Integrity",
    "Safety",
    "Innovation",
    "Stewardship",
    "Trust",
    "Responsibility",
  ];

  const timelineItems = [
    {
      era: "Past",
      year: "1968–2000",
      title: "Foundation",
      description:
        "From a single mine in Western Australia to a regional mining enterprise, the foundations were laid through disciplined exploration, prudent capital management, and an unwavering commitment to safety that would define the company's culture for decades to come.",
    },
    {
      era: "Present",
      year: "2000–2024",
      title: "Transformation",
      description:
        "A period of unprecedented growth and evolution - expanding across four continents, embracing digital transformation, committing to net-zero emissions, and redefining the relationship between mining and the communities in which we operate.",
    },
    {
      era: "Future",
      year: "2025–Beyond",
      title: "Legacy",
      description:
        "The next chapter will be defined by the choices we make today - investments in clean energy, circular economy principles, biodiversity restoration, and the development of leaders who understand that mining's greatest resource is not beneath the ground, but within our people.",
    },
  ];

  const { ref: timelineRef, progress: timelineProgress } = useScrollProgress();


  return (
    <div
      className="bg-white min-h-screen"
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 z-50 w-full h-[2px] bg-slate-100">
        <div
          className="h-full bg-gray-900 transition-all duration-150"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>

      {/* Subtle navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-500">
        <div
          className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between"
          style={{
            opacity: scrollY > 100 ? 1 : 0,
            transform: scrollY > 100 ? "none" : "translateY(-10px)",
            transition: "all 0.5s ease",
          }}
        >
          <div className="bg-white/80 backdrop-blur-md rounded-full px-5 py-2.5 shadow-sm border border-slate-200/80">
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400">
              Leadership Vision
            </span>
          </div>
        </div>
      </nav>

      {/* ━━━ 2. The Chairperson ━━━ */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5 lg:col-start-1">
              <FadeIn direction="left">
                <div className="relative">
                  <div
                    className="relative overflow-hidden rounded-sm w-full aspect-[3/4]"
                    style={{
                      transform: `scale(${1 + Math.max(0, Math.min(0.05, (scrollY - windowHeight * 0.5) * 0.00005))})`,
                      transition: "transform 0.1s linear",
                    }}
                  >
                    <Image
                      src="/Raj Sir Photo.webp"
                      alt="Mr. Raj Talreja"
                      fill
                      className="object-cover"
                      style={{
                        filter: "grayscale(15%) contrast(1.02)",
                      }}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-gray-200/50 rounded-sm -z-10" />
                  <div className="absolute -top-6 -left-6 w-24 h-24 border border-slate-200/50 rounded-sm -z-10" />
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.2}>
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-6">
                  The Chairperson
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-slate-900 leading-[1.1] mb-2 tracking-tight font-serif font-normal"
                  
                >
                  Mr. Raj
                </h2>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-slate-900 leading-[1.1] mb-6 tracking-tight font-serif font-normal"
                  
                >
                  Talreja
                </h2>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-10">
                  Chairperson of the Board
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal mb-10">
                  For years, Mr. Talreja has navigated the
                  complexities of global resource development with a singular
                  conviction: that mining, done right, has the power to uplift
                  nations, sustain communities, and build the material
                  foundations of human progress. His tenure as Chairperson has
                  been defined not by volume, but by values.
                </p>
              </FadeIn>
              <FadeIn delay={0.6}>
                <div className="border-t border-slate-200 pt-8">
                  <svg
                    viewBox="0 0 200 60"
                    className="w-40 text-gray-800"
                    style={{
                      fontFamily: "'Brush Script MT', cursive",
                    }}
                  >
                    <text
                      x="10"
                      y="40"
                      fontSize="28"
                      fill="currentColor"
                      style={{
                        fontFamily:
                          "'Brush Script MT', 'Segoe Script', cursive",
                      }}
                    >
                      R. Talreja
                    </text>
                    <line
                      x1="10"
                      y1="48"
                      x2="170"
                      y2="48"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  </svg>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 3. Vision Narrative - Chapters ━━━ */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20 md:mb-32">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-4">
              Vision Narrative
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em] text-slate-900 leading-[1.1] tracking-tight font-serif font-normal"
              
            >
              A message in five chapters
            </h2>
          </FadeIn>
        </div>

        {chapters.map((chapter, i) => (
          <div key={i} className="mb-32 md:mb-48 last:mb-0">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start ${
                  i % 2 === 1 ? "direction-rtl" : ""
                }`}
              >
                <div
                  className={`lg:col-span-5 ${i % 2 === 1 ? "lg:col-start-8 lg:order-2" : "lg:order-1"}`}
                >
                  <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
                    <div className="relative overflow-hidden rounded-sm w-full aspect-[4/3]">
                      <Image
                        src={chapter.image}
                        alt={chapter.title}
                        fill
                        className="object-cover"
                        style={{
                          filter: "grayscale(20%) contrast(1.05)",
                        }}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </FadeIn>
                </div>

                <div
                  className={`lg:col-span-6 ${i % 2 === 1 ? "lg:col-start-1 lg:order-1" : "lg:col-start-7 lg:order-2"}`}
                >
                  <FadeIn
                    delay={0.1}
                    direction={i % 2 === 0 ? "right" : "left"}
                  >
                    <div className="mb-6">
                      <span
                        className="text-6xl md:text-7xl font-extrabold text-slate-200 block leading-none"
                        
                      >
                        {chapter.number}
                      </span>
                    </div>
                  </FadeIn>
                  <FadeIn
                    delay={0.2}
                    direction={i % 2 === 0 ? "right" : "left"}
                  >
                    <h3
                      className="text-2xl lg:text-3xl font-bold tracking-[-0.02em] text-slate-900 mb-8 tracking-tight"
                      
                    >
                      {chapter.title}
                    </h3>
                  </FadeIn>
                  <FadeIn
                    delay={0.3}
                    direction={i % 2 === 0 ? "right" : "left"}
                  >
                    <div className="space-y-5">
                      {chapter.content.split("\n\n").map((para, j) => (
                        <p
                          key={j}
                          className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ━━━ 4. Values In Motion ━━━ */}
      <section className="py-24 md:py-40 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-16 text-center">
              Our Values
            </p>
          </FadeIn>
          <div className="space-y-2 md:space-y-4">
            {values.map((value, i) => (
              <ValueWord key={value} word={value} index={i} />
            ))}
          </div>
        </div>

        <style>{`
          .bg-slate-950 span {
            color: #e5e5e5 !important;
          }
          .bg-slate-950 p {
            color: #737373 !important;
          }
        `}</style>
      </section>

      {/* ━━━ 5. Legacy Section ━━━ */}
      <section
        ref={timelineRef}
        className="py-24 md:py-40 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-4">
              Legacy
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em] text-slate-900 leading-[1.1] tracking-tight mb-20 md:mb-32 font-serif font-normal"
              
            >
              Past, present, and the future
              <br />
              we are building
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block">
              <div
                className="w-full bg-gray-900 transition-all duration-300"
                style={{
                  height: `${Math.min(100, timelineProgress * 150)}%`,
                }}
              />
            </div>
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 md:hidden">
              <div
                className="w-full bg-gray-900 transition-all duration-300"
                style={{
                  height: `${Math.min(100, timelineProgress * 150)}%`,
                }}
              />
            </div>

            <div className="space-y-24 md:space-y-32">
              {timelineItems.map((item, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div
                    className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pl-12 md:pl-0`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full border-2 border-gray-900 bg-white -translate-x-1/2 z-10" />

                    <div
                      className={`${i % 2 === 0 ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"}`}
                    >
                      <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 block mb-2">
                        {item.era}
                      </span>
                      <span
                        className="text-sm text-slate-500 leading-relaxed font-normal block mb-4"
                      >
                        {item.year}
                      </span>
                      <h3
                        className="text-2xl lg:text-3xl font-bold tracking-[-0.02em] text-slate-900 mb-4 tracking-tight"
                        
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 6. Letter to Stakeholders ━━━ */}
      <section className="py-24 md:py-40 bg-stone-50/50">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-16 text-center">
              Letter to Stakeholders
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-7">
              <p
                className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal"
                
              >
                Dear Shareholders, Partners, and Friends,
              </p>

              <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal">
                As I reflect upon the past year, I am struck by the
                extraordinary resilience and determination demonstrated across
                every level of our organization. In a year marked by geopolitical
                uncertainty, shifting commodity markets, and evolving societal
                expectations, our teams have delivered results that speak to the
                strength of our strategy and the depth of our collective
                commitment.
              </p>

              <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal">
                We produced record volumes across our key commodities while
                simultaneously achieving our lowest-ever injury frequency rate.
                This is not coincidence - it is the fruit of a culture that
                refuses to accept a trade-off between productivity and safety,
                between ambition and responsibility.
              </p>

              <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal">
                Our financial performance has been robust, with revenue exceeding
                projections and free cash flow enabling both disciplined capital
                returns and continued investment in growth. We have maintained a
                strong balance sheet, providing us with the flexibility to pursue
                opportunities while honoring our commitments to all stakeholders.
              </p>

              <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal">
                But numbers alone do not tell our story. This year, we launched
                our most ambitious community investment program to date,
                partnering with local governments and organizations to improve
                education, healthcare, and economic opportunity in the regions
                where we operate. We published our first comprehensive climate
                transition plan, setting out a credible pathway to net-zero
                emissions that is both ambitious and achievable.
              </p>

              <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal">
                I want to express my personal gratitude to every member of our
                organization - from the engineers who design our mines to the
                operators who run them, from the scientists who protect our
                environments to the leaders who inspire our teams. Your work
                matters. It matters to the shareholders who entrust us with their
                capital, to the communities who share their land with us, and to
                the world that depends on the materials we produce.
              </p>

              <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal">
                Looking ahead, I am confident that we are well positioned for the
                challenges and opportunities that lie before us. The global
                transition to clean energy will require vast quantities of the
                minerals we produce, and we are committed to meeting that demand
                responsibly, sustainably, and with the highest standards of
                integrity.
              </p>

              <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal">
                Thank you for your continued trust and partnership.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-16 pt-10 border-t border-gray-200/60">
              <svg
                viewBox="0 0 220 65"
                className="w-44 text-gray-800 mb-6"
              >
                <text
                  x="10"
                  y="42"
                  fontSize="30"
                  fill="currentColor"
                  style={{
                    fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
                  }}
                >
                  R. Talreja
                </text>
                <line
                  x1="10"
                  y1="50"
                  x2="190"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
              </svg>
              <p className="text-sm text-slate-900 font-medium">
                Mr. Raj Talreja
              </p>
              <p className="text-sm text-slate-500 leading-relaxed font-normal mt-0.5">
                Chairperson of the Board
              </p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-slate-400 mt-3">
                June 2026
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━ 7. Closing Statement ━━━ */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.1] leading-tight tracking-tight mb-8"
              
            >
              &ldquo;Our responsibility extends far beyond
              <br className="hidden md:block" /> today&apos;s production targets.&rdquo;
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-8" />
          </FadeIn>

          <FadeIn delay={0.6}>
            <p
              className="text-xl md:text-2xl font-bold tracking-[-0.02em] text-slate-500 leading-tight tracking-tight"
              
            >
              We build resources for generations.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.8} className="absolute bottom-16">
          <div className="text-center">
            <div className="w-px h-12 bg-slate-200 mx-auto mb-4" />
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400">
              Chairperson&apos;s Message 2026
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-slate-400">
            © 2026 SKT Global Mining & Services Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <button className="text-xs text-gray-400 hover:text-gray-700 transition-colors font-light">
              Annual Report
            </button>
            <button className="text-xs text-gray-400 hover:text-gray-700 transition-colors font-light">
              Our Leadership
            </button>
            <button className="text-xs text-gray-400 hover:text-gray-700 transition-colors font-light">
              Sustainability
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
