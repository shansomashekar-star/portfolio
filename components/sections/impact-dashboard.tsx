"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Zap, TrendingUp, Users, DollarSign } from "lucide-react";

interface Metric {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  color: string;
}

const metrics: Metric[] = [
  {
    icon: Database,
    value: "1TB+",
    label: "Data Processed",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    value: "25%",
    label: "Decision Latency Reduced",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    value: "80%",
    label: "Automation Achieved",
    color: "from-emerald-600 to-teal-600",
  },
  {
    icon: Users,
    value: "500+",
    label: "Users Impacted",
    color: "from-teal-600 to-cyan-600",
  },
  {
    icon: DollarSign,
    value: "$12K+",
    label: "Annual Cost Saved",
    color: "from-emerald-500 to-cyan-500",
  },
];

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract number and parse
  const numValue = parseFloat(value.replace(/[^0-9.]/g, ""));

  return (
    <span ref={ref} className="text-5xl font-semibold tracking-tight">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}
        </motion.span>
      ) : (
        "0"
      )}
    </span>
  );
}

export function ImpactDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-br from-background via-emerald-50/20 dark:via-emerald-950/10 to-background border-t border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            Impact at Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Measurable results from data-driven solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-border pb-6 group hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-teal-50/50 dark:hover:from-emerald-950/20 dark:hover:to-teal-950/20 p-4 rounded-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <AnimatedCounter value={metric.value} />
                <p className="text-muted-foreground mt-2">
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
