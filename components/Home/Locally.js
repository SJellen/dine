
import styles from '../../styles/Home/Locally.module.scss'

export default function Locally() {

    return (
        <div className={styles.container}>
            <div className={styles.textContainer} >
                <h2>The most locally sourced food</h2>
                <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
            </div>
            <div className={styles.imageContainer} ></div>
        </div>
    )
}