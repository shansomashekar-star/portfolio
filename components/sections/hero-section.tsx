"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight, FileText, MessageCircle } from "lucide-react";

const roleCards = [
  {
    title: "DATA ANALYST",
    subtitle: "Query & Analyze",
    items: ["SQL (1TB+)", "Tableau", "Power BI", "Reporting"],
    metric: "700+ exec users",
  },
  {
    title: "DATA SCIENTIST",
    subtitle: "Model & Predict",
    items: ["Regression", "Time-Series", "A/B Testing", "Statistics"],
    metric: "18% accuracy ↑",
  },
  {
    title: "ML ENGINEER",
    subtitle: "Deploy & Scale",
    items: ["Airflow", "Spark", "MLOps", "Pipelines"],
    metric: "99.8% uptime",
  },
  {
    title: "AI ENGINEER",
    subtitle: "Automate & AI",
    items: ["NLP (FinBERT)", "RAG", "LangChain", "Vector DB"],
    metric: "90% NLP acc",
  },
];

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-24 bg-gradient-to-b from-teal-50/50 via-background to-cyan-50/30 dark:from-teal-950/20 dark:via-background dark:to-cyan-950/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl w-full">
        {/* Name + links - minimal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-sm text-muted-foreground"
        >
          <span className="font-medium text-foreground">Shanmuganathan Somashekar</span>
          <a href="mailto:shan.somashekar@gmail.com" className="flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/shanmuganathansomashekar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/shanmuganathansomashekar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-center text-muted-foreground text-base sm:text-lg mb-4"
        >
          Data Analyst • Data Scientist • ML Engineer • AI Engineer
        </motion.p>

        {/* H1 - Bold, Minimalist */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center leading-[1.1] mb-5"
        >
          I Build Systems That Multiply Impact
          <br />
          <span className="bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">Across The Full Data Stack</span>
        </motion.h1>

        {/* H2 - Supporting */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          3 years of production experience. 4 specialized roles. 1 unified approach:
          turn data into decisions, models into products, and insights into revenue.
        </motion.p>

        {/* Four Cards - Horizontal, Equal Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {roleCards.map((card, i) => (
            <div
              key={card.title}
              className="rounded-xl border border-teal-200/60 dark:border-teal-800/60 bg-white/80 dark:bg-card/80 p-5 flex flex-col min-h-[200px] shadow-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">
                {card.title}
              </div>
              <div className="text-sm font-medium text-foreground mb-3">{card.subtitle}</div>
              <ul className="space-y-1.5 text-sm text-muted-foreground flex-1">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-border text-xs font-medium text-foreground">
                {card.metric}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Experience Badge - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-teal-200 dark:border-teal-800 bg-teal-50/80 dark:bg-teal-950/40 text-sm font-medium text-teal-700 dark:text-teal-300 tracking-wide">
            <span className="h-px w-4 bg-border" aria-hidden />
            3 YEARS &nbsp;|&nbsp; 4 COMPANIES &nbsp;|&nbsp; $20K+ VALUE
            <span className="h-px w-4 bg-border" aria-hidden />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollToSection("#value")}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-teal-600 text-white rounded-lg hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 transition-colors"
          >
            Explore My Work
            <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
          <button
            onClick={() => scrollToSection("#contact")}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
