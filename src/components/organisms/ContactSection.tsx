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
      className="py-8 md:py-12 lg:py-16 bg-bg-tint overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 w-full">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="dot" className="mb-4">
              Get In Touch
            </Badge>
          </motion.div>

          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl text-neutral-900 tracking-tight leading-[1.1] font-serif font-normal"
          >
            Let&apos;s Build
            <br />
            <span className="text-neutral-300">Something Together</span>
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
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
                career opportunities-we&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4 md:space-y-5">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-neutral-200 group-hover:border-neutral-400 flex items-center justify-center flex-shrink-0 transition-colors duration-200 rounded-md bg-white">
                      <Icon size={16} className="text-neutral-500" />
                    </div>
                    {/* min-w-0 ensures flex child can shrink below its content size and properly break words */}
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold tracking-[0.15em] text-neutral-500 uppercase mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-neutral-600 leading-relaxed break-words break-all sm:break-normal">
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


          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-neutral-200/80 rounded-2xl p-4 sm:p-5 md:p-6 hover:border-neutral-300 transition-colors duration-300 w-full overflow-hidden">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
