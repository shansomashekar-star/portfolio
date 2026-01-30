"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

interface CaseStudy {
  title: string;
  problem: string;
  dataScale: string;
  approach: string[];
  tools: string[];
  outcome: string;
  learnings: string[];
  architecture?: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Zero-Shot NLP Feedback Engine",
    problem:
      "Needed to analyze and categorize customer feedback at scale without labeled training data.",
    dataScale: "2M+ customer interactions, 500GB+ text data",
    approach: [
      "Implemented zero-shot classification using transformer models and LLMs",
      "Built RAG pipelines with LangChain for context-aware feedback categorization",
      "Used vector stores for semantic retrieval and prompt engineering for consistency",
      "Created real-time processing pipeline with async workers; deployed on Kubernetes",
    ],
    tools: [
      "Python",
      "LangChain",
      "RAG",
      "Transformers (HuggingFace)",
      "FastAPI",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
    ],
    outcome:
      "Reduced feedback processing time by 90%, enabled real-time insights, and improved customer satisfaction tracking.",
    learnings: [
      "RAG + LangChain speeds up prototyping; production needs careful chunking and retrieval tuning",
      "Zero-shot and LLMs require consistent prompt engineering and evaluation",
      "Monitoring model drift and retrieval quality in production is essential",
    ],
  },
  {
    title: "Energy Anomaly Detection System",
    problem:
      "Identifying energy consumption anomalies in real-time to prevent cost overruns and equipment failures.",
    dataScale: "1TB+ sensor data, 10K+ devices, real-time streaming",
    approach: [
      "Developed hybrid ML model combining isolation forests and LSTM",
      "Built streaming pipeline with Apache Kafka",
      "Implemented time-series forecasting for baseline prediction",
      "Created alerting system with configurable thresholds",
    ],
    tools: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "Apache Kafka",
      "Apache Airflow",
      "Grafana",
      "AWS",
    ],
    outcome:
      "Detected 95% of anomalies, saved $12K+ annually in energy costs, reduced false positives by 60%.",
    learnings: [
      "Feature engineering crucial for time-series anomaly detection",
      "Real-time processing requires careful latency optimization",
      "Business context needed for threshold tuning",
    ],
  },
  {
    title: "Lead Scoring Platform",
    problem:
      "Prioritizing sales leads to improve conversion rates and sales team efficiency.",
    dataScale: "500K+ leads, 50+ features, daily batch processing",
    approach: [
      "Built gradient boosting model with feature importance analysis",
      "Integrated with CRM via REST APIs",
      "Created A/B testing framework for model validation",
      "Deployed model serving infrastructure",
    ],
    tools: [
      "Python",
      "XGBoost",
      "Flask",
      "PostgreSQL",
      "Docker",
      "AWS Lambda",
    ],
    outcome:
      "Increased conversion rate by 35%, reduced sales cycle time by 25%, improved lead prioritization accuracy.",
    learnings: [
      "Feature engineering more important than model selection",
      "Model interpretability critical for stakeholder buy-in",
      "Continuous retraining necessary for performance",
    ],
  },
  {
    title: "Data Pipelines with Airflow",
    problem:
      "Orchestrating complex ETL workflows across multiple data sources with dependencies and scheduling.",
    dataScale: "10+ data sources, 100+ pipelines, daily/hourly schedules",
    approach: [
      "Designed DAG architecture for workflow orchestration",
      "Implemented data quality checks and monitoring",
      "Built retry logic and error handling",
      "Created data lineage tracking",
    ],
    tools: [
      "Python",
      "Apache Airflow",
      "PostgreSQL",
      "S3",
      "Snowflake",
      "dbt",
    ],
    outcome:
      "Reduced pipeline failures by 80%, improved data freshness, enabled self-service analytics.",
    learnings: [
      "DAG design requires careful dependency management",
      "Monitoring and alerting essential for production",
      "Data quality checks prevent downstream issues",
    ],
  },
  {
    title: "RL Alarm Grouping",
    problem:
      "Reducing alarm fatigue in operations by intelligently grouping related alarms.",
    dataScale: "10K+ alarms/day, 50+ alarm types, real-time processing",
    approach: [
      "Developed reinforcement learning agent for alarm grouping",
      "Created reward function based on operator feedback",
      "Built simulation environment for training",
      "Implemented online learning for continuous improvement",
    ],
    tools: [
      "Python",
      "PyTorch",
      "OpenAI Gym",
      "Redis",
      "FastAPI",
      "Docker",
    ],
    outcome:
      "Reduced alarm volume by 70%, improved operator response time, decreased false alarms.",
    learnings: [
      "RL requires careful reward function design",
      "Simulation environments need realistic modeling",
      "Online learning critical for adapting to new patterns",
    ],
  },
];

export function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref} className="py-32 bg-gradient-to-br from-background via-emerald-50/20 dark:via-emerald-950/10 to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end ML projects with measurable business impact
          </p>
        </motion.div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border-b border-border overflow-hidden transition-all hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-teal-50/50 dark:hover:from-emerald-950/20 dark:hover:to-teal-950/20 rounded-lg p-2"
              >
                <button
                  onClick={() =>
                    setExpandedIndex(isExpanded ? null : index)
                  }
                  className="w-full text-left p-8 flex items-center justify-between transition-colors"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {study.problem}
                    </p>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 transition-transform ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8 space-y-6"
                  >
                    <div>
                      <h4 className="font-semibold mb-2">Data Scale</h4>
                      <p className="text-sm text-muted-foreground">
                        {study.dataScale}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Technical Approach
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {study.approach.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Business Outcome</h4>
                      <p className="text-sm text-muted-foreground">
                        {study.outcome}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Learnings</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {study.learnings.map((learning, i) => (
                          <li key={i}>{learning}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
