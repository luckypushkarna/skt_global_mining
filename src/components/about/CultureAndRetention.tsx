"use client";

import { motion } from "framer-motion";
import { Award, Users, TrendingUp } from "lucide-react";

const programs = [
  {
    icon: Award,
    title: "Ukukonka Retention Bonus Scheme",
    desc: "Our unique long-service recognition program rewards employee loyalty at key service milestones with life-enhancing assets.",
    milestones: [
      { year: "1 Year", reward: "Bicycle & Kitchen Appliances" },
      { year: "2 Years", reward: "Smartphone" },
      { year: "3 Years", reward: "Basic Home Solar System" },
      { year: "4 Years", reward: "Electric Motorcycle" },
      { year: "5 Years", reward: "Motor Vehicle" },
    ]
  },
  {
    icon: TrendingUp,
    title: "Attendance Incentive Programme",
    desc: "We reward dedication and consistency. Operators and Artisans on 12-hour shifts earn up to ZMW 600 monthly for excellent attendance, while General Workers earn up to ZMW 400.",
  },
  {
    icon: Users,
    title: "Ubuntu Mentorship Programme",
    desc: "As part of our commitment to localisation and skills transfer, every expatriate employee is required to mentor at least two Zambian employees in their area of expertise, ensuring sustainable knowledge transfer.",
  }
];

export default function CultureAndRetention() {
  return (
    <section className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-skt-blue mb-6"
              >
                Employee Welfare
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-serif font-normal text-slate-900 leading-[1.1] tracking-tight mb-6"
              >
                Our people are our greatest asset.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base text-slate-600 font-light leading-relaxed"
              >
                Following successful collective bargaining negotiations with the two recognised unions, we have reinforced our commitment to welfare, engagement, and retention through industry-leading, innovative programmes.
              </motion.p>
            </div>
          </div>

          {/* Programs List */}
          <div className="lg:w-2/3 space-y-12 md:space-y-16">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="flex gap-6 md:gap-8">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-skt-blue group-hover:text-skt-blue group-hover:bg-skt-blue/5 transition-all duration-300">
                      <program.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-3xl font-serif font-normal text-slate-900 mb-4">
                      {program.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed mb-6">
                      {program.desc}
                    </p>
                    
                    {/* Milestones for Ukukonka */}
                    {program.milestones && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {program.milestones.map((milestone) => (
                          <div key={milestone.year} className="flex items-center gap-4 p-4 rounded-xl bg-bg-tint border border-slate-100">
                            <span className="text-xs font-bold tracking-wider text-skt-blue uppercase w-16">
                              {milestone.year}
                            </span>
                            <span className="w-px h-8 bg-slate-200" />
                            <span className="text-sm font-medium text-slate-700">
                              {milestone.reward}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
