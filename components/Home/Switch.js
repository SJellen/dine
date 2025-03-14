import styles from '../../styles/Home/Switcher.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Switcher() {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <div className={styles.familyImage}></div>
                <div className={styles.specialImage}></div>
                <div className={styles.socialImage}></div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.familyText}>
                    <h2>Family Gathering</h2>
                    <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
                    <Link href="/book"  >
                        <a>BOOK A TABLE</a>
                    </Link>
                </div>
                <div className={styles.specialText}>
                    <h2>Special Events</h2>
                    <p>Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.</p>
                    <Link href="/book" >
                        <a>BOOK A TABLE</a>
                    </Link>
                </div>
                <div className={styles.socialText}>
                    <h2>Social Events</h2>
                    <p>Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.</p>
                    <Link href="/book" >
                        <a>BOOK A TABLE</a>
                    </Link>
                </div>
            </div>
            <div className={styles.selectionContainer}>
                <div className={styles.familySelection}>
                    <h4>FAMILY GATHERING</h4>
                </div>
                <div className={styles.specialSelection}>
                    <h4>SPECIAL EVENTS</h4>
                </div>
                <div className={styles.socialSelection}>
                    <h4>SOCIAL EVENTS</h4>
                </div>
            </div>
        </div>
    )
}