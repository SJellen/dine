
import styles from '../styles/Header.module.scss'
import Image from 'next/image'

export default function Header() {
    return (
        <header className={styles.container}>
            <div>
                <Image src="/assets/logo.svg" alt="icon" width="103" height="40" />
            </div>
            
        </header>
    )
}