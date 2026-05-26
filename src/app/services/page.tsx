import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export const metadata = {
  title: "Services | Helana Nosratbakhsh",
  description:
    "Data engineering consulting services: pipelines, cloud warehouses, ML infrastructure, analytics engineering, and fractional data leadership.",
};

const iconMap: Record<string, React.ReactNode> = {
  pipeline: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-rose">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="7" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  warehouse: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-rose">
      <path d="M3 9l9-7 9 7v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  ml: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-rose">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  analytics: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-rose">
      <path d="M3 20l4-8 4 4 4-6 4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  strategy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-rose">
      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  lead: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-rose">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-rose shrink-0" />
          <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
            What I Do
          </span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-light text-charcoal leading-none mb-6">
          Services
        </h1>
        <p className="font-sans text-base text-gray-warm leading-relaxed max-w-xl">
          Focused engagements that solve specific data problems — designed
          for speed of delivery without sacrificing long-term quality.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-smoke" />
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-smoke">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-cream p-10 hover:bg-mist transition-colors duration-300 group"
            >
              <div className="mb-5">{iconMap[service.icon]}</div>
              <div className="w-8 h-px bg-rose mb-6" />
              <h2 className="font-serif text-2xl text-charcoal mb-4 leading-tight">
                {service.title}
              </h2>
              <p className="font-sans text-sm text-gray-warm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <div className="shrink-0 w-1 h-1 rounded-full bg-rose mt-2" />
                    <span className="font-sans text-xs text-gray-mid leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-mist py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-rose shrink-0" />
            <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
              How It Works
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-charcoal mb-16 leading-tight">
            My Engagement Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "A 30-minute call to understand your current state, goals, and where I can add the most value.",
              },
              {
                step: "02",
                title: "Scoping & Proposal",
                desc: "A written proposal outlining scope, approach, timeline, and investment — no surprises.",
              },
              {
                step: "03",
                title: "Engagement",
                desc: "Focused, heads-down work with weekly check-ins and transparent progress tracking.",
              },
              {
                step: "04",
                title: "Handover & Support",
                desc: "Full documentation, knowledge transfer, and a 30-day support window post-delivery.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-4xl font-serif font-light text-rose/40 mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-gray-warm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="bg-charcoal p-12 sm:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <div className="w-8 h-px bg-rose mb-5" />
            <h3 className="font-serif text-3xl text-cream mb-2">
              Ready to get started?
            </h3>
            <p className="font-sans text-sm text-cream/50">
              Let&apos;s discuss your data challenges and how I can help.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-rose text-cream text-sm font-sans tracking-wide hover:bg-rose-dark transition-colors duration-300 group"
          >
            Schedule a Consultation
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
