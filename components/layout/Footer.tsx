import { siteConfig, socialLinks } from "@/data/siteConfig";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>Hasan Sarwer</span>
            <p className={styles.tagline}>
              Full-Stack Engineer &middot; AI/Data Builder &middot; PhD
              Mathematics
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.group}>
              <h4 className={styles.groupTitle}>Connect</h4>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className={styles.group}>
              <h4 className={styles.groupTitle}>Contact</h4>
              <a href={`mailto:${siteConfig.email}`} className={styles.socialLink}>
                {siteConfig.email}
              </a>
              <span className={styles.socialLink}>{siteConfig.location}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Hasan Sarwer. All rights reserved.
          </p>
          <p className={styles.powered}>
            Themed with{" "}
            <a
              href="https://www.npmjs.com/package/salt-theme-gen"
              target="_blank"
              rel="noopener noreferrer"
            >
              salt-theme-gen
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
