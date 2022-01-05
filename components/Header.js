import styles from '../styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.flexContainer}>
               <div className={styles.imageContainer}>
                 <Link href="/" passHref >
                     <Image src="/assets/logo.svg" alt="icon" width="103" height="40" />
                 </Link>
               </div> 
            </div> 
        </header>
    )
}