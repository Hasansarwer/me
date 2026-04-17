import type { Experience } from "@/types";
import { Badge } from "@/components/ui/Badge";
import styles from "./ExperienceItem.module.css";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.marker} />
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.role}>{experience.role}</h3>
            <p className={styles.company}>
              {experience.company} &middot; {experience.location}
            </p>
          </div>
          <span className={styles.date}>
            {experience.startDate} &mdash; {experience.endDate}
          </span>
        </div>
        <ul className={styles.bullets}>
          {experience.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
        {experience.techStack && experience.techStack.length > 0 && (
          <div className={styles.tech}>
            {experience.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
