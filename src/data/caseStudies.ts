export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  overview: string;
  problem: string;
  architectureIntro: string;
  architecturePoints: string[];
  results: string[];
  technologies: string[];
  duration: string;
  year: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "real-time-analytics-pipeline",
    title: "Real-Time Analytics Pipeline",
    category: "Data Pipeline Engineering",
    client: "Fortune 500 E-Commerce Platform",
    overview:
      "Transformed a batch-processing analytics system into a real-time streaming pipeline, enabling business decisions on live data rather than day-old reports.",
    problem:
      "The client's e-commerce platform relied on overnight batch jobs to populate their analytics dashboards. This 24-hour data lag meant inventory managers were making decisions on stale data, causing stockouts during flash sales and over-ordering in slow periods. The business was losing an estimated $2M annually in preventable inventory errors.",
    architectureIntro:
      "Designed a Lambda Architecture that processes both real-time and historical data streams, ensuring consistency while enabling sub-minute analytics.",
    architecturePoints: [
      "Implemented Apache Kafka as the central event streaming backbone, ingesting 50,000+ events per second from the transaction layer",
      "Built Apache Spark Structured Streaming jobs to process and enrich events in micro-batches of 30 seconds",
      "Designed a Snowflake schema with clustering keys optimized for the analytics query access patterns",
      "Created dbt transformation models for the serving layer, cleanly separating raw ingestion from business logic",
      "Deployed the entire pipeline on AWS EKS with automated HPA scaling policies tied to Kafka consumer lag",
    ],
    results: [
      "Reduced analytics data latency from 24 hours to under 3 minutes",
      "Inventory accuracy improved 34%, directly reducing stockout events by 41%",
      "Dashboard query performance improved 8× due to optimized Snowflake clustering keys",
      "Infrastructure costs reduced 22% by replacing over-provisioned legacy servers with auto-scaling containers",
    ],
    technologies: ["Apache Kafka", "Apache Spark", "Snowflake", "dbt", "AWS EKS", "Python", "Terraform"],
    duration: "4 months",
    year: "2024",
  },
  {
    id: "2",
    slug: "cloud-data-warehouse-migration",
    title: "Cloud Data Warehouse Modernization",
    category: "Cloud Migration",
    client: "Regional Healthcare Analytics Provider",
    overview:
      "Migrated a decade-old on-premise SQL Server data warehouse to a modern cloud-native architecture, unlocking self-service analytics and cutting infrastructure costs by 60%.",
    problem:
      "A regional healthcare analytics company was running critical reporting workloads on aging on-premise SQL Server infrastructure. The system couldn't handle growing data volumes — queries that once ran in minutes were taking hours, and the maintenance burden consumed two full-time engineers. A hardware refresh quote came back at $800K, prompting leadership to explore cloud migration.",
    architectureIntro:
      "Adopted a phased migration approach using the Strangler Fig pattern, migrating tables and workloads incrementally to eliminate risk while maintaining full business continuity throughout.",
    architecturePoints: [
      "Conducted a 3-week discovery phase to catalog 400+ tables, identify dependencies, and classify data sensitivity for HIPAA compliance",
      "Built AWS Glue ETL pipelines to extract, transform, and load historical data into an S3 data lake with partitioned Parquet format",
      "Provisioned Amazon Redshift Serverless as the primary query engine, leveraging automatic scaling for variable analyst workloads",
      "Implemented dbt Cloud for all transformation logic, enabling version-controlled, tested SQL with full lineage tracking",
      "Ran a 6-week dual-write period validating row counts and aggregate metrics against the legacy system before final cutover",
    ],
    results: [
      "Eliminated $800K hardware refresh cost; cloud spend at $12K/month vs. $28K prior operational costs",
      "Average query execution time dropped from 4.2 hours to 18 minutes",
      "Self-service analytics adoption grew from 6 power users to 40+ analysts within 3 months of go-live",
      "Zero data loss or compliance violations during migration of 8 TB of sensitive healthcare data",
    ],
    technologies: ["AWS Redshift", "AWS Glue", "S3", "dbt Cloud", "Apache Airflow", "Python", "Terraform", "SQL Server"],
    duration: "6 months",
    year: "2024",
  },
  {
    id: "3",
    slug: "ml-feature-store-platform",
    title: "ML Feature Store Platform",
    category: "ML Infrastructure",
    client: "Series B FinTech Startup",
    overview:
      "Built a centralized feature store that reduced model development time from weeks to days, while ensuring consistent feature computation between training and production serving.",
    problem:
      "The data science team was spending 80% of their time on feature engineering and only 20% on actual model development. Each data scientist was recomputing the same features independently, creating subtle inconsistencies between training and serving — a common driver of model degradation in production. The team needed a shared infrastructure layer.",
    architectureIntro:
      "Designed a hybrid feature store using Feast as the orchestration layer, backed by offline and online stores optimized for their respective access patterns.",
    architecturePoints: [
      "Deployed Feast as the feature registry and serving layer, providing a unified API for both training data retrieval and online inference",
      "Built Apache Spark feature pipelines computing 200+ features from raw transaction data on daily and hourly Airflow schedules",
      "Used BigQuery as the offline store for historical training datasets, leveraging its columnar format for point-in-time correct queries",
      "Integrated Redis as the online store for sub-millisecond feature serving during real-time fraud scoring",
      "Created a feature governance workflow with automated data quality checks and statistical drift detection alerts",
    ],
    results: [
      "Model development cycle time reduced from 3–4 weeks to 4–5 days per model",
      "Training-serving skew eliminated across all 12 production models",
      "Feature reuse reached 67% — new models leveraged existing features rather than recomputing from scratch",
      "Online feature serving latency at p99: 2.3 ms, enabling real-time fraud scoring with no UX impact",
    ],
    technologies: ["Feast", "Apache Spark", "BigQuery", "Redis", "Apache Airflow", "Python", "GCP", "Docker"],
    duration: "3 months",
    year: "2023",
  },
];
