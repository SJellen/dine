import styles from '../styles/Book.module.scss'
import Hero from '../components/Booking/Hero'
import Form from '../components/Booking/Form'

export default function Book() {
    
    return (
        <div className={styles.container}>
           <Hero />
           <Form />
        </div>
    )
}