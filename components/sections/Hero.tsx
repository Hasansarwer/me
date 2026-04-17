import Link from "next/link";
import { RGBCube } from "@/components/ui/RGBCube";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.text}>
            <p className={styles.greeting}>Hasan Sarwer</p>
            <h1 className={styles.headline}>
              Building the Tools
              <br />
              <span className={styles.accent}>Developers Rely On.</span>
              <br />
              Building the Platform
              <br />
              <span className={styles.accent}>Education Has Been Missing.</span>
            </h1>
            <p className={styles.subheadline}>
              Two npm packages shipped. An adaptive learning platform in active
              development. The PhD in Mathematics isn&apos;t background &mdash;
              it&apos;s why the products are built differently.
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

          <div className={styles.visual}>
            <RGBCube />
            <div className={styles.cubeLabel}>RGB Color Space</div>
          </div>
        </div>
      </div>
    </section>
  );
}
