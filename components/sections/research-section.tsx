"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, BookOpen, Lightbulb, Code } from "lucide-react";

interface ResearchItem {
  title: string;
  type: "blog" | "learning" | "experiment" | "note";
  description: string;
  link?: string;
  date: string;
}

const researchItems: ResearchItem[] = [
  {
    title: "Zero-Shot Learning in Production",
    type: "blog",
    description:
      "Lessons learned from deploying zero-shot NLP models at scale, including prompt engineering and performance optimization.",
    date: "2024-01",
  },
  {
    title: "Reinforcement Learning for Operations",
    type: "experiment",
    description:
      "Exploring RL applications for alarm grouping and operational efficiency improvements.",
    date: "2023-12",
  },
  {
    title: "Building Scalable ML Pipelines",
    type: "learning",
    description:
      "Best practices for designing and deploying ML pipelines that handle terabytes of data.",
    date: "2023-11",
  },
  {
    title: "Feature Engineering for Time-Series",
    type: "note",
    description:
      "Key techniques and patterns for effective feature engineering in time-series anomaly detection.",
    date: "2023-10",
  },
  {
    title: "Model Interpretability in Production",
    type: "blog",
    description:
      "Strategies for maintaining model interpretability while scaling ML systems.",
    date: "2023-09",
  },
  {
    title: "Cost Optimization in Cloud ML",
    type: "learning",
    description:
      "Practical approaches to reducing cloud costs for ML workloads without sacrificing performance.",
    date: "2023-08",
  },
];

const typeIcons = {
  blog: BookOpen,
  learning: Lightbulb,
  experiment: Code,
  note: BookOpen,
};

const typeColors = {
  blog: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  learning: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  experiment: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  note: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

export function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" ref={ref} className="py-32 bg-gradient-to-br from-background via-emerald-50/20 dark:via-emerald-950/10 to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            Research & Thought Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, experiments, and learnings from building ML systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {researchItems.map((item, index) => {
            const Icon = typeIcons[item.type];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-border pb-6 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 ${typeColors[item.type]}`}
                  >
                    <Icon className="h-3 w-3" />
                    <span className="capitalize">{item.type}</span>
                  </div>
                  {item.link && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  )}
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
