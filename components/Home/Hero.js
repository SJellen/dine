
import styles from '../../styles/Home/Hero.module.scss'
import Link from 'next/link'

export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.backColor}></div>
            <div className={styles.textContainer}>
                <h1>Exquisite dining since 1989</h1>
                <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                <Link href="/book" passHref >
                    <a>BOOK A TABLE</a>
                </Link>
            </div>
        </div>
    )
}