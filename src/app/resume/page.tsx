import PrintButton from "@/components/PrintButton";

export const metadata = {
  title: "Résumé | Helana Nosratbakhsh",
  description:
    "Résumé of Helana Nosratbakhsh — Senior Data Engineer & Consultant.",
};

/* ── Reusable layout pieces ── */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="font-sans text-[10px] uppercase tracking-widest text-gray-mid shrink-0">
          {title}
        </h2>
        <div className="flex-1 h-px bg-smoke" />
      </div>
      {children}
    </section>
  );
}

function Role({
  title,
  company,
  period,
  location,
  bullets,
}: {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}) {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
        <div>
          <span className="font-serif text-lg text-charcoal font-normal">
            {title}
          </span>
          <span className="font-sans text-sm text-gray-warm mx-2">—</span>
          <span className="font-sans text-sm text-charcoal font-medium">
            {company}
          </span>
        </div>
        <div className="text-right shrink-0">
          <span className="font-sans text-xs text-gray-mid">{period}</span>
          <span className="font-sans text-xs text-gray-mid mx-1.5">·</span>
          <span className="font-sans text-xs text-gray-mid">{location}</span>
        </div>
      </div>
      <ul className="space-y-1 mt-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <div className="shrink-0 w-1 h-1 rounded-full bg-rose mt-2" />
            <span className="font-sans text-sm text-gray-warm leading-relaxed">
              {b}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Project({
  title,
  client,
  tech,
  bullets,
}: {
  title: string;
  client: string;
  tech: string[];
  bullets: string[];
}) {
  return (
    <div className="mb-5">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
        <span className="font-serif text-lg text-charcoal">{title}</span>
        <span className="font-sans text-xs text-gray-mid italic shrink-0">
          {client}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[10px] font-sans px-2 py-0.5 border border-smoke text-gray-mid"
          >
            {t}
          </span>
        ))}
      </div>
      <ul className="space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <div className="shrink-0 w-1 h-1 rounded-full bg-rose mt-2" />
            <span className="font-sans text-sm text-gray-warm leading-relaxed">
              {b}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Page ── */
export default function ResumePage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Download bar — hidden when printing */}
      <div className="no-print sticky top-20 z-10 bg-cream/95 backdrop-blur-sm border-b border-smoke">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
          <p className="font-sans text-xs text-gray-mid">
            Print or save as PDF using your browser&apos;s print dialog
          </p>
          <PrintButton />
        </div>
      </div>

      {/* Resume */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-14">

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-5xl sm:text-6xl font-light text-charcoal leading-none mb-1">
            Helana Nosratbakhsh
          </h1>
          <p className="font-sans text-base text-rose tracking-wide mb-5">
            Senior Data Engineer &amp; Consultant
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {[
              { label: "Email", value: "helanan@gmail.com", href: "mailto:helanan@gmail.com" },
              { label: "LinkedIn", value: "linkedin.com/in/helananosrat", href: "https://www.linkedin.com/in/helananosrat" },
              { label: "GitHub", value: "github.com/helanan", href: "https://github.com/helanan" },
              { label: "Calendar", value: "calendly.com/helanan", href: "https://calendly.com/helanan" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-gray-warm hover:text-charcoal transition-colors"
              >
                <span className="text-gray-mid">{item.label}: </span>
                {item.value}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-rose/40 mb-10" />

        {/* Summary */}
        <Section title="Summary">
          <p className="font-sans text-sm text-gray-warm leading-relaxed max-w-3xl">
            Senior Data Engineer with 5+ years of experience designing and delivering
            production-grade data infrastructure across e-commerce, healthcare, and
            fintech. Specializes in real-time streaming pipelines, cloud data warehouse
            migrations, and ML feature infrastructure. Available for project-based
            consulting engagements and fractional data leadership roles.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          {/*
            ─────────────────────────────────────────────────────
            TODO: Replace these placeholder entries with your
            actual work history. Each <Role> takes:
              title    — your job title
              company  — employer name
              period   — e.g. "Jan 2023 – Present"
              location — e.g. "Remote" or "San Francisco, CA"
              bullets  — array of achievement strings
            ─────────────────────────────────────────────────────
          */}
          <Role
            title="Senior Data Engineer"
            company="[Your Most Recent Company]"
            period="[Start] – Present"
            location="[Location]"
            bullets={[
              "Replace this bullet with your most impactful achievement — quantify it if possible (e.g. reduced pipeline latency by X%).",
              "Describe a system you owned or built from scratch.",
              "Mention a cross-functional collaboration or leadership contribution.",
            ]}
          />
          <Role
            title="Data Engineer"
            company="[Previous Company]"
            period="[Start] – [End]"
            location="[Location]"
            bullets={[
              "Replace with a key achievement from this role.",
              "Mention technologies and scale — rows per day, TB of data, number of tables, etc.",
              "Include any mentorship, process improvements, or tooling you introduced.",
            ]}
          />
          <Role
            title="Data Analyst / Junior Data Engineer"
            company="[Earlier Company]"
            period="[Start] – [End]"
            location="[Location]"
            bullets={[
              "Replace with an early-career achievement.",
              "Describe how you transitioned from analysis into engineering.",
            ]}
          />
        </Section>

        {/* Selected Projects */}
        <Section title="Selected Projects">
          <Project
            title="Real-Time Analytics Pipeline"
            client="Fortune 500 E-Commerce Platform"
            tech={["Apache Kafka", "Spark Streaming", "Snowflake", "dbt", "AWS EKS", "Terraform"]}
            bullets={[
              "Replaced daily batch jobs with a streaming architecture processing 50,000+ events/sec, cutting analytics latency from 24 hours to under 3 minutes.",
              "Improved inventory accuracy by 34% and reduced stockout events by 41% through live dashboard availability.",
              "Reduced infrastructure costs 22% by migrating from over-provisioned servers to auto-scaling EKS containers.",
            ]}
          />
          <Project
            title="Cloud Data Warehouse Modernization"
            client="Regional Healthcare Analytics Provider"
            tech={["AWS Redshift Serverless", "AWS Glue", "S3", "dbt Cloud", "Airflow", "Terraform"]}
            bullets={[
              "Migrated 8 TB of HIPAA-regulated data from on-premise SQL Server to AWS with zero data loss and zero compliance violations.",
              "Reduced average query time from 4.2 hours to 18 minutes; eliminated an $800K hardware refresh.",
              "Grew self-service analytics adoption from 6 power users to 40+ analysts within 3 months of go-live.",
            ]}
          />
          <Project
            title="ML Feature Store Platform"
            client="Series B FinTech Startup"
            tech={["Feast", "Apache Spark", "BigQuery", "Redis", "Airflow", "GCP", "Docker"]}
            bullets={[
              "Built a centralized feature store computing 200+ features, cutting model development cycles from 3–4 weeks to 4–5 days.",
              "Eliminated training-serving skew across all 12 production models; online serving latency at p99: 2.3 ms.",
              "Achieved 67% feature reuse rate across new model development efforts.",
            ]}
          />
        </Section>

        {/* Technical Skills */}
        <Section title="Technical Skills">
          <div className="space-y-2.5">
            {[
              { cat: "Languages", items: "Python, SQL, Scala, Bash" },
              { cat: "Processing", items: "Apache Spark, Apache Kafka, dbt, Apache Beam, Pandas, Polars" },
              { cat: "Orchestration", items: "Apache Airflow, Prefect, Dagster" },
              { cat: "Data Warehouses", items: "Snowflake, BigQuery, Amazon Redshift, Delta Lake, Apache Iceberg" },
              { cat: "Cloud", items: "AWS (S3, Glue, EMR, EKS, Redshift), Google Cloud Platform, Azure" },
              { cat: "Infrastructure", items: "Terraform, Docker, Kubernetes, GitHub Actions" },
              { cat: "Visualization", items: "Looker, Tableau, Metabase, Evidence" },
            ].map(({ cat, items }) => (
              <div key={cat} className="flex flex-col sm:flex-row sm:gap-6">
                <div className="w-32 shrink-0">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-gray-mid">
                    {cat}
                  </span>
                </div>
                <span className="font-sans text-sm text-gray-warm">{items}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          {/*
            ─────────────────────────────────────────────
            TODO: Replace with your actual degree(s).
            ─────────────────────────────────────────────
          */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
            <div>
              <span className="font-serif text-lg text-charcoal">
                [Degree] in [Field of Study]
              </span>
              <span className="font-sans text-sm text-gray-warm mx-2">—</span>
              <span className="font-sans text-sm text-charcoal">
                [University Name]
              </span>
            </div>
            <span className="font-sans text-xs text-gray-mid shrink-0">
              [Year]
            </span>
          </div>
        </Section>

        {/* Certifications — optional, remove section if not applicable */}
        <Section title="Certifications">
          {/*
            ─────────────────────────────────────────────
            TODO: Add your certifications, or delete this
            section entirely if not applicable.
            Example entries shown below.
            ─────────────────────────────────────────────
          */}
          <div className="space-y-2">
            {[
              { name: "[Certification Name]", issuer: "[Issuing Body]", year: "[Year]" },
              { name: "[Certification Name]", issuer: "[Issuing Body]", year: "[Year]" },
            ].map((cert, i) => (
              <div key={i} className="flex items-baseline justify-between">
                <span className="font-sans text-sm text-gray-warm">
                  {cert.name}
                  <span className="text-gray-mid mx-1.5">·</span>
                  {cert.issuer}
                </span>
                <span className="font-sans text-xs text-gray-mid shrink-0">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
}
