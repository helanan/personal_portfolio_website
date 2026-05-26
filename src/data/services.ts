export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: "pipeline" | "warehouse" | "ml" | "analytics" | "strategy" | "lead";
}

export const services: Service[] = [
  {
    id: "1",
    title: "Data Pipeline Architecture",
    description:
      "End-to-end design and implementation of batch and real-time data pipelines that scale with your business and won't become tomorrow's technical debt.",
    features: [
      "Pipeline architecture design & review",
      "ETL/ELT implementation with dbt, Spark, or Glue",
      "Stream processing with Kafka & Spark Streaming",
      "Data quality frameworks & automated testing",
    ],
    icon: "pipeline",
  },
  {
    id: "2",
    title: "Cloud Data Warehouse",
    description:
      "Build or modernize your data warehouse on Snowflake, BigQuery, or Redshift — with performance, governance, and cost efficiency from day one.",
    features: [
      "Warehouse selection, sizing & cost modeling",
      "Dimensional & OBT schema design",
      "Migration from legacy on-premise systems",
      "Semantic layer & metric store implementation",
    ],
    icon: "warehouse",
  },
  {
    id: "3",
    title: "ML Data Infrastructure",
    description:
      "Lay the data foundation your ML team needs: feature stores, training pipelines, and model serving infrastructure built for production reliability.",
    features: [
      "Feature store design & implementation (Feast, Tecton)",
      "Training data pipeline engineering",
      "Online/offline store architecture",
      "Training-serving consistency audits",
    ],
    icon: "ml",
  },
  {
    id: "4",
    title: "Analytics Engineering",
    description:
      "Transform raw data into trusted, business-ready datasets using dbt, with full documentation, lineage, and automated testing your analysts can rely on.",
    features: [
      "dbt project setup, refactor & best practices",
      "Data modeling (dimensional, one big table)",
      "Automated data quality & freshness testing",
      "BI tool integration & semantic layer",
    ],
    icon: "analytics",
  },
  {
    id: "5",
    title: "Data Strategy Consulting",
    description:
      "Strategic guidance for data leaders: architecture reviews, technology selection, roadmap planning, and capability building for your team.",
    features: [
      "Architecture reviews & technical audits",
      "Technology stack selection & evaluation",
      "Data platform maturity assessments",
      "Team workshops & knowledge transfer",
    ],
    icon: "strategy",
  },
  {
    id: "6",
    title: "Fractional Data Lead",
    description:
      "Embedded data engineering leadership for startups and scale-ups building their first data platform — without the cost of a full-time hire.",
    features: [
      "Engineering team leadership & mentorship",
      "Roadmap creation & sprint planning",
      "Hiring support & technical interviews",
      "Standards, processes & on-call runbooks",
    ],
    icon: "lead",
  },
];
