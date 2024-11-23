import styles from './style.module.scss'

export default function working() {
    return (
        <>
            <div className={styles.working_container}>
                <div className={styles.text_container}>

                    <div className={styles.heading}>How It Works</div>
                    <div className={styles.points}>
                        <div className={styles.point}>
                            <span className={styles.icon}>✓</span>
                            Sign up for free
                        </div>
                        <div className={styles.point}>
                            <span className={styles.icon}>✓</span>
                            Request assistance or offer to help
                        </div>
                        <div className={styles.point}>
                            <span className={styles.icon}>✓</span>
                            Connect with caring individuals in your community
                        </div>
                        <div className={styles.point}>
                            <span className={styles.icon}>✓</span>
                            Enjoy a safer, more connected lifestyle
                        </div>
                    </div>
                </div>
                <img src = "./oldman2.jpg" className={styles.image}></img>
            </div>
        </>
    );
}