import Link from 'next/link';
import Head from 'next/head';
import styles from './style.module.scss'; // Import the SCSS file

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__grid}>
          <div className={styles.footer__section}>
            <h3 className={styles.footer__heading}>Quick Links</h3>
            <ul className={styles.footer__list}>
              <li>
                <Link href="/about" className={styles.footer__link}>About Us</Link>
              </li>
              <li>
                <Link href="/services" className={styles.footer__link}>Our Services</Link>
              </li>
              <li>
                <Link href="/volunteer" className={styles.footer__link}>Become a Volunteer</Link>
              </li>
              <li>
                <Link href="/faq" className={styles.footer__link}>FAQs</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__section}>
            <h3 className={styles.footer__heading}>Contact Us</h3>
            <p>Sukleswar Nagar</p>
            <p>Tezpur, Assam, India</p>
            <p>Phone: 8723854911</p>
            <p>Email: tolemykashyap03@gmail.com</p>
          </div>
          <div className={styles.footer__section}>
            <h3 className={styles.footer__heading}>Newsletter</h3>
            <p>Stay updated with our latest news and services.</p>
            <div className={styles.footer__newsletter}>
              <input
                type="email"
                placeholder="Your email"
                className="footer__input"
              />
              <button className={styles.footer__button}>Subscribe</button>
            </div>
          </div>
        </div>
        <div className={styles.footer__copyright}>
          <p>© 2024 CareConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
