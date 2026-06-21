import PrintButton from "@/components/PrintButton";

export const metadata = {
  title: "Résumé | Helana Nosratbakhsh",
  description:
    "Résumé of Helana Nosratbakhsh — Senior Data Engineer & Advisor.",
};

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
            Senior Data Engineer &amp; Advisor
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {[
              { label: "Phone", value: "267-443-8860", href: "tel:2674438860" },
              { label: "Email", value: "helanan@gmail.com", href: "mailto:helanan@gmail.com" },
              { label: "LinkedIn", value: "linkedin.com/in/helananosrat", href: "https://www.linkedin.com/in/helananosrat" },
              { label: "GitHub", value: "github.com/helanan", href: "https://github.com/helanan" },
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
            Senior Data Engineer with over 8 years of experience designing, building, and scaling
            enterprise-grade data platforms. Specialized in orchestrating complex ERP and CRM
            integrations, Snowflake-native pipelines, and Data Vault 2.0 implementations.
            Recognized for bridging the gap between business requirements and highly technical
            data engineering — successfully migrating legacy environments and validating
            massive-scale enterprise data to deliver certified, analytics-ready products that
            empower data science, reporting, and operational efficiency.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <Role
            title="Senior Data Engineer"
            company="R1 RCM"
            period="March 2024 – Present"
            location="Philadelphia, PA (Remote)"
            bullets={[
              "Restored $47.8M in combined monthly revenue reporting accuracy by leading cross-team alignment and resolving systemic data normalization inconsistencies across 1,247 healthcare facilities.",
              "Spearheaded the implementation of scalable Data Vault 2.0 architectures in Snowflake, orchestrating complex ETL/ELT pipelines across Raw, Refined, and Data Product layers using dbt and Apache Airflow.",
              "Optimized warehouse cost and performance through rigorous consumption monitoring and query tuning, successfully resolving multi-hour query timeouts and improving infrastructure efficiency.",
              "Partnered with Data Governance and Analytics teams to deliver certified data products, ensuring documented quality SLAs, lineage, and adherence to enterprise data observability best practices.",
            ]}
          />
          <Role
            title="Data Engineer II / ETL Developer II"
            company="XSOLIS"
            period="2020 – March 2024"
            location="Philadelphia, PA (Remote)"
            bullets={[
              "Accelerated enterprise data delivery for data science and clinical operations by engineering robust Python and SQL pipelines, supporting the deployment of advanced predictive and deep learning models.",
              "Optimized high-volume data extraction and Redshift enterprise data warehouse migrations by designing and scheduling interval-based SQL stored procedures from production databases.",
              "Enhanced executive visibility and clinical application performance by developing interactive Power BI semantic models and automated reporting dashboards.",
              "Secured enterprise data assets by authoring comprehensive source control documentation, integrating strict HITRUST compliance policies directly into development workflows.",
            ]}
          />
          <Role
            title="Developer — Data Integration"
            company="Tractor Supply Company"
            period="August 2017 – February 2020"
            location="Nashville, TN"
            bullets={[
              "Engineered Talend data integration jobs to synchronize and validate SAP ERP Item Master tables against enterprise Netezza data warehouses, achieving strict data consistency requirements for downstream analytics.",
              "Translated enterprise business needs into technical requirements, collaborating closely with business analysts to design logical and physical dimensional models for self-service reporting.",
              "Supported major promotional marketing initiatives by writing Java and SQL pipelines to transform semi-structured XML customer data into filtered, analytics-ready tables.",
            ]}
          />
          <Role
            title="Junior Full Stack Software Developer"
            company="Nashville Software School"
            period="July 2016 – June 2017"
            location="Nashville, TN"
            bullets={[
              "Delivered production-quality code by completing an immersive software development program focused on full-stack application development, databases, REST APIs, and object-oriented programming.",
            ]}
          />
          <Role
            title="Database Analyst & Enterprise Growth Strategist"
            company="Emma / Marigold"
            period="2015 – 2017"
            location="Nashville, TN"
            bullets={[
              "Maximized e-commerce and digital strategy goals for CEOs and CMOs by delivering expert consultative strategy and database analysis for the Emma SaaS platform.",
              "Expanded the retail market pipeline and bridged the gap between sales and engineering by targeting ideal client profiles across the university, agency, and retail sectors.",
            ]}
          />
          <Role
            title="Database Analyst & Retail Enterprise Growth Strategist"
            company="Listrak"
            period="January 2014 – December 2014"
            location="Greater Philadelphia Area"
            bullets={[
              "Optimized sales pipeline efficiency by engineering custom Salesforce data extraction queries and generating analytics reports to drive strategic decision-making.",
              "Accelerated enterprise client acquisition by conducting technical stack analyses (using Datanyze and builtWith) to map out scalable omni-channel integration strategies.",
            ]}
          />
          <Role
            title="IT Recruiter and Account Executive"
            company="The Judge Group"
            period="October 2014 – 2015"
            location="Conshohocken, PA"
            bullets={[
              "Executed comprehensive talent acquisition strategies for large hiring initiatives by facilitating stakeholder management with senior clients and vendors.",
            ]}
          />
          <Role
            title="Pharmaceutical Account Manager"
            company="Day & Zimmerman"
            period="May 2013 – October 2014"
            location="Philadelphia, PA"
            bullets={[
              "Streamlined recruitment and managed large national pharmaceutical accounts across the R&D, Clinical, and IT sectors.",
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
              { cat: "Engineering & Modeling", items: "Data Vault 2.0, Dimensional Modeling, Star Schemas, ERP System Integration (SAP), Master Data Validation, Historical Backfills" },
              { cat: "Integration & Pipelines", items: "SQL, Python, Java, Talend, dbt Cloud/Core, Apache Airflow, ETL/ELT" },
              { cat: "Cloud & Operations", items: "Snowflake (Streams, Tasks, Dynamic Tables), AWS (EC2, S3, Glue, Lambda), Kubernetes Pod Operators, CI/CD" },
              { cat: "Quality & Strategy", items: "Data Contracts, Regression Testing, Lineage Tracking, Stakeholder Management, Agile/Scrum" },
            ].map(({ cat, items }) => (
              <div key={cat} className="flex flex-col sm:flex-row sm:gap-6">
                <div className="w-40 shrink-0">
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
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <div>
                <span className="font-serif text-lg text-charcoal">
                  Bachelor of Science in Corporate Communication
                </span>
                <span className="font-sans text-sm text-gray-warm mx-2">—</span>
                <span className="font-sans text-sm text-charcoal">
                  Drexel University
                </span>
              </div>
              <span className="font-sans text-xs text-gray-mid shrink-0">
                Minor in Music
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <div>
                <span className="font-serif text-lg text-charcoal">
                  Junior Developer Bootcamp
                </span>
                <span className="font-sans text-sm text-gray-warm mx-2">—</span>
                <span className="font-sans text-sm text-charcoal">
                  Nashville Software School
                </span>
              </div>
              <span className="font-sans text-xs text-gray-mid shrink-0">
                Front-End &amp; Back-End Development
              </span>
            </div>
          </div>
        </Section>

      </div>
    </div>
  );
}
