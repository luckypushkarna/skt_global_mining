"use client";

import { JSX } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, LucideIcon } from "lucide-react";
import { Badge } from "@/components/atoms/Badge";
import { ContactForm } from "@/components/molecules/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const CONTACT_INFO: readonly ContactItem[] = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: SITE_CONFIG.address,
    href: "https://maps.google.com",
  },
];


export function ContactSection(): JSX.Element {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 bg-bg-tint"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="dot" className="mb-6">
              Get In Touch
            </Badge>
          </motion.div>

          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.1]"
          >
            Let&apos;s Build
            <br />
            <span className="text-neutral-300">Something Together</span>
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="text-[15px] md:text-base text-neutral-600 font-light leading-relaxed">
                Whether you&apos;re looking to partner on a large-scale mining
                project, need specialized industrial services, or want to explore
                career opportunities—we&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-neutral-200 group-hover:border-neutral-400 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                      <Icon size={14} className="text-neutral-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.15em] text-neutral-500 uppercase mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("https") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("https")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block hover:opacity-80 transition-opacity duration-200"
                    suppressHydrationWarning
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Countries */}
            <div className="pt-8 border-t border-neutral-200">
              <p className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-4">
                Our Presence
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Kitwe",
                  "Mufulira",
                  "Chingola",
                  "Konkola",
                  "Solwezi",
                ].map((location) => (
                  <span
                    key={location}
                    className="px-3 py-1 text-xs border border-neutral-200 text-neutral-500 rounded-full bg-white"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 md:p-8 hover:border-neutral-300 transition-colors duration-300">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
