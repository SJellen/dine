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
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className={styles.hours}>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}