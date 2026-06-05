"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// ═══════════════════════════════════════════════════════════
// ROOT
// ═══════════════════════════════════════════════════════════

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

// ═══════════════════════════════════════════════════════════
// TRIGGER (Refined — minimal style)
// ═══════════════════════════════════════════════════════════

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "group inline-flex items-center justify-center px-3 py-2",
        "text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors",
        "data-[state=open]:text-slate-900",
        "rounded-lg outline-none",
        "focus-visible:ring-2 focus-visible:ring-slate-300",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="ml-1 size-3 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-slate-700"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

// ═══════════════════════════════════════════════════════════
// CONTENT
// ═══════════════════════════════════════════════════════════

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out",
        "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out",
        "data-[motion=from-end]:slide-in-from-right-4 data-[motion=from-start]:slide-in-from-left-4",
        "data-[motion=to-end]:slide-out-to-right-4 data-[motion=to-start]:slide-out-to-left-4",
        "top-0 left-0 w-full md:absolute md:w-auto",
        className
      )}
      {...props}
    />
  );
}

// ═══════════════════════════════════════════════════════════
// VIEWPORT (The dropdown panel)
// ═══════════════════════════════════════════════════════════

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="fixed top-16 left-0 right-0 w-screen isolate z-50 pointer-events-none">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "w-full bg-white border-b border-slate-200 shadow-sm pointer-events-auto",
          "h-[var(--radix-navigation-menu-viewport-height)]",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className
        )}
        {...props}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// LINK
// ═══════════════════════════════════════════════════════════

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "block rounded-lg transition-all outline-none",
        "hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-300",
        className
      )}
      {...props}
    />
  );
}

// ═══════════════════════════════════════════════════════════
// SIMPLE NAV LINK (No dropdown)
// ═══════════════════════════════════════════════════════════

function NavigationMenuSimpleLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-simple-link"
      className={cn(
        "inline-flex items-center justify-center px-3 py-2",
        "text-sm font-medium text-slate-700",
        "hover:text-slate-900 hover:bg-slate-50",
        "rounded-lg transition-all outline-none cursor-pointer",
        "focus-visible:ring-2 focus-visible:ring-slate-300",
        className
      )}
      {...props}
    />
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuSimpleLink,
  NavigationMenuViewport,
};
