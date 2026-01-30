"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Lightbulb, Code } from "lucide-react";

interface ResearchItem {
  title: string;
  type: "blog" | "learning" | "experiment";
  description: string;
  date: string;
}

const items: ResearchItem[] = [
  { title: "Zero-Shot Learning in Production", type: "blog", description: "Deploying zero-shot NLP at scale: prompts and performance.", date: "2024-01" },
  { title: "Reinforcement Learning for Operations", type: "experiment", description: "RL for alarm grouping and operational efficiency.", date: "2023-12" },
  { title: "Building Scalable ML Pipelines", type: "learning", description: "Designing pipelines that handle terabytes of data.", date: "2023-11" },
  { title: "Feature Engineering for Time-Series", type: "learning", description: "Techniques for time-series anomaly detection.", date: "2023-10" },
  { title: "Model Interpretability in Production", type: "blog", description: "Keeping interpretability while scaling ML systems.", date: "2023-09" },
  { title: "Cost Optimization in Cloud ML", type: "learning", description: "Reducing cloud costs for ML without sacrificing performance.", date: "2023-08" },
];

const typeConfig = {
  blog: { icon: BookOpen, label: "Blog" },
  learning: { icon: Lightbulb, label: "Learning" },
  experiment: { icon: Code, label: "Experiment" },
};

export function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" ref={ref} className="py-24 sm:py-32 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Research & Learning
          </h2>
          <p className="text-muted-foreground text-lg">
            Insights from building ML systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const { icon: Icon, label } = typeConfig[item.type];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-border rounded-lg p-5 bg-card/30 hover:bg-teal-50/40 dark:hover:bg-teal-950/20 hover:border-teal-200 dark:hover:border-teal-800 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</span>
                  <span className="text-xs text-muted-foreground ml-auto">{item.date}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
