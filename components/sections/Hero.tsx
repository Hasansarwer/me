import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.greeting}>Hello, I&apos;m Hasan Sarwer</p>
        <h1 className={styles.headline}>
          Building Full-Stack Products,
          <br />
          <span className={styles.accent}>Data Systems & Interactive</span>
          <br />
          Digital Experiences
        </h1>
        <p className={styles.subheadline}>
          Full-Stack Engineer with a PhD in Mathematics. I build web apps,
          mobile apps, AI/data workflows, and interactive learning products
          &mdash; from architecture to deployment.
        </p>
        <div className={styles.actions}>
          <Link href="/projects" className={styles.primaryBtn}>
            View Projects
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            Get In Touch
          </Link>
        </div>

        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span className={styles.metricValue}>1,000+</span>
            <span className={styles.metricLabel}>Interactive Modules</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricValue}>10+</span>
            <span className={styles.metricLabel}>Apps Shipped</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricValue}>20+</span>
            <span className={styles.metricLabel}>Team Members Led</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricValue}>PhD</span>
            <span className={styles.metricLabel}>Mathematics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
