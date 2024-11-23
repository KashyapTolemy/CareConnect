import Head from "next/head";
import styles from "./style.module.scss"
import Link from "next/link";

export default function Navbar()
{
    return(
        <>
            <div className={styles.navbar_container}>
                <div className={styles.navbar_title}>CareConnect</div>
                <div className={styles.navbar_page_links}>
                    <Link href='/about' className={styles.about}>About</Link>
                    <Link href='/services' className={styles.services}>Services</Link>
                    <Link href='/contact' className={styles.contact}>Contact</Link>
                </div>
            </div>        
        </>
    );
}