"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  category: string;
  level: "expert" | "advanced" | "intermediate";
}

const skills: Skill[] = [
  // ML & AI
  { name: "Python", category: "ML & AI", level: "expert" },
  { name: "Scikit-learn", category: "ML & AI", level: "expert" },
  { name: "TensorFlow", category: "ML & AI", level: "advanced" },
  { name: "PyTorch", category: "ML & AI", level: "advanced" },
  { name: "Transformers", category: "ML & AI", level: "advanced" },
  { name: "NLP", category: "ML & AI", level: "advanced" },
  { name: "XGBoost", category: "ML & AI", level: "expert" },
  { name: "Reinforcement Learning", category: "ML & AI", level: "intermediate" },
  { name: "LangChain", category: "ML & AI", level: "advanced" },
  { name: "RAG", category: "ML & AI", level: "advanced" },
  { name: "LLMs / OpenAI API", category: "ML & AI", level: "advanced" },
  { name: "Vector DBs", category: "ML & AI", level: "intermediate" },
  { name: "Prompt Engineering", category: "ML & AI", level: "advanced" },
  
  // Data Engineering
  { name: "Apache Airflow", category: "Data Engineering", level: "advanced" },
  { name: "Apache Kafka", category: "Data Engineering", level: "intermediate" },
  { name: "ETL Pipelines", category: "Data Engineering", level: "expert" },
  { name: "dbt", category: "Data Engineering", level: "advanced" },
  { name: "SQL", category: "Data Engineering", level: "expert" },
  { name: "PostgreSQL", category: "Data Engineering", level: "advanced" },
  { name: "Redis", category: "Data Engineering", level: "advanced" },
  
  // Cloud
  { name: "AWS", category: "Cloud", level: "advanced" },
  { name: "Docker", category: "Cloud", level: "expert" },
  { name: "Kubernetes", category: "Cloud", level: "intermediate" },
  { name: "CI/CD", category: "Cloud", level: "advanced" },
  { name: "Terraform", category: "Cloud", level: "intermediate" },
  
  // Analytics
  { name: "Pandas", category: "Analytics", level: "expert" },
  { name: "NumPy", category: "Analytics", level: "expert" },
  { name: "Matplotlib", category: "Analytics", level: "advanced" },
  { name: "Seaborn", category: "Analytics", level: "advanced" },
  { name: "Plotly", category: "Analytics", level: "advanced" },
  { name: "Tableau", category: "Analytics", level: "intermediate" },
  
  // Programming
  { name: "TypeScript", category: "Programming", level: "intermediate" },
  { name: "JavaScript", category: "Programming", level: "intermediate" },
  { name: "Git", category: "Programming", level: "expert" },
  { name: "REST APIs", category: "Programming", level: "advanced" },
  { name: "FastAPI", category: "Programming", level: "advanced" },
  { name: "Flask", category: "Programming", level: "advanced" },
];

const categories = [
  "All",
  "ML & AI",
  "Data Engineering",
  "Cloud",
  "Analytics",
  "Programming",
];

const levelColors = {
  expert: "from-emerald-600 to-teal-600",
  advanced: "from-teal-500 to-cyan-500",
  intermediate: "from-emerald-500 to-teal-500",
};

export function SkillsMatrix() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" ref={ref} className="py-32 bg-gradient-to-br from-background via-teal-50/20 dark:via-teal-950/10 to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the ML and data engineering stack
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 font-medium transition-colors border-b-2",
                selectedCategory === category
                  ? "border-teal-500 text-teal-600 dark:text-teal-400"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-teal-500/50"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="border-b border-border pb-4 transition-all group hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-teal-50/50 dark:hover:from-emerald-950/20 dark:hover:to-teal-950/20 p-3 rounded-lg"
            >
              <div className="flex flex-col items-center text-center">
                <span className="font-semibold mb-2">{skill.name}</span>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 0.5, delay: index * 0.02 + 0.3 }}
                    className={cn(
                      "h-full bg-gradient-to-r",
                      levelColors[skill.level]
                    )}
                  />
                </div>
                <span className="text-xs text-muted-foreground mt-1 capitalize">
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
