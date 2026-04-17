import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { featuredProjects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { experiences } from "@/data/experience";
import styles from "./page.module.css";

const specialties = [
  {
    title: "Full-Stack Web Development",
    description: "React, Next.js, Node.js, Express, MongoDB, MySQL",
  },
  {
    title: "Mobile App Development",
    description: "React Native, Expo, cross-platform iOS & Android",
  },
  {
    title: "AI, Data & Automation",
    description: "Python, Pandas, scraping, data pipelines, ML models",
  },
  {
    title: "Interactive Digital Products",
    description: "Pixi.js, Three.js, Canvas, educational simulations",
  },
  {
    title: "Design Systems & Open Source",
    description: "salt-theme-gen, OKLCH color science, npm packages",
  },
  {
    title: "Quantitative Problem-Solving",
    description: "PhD Mathematics, numerical methods, algorithm design",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Specialties */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            title="What I Do"
            subtitle="Core specialties across engineering, data, and product development."
          />
          <div className={styles.specialtiesGrid}>
            {specialties.map((s) => (
              <div key={s.title} className={styles.specialtyCard}>
                <h3 className={styles.specialtyTitle}>{s.title}</h3>
                <p className={styles.specialtyDesc}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            title="Featured Projects"
            subtitle="Products and systems I've designed, built, and shipped."
          />
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/projects" className={styles.viewAllLink}>
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            title="Experience"
            subtitle="Where I've built, led, and delivered."
          />
          <div className={styles.experienceList}>
            {experiences.slice(0, 3).map((exp) => (
              <div key={exp.company} className={styles.expCard}>
                <div className={styles.expHeader}>
                  <div>
                    <h3 className={styles.expRole}>{exp.role}</h3>
                    <p className={styles.expCompany}>
                      {exp.company} &middot; {exp.location}
                    </p>
                  </div>
                  <span className={styles.expDate}>
                    {exp.startDate} &mdash; {exp.endDate}
                  </span>
                </div>
                <p className={styles.expBullet}>{exp.bullets[0]}</p>
              </div>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/experience" className={styles.viewAllLink}>
              View Full Experience &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            title="Tech Stack"
            subtitle="Technologies and tools I work with."
          />
          <div className={styles.skillsPreview}>
            {skillCategories.slice(0, 4).map((cat) => (
              <div key={cat.name} className={styles.skillGroup}>
                <h4 className={styles.skillGroupTitle}>{cat.name}</h4>
                <div className={styles.skillBadges}>
                  {cat.skills.slice(0, 6).map((skill) => (
                    <Badge key={skill} variant="primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/skills" className={styles.viewAllLink}>
              View Full Tech Stack &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Research Summary */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading title="Research & Academic Background" />
          <div className={styles.researchSummary}>
            <p className={styles.researchText}>
              My PhD in Mathematics from South Asian University focused on
              high-accuracy numerical methods &mdash; the same deep analytical
              thinking I bring to engineering complex software systems.
              I&apos;ve published peer-reviewed research and taught at
              university level, which strengthens my ability to break down hard
              problems, design algorithms, and communicate technical ideas
              clearly.
            </p>
            <Link href="/research" className={styles.viewAllLink}>
              View Research &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>
              Let&apos;s Build Something Together
            </h2>
            <p className={styles.ctaText}>
              Whether you need a full-stack engineer, a data/AI solution, or a
              technical partner for your next product &mdash; I&apos;d like to
              hear about it.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Get In Touch
              </Link>
              <a
                href="https://github.com/Hasansarwer"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
              >
                See My GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
