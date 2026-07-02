export interface Tech {
  name: string;
  category: string;
}

export const techStack: Tech[] = [
  // Languages
  { name: "SQL",    category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Java",   category: "Languages" },

  // Data Modeling
  { name: "Data Vault 2.0",       category: "Modeling" },
  { name: "Dimensional Modeling", category: "Modeling" },
  { name: "Star Schema",          category: "Modeling" },
  { name: "ERP Integration (SAP)", category: "Modeling" },
  { name: "Master Data Validation", category: "Modeling" },

  // Pipelines & Orchestration
  { name: "dbt Cloud / Core",  category: "Pipelines & Orchestration" },
  { name: "Apache Airflow",    category: "Pipelines & Orchestration" },
  { name: "Talend",            category: "Pipelines & Orchestration" },
  { name: "Apache Kafka",      category: "Pipelines & Orchestration" },
  { name: "Apache Spark",      category: "Pipelines & Orchestration" },
  { name: "ETL / ELT",         category: "Pipelines & Orchestration" },

  // Cloud & Warehouses
  { name: "Snowflake",  category: "Cloud & Warehouses" },
  { name: "AWS",        category: "Cloud & Warehouses" },
  { name: "Redshift",   category: "Cloud & Warehouses" },
  { name: "BigQuery",   category: "Cloud & Warehouses" },
  { name: "GCP",        category: "Cloud & Warehouses" },
  { name: "S3 / Glue / Lambda", category: "Cloud & Warehouses" },

  // BI & Reporting
  { name: "Power BI",   category: "BI & Reporting" },
  { name: "Salesforce", category: "BI & Reporting" },

  // Governance & Quality
  { name: "Data Contracts",      category: "Governance & Quality" },
  { name: "Lineage Tracking",    category: "Governance & Quality" },
  { name: "Regression Testing",  category: "Governance & Quality" },
  { name: "HITRUST Compliance",  category: "Governance & Quality" },

  // DevOps
  { name: "Kubernetes", category: "DevOps" },
  { name: "Docker",     category: "DevOps" },
  { name: "Terraform",  category: "DevOps" },
  { name: "CI/CD",      category: "DevOps" },
];
