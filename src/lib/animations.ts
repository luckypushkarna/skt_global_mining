import type { Variants } from "framer-motion";

// ─── Easing Curves ────────────────────────────────────────────────────────────
export const EASINGS = {
  expoOut: [0.16, 1, 0.3, 1] as [number, number, number, number],
  expoIn: [0.7, 0, 0.84, 0] as [number, number, number, number],
  circOut: [0, 0.55, 0.45, 1] as [number, number, number, number],
  spring: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  smooth: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
} as const;

// ─── Transitions ─────────────────────────────────────────────────────────────
export const TRANSITIONS: Record<string, any> = {
  default: { duration: 0.6, ease: EASINGS.expoOut },
  slow: { duration: 1.2, ease: EASINGS.expoOut },
  fast: { duration: 0.3, ease: EASINGS.smooth },
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 1,
  },
  springBouncy: {
    type: "spring",
    stiffness: 400,
    damping: 20,
    mass: 0.8,
  },
  stagger: {
    duration: 0.6,
    ease: EASINGS.expoOut,
    staggerChildren: 0.1,
    delayChildren: 0.2,
  },
} as const;

// ─── Variant Factories ────────────────────────────────────────────────────────
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: TRANSITIONS.default,
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: TRANSITIONS.slow,
  },
};

export const fadeLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: TRANSITIONS.default,
  },
};

export const fadeRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: TRANSITIONS.default,
  },
};

export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITIONS.spring,
  },
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: TRANSITIONS.default,
  },
};

export const textRevealVariants: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.8,
      ease: EASINGS.expoOut,
    },
  },
};

export const lineVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: EASINGS.expoOut,
    },
  },
};

export const countVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITIONS.springBouncy,
  },
};

// ─── Hover Interactions ───────────────────────────────────────────────────────
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: "0px 20px 60px rgba(0,0,0,0.08)",
    transition: TRANSITIONS.spring as any,
  },
};

export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: TRANSITIONS.spring as any,
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 } as any,
  },
};

export const iconHover: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: 5,
    scale: 1.1,
    transition: TRANSITIONS.spring as any,
  },
};

// ─── Page Transitions ─────────────────────────────────────────────────────────
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASINGS.expoOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: EASINGS.expoIn,
    },
  },
};

// ─── Loading Sequence ─────────────────────────────────────────────────────────
export const loaderVariants: Variants = {
  initial: { scaleX: 0, originX: 0 },
  animate: {
    scaleX: 1,
    transition: {
      duration: 1.5,
      ease: EASINGS.expoOut,
    },
  },
  exit: {
    scaleX: 0,
    originX: 1,
    transition: {
      duration: 0.6,
      ease: EASINGS.expoIn,
    },
  },
};
