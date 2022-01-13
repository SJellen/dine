import { useState } from 'react'
import styles from '../../styles/Book/Form.module.scss'
import Image from 'next/image'

export default function Form() {

    const [peopleCount, setPeopleCount] = useState(4)

    function increment() {
        setPeopleCount(prevState => prevState + 1)
    }

    function decrement() {
        if (peopleCount > 1) setPeopleCount(prevState => prevState - 1)
    }

    
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
                    <div className={styles.dateContainer}>
                        <h4>Pick a date</h4>
                        <input className='twoDigitInput' />
                        <input className='twoDigitInput' />
                        <input className='fourDigitInput' id='fourDigitInput' />
                    </div>
                    <div className={styles.timeContainer}>
                        <h4>Pick a time</h4>
                        <input className='twoDigitInput' />
                        <input className='twoDigitInput' />
                        <span className={styles.amPmContainer}>AM
                            <Image src="/assets/icons/icon-arrow.svg" alt="line pattern" width="16" height="8"  />
                        </span>
                    </div>
                    <div className={styles.selectContainer}>
                        <span onClick={() => decrement()} className={styles.decrement} >
                            <Image src="/assets/icons/icon-minus.svg" alt="line pattern" width="10" height="3"  />
                        </span>
                        <span >{peopleCount} people</span>
                            <span onClick={() => increment()} className={styles.increment} >
                                <Image src="/assets/icons/icon-plus.svg" alt="line pattern" width="10" height="10"  />
                        </span>
                    </div>
                    <a>MAKE RESERVATIONS</a>
                </form>
            </div>
        </div>
    )
}