"use client";

import { JSX } from "react";
import { motion } from "framer-motion";
import {
  Mountain,
  Layers,
  Cog,
  Truck,
  Shield,
  Leaf,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";
import { cardHover } from "@/lib/animations";

interface ServiceCardProps {
  readonly service: Service;
  readonly index: number;
  readonly className?: string;
}

const IconMap = {
  Mountain,
  Layers,
  Cog,
  Truck,
  Shield,
  Leaf,
} as const;

type IconName = keyof typeof IconMap;

function isValidIcon(name: string): name is IconName {
  return name in IconMap;
}

export function ServiceCard({
  service,
  index,
  className,
}: ServiceCardProps): JSX.Element {
  const IconComponent = isValidIcon(service.icon)
    ? IconMap[service.icon]
    : Cog;

  return (
    <motion.article
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className={cn(
        "group relative p-8 border border-neutral-200",
        "bg-white transition-all duration-300",
        "cursor-default",
        className
      )}
    >
      {/* Index number */}
      <span className="absolute top-6 right-8 text-6xl font-bold text-neutral-100 select-none pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="relative z-10 w-12 h-12 flex items-center justify-center mb-6 border border-neutral-200">
        <IconComponent
          size={20}
          className="text-neutral-700 group-hover:text-neutral-900 transition-colors duration-200"
          strokeWidth={1.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight">
          {service.title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs text-neutral-500"
            >
              <span className="w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <ArrowUpRight size={16} className="text-neutral-400" />
      </div>

      {/* Bottom border animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-neutral-900"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.article>
  );
}
