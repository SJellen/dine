import styles from '../styles/ReservationFooter.module.scss'
import Link from 'next/link'

export default function ReservationFooter() {

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <h2>Ready to make a reservation?</h2>
                <Link href="/book"  >
                    <a>BOOK A TABLE</a>
                </Link>
                
            </div>
        </div>
    )
}