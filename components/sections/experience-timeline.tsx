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
    location: "Plano, Texas",
    period: "May 2023 - Jan 2024",
    achievements: [
      "Developed regression and time-series models on 1TB+ multi-source operational data, reducing decision latency by 25% and enabling faster revenue-impacting insights for user engagement and retention.",
      "Engineered features across 10M+ records using PCA, correlation pruning, and statistical techniques, boosting model predictive accuracy by 18% and SLA adherence to 99%, contributing to growth forecasting.",
      "Designed automated Python & Airflow pipelines for data validation and anomaly detection, ensuring 99.8% reliability and saving $12K annually in reprocessing costs, streamlining analysis efficiency.",
      "Implemented model monitoring and A/B testing dashboards to communicate actionable insights that improved operational efficiency and supported ML-driven business decisions for 500+ users, influencing product strategy.",
    ],
  },
  {
    company: "Kearney and Company",
    role: "Data Scientist",
    location: "Blacksburg, Virginia",
    period: "Aug 2022 - Dec 2022",
    achievements: [
      "Automated extraction of 47GB from 400+ websites and 2,400 PDFs using Python, saving 40+ analyst hours per week and enabling near real-time business insights across multiple divisions.",
      "Developed NLP pipelines with FinBERT and NLTK to classify audit reports, achieving 90% accuracy and uncovering revenue-impacting contract discrepancies across multiple federal engagements.",
      "Designed and validated a lead scoring framework for business development, improving opportunity ranking efficiency by 3x and enhancing regional sales outreach effectiveness.",
      "Created interactive Tableau dashboards visualizing industry trends for 700+ executives, facilitating faster, data-driven investment decisions and reducing reporting cycle time by 50%.",
      "Conducted in-depth analysis to uncover insights into feature usage and identify drivers of engagement, informing product strategy and roadmap.",
    ],
  },
  {
    company: "Virginia Tech",
    role: "Undergraduate Researcher",
    location: "Blacksburg, Virginia",
    period: "Jan 2022 - May 2022",
    achievements: [
      "Utilized Python and R to analyze 50,000 ticket sales records over two years, uncovering seasonal trends and consumer behavior that led to a 15% increase in matinee revenue through targeted marketing initiatives.",
      "Developed regression and time-series models for user engagement and sales forecasting, generating $8K additional quarterly revenue through targeted pricing strategies.",
      "Collaborated with marketing to design data-driven promotions, boosting underperforming segment ticket sales by 10% and increasing audience engagement.",
      "Created R Shiny dashboards to automate reporting workflows, streamlining analysis processes and saving 8+ analyst hours weekly, thus accelerating decision-making.",
    ],
  },
  {
    company: "Choice School",
    role: "Data Scientist Intern",
    location: "Cochin, India",
    period: "Jan 2021 - Dec 2021",
    achievements: [
      "Automated academic workflows using Python to integrate G-Suite & Seesaw APIs, reducing workload by 50% and eliminating 5,000+ redundant records across multiple academic terms.",
      "Cleaned and standardized multi-year student datasets in SQL, enabling faster trend analysis and generating actionable insights for administrators supporting data-driven planning.",
      "Built Python-based predictive models analyzing multi-year student performance, accurately identifying at-risk students and enabling interventions that reduced overall dropout rates by 8%, improving retention.",
      "Developed interactive Power BI dashboards for visualizing admissions evaluation metrics, improving decision accuracy by 15% and shortening review time by 35% for senior academic panels.",
      "Delivered automated weekly performance reports, saving 10+ staff hours per week and ensuring timely interventions and data-driven academic decisions across administrative teams.",
    ],
  },
];

export function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 sm:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            3 years · 4 companies · measurable impact
          </p>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="border-b border-border pb-10 last:border-b-0 last:pb-0"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5" />
                    {exp.company}
                  </span>
                  {exp.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-teal-600 dark:text-teal-400 mt-1.5 flex-shrink-0">·</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
