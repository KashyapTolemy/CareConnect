import Head from "next/head"
import styles from "./style.module.scss"

const services = [
    { title: "Companionship", description: "Regular visits and friendly conversations to combat loneliness." },
    { title: "Errands & Shopping", description: "Assistance with grocery shopping and running essential errands." },
    { title: "Transportation", description: "Safe rides to medical appointments and social activities." },
    { title: "Light Housekeeping", description: "Help with basic household chores and organization." },
    { title: "Technology Assistance", description: "Support in using computers, smartphones, and other devices." },
    { title: "Meal Preparation", description: "Help with cooking nutritious meals and meal planning." },
]

export default function Services() {
    return (
        <div className={styles.servicesCard}>
            <h2 className={styles.servicesTitle}>Our Services</h2>
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

