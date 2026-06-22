import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blogPosts";
import { services } from "@/data/services";
import { techStack } from "@/data/techStack";
import HeadshotImage from "@/components/HeadshotImage";
import ClientCarousel, { employers, collaborators } from "@/components/ClientCarousel";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-px bg-rose shrink-0" />
      <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
        {children}
      </span>
    </div>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-cream flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-px bg-rose shrink-0" />
              <span className="text-[10px] font-sans uppercase tracking-widest text-rose">
                Data Engineer &amp; Advisor
              </span>
            </div>

            <h1 className="font-serif text-6xl sm:text-7xl lg:text-[5.5rem] font-light text-charcoal leading-none mb-7">
              Helana
              <br />
              <em className="not-italic italic font-light">Nosratbakhsh</em>
            </h1>

            <p className="font-sans text-base text-gray-warm leading-relaxed max-w-md mb-10">
              I build the data infrastructure that powers modern businesses —
              from real-time pipelines to cloud warehouses to ML platforms.
              Available for advisory engagements and fractional data leadership.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-charcoal text-cream text-sm font-sans tracking-wide hover:bg-rose transition-colors duration-300 group"
              >
                Let&apos;s Work Together
                <ArrowRight
                  size={15}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-charcoal text-charcoal text-sm font-sans tracking-wide hover:bg-smoke transition-colors duration-300"
              >
                View My Work
              </Link>
            </div>
          </div>

          {/* Headshot */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -left-4 top-10 bottom-10 w-px bg-rose" />
              <HeadshotImage className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[460px]" />
              <div className="absolute -bottom-5 -right-5 bg-charcoal text-cream p-5 hidden sm:block">
                <div className="text-3xl font-serif font-light text-rose mb-0.5">
                  8+
                </div>
                <div className="text-[10px] font-sans uppercase tracking-widest text-cream/60">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── About ── */
function About() {
  const stats = [
    { value: "8+", label: "Years Engineering" },
    { value: "20+", label: "Projects Delivered" },
    { value: "3", label: "Industry Verticals" },
  ];

  return (
    <section className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>About Me</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-charcoal leading-tight">
              Building the infrastructure
              <br />
              <em className="not-italic italic">data teams dream of</em>
            </h2>
          </div>

          <div>
            <p className="font-sans text-base text-gray-warm leading-relaxed mb-5">
              I&apos;m a Senior Data Engineer with over 8 years of experience
              designing, building, and scaling enterprise-grade data platforms.
              My work spans healthcare, retail, and SaaS — industries where the
              cost of bad data is measured in real business outcomes.
            </p>
            <p className="font-sans text-base text-gray-warm leading-relaxed mb-12">
              I specialize in ERP and CRM integrations, Snowflake-native
              pipelines, and Data Vault 2.0 implementations — bridging the gap
              between complex business requirements and highly technical
              engineering. Whether that means restoring revenue reporting
              accuracy, migrating a legacy warehouse to the cloud, or building
              ML data infrastructure, I design for both immediate impact and
              long-term reliability.
            </p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-serif font-light text-charcoal mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Services Preview ── */
function ServicesPreview() {
  return (
    <section className="py-28 bg-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <SectionLabel>What I Do</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-charcoal leading-tight">
              Services
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-sm font-sans text-gray-warm hover:text-charcoal transition-colors group"
          >
            View all services
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-smoke">
          {services.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="bg-cream p-8 hover:bg-mist transition-colors duration-300"
            >
              <div className="w-8 h-px bg-rose mb-6" />
              <h3 className="font-serif text-xl text-charcoal mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-gray-warm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Tech Stack ── */
function TechStackSection() {
  const categories = [...new Set(techStack.map((t) => t.category))];

  return (
    <section className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionLabel>Tools &amp; Technologies</SectionLabel>
        <h2 className="font-serif text-4xl sm:text-5xl font-light text-charcoal leading-tight mb-16">
          My Stack
        </h2>

        <div className="space-y-8">
          {categories.map((category) => (
            <div
              key={category}
              className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8"
            >
              <div className="w-36 shrink-0">
                <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
                  {category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack
                  .filter((t) => t.category === category)
                  .map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1.5 text-xs font-sans text-gray-warm border border-smoke hover:border-rose hover:text-charcoal transition-colors duration-200 cursor-default"
                    >
                      {tech.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Case Studies Preview ── */
function CaseStudiesPreview() {
  return (
    <section className="py-28 bg-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-charcoal leading-tight">
              Case Studies
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-sm font-sans text-gray-warm hover:text-charcoal transition-colors group"
          >
            View all projects
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="space-y-px">
          {caseStudies.map((study, idx) => (
            <Link
              key={study.id}
              href={`/portfolio/${study.slug}`}
              className="group flex flex-col sm:flex-row sm:items-start justify-between gap-6 bg-cream p-8 sm:p-10 hover:bg-charcoal transition-colors duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-sans text-gray-mid group-hover:text-cream/40 transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-widest text-rose">
                    {study.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:text-cream transition-colors mb-3 leading-tight">
                  {study.title}
                </h3>
                <p className="font-sans text-sm text-gray-warm group-hover:text-cream/60 transition-colors leading-relaxed max-w-xl">
                  {study.overview}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {study.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-sans px-2 py-1 border border-smoke group-hover:border-charcoal-light text-gray-mid group-hover:text-cream/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end gap-4 shrink-0">
                <span className="text-xs font-sans text-gray-mid group-hover:text-cream/40 transition-colors">
                  {study.year}
                </span>
                <ArrowRight
                  size={18}
                  className="text-rose group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Blog Preview ── */
function BlogPreview() {
  return (
    <section className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <SectionLabel>Recent Writing</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-charcoal leading-tight">
              From the Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-sans text-gray-warm hover:text-charcoal transition-colors group"
          >
            Read all posts
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-smoke">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-cream p-8 hover:bg-mist transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-sans uppercase tracking-widest text-rose">
                  {post.category}
                </span>
                <span className="text-[10px] font-sans text-gray-mid">
                  {post.readTime}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-charcoal leading-tight mb-3 group-hover:text-charcoal-dark transition-colors">
                {post.title}
              </h3>
              <p className="font-sans text-sm text-gray-warm leading-relaxed mb-6 flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans text-gray-mid">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <ArrowRight
                  size={14}
                  className="text-rose group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact CTA ── */
function ContactCTA() {
  return (
    <section className="py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-8 h-px bg-rose" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-cream leading-tight mb-6">
          Ready to transform your
          <br />
          <em className="not-italic italic text-rose">data infrastructure?</em>
        </h2>
        <p className="font-sans text-base text-cream/50 max-w-xl mx-auto mb-12">
          Whether you need a pipeline architected from scratch, a legacy system
          modernized, or strategic guidance on your data roadmap — let&apos;s
          talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-rose text-cream text-sm font-sans tracking-wide hover:bg-rose-dark transition-colors duration-300 group"
          >
            Schedule a Call
            <ArrowRight
              size={15}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 border border-cream/20 text-cream text-sm font-sans tracking-wide hover:border-rose hover:text-rose transition-colors duration-300"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="bg-smoke">
        <ClientCarousel items={employers} label="Where I've Worked" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-smoke/60" />
        </div>
        <ClientCarousel items={collaborators} label="Clients & Collaborators" direction="right" />
      </section>
      <div className="h-px bg-smoke" />
      <About />
      <div className="h-px bg-smoke" />
      <ServicesPreview />
      <div className="h-px bg-smoke" />
      <TechStackSection />
      <div className="h-px bg-smoke" />
      <CaseStudiesPreview />
      <div className="h-px bg-smoke" />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
