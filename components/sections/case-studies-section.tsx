"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

interface CaseStudy {
  title: string;
  problem: string;
  dataScale: string;
  approach: string[];
  tools: string[];
  outcome: string;
  learnings: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Zero-Shot NLP Feedback Engine",
    problem: "Analyze and categorize customer feedback at scale without labeled data.",
    dataScale: "2M+ interactions, 500GB+ text",
    approach: [
      "Zero-shot classification with transformers and LLMs",
      "RAG pipelines with LangChain for context-aware categorization",
      "Vector stores and prompt engineering; real-time pipeline on Kubernetes",
    ],
    tools: ["Python", "LangChain", "RAG", "HuggingFace", "FastAPI", "Kubernetes", "PostgreSQL", "Redis"],
    outcome: "90% faster feedback processing, real-time insights, better satisfaction tracking.",
    learnings: ["RAG + LangChain speeds prototyping; production needs chunking and retrieval tuning.", "Zero-shot/LLMs need consistent prompts and evaluation.", "Monitor drift and retrieval quality in production."],
  },
  {
    title: "Energy Anomaly Detection",
    problem: "Identify energy consumption anomalies in real time to prevent cost overruns.",
    dataScale: "1TB+ sensor data, 10K+ devices, streaming",
    approach: [
      "Hybrid ML: isolation forests + LSTM",
      "Streaming pipeline with Kafka; time-series forecasting for baselines",
      "Configurable alerting and thresholds",
    ],
    tools: ["Python", "Scikit-learn", "TensorFlow", "Kafka", "Airflow", "Grafana", "AWS"],
    outcome: "95% anomaly detection, $12K+ annual savings, 60% fewer false positives.",
    learnings: ["Feature engineering is critical for time-series anomaly detection.", "Real-time needs latency optimization.", "Business context drives threshold tuning."],
  },
  {
    title: "Lead Scoring Platform",
    problem: "Prioritize sales leads to improve conversion and sales efficiency.",
    dataScale: "500K+ leads, 50+ features, daily batch",
    approach: [
      "Gradient boosting with feature importance",
      "CRM integration via REST; A/B testing for validation",
      "Model serving infrastructure",
    ],
    tools: ["Python", "XGBoost", "Flask", "PostgreSQL", "Docker", "AWS Lambda"],
    outcome: "35% conversion lift, 25% shorter sales cycle, better prioritization.",
    learnings: ["Feature engineering often beats model choice.", "Interpretability matters for stakeholders.", "Continuous retraining for performance."],
  },
  {
    title: "Data Pipelines with Airflow",
    problem: "Orchestrate ETL across many sources with dependencies and scheduling.",
    dataScale: "10+ sources, 100+ pipelines, daily/hourly",
    approach: [
      "DAG architecture; data quality checks and monitoring",
      "Retry logic, error handling, lineage tracking",
    ],
    tools: ["Python", "Airflow", "PostgreSQL", "S3", "Snowflake", "dbt"],
    outcome: "80% fewer failures, better freshness, self-serve analytics.",
    learnings: ["DAG design needs clear dependencies.", "Monitoring and alerting are essential.", "Quality checks prevent downstream issues."],
  },
  {
    title: "RL Alarm Grouping",
    problem: "Reduce alarm fatigue by grouping related alarms intelligently.",
    dataScale: "10K+ alarms/day, 50+ types, real-time",
    approach: [
      "Reinforcement learning agent for grouping",
      "Reward from operator feedback; simulation for training; online learning",
    ],
    tools: ["Python", "PyTorch", "OpenAI Gym", "Redis", "FastAPI", "Docker"],
    outcome: "70% fewer alarms, faster response, fewer false alarms.",
    learnings: ["RL needs careful reward design.", "Simulation must be realistic.", "Online learning for adaptation."],
  },
];

export function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref} className="py-24 sm:py-32 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Work
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end projects with measurable impact
          </p>
        </motion.div>

        <div className="space-y-2">
          {caseStudies.map((study, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="border border-border rounded-lg overflow-hidden bg-card/30 hover:bg-teal-50/40 dark:hover:bg-teal-950/20 hover:border-teal-200 dark:hover:border-teal-800 transition-colors"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">{study.title}</h3>
                    <p className="text-sm text-muted-foreground truncate sm:whitespace-normal">{study.problem}</p>
                  </div>
                  <ChevronRight className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                </button>

                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 space-y-4 border-t border-border"
                  >
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Scale</h4>
                      <p className="text-sm">{study.dataScale}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Approach</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {study.approach.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.tools.map((t) => (
                          <span key={t} className="px-2.5 py-1 text-xs font-medium bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 rounded-md">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Outcome</h4>
                      <p className="text-sm font-medium text-foreground">{study.outcome}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Learnings</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {study.learnings.map((l, i) => <li key={i}>{l}</li>)}
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
