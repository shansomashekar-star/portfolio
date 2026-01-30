"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const contactMethods = [
  { icon: Mail, label: "Email", value: "shan.somashekar@gmail.com", href: "mailto:shan.somashekar@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shanmuganathansomashekar", href: "https://linkedin.com/in/shanmuganathansomashekar" },
  { icon: Github, label: "GitHub", value: "github.com/shanmuganathansomashekar", href: "https://github.com/shanmuganathansomashekar" },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thanks—I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 border-t border-border bg-teal-50/40 dark:bg-teal-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Let&apos;s build something
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to projects, roles, and conversations about data & ML.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {contactMethods.map((m) => {
              const Icon = m.icon;
              return (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-card/50 hover:bg-teal-50 dark:hover:bg-teal-950/30 hover:border-teal-200 dark:hover:border-teal-800 transition-colors text-sm"
                >
                  <Icon className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span className="font-medium text-foreground">{m.label}</span>
                  <span className="text-muted-foreground hidden sm:inline">· {m.value}</span>
                </a>
              );
            })}
          </div>

          <div className="border-t border-border pt-8">
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2.5 text-sm font-medium bg-teal-600 text-white rounded-lg hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
