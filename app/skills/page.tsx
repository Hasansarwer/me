import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCategory } from "@/components/sections/SkillCategory";
import { CertificationCard } from "@/components/sections/CertificationCard";
import { skillCategories } from "@/data/skills";
import { certifications } from "@/data/certifications";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Skills & Tech Stack",
  description:
    "Hasan Sarwer's tech stack — React, Next.js, Node.js, TypeScript, Python, React Native, MongoDB, AWS across frontend, backend, mobile, AI/data, and DevOps.",
  keywords: ["React", "Next.js", "Node.js", "Python", "TypeScript", "React Native", "MongoDB", "machine learning", "data science", "Pixi.js", "Three.js"],
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <div className={styles.container}>
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies and tools I work with across the full stack."
      />
      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <SkillCategory key={category.name} category={category} />
        ))}
      </div>
      <div className={styles.certifications}>
        <SectionHeading
          title="Certifications"
          subtitle="Verified credentials from accredited platforms."
        />
        <div className={styles.certList}>
          {certifications.map((cert) => (
            <CertificationCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </div>
  );
}
