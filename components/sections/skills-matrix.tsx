"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["All", "ML & AI", "Data Engineering", "Cloud", "Analytics", "Programming"] as const;

const skillsByCategory: Record<string, string[]> = {
  "ML & AI": ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "NLP", "XGBoost", "LangChain", "RAG", "LLMs", "Transformers", "Reinforcement Learning", "Vector DBs"],
  "Data Engineering": ["SQL", "Apache Airflow", "Apache Kafka", "ETL", "dbt", "PostgreSQL", "Redis", "Spark"],
  "Cloud": ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  "Analytics": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI"],
  "Programming": ["Git", "REST APIs", "FastAPI", "Flask", "TypeScript", "JavaScript"],
};

const allSkills = categories.slice(1).flatMap((c) => skillsByCategory[c] ?? []);

export function SkillsMatrix() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<string>("All");

  const skills = selected === "All" ? allSkills : (skillsByCategory[selected] ?? []);

  return (
    <section id="skills" ref={ref} className="py-24 sm:py-32 border-t border-border bg-teal-50/30 dark:bg-teal-950/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            ML, data engineering, and analytics stack
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelected(c)}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                selected === c
                  ? "bg-teal-600 text-white dark:bg-teal-500 dark:text-white"
                  : "bg-muted/80 text-muted-foreground hover:text-teal-700 dark:hover:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/30"
              )}
            >
              {c}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {skills.map((s, i) => (
            <span
              key={s}
              className="px-3 py-1.5 text-sm bg-card border border-teal-200/50 dark:border-teal-800/50 rounded-md text-foreground"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
