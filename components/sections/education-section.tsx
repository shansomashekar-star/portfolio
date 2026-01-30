"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

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
    <section
      id="education"
      ref={ref}
      className="py-32 bg-gradient-to-br from-background via-cyan-50/20 dark:via-cyan-950/10 to-background border-t border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in data, analytics, and machine learning
          </p>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.degree}-${edu.period}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-border pb-12 last:border-b-0"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">{edu.institution}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </span>
                  </div>
                  {edu.focus && (
                    <p className="text-sm text-muted-foreground mb-3">
                      <span className="font-medium text-foreground">Focus:</span> {edu.focus}
                    </p>
                  )}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {edu.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <Award className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
