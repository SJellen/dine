import styles from '../../styles/Book/Form.module.scss'
import Image from 'next/image'

export default function Form() {
    
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}></div>
                <Image src="/assets/patterns/pattern-lines.svg" alt="line pattern" width="160" height="70"  />
            <div>
                <form>
                    <input
                        id="name"
                        className='name'
                        placeholder='name'
                     />
                    <input
                        id="email"
                        className='email'
                        placeholder='email' 
                    />
                    <input />
                    <input />
                    <input />
                    <input />
                    <input />
                </form>
            </div>
        </div>
    )
}