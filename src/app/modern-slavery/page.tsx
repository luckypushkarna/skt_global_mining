import type { JSX } from "react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Modern Slavery Statement",
  description: "Modern Slavery & Human Trafficking Statement of SKT Global Mining & Services Limited.",
  path: "/modern-slavery",
});

export default function ModernSlaveryPage(): JSX.Element {
  return (
    <div className="bg-white min-h-screen py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 block mb-3">
            Human Rights & Ethics
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-none">
            Modern Slavery Statement
          </h1>
          <p className="text-sm text-neutral-500 mt-4">
            Last Updated: June 4, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600 leading-relaxed text-[15px]">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">1. Overview and Position</h2>
            <p>
              SKT Global Mining & Services Limited (including our parent company, Tyre Technocrats India Private Limited) maintains a zero-tolerance policy toward all forms of modern slavery, forced labor, child labor, human trafficking, and worker exploitation. We are dedicated to ensuring that our operations in Zambia and our global supply chains comply fully with ethical labor practices, drawing reference from the <strong>UK Modern Slavery Act 2015</strong> and the <strong>Australian Modern Slavery Act 2018</strong> frameworks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">2. Operations and Supply Chain Risk</h2>
            <p>
              As a mechanized underground mining contractor operating heavy fleets in Africa (Kitwe and Mufulira, Zambia), we identify our primary risk vectors as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Local On-Site Labor:</strong> Maintaining strict employment standards for our 1,500+ Zambian workforce.</li>
              <li><strong>Equipment & Spares Supply Chain:</strong> Sourcing underground drills, haulers, loaders, and spare parts (representing an inventory exceeding US$3M) from international OEM and aftermarket vendors.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">3. Protection Policies & Mitigations</h2>
            <p>
              We implement the following systems to secure human rights inside our operations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fair Recruitment Practices:</strong> All workers are recruited directly through certified human resource channels. We mandate age and identity checks, require written contracts in local languages, and prohibit any retention of worker IDs or passport files.</li>
              <li><strong>Compensation & Welfare:</strong> Every employee is compensated fairly, exceeding statutory minimum wage parameters in Zambia. Accommodation, catering, and transit are provided directly to support employee health and wellbeing.</li>
              <li><strong>Vendor Due Diligence:</strong> We evaluate OEM and aftermarket suppliers against ethical standards, refusing partnerships with entities unable to confirm human rights compliance.</li>
            </ul>
          </section>

          <section className="space-y-3 pb-6 border-b border-neutral-100">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">4. Contact & Reporting</h2>
            <p>
              Any employee, contractor, or external partner who suspects modern slavery in our supply chain is encouraged to report it immediately. Reports are confidential and investigated without retaliation:
              <br />
              Email: <a href="mailto:compliance@sktglobal.com" className="text-rose-600 hover:underline">compliance@sktglobal.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
