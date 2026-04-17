import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig, socialLinks } from "@/data/siteConfig";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work with Me",
  description:
    "Work with Hasan Sarwer — available for React/Next.js/React Native consulting, technical partnerships, and product co-building. Not looking for employment. Based in Dhaka, open to remote.",
  keywords: ["hire consultant", "React consultant", "Next.js consulting", "technical partner", "contact Hasan Sarwer", "freelance developer"],
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <SectionHeading
        title="Work with Me"
        subtitle="I'm not looking for employment. I consult on React, Next.js, React Native, Python, and design systems — and I'm open to technical partnerships and product co-building."
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
            <h3 className={styles.infoTitle}>What I&apos;m Open To</h3>
            <ul className={styles.openTo}>
              <li>React / Next.js / React Native consulting</li>
              <li>Python & data pipeline projects</li>
              <li>EdTech & interactive learning products</li>
              <li>Design system work</li>
              <li>Technical co-building & advisory</li>
              <li>Product partnerships</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
