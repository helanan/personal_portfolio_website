import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export const metadata = {
  title: "Portfolio | Helana Nosratbakhsh",
  description:
    "Data engineering case studies: real-time pipelines, cloud migrations, and ML infrastructure.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-rose shrink-0" />
          <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
            Selected Work
          </span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-light text-charcoal leading-none mb-6">
          Case Studies
        </h1>
        <p className="font-sans text-base text-gray-warm leading-relaxed max-w-xl">
          A look at real problems, the architectures I designed to solve them,
          and the measurable results delivered. Client names anonymized by
          agreement.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-smoke mb-0" />
      </div>

      {/* Case Study List */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-px">
          {caseStudies.map((study, idx) => (
            <Link
              key={study.id}
              href={`/portfolio/${study.slug}`}
              className="group block bg-cream py-12 border-b border-smoke hover:bg-mist transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-sans text-gray-mid">
                      0{idx + 1}
                    </span>
                    <div className="w-px h-3 bg-smoke" />
                    <span className="text-[10px] font-sans uppercase tracking-widest text-rose">
                      {study.category}
                    </span>
                    <div className="w-px h-3 bg-smoke hidden sm:block" />
                    <span className="text-[10px] font-sans text-gray-mid hidden sm:block">
                      {study.year} · {study.duration}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight mb-3 group-hover:text-charcoal-dark transition-colors">
                    {study.title}
                  </h2>
                  <p className="font-sans text-sm text-gray-mid mb-1 italic">
                    {study.client}
                  </p>
                  <p className="font-sans text-base text-gray-warm leading-relaxed max-w-2xl mt-3">
                    {study.overview}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-sans px-2.5 py-1 border border-smoke text-gray-mid"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-sm font-sans text-gray-warm group-hover:text-charcoal transition-colors">
                    Read case study
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-rose group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="bg-mist p-12 sm:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <div className="w-8 h-px bg-rose mb-5" />
            <h3 className="font-serif text-3xl text-charcoal mb-2">
              Have a project in mind?
            </h3>
            <p className="font-sans text-sm text-gray-warm">
              Let&apos;s discuss your data infrastructure challenges.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal text-cream text-sm font-sans tracking-wide hover:bg-rose transition-colors duration-300 group"
          >
            Get in Touch
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
