import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Hasan Sarwer — open-source npm packages, React Native UI libraries, 1,000+ interactive simulations, ecommerce ecosystems, and AI health platforms.",
  keywords: ["portfolio projects", "React projects", "Next.js projects", "React Native apps", "open source npm packages", "interactive simulations"],
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className={styles.container}>
      <SectionHeading
        title="Projects"
        subtitle="Products and systems I've designed, built, and shipped. Each project includes the problem, my role, what I built, and the outcome."
      />
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
