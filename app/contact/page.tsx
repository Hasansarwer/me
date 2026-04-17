import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig, socialLinks } from "@/data/siteConfig";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work with Me",
  description:
    "Work with Hasan Sarwer — technical consulting, product partnerships, and co-building. React, Next.js, React Native, Python, and design systems. Based in Dhaka, open to remote.",
  keywords: ["React consultant", "Next.js consulting", "technical partner", "contact Hasan Sarwer", "design systems consultant", "React Native developer"],
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <SectionHeading
        title="Work with Me"
        subtitle="I take on select technical partnerships and consulting engagements — React, Next.js, React Native, Python, design systems, and anything at the intersection of software and learning."
      />

      <div className={styles.grid}>
        <div className={styles.formSection}>
          <ContactForm />
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Contact Info</h3>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <a href={`mailto:${siteConfig.email}`} className={styles.infoLink}>
                  {siteConfig.email}
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Phone</span>
                <span className={styles.infoValue}>{siteConfig.phone}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>{siteConfig.location}</span>
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Find Me Online</h3>
            <div className={styles.socialList}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {link.label} &rarr;
                </a>
              ))}
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>What I Work On</h3>
            <ul className={styles.openTo}>
              <li>React, Next.js, React Native engineering</li>
              <li>Design systems & component libraries</li>
              <li>Python, data pipelines, backend architecture</li>
              <li>EdTech & interactive learning products</li>
              <li>Technical co-building & product partnerships</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
