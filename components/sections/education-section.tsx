"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus?: string;
  highlights?: string[];
}

const education: Education[] = [
  {
    degree: "Master of Engineering, Computer Science",
    institution: "Virginia Tech",
    location: "Blacksburg, Virginia",
    period: "Jan 2024 – May 2025",
    focus: "Machine Learning, Data Systems, Software Engineering",
    highlights: [
      "Advanced coursework in ML, systems, and data engineering",
    ],
  },
  {
    degree: "Bachelor of Science, Computational Modeling and Data Analytics",
    institution: "Virginia Tech",
    location: "Blacksburg, Virginia",
    period: "Aug 2019 – May 2023",
    focus: "Data analytics, computational modeling, statistics, programming",
    highlights: [
      "Foundation in data science, modeling, and analytics",
    ],
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-24 sm:py-32 border-t border-border bg-cyan-50/30 dark:bg-cyan-950/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Virginia Tech · Data & ML
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.degree}-${edu.period}`}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-start gap-4 border-b border-border pb-8 last:border-b-0 last:pb-0"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">{edu.institution}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {edu.period}
                  </span>
                </div>
                {edu.focus && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Focus:</span> {edu.focus}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
