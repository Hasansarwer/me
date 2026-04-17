import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig, socialLinks } from "@/data/siteConfig";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hire Hasan Sarwer — available for full-stack roles, freelance React/Next.js/Python projects, and technical consulting. Based in Dhaka, open to remote.",
  keywords: ["hire developer", "freelance software engineer", "contact Hasan Sarwer", "full-stack developer for hire", "consulting"],
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <SectionHeading
        title="Get In Touch"
        subtitle="I'm open to full-stack engineering roles, freelance projects, technical collaborations, and consulting opportunities."
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
              <li>Full-stack engineering roles</li>
              <li>Web & mobile app development</li>
              <li>AI/data pipeline projects</li>
              <li>EdTech & interactive content</li>
              <li>Design system consulting</li>
              <li>Technical co-building</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
