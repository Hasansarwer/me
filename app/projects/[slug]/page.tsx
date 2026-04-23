import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/siteConfig";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    keywords: [project.title, "Hasan Sarwer", ...project.techStack],
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title} | Hasan Sarwer`,
      description: project.summary,
      url: `${siteConfig.url}/projects/${slug}`,
      type: "website",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className={styles.container}>
      <Link href="/projects" className={styles.back}>
        ← All Projects
      </Link>

      <div className={styles.header}>
        <div className={styles.headerTop}>
          {project.status === "published" && (
            <span className={styles.statusPublished}>Published</span>
          )}
          {project.status === "in-development" && (
            <span className={styles.statusDev}>In Development</span>
          )}
        </div>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.role}>{project.role}</p>
      </div>

      <p className={styles.summary}>{project.summary}</p>

      <div className={styles.grid}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Problem</h2>
          <p className={styles.text}>{project.problem}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Built</h2>
          <ul className={styles.list}>
            {project.whatIBuilt.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Outcome</h2>
          <ul className={styles.list}>
            {project.outcome.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why It Matters</h2>
          <p className={styles.text}>{project.whyItMatters}</p>
        </section>
      </div>

      <div className={styles.footer}>
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
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Demo &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
