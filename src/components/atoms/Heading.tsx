import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize =
  | "display-2xl"
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "xl"
  | "lg"
  | "md"
  | "sm";

interface HeadingProps {
  readonly as?: HeadingLevel;
  readonly size?: HeadingSize;
  readonly children: ReactNode;
  readonly className?: string;
  readonly serif?: boolean;
}

const sizeStyles: Record<HeadingSize, string> = {
  "display-2xl": "text-display-2xl",
  "display-xl": "text-display-xl",
  "display-lg": "text-display-lg",
  "display-md": "text-display-md",
  xl: "text-4xl md:text-5xl",
  lg: "text-3xl md:text-4xl",
  md: "text-2xl md:text-3xl",
  sm: "text-xl md:text-2xl",
};

export function Heading({
  as: Tag = "h2",
  size = "display-lg",
  children,
  className,
  serif = false,
}: HeadingProps): JSX.Element {
  return (
    <Tag
      className={cn(
        "font-bold tracking-tight text-neutral-900",
        sizeStyles[size],
        serif && "font-display",
        className
      )}
    >
      {children}
    </Tag>
  );
}
