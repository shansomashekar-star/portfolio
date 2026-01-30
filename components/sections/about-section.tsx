"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Target, Lightbulb, Users } from "lucide-react";

const values = [
  { icon: Code, title: "Ownership", desc: "End-to-end: problem definition to production." },
  { icon: Target, title: "Problem-solving", desc: "Break complex challenges into actionable ML." },
  { icon: Lightbulb, title: "Business thinking", desc: "Align solutions with ROI and goals." },
  { icon: Users, title: "Leadership", desc: "Cross-functional teams and mentoring." },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-10 text-center">
            About
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed mb-14">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              I started in academic research—ML fundamentals and stats—then moved into industry to build systems that solve real business problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              From NLP feedback engines at scale to anomaly detection that saves thousands in ops costs, I focus on technical excellence that translates to impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              I work across the full data stack—analysis, BI, ML, AI—so I can step into data analyst, data scientist, or ML engineer roles and deliver from day one.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-border"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex items-start gap-3">
                  <Icon className="h-5 w-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">{v.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
