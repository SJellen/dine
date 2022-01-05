import styles from '../../styles/Book/Hero.module.scss'

export default function Hero() {
    
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2>Reservations</h2>
                <p>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
            </div>
        </div>
    )
}