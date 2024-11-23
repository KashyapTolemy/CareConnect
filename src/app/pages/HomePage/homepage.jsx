import Head from "next/head";
import styles from './styles.module.scss'
import Navbar from '../../style_guide/components/Navbar/navbar'
import Join from '../../style_guide/components/Join/join'
import Working from '../../style_guide/components/Working/working'
import ServicesHP from '../../style_guide/components/ServicesHP/services'
import WhyUs from '../../style_guide/components/whyUs/whyus'
import Contact from '../../style_guide/components/Contact/contact'

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Join />
            <Working />
            <ServicesHP />
            <WhyUs />
            <Contact />
        </>
    );
}
