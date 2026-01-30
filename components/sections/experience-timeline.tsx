"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  location: string | null;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: "Kasmo",
    role: "Data Scientist",
    location: "Remote",
    period: "2023 - Present",
    achievements: [
      "Built zero-shot NLP feedback engine processing 2M+ interactions",
      "Reduced decision latency by 25% through ML optimization",
      "Led cross-functional team of 3 data scientists",
      "Deployed ML models serving 500+ daily active users",
    ],
  },
  {
    company: "Kearney & Company",
    role: "Data Scientist",
    location: "Alexandria, VA",
    period: "2022 - 2023",
    achievements: [
      "Developed anomaly detection system saving $12K+ annually",
      "Built data pipelines processing 1TB+ data monthly",
      "Improved model accuracy by 30% through feature engineering",
      "Automated 80% of manual reporting processes",
    ],
  },
  {
    company: "Virginia Tech",
    role: "Research Assistant",
    location: "Blacksburg, VA",
    period: "2021 - 2022",
    achievements: [
      "Published research on reinforcement learning applications",
      "Developed novel algorithms for time-series forecasting",
      "Collaborated with industry partners on ML projects",
      "Presented findings at 2 academic conferences",
    ],
  },
  {
    company: "Choice School",
    role: "Data Analyst Intern",
    location: "Hyderabad, India",
    period: "2020 - 2021",
    achievements: [
      "Created analytics dashboards for student performance tracking",
      "Built predictive models for enrollment forecasting",
      "Reduced data processing time by 60%",
      "Delivered insights to leadership team monthly",
    ],
  },
];

export function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions across industries
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-border pb-12 last:border-b-0"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 flex-shrink-0" />
                      <span>{exp.company}</span>
                    </div>
                    {exp.location && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </>
                    )}
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground flex items-start gap-3"
                    >
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
