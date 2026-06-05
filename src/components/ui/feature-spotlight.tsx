"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/atoms/Button";

// Interface for component props remains the same for easy integration.
interface AnimatedFeatureSpotlightProps extends React.HTMLAttributes<HTMLElement> {
  preheaderIcon?: React.ReactNode;
  preheaderText: string;
  heading: React.ReactNode;
  description: string;
  buttonText: string;
  buttonProps?: Omit<ButtonProps, "children">;
  imageUrl: string;
  imageAlt?: string;
  reverse?: boolean;
}

const AnimatedFeatureSpotlight = React.forwardRef<HTMLElement, AnimatedFeatureSpotlightProps>(
  (
    {
      className,
      preheaderIcon,
      preheaderText,
      heading,
      description,
      buttonText,
      buttonProps,
      imageUrl,
      imageAlt = "Feature illustration",
      reverse = false,
      ...props
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Custom premium easeOut
        },
      },
    };

    const imageVariants = {
      hidden: { opacity: 0, scale: 0.95, y: 15 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        },
      },
    };

    return (
      <section
        ref={ref}
        className={cn(
          "w-full max-w-6xl mx-auto p-8 md:p-12 rounded-2xl bg-white border border-neutral-200/80 overflow-hidden relative shadow-sm",
          className
        )}
        aria-labelledby="feature-spotlight-heading"
        {...props}
      >
        {/* Subtle decorative grid background for premium aesthetics */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-neutral-100 blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-neutral-100 blur-3xl opacity-50 pointer-events-none" />

        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
        >
          {/* Text Column */}
          <div
            className={cn(
              "flex flex-col space-y-6 text-center md:text-left items-center md:items-start",
              reverse ? "md:order-last" : ""
            )}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-2 text-sm font-semibold text-neutral-500 uppercase tracking-wider"
            >
              {preheaderIcon && <span className="text-neutral-400">{preheaderIcon}</span>}
              <span>{preheaderText}</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              id="feature-spotlight-heading"
              className="text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight text-balance"
            >
              {heading}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-500 leading-relaxed font-normal"
            >
              {description}
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button size="lg" className="shadow-md" {...buttonProps}>
                {buttonText}
              </Button>
            </motion.div>
          </div>

          {/* Visual Column */}
          <motion.div
            variants={imageVariants}
            className="relative w-full min-h-[300px] md:min-h-[380px] flex items-center justify-center rounded-xl bg-neutral-50 border border-neutral-100/50 p-6 overflow-hidden shadow-inner"
          >
            {/* Subtle background glow behind the image */}
            <div className="absolute w-48 h-48 rounded-full bg-neutral-200/50 blur-3xl" />
            
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={500}
              height={500}
              className="w-full h-auto max-w-md object-cover rounded-lg shadow-lg border border-neutral-200/60 transform transition-transform duration-500 hover:scale-105 animate-float relative z-10"
            />
          </motion.div>
        </motion.div>
      </section>
    );
  }
);
AnimatedFeatureSpotlight.displayName = "AnimatedFeatureSpotlight";

export { AnimatedFeatureSpotlight };
