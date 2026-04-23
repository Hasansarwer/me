import Link from "next/link";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  variant?: "compact" | "full";
}

export function ProjectCard({ project, variant = "compact" }: ProjectCardProps) {
  if (variant === "full") {
    return (
      <article className={styles.fullCard} id={project.slug}>
        <div className={styles.fullHeader}>
          <h3 className={styles.fullTitle}>{project.title}</h3>
          {project.status === "in-development" && (
            <Badge variant="secondary">In Development</Badge>
          )}
        </div>
        <p className={styles.fullSummary}>{project.summary}</p>

        <div className={styles.fullGrid}>
          <div className={styles.fullSection}>
            <h4 className={styles.fullSectionTitle}>Problem</h4>
            <p className={styles.fullText}>{project.problem}</p>
          </div>

          <div className={styles.fullSection}>
            <h4 className={styles.fullSectionTitle}>My Role</h4>
            <p className={styles.fullText}>{project.role}</p>
          </div>

          <div className={styles.fullSection}>
            <h4 className={styles.fullSectionTitle}>What I Built</h4>
            <ul className={styles.fullList}>
              {project.whatIBuilt.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.fullSection}>
            <h4 className={styles.fullSectionTitle}>Outcome</h4>
            <ul className={styles.fullList}>
              {project.outcome.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.fullSection}>
          <h4 className={styles.fullSectionTitle}>Why It Matters</h4>
          <p className={styles.fullText}>{project.whyItMatters}</p>
        </div>

        <div className={styles.fullFooter}>
          <div className={styles.tags}>
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <div className={styles.links}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub &rarr;
              </a>
            )}
            {project.npm && (
              <a
                href={project.npm}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                npm &rarr;
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Live &rarr;
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                download
                className={styles.link}
              >
                Demo APK &darr;
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
        {project.status === "in-development" && (
          <Badge variant="secondary">In Development</Badge>
        )}
      </div>
      <p className={styles.summary}>{project.summary}</p>
      <div className={styles.tags}>
        {project.techStack.slice(0, 5).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
        {project.techStack.length > 5 && (
          <Badge>+{project.techStack.length - 5}</Badge>
        )}
      </div>
      <div className={styles.links}>
        <Link href={`/projects/${project.slug}`} className={styles.link}>
          Details &rarr;
        </Link>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        )}
        {project.npm && (
          <a
            href={project.npm}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            npm
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Live
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Demo APK
          </a>
        )}
      </div>
    </article>
  );
}
