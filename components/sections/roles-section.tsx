"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Brain, Cpu, LineChart } from "lucide-react";

const roles = [
  {
    icon: BarChart3,
    title: "Data Analyst",
    description: "Turn data into clear insights. SQL, dashboards, and storytelling that drive decisions.",
  },
  {
    icon: Brain,
    title: "Data Scientist",
    description: "End-to-end ML: from exploration and modeling to deployment and impact measurement.",
  },
  {
    icon: Cpu,
    title: "ML / AI Engineer",
    description: "Production ML & Gen AI: RAG, LangChain, LLMs, and scalable pipelines that ship to users.",
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    description: "Metrics, reporting, and self-serve analytics that align data with business goals.",
  },
];

export function RolesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="roles"
      ref={ref}
      className="py-24 bg-gradient-to-br from-background via-teal-50/15 dark:via-teal-950/10 to-background border-t border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-muted-foreground text-sm font-medium uppercase tracking-wider mb-8"
        >
          Where I add value
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                className="text-center p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-teal-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{role.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
