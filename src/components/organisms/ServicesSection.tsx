"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { SERVICES } from "@/lib/constants";
import { containerVariants, itemVariants } from "@/lib/animations";

export function ServicesSection(): JSX.Element {
  return (
    <section
      id="services"
      className="py-section bg-neutral-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="dot" className="mb-6">
                What We Do
              </Badge>
            </motion.div>

            <motion.h2
              id="services-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-lg font-black text-neutral-900 tracking-tight leading-none"
            >
              Our Core
              <br />
              <span className="text-neutral-300">Capabilities</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              variant="outline"
              size="md"
              rightIcon={<ArrowRight size={14} />}
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-neutral-200"
        >
          {SERVICES.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard
                service={service}
                index={index}
                className={`h-full border-0 border-r border-b border-neutral-200 ${
                  (index + 1) % 3 === 0 ? "border-r-0" : ""
                } ${index >= SERVICES.length - 3 ? "border-b-0" : ""}`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 md:p-12 border border-neutral-200 bg-white"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Need a Custom Solution?
              </h3>
              <p className="text-sm text-neutral-500 max-w-lg">
                Every mining project is unique. Our engineering team works with
                you to design tailored solutions that maximize efficiency while
                minimizing environmental impact.
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="flex-shrink-0"
              rightIcon={<ArrowRight size={16} />}
            >
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
