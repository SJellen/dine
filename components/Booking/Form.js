import styles from '../../styles/Book/Form.module.scss'
import Image from 'next/image'

export default function Form() {
    
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}></div>
                <Image src="/assets/patterns/pattern-lines.svg" alt="line pattern" width="160" height="70"  />
            <div>
                <form>
                    <div className={styles.topContainer}>
                       <input
                            id="name"
                            className='nameEmailInput'
                            placeholder='Name'
                        />
                        <input
                            id="email"
                            className='nameEmailInput'
                            placeholder='Email' 
                        /> 
                    </div>
                    
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