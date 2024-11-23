import Head from 'next/head'
import styles from './style.module.scss'

export default function WhyUs() {
  return (
    <div className={styles.whyChooseUsCard}>
      <h2 className={styles.whyChooseUsTitle}>Why Choose CareConnect?</h2>
      <div className={styles.whyChooseUsGrid}>
        <div>
          <h3 className={styles.groupTitle}>For Seniors</h3>
          <ul className={styles.benefitsList}>
            <li>Trusted and vetted volunteers</li>
            <li>Personalized assistance</li>
            <li>Increased independence</li>
            <li>Enhanced social connections</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.groupTitle}>For Volunteers</h3>
          <ul className={styles.benefitsList}>
            <li>Flexible scheduling</li>
            <li>Meaningful community impact</li>
            <li>Personal growth opportunities</li>
            <li>Training and support provided</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
