"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Brain, Cpu, LineChart } from "lucide-react";

const roles = [
  { icon: BarChart3, title: "Data Analyst", desc: "SQL, dashboards, storytelling that drive decisions." },
  { icon: Brain, title: "Data Scientist", desc: "End-to-end ML: exploration, modeling, deployment." },
  { icon: Cpu, title: "ML / AI Engineer", desc: "Production ML & Gen AI: RAG, LangChain, pipelines." },
  { icon: LineChart, title: "Business Intelligence", desc: "Metrics, reporting, self-serve analytics." },
];

export function RolesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="roles" ref={ref} className="py-16 sm:py-20 border-t border-border bg-cyan-50/30 dark:bg-cyan-950/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8"
        >
          Where I add value
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {roles.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="p-5 rounded-lg border border-border bg-card/50 hover:bg-cyan-50/50 dark:hover:bg-cyan-950/20 hover:border-cyan-200 dark:hover:border-cyan-800 transition-colors text-center sm:text-left"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center mb-3 sm:mx-0 mx-auto">
                  <Icon className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
