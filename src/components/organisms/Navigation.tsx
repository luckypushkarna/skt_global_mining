"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon, ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuSimpleLink,
} from "@/components/ui/navigation-menu";
import {
  dropdownSections,
  simpleLinks,
  type NavSection,
  type NavItem,
} from "@/data/navigation";

// ═══════════════════════════════════════════════════════════
// MAIN NAVIGATION
// ═══════════════════════════════════════════════════════════

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = mobileOpen ? "hidden" : "";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-white transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled ? "border-b border-slate-200/80 shadow-sm" : "border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* ─── LOGO ─── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="SKT Global Mining — Home"
            >
              <Image
                src="/SKT Full logo (Color).png"
                alt="SKT Global Mining"
                width={150}
                height={38}
                className="h-8 w-auto object-contain transition-transform group-hover:scale-102"
                priority
              />
            </Link>

            {/* ─── DESKTOP NAV ─── */}
            <DesktopNav />

            {/* ─── RIGHT SIDE ─── */}
            <div className="flex items-center gap-2">
              {/* CTA Button (desktop) */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-skt-blue hover:bg-skt-blue-deep text-white text-sm font-medium transition-all shadow-sm hover:shadow-md hover:shadow-skt-blue/20"
              >
                Get in Touch
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Open menu"
              >
                <MenuIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>



      {/* ─── MOBILE DRAWER ─── */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// DESKTOP NAVIGATION
// ═══════════════════════════════════════════════════════════

function DesktopNav() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {dropdownSections.map((section) => (
          <NavigationMenuItem key={section.id}>
            <NavigationMenuTrigger>{section.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <DropdownPanel section={section} />
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}

        {/* Simple links */}
        {simpleLinks.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuSimpleLink asChild>
              <Link href={link.href}>{link.title}</Link>
            </NavigationMenuSimpleLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// ═══════════════════════════════════════════════════════════
// DROPDOWN PANEL (Full-Width Columns with Cards UI)
// ═══════════════════════════════════════════════════════════

function DropdownPanel({ section }: { section: NavSection }) {
  return (
    <div className="w-full bg-white py-3">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 grid grid-cols-12 gap-4 text-left">
        {/* LEFT: Featured cards */}
        <div className="col-span-6 space-y-1">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400 px-1.5 pb-0.5">
            Featured
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {section.featured?.map((item) => (
              <FeaturedCard key={item.href} item={item} />
            ))}
          </div>
        </div>

        {/* RIGHT: Quick links */}
        <div className="col-span-6 border-l border-slate-100 pl-4 space-y-1">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400 px-1.5 pb-0.5">
            Explore
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
            {section.links?.map((item) => (
              <QuickLink key={item.href} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Featured Card ───
function FeaturedCard({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <NavigationMenuLink asChild>
      <Link
        href={item.href}
        className="block p-1.5 rounded-md hover:bg-slate-50 transition-all group/card"
      >
        <div className="flex items-start gap-2">
          {Icon && (
            <div className="flex-shrink-0 w-7 h-7 rounded-md bg-gradient-to-br from-skt-blue/10 to-skt-blue/5 border border-skt-blue/10 flex items-center justify-center group-hover/card:from-skt-blue/15 group-hover/card:to-skt-blue/10 transition-colors">
              <Icon className="w-3.5 h-3.5 text-skt-blue" strokeWidth={1.75} />
            </div>
          )}
          <div className="flex-1 min-w-0 text-left">
            <p className="text-[12.5px] font-semibold text-slate-900 group-hover/card:text-skt-blue transition-colors leading-tight">
              {item.title}
            </p>
            {item.description && (
              <p className="text-[10.5px] text-slate-500 mt-0.5 leading-snug">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

// ─── Quick Link ───
function QuickLink({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <NavigationMenuLink asChild>
      <Link
        href={item.href}
        className="flex items-center gap-2 px-1.5 py-1 rounded-md hover:bg-slate-50 transition-colors group/link"
      >
        {Icon && (
          <Icon
            className="w-3 h-3 text-slate-400 group-hover/link:text-skt-blue transition-colors"
            strokeWidth={1.75}
          />
        )}
        <span className="text-[12px] font-medium text-slate-700 group-hover/link:text-slate-900 flex-1 text-left">
          {item.title}
        </span>
        <ArrowRightIcon className="w-2.5 h-2.5 text-slate-300 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
      </Link>
    </NavigationMenuLink>
  );
}

// ═══════════════════════════════════════════════════════════
// MOBILE NAVIGATION DRAWER
// ═══════════════════════════════════════════════════════════

function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expandedSection, setExpandedSection] = React.useState<string | null>(
    null
  );

  React.useEffect(() => {
    if (!open) setExpandedSection(null);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-white shadow-2xl lg:hidden overflow-hidden flex flex-col text-left"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <Image
                src="/SKT Full logo (Color).png"
                alt="SKT Global Mining"
                width={120}
                height={30}
                className="h-6 w-auto object-contain"
              />
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close menu"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-3 py-4">
              {/* Dropdown sections */}
              {dropdownSections.map((section) => {
                const isExpanded = expandedSection === section.id;
                return (
                  <div
                    key={section.id}
                    className="border-b border-slate-100 last:border-b-0"
                  >
                    <button
                      onClick={() =>
                        setExpandedSection(isExpanded ? null : section.id)
                      }
                      className="w-full flex items-center justify-between px-3 py-4 text-left"
                    >
                      <span className="text-base font-semibold text-slate-900">
                        {section.label}
                      </span>
                      <ChevronDownIcon
                        className={cn(
                          "w-4 h-4 text-slate-400 transition-transform",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-3 space-y-0.5 pl-4">
                            {[
                              ...(section.featured ?? []),
                              ...(section.links ?? []),
                            ].map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-50 transition-colors"
                              >
                                {item.icon && (
                                  <item.icon
                                    className="w-4 h-4 text-slate-400 flex-shrink-0"
                                    strokeWidth={1.75}
                                  />
                                )}
                                <span className="text-sm text-slate-700 flex-1">
                                  {item.title}
                                </span>
                                <ArrowRightIcon className="w-3 h-3 text-slate-300" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Simple links */}
              <div className="pt-4 mt-2 border-t border-slate-100">
                {simpleLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-3.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-base font-semibold text-slate-900">
                      {link.title}
                    </span>
                    <ArrowRightIcon className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Footer */}
            <div className="p-5 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-skt-blue hover:bg-skt-blue-deep text-white text-sm font-medium transition-all"
              >
                Get in Touch
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
