"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Zap, DollarSign, Clock, Target } from "lucide-react";

const valueMetrics = [
  { icon: TrendingUp, value: "25%", label: "Faster decisions", desc: "Reduced decision latency via ML." },
  { icon: Users, value: "500+", label: "Users impacted", desc: "ML systems in production." },
  { icon: Zap, value: "80%", label: "Automation", desc: "Manual work eliminated." },
  { icon: DollarSign, value: "$12K+", label: "Cost saved", desc: "Annual savings from systems I built." },
  { icon: Clock, value: "90%", label: "Time saved", desc: "Faster feedback analysis." },
  { icon: Target, value: "18%", label: "Accuracy gain", desc: "Model improvements, SLA adherence." },
];

const howIWork = [
  { title: "Ship, don’t shelf", desc: "Concept to production. No handoffs—results that move the needle." },
  { title: "Business-first", desc: "Every technical choice evaluated for impact. I prioritize ROI over complexity." },
  { title: "Cross-functional", desc: "I work with engineering, product, and business so solutions align with goals." },
  { title: "Scalable by default", desc: "Systems that grow with the team. Reliable from prototype to production." },
];

export function ValueSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="value" ref={ref} className="py-24 sm:py-32 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Impact, not activity
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Measurable outcomes across every project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {valueMetrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-border rounded-lg p-5 bg-card/30 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 hover:border-teal-200 dark:hover:border-teal-800 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold tracking-tight text-teal-700 dark:text-teal-300">{m.value}</div>
                    <div className="font-medium text-foreground">{m.label}</div>
                    <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="pt-12 border-t border-border"
        >
          <h3 className="text-xl font-semibold tracking-tight mb-8 text-center">
            How I work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {howIWork.map((item, i) => (
              <div key={item.title} className="border-b border-border pb-6 last:border-0">
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
