import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.flexContainer}>
                <div className={styles.leftContainer}>
                    <Link href="/" passHref  >
                        <Image src="/assets/logo.svg" alt="icon" width="103" height="40" />
                    </Link>
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
            </div> 
        </footer>
    )
}