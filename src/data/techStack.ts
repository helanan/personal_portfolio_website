export interface Tech {
  name: string;
  category: string;
}

export const techStack: Tech[] = [
  // Languages
  { name: "Python", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "Scala", category: "Languages" },
  { name: "Bash", category: "Languages" },

  // Data Processing
  { name: "Apache Spark", category: "Processing" },
  { name: "Apache Kafka", category: "Processing" },
  { name: "dbt", category: "Processing" },
  { name: "Apache Beam", category: "Processing" },
  { name: "Pandas", category: "Processing" },
  { name: "Polars", category: "Processing" },

  // Orchestration
  { name: "Apache Airflow", category: "Orchestration" },
  { name: "Prefect", category: "Orchestration" },
  { name: "Dagster", category: "Orchestration" },

  // Cloud Warehouses
  { name: "Snowflake", category: "Data Warehouses" },
  { name: "BigQuery", category: "Data Warehouses" },
  { name: "Redshift", category: "Data Warehouses" },
  { name: "Delta Lake", category: "Data Warehouses" },
  { name: "Apache Iceberg", category: "Data Warehouses" },

  // Cloud Platforms
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Azure", category: "Cloud" },

  // Infrastructure
  { name: "Terraform", category: "Infrastructure" },
  { name: "Docker", category: "Infrastructure" },
  { name: "Kubernetes", category: "Infrastructure" },
  { name: "GitHub Actions", category: "Infrastructure" },

  // Visualization
  { name: "Looker", category: "Visualization" },
  { name: "Tableau", category: "Visualization" },
  { name: "Metabase", category: "Visualization" },
  { name: "Evidence", category: "Visualization" },
];
