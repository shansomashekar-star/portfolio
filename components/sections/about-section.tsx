"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Target, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Ownership",
    description:
      "Taking end-to-end responsibility from problem definition to production deployment.",
  },
  {
    icon: Target,
    title: "Problem-Solving",
    description:
      "Breaking down complex business challenges into actionable ML solutions.",
  },
  {
    icon: Lightbulb,
    title: "Business Thinking",
    description:
      "Aligning technical solutions with business objectives and ROI considerations.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "Leading cross-functional teams and mentoring junior data scientists.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 bg-gradient-to-br from-background via-teal-50/20 dark:via-teal-950/10 to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-12 text-center tracking-tight">
            About
          </h2>

          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              My journey began in academic research, where I developed a deep
              understanding of machine learning fundamentals and statistical
              methods. Transitioning to industry, I've focused on building
              scalable ML systems that solve real business problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              From designing NLP feedback engines that process millions of
              interactions to building anomaly detection systems that save
              thousands in operational costs, I've consistently delivered
              solutions that combine technical excellence with business impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              I work across the data spectrum—from analysis and BI to ML and AI
              engineering—so I can slot into data analyst, data scientist, ML
              engineer, or BI roles and deliver from day one.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="border-b border-border pb-8"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
