import styles from '../styles/Footer.module.scss'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.leftContainer}>
                <Image src="/assets/logo.svg" alt="icon" width="103" height="40" />
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.address}>
                    <ul>
                        <li>Marthwaite, Sedbergh</li>
                        <li>Cumbria</li>
                        <li>+00 44 123 4567</li>
                    </ul>
                </div>
                <div className={styles.hours}>
                    <ul>
                        <li>OPEN TIMES</li>
                        <li>MON - FRI: 09:00 AM - 10:00 PM</li>
                        <li>SAT - SUN: 09:00 AM - 11:30 PM</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}