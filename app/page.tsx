import { HeroSection } from "@/components/sections/hero-section";
import { ValueSection } from "@/components/sections/value-section";
import { RolesSection } from "@/components/sections/roles-section";
import { ImpactDashboard } from "@/components/sections/impact-dashboard";
import { AboutSection } from "@/components/sections/about-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { SkillsMatrix } from "@/components/sections/skills-matrix";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { EducationSection } from "@/components/sections/education-section";
import { ResearchSection } from "@/components/sections/research-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <ImpactDashboard />
      <ExperienceTimeline />
      <AboutSection />
      <RolesSection />
      <SkillsMatrix />
      <EducationSection />
      <CaseStudiesSection />
      <ResearchSection />
      <ContactSection />
    </>
  );
}
