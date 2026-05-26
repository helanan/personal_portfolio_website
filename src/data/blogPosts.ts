export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-scalable-data-lake-aws",
    title: "Building a Scalable Data Lake on AWS: Lessons from the Trenches",
    excerpt:
      "After migrating three enterprise data warehouses to AWS S3-based data lakes, I've collected a set of principles that separate architectures that scale gracefully from the ones that quietly become technical debt.",
    date: "2025-04-15",
    readTime: "8 min read",
    category: "Cloud Infrastructure",
    tags: ["AWS", "S3", "Data Lake", "Architecture"],
    body: [
      "After migrating three enterprise data warehouses to AWS S3-based data lakes, I've collected a set of principles that separate architectures that scale gracefully from the ones that quietly become technical debt. Most of what I'm about to say sounds obvious in retrospect — but I've watched capable engineers skip each of these steps under time pressure.",
      "## The Foundation: Get Your Storage Layer Right\n\nThe most expensive mistakes I've seen happen at the storage layer. Teams treat S3 like a shared drive — flat folders, inconsistent naming, no partitioning strategy — and pay for it in compute costs and query latency months later. Before you write a single ETL job, design your prefix structure. Partition by date, source, and entity type. Use Parquet or ORC, not CSV. Set lifecycle rules on raw data from day one.",
      "## Partitioning Strategy Matters More Than You Think\n\nA poorly partitioned dataset can cost you 10× in both compute and query time. The key insight most engineers miss: partition your data for the way it gets *read*, not the way it gets written. If 95% of your queries filter by date, partition by date. If they filter by customer region, partition by region. Athena and Spark will thank you.",
      "## Governance From Day One\n\nThe data lake that started as a “quick win” and became a data swamp usually has one thing in common: no governance. Nobody knew what was in it, who owned it, or whether it was still accurate. Implement a data catalog (AWS Glue Data Catalog or Apache Atlas) from the first table. Tag everything with owner, data classification, and SLA. It takes an hour upfront and saves weeks of detective work later.",
      "## Schema Evolution Is Inevitable — Plan for It\n\nYour upstream sources will change their schemas. Fields get renamed, types change, columns disappear. If you're storing raw JSON, you're protected but your downstream consumers aren't. Build schema validation into your ingestion layer. Use schema registries for streaming workloads. Test schema changes in a staging environment before they reach production.",
    ],
  },
  {
    id: "2",
    slug: "dbt-in-production-best-practices",
    title: "dbt in Production: What Nobody Tells You",
    excerpt:
      "dbt has transformed how teams write and maintain SQL transformations. But the gap between a working dbt project and a production-ready one is wider than most teams realize.",
    date: "2025-03-28",
    readTime: "12 min read",
    category: "Analytics Engineering",
    tags: ["dbt", "SQL", "Data Modeling", "Best Practices"],
    body: [
      "dbt has transformed how teams write and maintain SQL transformations. But the gap between a working dbt project and a production-ready one is wider than most teams realize. I've reviewed dozens of dbt projects across companies, and the same gaps appear over and over.",
      "## Testing Is Not Optional\n\nThe teams I see struggling with dbt in production are the ones who treat tests as optional. Not-null and unique tests on every primary key. Accepted-values tests on every enum column. Referential integrity tests across your fact-dimension joins. This isn't busywork — it's the early warning system that tells you when an upstream source silently changed. Without tests, you're flying blind.",
      "## Model Materialization Strategy\n\nChoosing between view, table, incremental, and ephemeral isn't just a performance decision — it's an architectural one. Views are free at query time but expensive at read time. Tables are the opposite. Incremental models are powerful but introduce complexity around late-arriving data and full refreshes. A rule of thumb: start everything as a view, promote to table when query time exceeds 30 seconds, and reach for incremental only when your table exceeds 10M rows.",
      "## Modular Layering Is Non-Negotiable\n\nThe projects that become unmaintainable are the ones with spaghetti SQL — models referencing other models two or three layers deep with no consistent structure. Adopt a clear layer system: staging (1:1 with source tables), intermediate (business logic), and mart (aggregated, consumer-ready). Never skip layers. Never let a mart model reference a raw source directly.",
      "## Environment Configuration Is Where Projects Break\n\nI've seen production deployments fail because someone hard-coded a schema name or left dev credentials in profiles.yml. Use dbt's environment variable system for everything environment-specific. Separate your dev, CI, and prod targets. Make your CI pipeline run dbt compile on every PR — it catches syntax errors before they reach production.",
    ],
  },
  {
    id: "3",
    slug: "choosing-cloud-data-warehouse-2025",
    title: "Snowflake vs. BigQuery vs. Redshift in 2025: A Practitioner's Take",
    excerpt:
      "Every month someone asks me which cloud data warehouse they should use. The honest answer is: it depends — but here's a framework that actually helps you decide.",
    date: "2025-02-10",
    readTime: "15 min read",
    category: "Cloud Warehouses",
    tags: ["Snowflake", "BigQuery", "Redshift", "Cloud"],
    body: [
      "Every month someone asks me which cloud data warehouse they should use. The honest answer is: it depends — but 'it depends' without a framework is useless advice. After running workloads on all three in production, here's how I actually make this decision for clients.",
      "## The Three Dimensions That Matter\n\nWhen I evaluate data warehouses for a client, I look at three things first: their existing cloud ecosystem, their query patterns (ad-hoc vs. scheduled, large scans vs. point lookups), and their team's SQL maturity. The best warehouse is the one your team will actually use well.",
      "## When to Choose Snowflake\n\nSnowflake's separation of storage and compute is genuinely differentiated. If you need to scale compute independently from storage — spinning up large clusters for month-end reporting and sizing down for daily queries — Snowflake handles this more elegantly than its competitors. It's also the most cloud-agnostic, which matters if you're running a multi-cloud strategy. The tradeoff: it's the most expensive option at scale.",
      "## When to Choose BigQuery\n\nBigQuery is the right choice if you're already committed to GCP and you have large, infrequent analytical queries. Its serverless model means you never provision clusters — you pay per byte scanned, which is economical for teams with variable query patterns. The BigQuery ML capabilities are also genuinely useful if your analysts want to run models without leaving SQL. Downside: the pricing model can surprise you if you have chatty BI tools running constantly.",
      "## When to Choose Redshift\n\nRedshift Serverless has changed the math significantly for AWS-native shops. If your data stack is already deeply AWS (Glue for ETL, S3 for storage, Lambda for triggering), the integration story with Redshift is unmatched. Redshift Spectrum for querying S3 data in place is also genuinely powerful. It's no longer the legacy choice — but it remains the right choice primarily for teams who live in AWS.",
    ],
  },
];
