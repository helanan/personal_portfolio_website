import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} | Helana Nosratbakhsh`,
    description: study.overview,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const currentIdx = caseStudies.findIndex((s) => s.slug === slug);
  const nextStudy = caseStudies[currentIdx + 1] ?? caseStudies[0];

  return (
    <div className="bg-cream min-h-screen">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-sans text-gray-warm hover:text-charcoal transition-colors group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          All Case Studies
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] font-sans uppercase tracking-widest text-rose">
            {study.category}
          </span>
          <div className="w-px h-3 bg-smoke" />
          <span className="text-[10px] font-sans text-gray-mid">
            {study.year} · {study.duration}
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-charcoal leading-none mb-5 max-w-4xl">
          {study.title}
        </h1>
        <p className="font-sans text-base text-gray-mid italic mb-6">
          {study.client}
        </p>
        <p className="font-sans text-lg text-gray-warm leading-relaxed max-w-2xl">
          {study.overview}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-8">
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-smoke" />
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-20">
            {/* Problem */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-rose shrink-0" />
                <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
                  The Problem
                </span>
              </div>
              <p className="font-sans text-base text-gray-warm leading-relaxed">
                {study.problem}
              </p>
            </div>

            {/* Architecture */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-rose shrink-0" />
                <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
                  Architecture &amp; Strategy
                </span>
              </div>
              <p className="font-sans text-base text-gray-warm leading-relaxed mb-8">
                {study.architectureIntro}
              </p>
              <ul className="space-y-4">
                {study.architecturePoints.map((point, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                    </div>
                    <p className="font-sans text-base text-gray-warm leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-rose shrink-0" />
                <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
                  Results
                </span>
              </div>
              <ul className="space-y-4">
                {study.results.map((result, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle
                      size={16}
                      className="shrink-0 mt-0.5 text-rose"
                    />
                    <p className="font-sans text-base text-gray-warm leading-relaxed">
                      {result}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-mist p-8 sticky top-28">
              <h3 className="font-serif text-xl text-charcoal mb-6">
                Project Details
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-[10px] font-sans uppercase tracking-widest text-gray-mid mb-1">
                    Client
                  </dt>
                  <dd className="font-sans text-sm text-charcoal">
                    {study.client}
                  </dd>
                </div>
                <div className="h-px bg-smoke" />
                <div>
                  <dt className="text-[10px] font-sans uppercase tracking-widest text-gray-mid mb-1">
                    Category
                  </dt>
                  <dd className="font-sans text-sm text-charcoal">
                    {study.category}
                  </dd>
                </div>
                <div className="h-px bg-smoke" />
                <div>
                  <dt className="text-[10px] font-sans uppercase tracking-widest text-gray-mid mb-1">
                    Duration
                  </dt>
                  <dd className="font-sans text-sm text-charcoal">
                    {study.duration}
                  </dd>
                </div>
                <div className="h-px bg-smoke" />
                <div>
                  <dt className="text-[10px] font-sans uppercase tracking-widest text-gray-mid mb-1">
                    Year
                  </dt>
                  <dd className="font-sans text-sm text-charcoal">
                    {study.year}
                  </dd>
                </div>
              </dl>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="block text-center px-5 py-3 bg-charcoal text-cream text-sm font-sans tracking-wide hover:bg-rose transition-colors duration-300"
                >
                  Work With Me
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Next case study */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-smoke" />
        <Link
          href={`/portfolio/${nextStudy.slug}`}
          className="group flex items-center justify-between py-10 hover:bg-mist -mx-6 px-6 transition-colors duration-300"
        >
          <div>
            <div className="text-[10px] font-sans uppercase tracking-widest text-gray-mid mb-2">
              Next Case Study
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:text-charcoal-dark transition-colors">
              {nextStudy.title}
            </h3>
          </div>
          <ArrowLeft
            size={20}
            className="text-rose rotate-180 group-hover:translate-x-1 transition-transform shrink-0"
          />
        </Link>
      </div>
    </div>
  );
}
