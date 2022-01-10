
import styles from '../../styles/Home/Switcher.module.scss'

export default function Switcher() {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <div className={styles.familyImage}></div>
                <div className={styles.specialImage}></div>
                <div className={styles.socialImage}></div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.familyText}></div>
                <div className={styles.specialText}></div>
                <div className={styles.socialText}></div>
            </div>
            <div className={styles.selectionContainer}>
                <div className={styles.familySelection}></div>
                <div className={styles.specialSelection}></div>
                <div className={styles.socialSelection}></div>
            </div>
        </div>
    )
}