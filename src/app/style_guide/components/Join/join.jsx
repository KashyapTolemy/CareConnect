import Head from "next/head";
import Link from "next/link";
import styles from "./style.module.scss"

export default function Join() {
    return (
        <>
            <div className={styles.join_container}>
                <div className={styles.heading_para}>
                    Welcome to CareConnect
                </div>
                <div className={styles.heading_para2}>
                    Connecting seniors with caring volunteers for support and assistance.
                </div>
                <div className={styles.buttons}>
                    <button className={styles.senior_signin}>
                        Request Help
                    </button>
                    <button className={styles.volunteer_signin}>
                        Volunteer
                    </button>
                </div>
            </div>
        </>
    );
}