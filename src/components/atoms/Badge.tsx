import { cn } from "@/lib/utils";
import { memo, type JSX, type ReactNode } from "react";

type BadgeVariant = "default" | "outline" | "muted" | "dot";

interface BadgeProps {
  readonly children: ReactNode;
  readonly variant?: BadgeVariant;
  readonly className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-skt-navy text-white",
  outline: "border border-neutral-900 text-neutral-900 bg-transparent",
  muted: "bg-neutral-100 text-neutral-600",
  dot: "bg-transparent text-neutral-600 pl-0",
};

export const Badge = memo(function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps): JSX.Element {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1",
        "text-xs font-semibold tracking-[0.2em] uppercase",
        variantStyles[variant],
        className
      )}
    >
      {variant === "dot" && (
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)] inline-block" />
      )}
      {children}
    </span>
  );
});

Badge.displayName = "Badge";
