"use client";

import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/atoms/Badge";
import { Target, Gem, Bus, Home, Utensils, HeartPulse, GraduationCap, Users2, Trophy } from "lucide-react";

const BENEFITS = [
  {
    icon: Target,
    title: "Attendance Incentive",
    description: "Rewarding consistent commitment and shift punctuality with standard monthly operational bonuses.",
  },
  {
    icon: Gem,
    title: "Retention Bonus Scheme",
    description: "Compounding financial growth increments aligned with career milestones and service tenure.",
  },
  {
    icon: Bus,
    title: "Dedicated Shuttle Transport",
    description: "Daily transportation logistics networks connecting primary operations to major regional centers.",
  },
  {
    icon: Home,
    title: "Modern Site Accommodation",
    description: "High-spec modern accommodations built to premium safety standards for onsite shifts.",
  },
  {
    icon: Utensils,
    title: "Premium Catered Dining",
    description: "Nutrient-balanced meal provisions managed daily by professional catering teams.",
  },
  {
    icon: HeartPulse,
    title: "Full Medical & Wellness Coverage",
    description: "Rigorous healthcare infrastructure including emergency evacuation and operational clinical support.",
  },
  {
    icon: GraduationCap,
    title: "Educational Bursaries",
    description: "Financial sponsorships for advanced certifications, geological degrees, and global skill courses.",
  },
  {
    icon: Users2,
    title: "Family Wellbeing Support",
    description: "Extending medical benefits and community training programs to support your direct dependents.",
  },
  {
    icon: Trophy,
    title: "Performance Recognitions",
    description: "Regular honors for teams demonstrating exceptional safety compliance and quality metrics.",
  },
] as const;

export function BenefitsSection(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-neutral-200/60">
      {/* Blueprint elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-neutral-200" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <Badge variant="dot" className="mb-5 justify-center">
            Comprehensive Care
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-none mb-6">
            Invested in Your <br />
            Total <span className="text-neutral-300">Wellbeing.</span>
          </h2>
          
          <p className="text-base text-neutral-500 max-w-xl leading-relaxed mx-auto">
            We support our workforce inside and outside operations. Our benefits ensure comfort,
            financial longevity, and standard medical security.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BENEFITS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-neutral-50 hover:bg-white border border-neutral-200/60 hover:border-neutral-900 p-8 rounded-2xl transition-all duration-300 cursor-default"
                whileHover={{
                  y: -4,
                }}
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-neutral-200/80 mb-6 group-hover:bg-neutral-50 transition-colors">
                  <IconComp size={16} className="text-neutral-500 group-hover:text-neutral-900" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-neutral-900 mb-2 tracking-tight group-hover:text-neutral-950">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlight line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-transparent group-hover:bg-neutral-900 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
