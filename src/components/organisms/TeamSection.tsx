"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Badge } from "@/components/atoms/Badge";
import { TEAM_MEMBERS } from "@/lib/constants";
import { containerVariants, itemVariants } from "@/lib/animations";

export function TeamSection(): JSX.Element {
  return (
    <section
      id="team"
      className="py-section bg-white"
      aria-labelledby="team-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="dot" className="mb-6">
              Leadership
            </Badge>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.h2
              id="team-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-lg font-black text-neutral-900 tracking-tight leading-none"
            >
              The Minds
              <br />
              <span className="text-neutral-300">Behind the Mission</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-neutral-500 leading-relaxed self-end max-w-lg"
            >
              Our leadership team brings together decades of global mining
              expertise, operational excellence, and a shared commitment to
              responsible resource development.
            </motion.p>
          </div>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-neutral-200"
        >
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className={`group p-8 border-r border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-300 ${
                (index + 1) % 4 === 0 ? "border-r-0" : ""
              } ${index >= TEAM_MEMBERS.length - 4 ? "border-b-0" : ""}`}
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 border border-neutral-200 group-hover:border-neutral-400 transition-colors duration-300 flex items-center justify-center mb-6">
                <span className="text-xl font-black text-neutral-300 group-hover:text-neutral-500 transition-colors duration-300">
                  {member.name
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              {/* Info */}
              <h3 className="text-base font-bold text-neutral-900 mb-1">
                {member.name}
              </h3>
              <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
                {member.role}
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* LinkedIn */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
