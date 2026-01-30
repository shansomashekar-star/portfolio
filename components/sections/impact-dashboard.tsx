"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "1TB+", label: "Data processed" },
  { value: "25%", label: "Decision latency ↓" },
  { value: "99.8%", label: "Pipeline reliability" },
  { value: "500+", label: "Users impacted" },
  { value: "$20K+", label: "Value delivered" },
];

export function ImpactDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 border-t border-border bg-teal-50/40 dark:bg-teal-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-teal-700 dark:text-teal-300">{m.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
