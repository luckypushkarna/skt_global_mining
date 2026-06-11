"use client";

import { notFound, useParams } from "next/navigation";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CARDS } from "@/lib/servicesData";
import {
  Wrench, Package, Truck, Shield, Network, Monitor,
  Users, Settings, TrendingUp, ShieldCheck, Building2, Globe,
  ArrowLeft, ArrowRight,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Wrench, Package, Truck, Shield, Network, Monitor,
  Users, Settings, TrendingUp, ShieldCheck, Building2, Globe,
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";

  const card = CARDS.find((c) => c.slug === slug);
  if (!card) notFound();

  const Icon = ICON_MAP[card.iconName] ?? Wrench;

  // Adjacent cards for prev/next navigation
  const currentIndex = CARDS.findIndex((c) => c.slug === slug);
  const prev = CARDS[currentIndex - 1] ?? null;
  const next = CARDS[currentIndex + 1] ?? null;

  // Subtle parallax on the hero image
  const heroRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    let active = true;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!active) return;
          if (heroRef.current) {
            const scrollY = window.scrollY;
            heroRef.current.style.transform = `translate3d(0, ${scrollY * 0.25}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      active = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-[400px] md:min-h-[480px] overflow-hidden bg-skt-navy">
        {/* Parallax BG */}
        <Image
          src={card.bgImage}
          alt={card.title}
          fill
          sizes="100vw"
          className="object-cover will-change-transform"
          priority
          ref={heroRef}
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" style={{ zIndex: 1 }} />

        {/* Back link */}
        <div className="absolute top-28 left-0 right-0 max-w-screen-xl mx-auto px-6 lg:px-12" style={{ zIndex: 2 }}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            <ArrowLeft size={14} />
            All Capabilities
          </Link>
        </div>

        {/* Hero copy */}
        <div className="absolute inset-x-0 bottom-0 max-w-screen-xl mx-auto px-6 lg:px-12 pb-14" style={{ zIndex: 2 }}>
          {/* Card number + tags */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold text-white/40 tracking-[0.2em]">
              {card.num} / 12
            </span>
            <span className="w-px h-3 bg-white/20" />
            {card.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                style={{ fontSize: "10px", letterSpacing: "0.08em" }}
                className="font-semibold uppercase px-2.5 py-1 rounded-full text-neutral-200 bg-white/10 border border-white/10 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
              <Icon size={22} className="text-white" strokeWidth={1.5} />
            </div>
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-[-0.03em] leading-none text-white"
            >
              {card.title}
            </h1>
          </div>

          {/* Short desc */}
          <p className="text-neutral-300 text-lg max-w-xl leading-relaxed">
            {card.desc}
          </p>
        </div>
      </section>

      {/* ── Detail Content - Brief animated reveal ── */}
      <section
        className="max-w-screen-xl mx-auto px-6 lg:px-12 py-20 animate-[fadeSlideUp_0.6s_ease-out_forwards]"
        style={{ opacity: 0, animationDelay: "0.1s" }}
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Main detail copy */}
          <div className="flex-1">
            <p className="text-xs font-bold tracking-[0.28em] text-neutral-400 uppercase mb-6">
              Overview
            </p>
            <p
              className="text-base sm:text-[18px] leading-relaxed sm:leading-[1.75] text-neutral-700 max-w-2xl"
            >
              {card.detail}
            </p>
          </div>

          {/* Sidebar facts */}
          <div className="w-full lg:w-[380px] space-y-5 lg:space-y-6">
            <div className="rounded-2xl border border-neutral-100 p-6">
              <p className="text-xs font-bold tracking-[0.28em] text-neutral-400 uppercase mb-4">
                Key Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ fontSize: "11px", letterSpacing: "0.08em" }}
                    className="font-semibold uppercase px-3 py-1.5 rounded-full text-neutral-600 bg-neutral-50 border border-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-100 p-6">
              <p className="text-xs font-bold tracking-[0.28em] text-neutral-400 uppercase mb-3">
                Capability
              </p>
              <p className="text-4xl font-black text-neutral-900 tracking-tight">
                {card.num}
                <span className="text-neutral-200"> / 12</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prev / Next navigation ── */}
      <section className="border-t border-neutral-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
          {prev ? (
            <Link
              href={`/services/${prev.slug}`}
              className="group flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              <span>
                <span style={{ fontSize: "10px", letterSpacing: "0.1em" }} className="block uppercase font-bold text-neutral-300 mb-0.5">
                  Previous
                </span>
                <span className="text-[14px] sm:text-[16px] font-semibold">{prev.title}</span>
              </span>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}

          <Link
            href="/services"
            style={{ fontSize: "12px", letterSpacing: "0.1em" }}
            className="font-bold uppercase text-neutral-400 hover:text-neutral-900 transition-colors duration-300"
          >
            All Capabilities
          </Link>

          {next ? (
            <Link
              href={`/services/${next.slug}`}
              className="group flex items-center gap-2 sm:gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 text-right w-full sm:w-auto justify-end"
            >
              <span>
                <span style={{ fontSize: "10px", letterSpacing: "0.1em" }} className="block uppercase font-bold text-neutral-300 mb-0.5">
                  Next
                </span>
                <span className="text-[14px] sm:text-[16px] font-semibold">{next.title}</span>
              </span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}
        </div>
      </section>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
