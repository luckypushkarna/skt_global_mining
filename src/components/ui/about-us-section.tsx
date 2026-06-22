"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Wrench,
  Package,
  Truck,
  Network,
  Monitor,
  Users,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
  Award,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])


  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const services = [
    {
      icon: <Wrench className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-neutral-400" />,
      title: "Establishment",
      description:
        "SKT Global Mining & Services Limited began operations in Zambia as part of TTIPL’s strategic mining expansion, setting a new benchmark for engineering excellence.",
      position: "left",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-neutral-400" />,
      title: "Rapid Mobilisation",
      description:
        "Successfully mobilised 225 advanced underground mining machines backed by a strategic investment exceeding $50 million to ensure high-capacity output.",
      position: "left",
    },
    {
      icon: <Users className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-neutral-400" />,
      title: "Workforce Development",
      description:
        "Recruited and trained more than 1,500 Zambian employees supported by skilled international mining professionals, fostering a global-grade talent pool.",
      position: "left",
    },
    {
      icon: <Package className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-neutral-400" />,
      title: "Infrastructure Expansion",
      description:
        "Established state-of-the-art support facilities including modern maintenance workshops, high-capacity warehousing, catering, and safe transport hubs.",
      position: "right",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-neutral-400" />,
      title: "Mopani Operations",
      description:
        "Achieved approximately 50% of Mopani Copper Mines' development and production targets in record time through disciplined scheduling and operations.",
      position: "right",
    },
    {
      icon: <Network className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-neutral-400" />,
      title: "Future Expansion",
      description:
        "Expanding underground infrastructure, technical systems, and localized workforce capacity to support up to 90% of future regional mining activities.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Truck />, value: 225, label: "Underground Machines", suffix: "+" },
    { icon: <Users />, value: 1500, label: "Zambian Employees", suffix: "+" },
    { icon: <Award />, value: 50, label: "Initial Investment ($M)", suffix: "+" },
    { icon: <TrendingUp />, value: 50, label: "Mopani Targets Achieved", suffix: "%" },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-gradient-to-b from-neutral-50 to-white text-neutral-900 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-neutral-300/10 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-neutral-400/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-neutral-300"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-neutral-200"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-neutral-500 font-medium mb-2 flex items-center gap-2 tracking-[0.2em] text-xs uppercase"
            initial={{ opacity: 1, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            DISCOVER OUR STORY
          </motion.span>
          <h2 className="text-4xl md:text-5xl text-neutral-900 tracking-tight leading-none mb-4 text-center font-serif font-normal">About Us</h2>
          <motion.div
            className="w-24 h-1 bg-skt-navy"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-16 text-neutral-500 text-base leading-relaxed" variants={itemVariants}>
          We are a leading global mining and industrial services group delivering engineering excellence, safety leadership, and workforce capability to power uninterrupted deep-shaft copper production.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-xl overflow-hidden shadow-xl aspect-[0.7/1] relative bg-skt-navy"
                initial={{ scale: 0.9, opacity: 1 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <Image
                  src="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125466/skt_global_mining/Underground%20Workshop.webp"
                  alt="SKT Global Mining Operations"
                  fill
                  sizes="320px"
                  className="object-cover opacity-80"
                  priority
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Link href="/services">
                    <motion.button
                      className="bg-white text-neutral-900 px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold shadow-md active:scale-95 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Our Operations <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-neutral-300 rounded-xl -m-3 z-[-1]"
                initial={{ opacity: 1, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-neutral-200/50"
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-neutral-100"
                initial={{ opacity: 1, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              ></motion.div>

              {/* Additional decorative elements */}
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neutral-400"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-300"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-skt-navy text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 1, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold tracking-tight mb-2">Ready to partner with us?</h3>
            <p className="text-neutral-400">Let&apos;s build a safe, productive, and modern operational future together.</p>
          </div>
          <Link href="/contact">
            <motion.button
              className="bg-white hover:bg-neutral-100 text-neutral-900 px-6 py-3 rounded-lg flex items-center gap-2 font-semibold transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  variants: {
    hidden: { opacity: number; y?: number }
    visible: { opacity: number; y?: number; transition: { duration: number; ease: string } }
  }
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-neutral-900 bg-neutral-100 p-3 rounded-lg transition-colors duration-300 group-hover:bg-neutral-200 relative"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-neutral-500 leading-relaxed pl-12"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-12 flex items-center text-neutral-800 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-neutral-50/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-neutral-100/50 border border-neutral-200/50 transition-colors duration-300"
      variants={{
        hidden: { opacity: 1, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center mb-4 text-neutral-900 group-hover:bg-neutral-200 transition-colors duration-300 animate-none"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-black text-neutral-900 flex items-center tracking-tight">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-neutral-500 text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-skt-navy mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  )
}
