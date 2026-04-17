import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publications, teachingEntries, researchSummary } from "@/data/research";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Research & Teaching",
  description:
    "PhD research on numerical methods for nonlinear biharmonic problems. Peer-reviewed publications and teaching at South Asian University and Monash University.",
  keywords: ["numerical analysis", "computational mathematics", "biharmonic problems", "PhD research", "South Asian University", "peer-reviewed publications", "mathematics lecturer"],
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <div className={styles.container}>
      <SectionHeading
        title="Research & Teaching"
        subtitle="My academic background in mathematics is the foundation of my engineering practice."
      />

      <div className={styles.content}>
        {/* Research Focus */}
        <section className={styles.section}>
          <h3 className={styles.subheading}>Research Focus</h3>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Specialization</span>
              <span className={styles.infoValue}>
                {researchSummary.specialization}
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Related Interests</span>
              <span className={styles.infoValue}>
                {researchSummary.interests}
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>PhD Thesis</span>
              <span className={styles.infoValue}>
                &quot;{researchSummary.thesis}&quot;
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Advisor</span>
              <span className={styles.infoValue}>
                {researchSummary.advisor}
              </span>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className={styles.section}>
          <h3 className={styles.subheading}>Publications</h3>
          <div className={styles.publications}>
            {publications.map((pub, i) => (
              <div key={i} className={styles.pubCard}>
                <span className={styles.pubYear}>{pub.year}</span>
                <div className={styles.pubContent}>
                  <h4 className={styles.pubTitle}>{pub.title}</h4>
                  <p className={styles.pubAuthors}>{pub.authors}</p>
                  <p className={styles.pubVenue}>
                    <em>{pub.venue}</em>
                    {pub.details && `, ${pub.details}`}
                  </p>
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.pubLink}
                    >
                      View Publication &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching */}
        <section className={styles.section}>
          <h3 className={styles.subheading}>Teaching Experience</h3>
          <div className={styles.teaching}>
            {teachingEntries.map((entry) => (
              <div key={entry.institution} className={styles.teachCard}>
                <div className={styles.teachHeader}>
                  <h4 className={styles.teachInst}>{entry.institution}</h4>
                  <span className={styles.teachPeriod}>{entry.period}</span>
                </div>
                <ul className={styles.teachCourses}>
                  {entry.courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Why It Matters */}
        <section className={styles.section}>
          <h3 className={styles.subheading}>Why This Matters for Engineering</h3>
          <p className={styles.whyText}>
            A mathematics PhD isn&apos;t just a credential &mdash; it&apos;s a
            way of thinking. It means I can design algorithms from first
            principles, reason about computational complexity and performance
            trade-offs, model real-world problems mathematically before writing
            code, communicate technical concepts clearly to diverse audiences,
            and approach debugging and optimization with analytical rigor.
          </p>
        </section>
      </div>
    </div>
  );
}
