"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Zap, DollarSign, Clock, Target } from "lucide-react";

interface ValueMetric {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description: string;
}

const valueMetrics: ValueMetric[] = [
  {
    icon: TrendingUp,
    value: "25%",
    label: "Faster Decisions",
    description: "Reduced decision latency through ML optimization, enabling teams to act on insights in real-time.",
  },
  {
    icon: Users,
    value: "500+",
    label: "Users Impacted",
    description: "ML systems serving hundreds of daily users, improving their workflows and productivity.",
  },
  {
    icon: Zap,
    value: "80%",
    label: "Automation",
    description: "Eliminated manual processes, freeing up team time for high-value strategic work.",
  },
  {
    icon: DollarSign,
    value: "$12K+",
    label: "Cost Saved",
    description: "Annual savings from anomaly detection and optimization systems I built.",
  },
  {
    icon: Clock,
    value: "90%",
    label: "Time Saved",
    description: "Reduced processing time for feedback analysis, enabling faster product iterations.",
  },
  {
    icon: Target,
    value: "35%",
    label: "Better Outcomes",
    description: "Improved conversion rates and accuracy through better ML models and feature engineering.",
  },
];

const teamValues = [
  {
    title: "Ownership & Execution",
    description:
      "I take projects from concept to production. No handoffs, no gaps—just results that move the needle.",
  },
  {
    title: "Cross-Functional Impact",
    description:
      "I work seamlessly with engineering, product, and business teams to align ML solutions with company goals.",
  },
  {
    title: "Scalable Systems",
    description:
      "I build systems that grow with your team. From prototype to production at scale, I ensure reliability and performance.",
  },
  {
    title: "Business-First Thinking",
    description:
      "Every technical decision is evaluated through a business lens. I prioritize impact over complexity.",
  },
];

export function ValueSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="value" ref={ref} className="py-32 bg-gradient-to-br from-background via-teal-50/20 dark:via-teal-950/10 to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            The value I bring to your team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Measurable impact across every project I touch
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {valueMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-border pb-8 group hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-teal-50/50 dark:hover:from-emerald-950/20 dark:hover:to-teal-950/20 p-4 rounded-lg transition-all"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-5xl font-semibold mb-2 tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-lg font-medium mb-2">{metric.label}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-border pt-24"
        >
          <h3 className="text-3xl sm:text-4xl font-semibold mb-12 text-center tracking-tight">
            How I work with teams
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="border-b border-border pb-8"
              >
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
