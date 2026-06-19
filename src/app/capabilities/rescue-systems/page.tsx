"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getCapabilityBySlug,
  getAdjacentCapabilities,
  getCapabilityGallery,
} from "@/data/capabilities";

export default function RescueSystemsPage() {
  const capability = getCapabilityBySlug("rescue-systems");
  if (!capability) return null;

  const { prev, next } = getAdjacentCapabilities("rescue-systems");
  const Icon = capability.icon;
  const gallery = getCapabilityGallery("rescue-systems");

  const heroImage = capability.bgImage;
  const visualOne = gallery[0] ?? {
    src: capability.bgImage,
    caption: "Emergency response readiness",
  };
  const visualTwo = gallery[1] ?? {
    src: capability.bgImage,
    caption: "Specialist equipment in deployment",
  };
  const visualThree = gallery[2] ?? {
    src: capability.bgImage,
    caption: "Underground and surface coordination",
  };

  const focusItems = [
    "Emergency Readiness",
    "Field Coordination",
    "Specialist Equipment",
    "Rapid Response",
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Top Link */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 pt-10 md:pt-14">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-neutral-400 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft size={14} />
          All Capabilities
        </Link>
      </section>

      {/* Hero */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          {/* Left */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center">
                  <Icon size={18} className="text-neutral-700" strokeWidth={1.7} />
                </div>
                <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-neutral-400">
                  Capability {capability.num} / 12
                </span>
              </div>

              <h1
                className="text-[38px] md:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.05em] text-neutral-950 mb-5 font-serif font-normal"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Rescue Systems
              </h1>

              <p className="text-sm md:text-base text-neutral-500 leading-7 max-w-xl mb-8">
                Critical response systems designed to support safe, fast, and
                coordinated action in high-risk operating environments.
              </p>

              <div className="flex flex-wrap gap-2">
                {capability.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-neutral-500 border border-neutral-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative overflow-hidden rounded-[24px] bg-neutral-100"
            >
              <div className="relative aspect-[16/10] md:aspect-[16/8]">
                <Image
                  src={heroImage}
                  alt="Rescue Systems"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-[10px] font-semibold tracking-[0.3em] text-neutral-400 uppercase">
              Overview
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-7"
          >
            <p
              className="text-xl md:text-3xl leading-[1.6] tracking-[-0.02em] text-neutral-800 max-w-4xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Rescue capability brings together trained teams, specialist
              equipment, and clear procedures to protect people when conditions
              become critical.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex items-end"
          >
            <div className="text-left lg:text-right w-full">
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-2">
                Index
              </p>
              <p className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
                {capability.num}
                <span className="text-neutral-300 font-light"> / 12</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 py-6 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6 }}
          className="rounded-[28px] border border-neutral-200 bg-neutral-50/70 px-6 md:px-10 py-8 md:py-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] text-neutral-400 uppercase mb-3">
                Core Focus
              </p>
              <h2
                className="text-2xl md:text-4xl leading-[1.08] tracking-[-0.04em] text-neutral-950 font-serif font-normal"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Prepared for the moments
                <br className="hidden md:block" /> that matter most
              </h2>
            </div>

            <p className="text-sm md:text-[15px] leading-7 text-neutral-500 max-w-xl">
              Short, practical, and operational - built around readiness and
              response.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {focusItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-5"
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className="text-lg md:text-xl tracking-[-0.02em] text-neutral-900"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Visual Pair */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <div className="overflow-hidden rounded-[22px] bg-neutral-100">
              <div className="relative aspect-[16/10] md:aspect-[16/9]">
                <Image
                  src={visualOne.src}
                  alt={visualOne.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-neutral-400">
              {visualOne.caption}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:col-span-5"
          >
            <div className="overflow-hidden rounded-[22px] bg-neutral-100">
              <div className="relative aspect-[4/5] md:aspect-[4/4.6]">
                <Image
                  src={visualTwo.src}
                  alt={visualTwo.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-neutral-400">
              {visualTwo.caption}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Width Visual */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 py-4 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-[28px] bg-neutral-100"
        >
          <div className="relative aspect-[16/8] md:aspect-[16/7]">
            <Image
              src={visualThree.src}
              alt={visualThree.caption}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-neutral-400">
          {visualThree.caption}
        </p>
      </section>

      {/* Closing Line */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6 }}
          className="border-t border-neutral-200 pt-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                Capability Note
              </p>
            </div>
            <div className="lg:col-span-9">
              <p
                className="text-2xl md:text-4xl leading-[1.3] tracking-[-0.03em] text-neutral-900 max-w-4xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Quietly critical. Always ready.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Navigation Footer */}
      <section className="border-t border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-10 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div className="flex justify-start">
              {prev ? (
                <Link
                  href={prev.href || `/capabilities/${prev.slug}`}
                  className="group inline-flex items-center gap-3"
                >
                  <ArrowLeft
                    size={16}
                    className="text-neutral-400 group-hover:text-neutral-900 group-hover:-translate-x-1 transition-all duration-300"
                  />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-1">
                      Previous
                    </p>
                    <p
                      className="text-sm text-neutral-900 group-hover:text-neutral-600 transition-colors"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {prev.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>

            <div className="flex justify-center">
              <Link
                href="/#services"
                className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                All Capabilities
              </Link>
            </div>

            <div className="flex justify-start sm:justify-end">
              {next ? (
                <Link
                  href={next.href || `/capabilities/${next.slug}`}
                  className="group inline-flex items-center gap-3 text-left sm:text-right"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-1">
                      Next
                    </p>
                    <p
                      className="text-sm text-neutral-900 group-hover:text-neutral-600 transition-colors"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {next.title}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
