"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 bg-gradient-to-br from-emerald-50/30 via-teal-50/20 to-cyan-50/30 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-cyan-950/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-tight">
              Shanmuganathan Somashekar
            </h2>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <a
                href="mailto:shan.somashekar@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">shan.somashekar@gmail.com</span>
              </a>
              <a
                href="https://github.com/shanmuganathansomashekar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/shanmuganathansomashekar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-[1.1] tracking-tight">
            I build data, AI & ML systems that
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              multiply team impact
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block px-6 py-3 rounded-xl border-2 border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/20 text-base font-medium text-emerald-700 dark:text-emerald-300 mb-16 max-w-2xl mx-auto"
          >
            Data Analyst · Data Scientist · Machine Learning & AI Engineer · Business Intelligence
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection("#value")}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium hover:from-emerald-700 hover:to-teal-700 transition-all text-lg rounded-lg shadow-lg hover:shadow-xl"
            >
              See the impact
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 border-2 border-teal-600 text-teal-600 dark:text-teal-400 font-medium hover:bg-teal-600 hover:text-white transition-all text-lg rounded-lg"
            >
              Get in touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
