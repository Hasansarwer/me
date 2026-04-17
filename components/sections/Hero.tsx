import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.greeting}>Hasan Sarwer</p>
        <h1 className={styles.headline}>
          Building the Tools
          <br />
          <span className={styles.accent}>Developers Need.</span>
          <br />
          Working Toward the Platform
          <br />
          <span className={styles.accent}>Learners Deserve.</span>
        </h1>
        <p className={styles.subheadline}>
          Product creator and open-source builder with a PhD in Mathematics.
          I ship developer tools, interactive learning systems, and the building
          blocks of what will become the ultimate e-learning platform.
        </p>
        <div className={styles.actions}>
          <Link href="/projects" className={styles.primaryBtn}>
            See What I&apos;m Building
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            Work with Me
          </Link>
        </div>

        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span className={styles.metricValue}>2</span>
            <span className={styles.metricLabel}>npm Packages</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricValue}>119</span>
            <span className={styles.metricLabel}>Components Shipped</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricValue}>1,000+</span>
            <span className={styles.metricLabel}>Learning Modules Built</span>
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
