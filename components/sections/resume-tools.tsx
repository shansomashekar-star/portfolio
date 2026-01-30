"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Calendar, Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

const tools = [
  {
    icon: Download,
    title: "Download Resume",
    description: "Get the latest PDF version of my resume",
    action: () => {
      window.open("/resume.pdf", "_blank");
    },
  },
  {
    icon: Calendar,
    title: "Book a Call",
    description: "Schedule a time to discuss opportunities",
    action: () => {
      window.open("https://calendly.com/shan", "_blank");
    },
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/shanmuganathansomashekar",
  },
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/shanmuganathansomashekar",
  },
  {
    icon: Mail,
    name: "Email",
    href: "mailto:shan.somashekar@gmail.com",
  },
];

export function ResumeTools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" ref={ref} className="py-32 bg-gradient-to-br from-background via-cyan-50/20 dark:via-cyan-950/10 to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            Resume & Recruiter Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to evaluate my fit for your role
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.button
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={tool.action}
                  className="border-b border-border pb-6 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {tool.description}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-border hover:bg-muted/30 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
