"use client";

import { motion } from "framer-motion";

export default function ChairpersonLetter() {
  return (
    <section className="py-24 md:py-40 bg-neutral-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-serif text-white/90 leading-relaxed mb-16">
            Dear Partners, Stakeholders, and the SKT Family,
          </p>

          <div className="space-y-8 md:space-y-12 text-base md:text-lg lg:text-xl text-white/60 font-light leading-relaxed">
            <p>
              When we established SKT Global Mining & Services Limited, we did so with a singular, unwavering vision. As a proud subsidiary of Tyre Technocrats India Private Limited (TTIPL), we set out to prove that world-class mining operations could be built not just with scale, but with unprecedented speed, precision, and deep integration into the local economy.
            </p>

            <p>
              SKT Global forms part of a dynamic international group of companies, but our strategic investment in Zambia is deeply personal. It represents TTIPL&apos;s long-term commitment to the Zambian mining sector and our belief in the vast potential of this nation&apos;s resources and its people. 
            </p>

            <blockquote className="my-16 pl-8 border-l-2 border-skt-blue">
              <p className="text-2xl md:text-4xl font-serif text-white leading-snug">
                &ldquo;From inception, our journey has been defined by three core pillars: ambition, speed, and uncompromising excellence.&rdquo;
              </p>
            </blockquote>

            <p>
              The proof of this philosophy lies in our execution. Within an extraordinary period of just six months, SKT achieved what many in the industry thought impossible. We successfully mobilised an extensive fleet of advanced underground mining equipment, laying the foundation for a modern, high-efficiency operation.
            </p>

            <p>
              But machinery alone does not build a mining ecosystem. People do. Over that same six-month period, we proudly recruited more than 1,500 Zambian citizens. To ensure world-class operational standards, we supplemented this incredible local workforce with a team of highly skilled expatriates from India, Peru, and Nigeria. This cross-cultural, global expertise working hand-in-hand with local talent is the true engine of our success.
            </p>

            <p>
              This remarkable achievement did not go unnoticed. We were deeply honored to receive direct recognition from the Labour Organization of Zambia. For us, this acknowledgment validated our approach: that rapid industrial scaling must go hand-in-hand with robust job creation, safety, and community upliftment.
            </p>

            <p>
              Looking to the future, our mandate is clear. We will continue to drive mechanisation, optimize operational infrastructure, and work alongside our strategic partners like IRH and Mopani Copper Mines to accelerate Zambia&apos;s copper production. We are building a legacy of sustainable value—one that benefits our shareholders, empowers our employees, and strengthens the communities we serve.
            </p>

            <p>
              Thank you for your continued trust, partnership, and belief in the SKT vision. The foundation is set, and our best work is yet to come.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
