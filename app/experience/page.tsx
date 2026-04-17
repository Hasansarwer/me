import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceItem } from "@/components/sections/ExperienceItem";
import { experiences } from "@/data/experience";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Hasan Sarwer's career — lead engineer at Automind IT, backend developer at WorkingFromHammock, full-stack contractor, and PhD mathematics lecturer.",
  keywords: ["software engineer experience", "full-stack developer", "team lead", "backend developer", "React Native developer", "university lecturer mathematics"],
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <div className={styles.container}>
      <SectionHeading
        title="Experience"
        subtitle="Where I've built, led, and delivered."
      />
      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <ExperienceItem key={exp.company} experience={exp} />
        ))}
      </div>
    </div>
  );
}
