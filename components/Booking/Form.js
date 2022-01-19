import { useState } from 'react'
import styles from '../../styles/Book/Form.module.scss'
import Image from 'next/image'
import useFormLogic from './useFormLogic'

export default function Form() {

    const {isAm, showDropDown, handleArrowClick, handleAmClick, handlePmClick, peopleCount, increment, decrement, handleSubmit, handleChange, formInfo} = useFormLogic()

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}></div>
                <Image src="/assets/patterns/pattern-lines.svg" alt="line pattern" width="160" height="70"  />
            <div>
                <form id="form" onSubmit={handleSubmit}>
                    <div className={styles.topContainer}>
                       <input
                            onChange={handleChange}
                            id="name"
                            name='name'
                            type='text'
                            className='nameEmailInput'
                            placeholder='Name'
                        />
                        <p>This field is incomplete</p>
                        <input
                            onChange={handleChange}
                            id="email"
                            name='email'
                            type='text'
                            className='nameEmailInput'
                            placeholder='Email' 
                        /> 
                        <p>This field is incomplete</p>
                    </div>
                    <div className={styles.dateContainer}>
                        <div className={styles.leftContainer}>
                            <h4>Pick a date</h4>
                            <p>This field is incomplete</p>
                        </div>
                        
                        <input 
                            onChange={handleChange}
                            id='month'
                            name='month'
                            type='number'
                            min='1'
                            max='12'
                            className='twoDigitInput'
                            placeholder='MM' />
                        <input
                            onChange={handleChange} 
                            id='day'
                            name='day'
                            type='number'
                            min='1'
                            max='31'
                            className='twoDigitInput'
                            placeholder='DD' />
                        <input 
                            onChange={handleChange}
                            id='year'
                            name='year'
                            type='number'
                            min='2022'
                            className='fourDigitInput' 
                            placeholder='YYYY' />
                    </div>
                    <div className={styles.timeContainer}>
                        <div className={styles.leftContainer}>
                            <h4>Pick a time</h4>
                            <p>This field is incomplete</p>
                        </div>
                        <input 
                            onChange={handleChange}
                            id='hour'
                            name='hour'
                            type='number'
                            min='1'
                            max='12'
                            className='twoDigitInput' 
                            placeholder='09' />
                        <input 
                            onChange={handleChange}
                            id='minute'
                            name='minute'
                            type='number'
                            min='00'
                            max='59'
                            className='twoDigitInput' 
                            placeholder='00' />
                        <span className={styles.amPmContainer}>{isAm ? 'AM' : 'PM'}
                            <div className={styles.arrowContainer} style={{transform: showDropDown ? "rotate(180deg" : ''}} >
                              <Image src="/assets/icons/icon-arrow.svg" alt="arrow" width="16" height="8" onClick={handleArrowClick} />  
                            </div>
                        </span>
                    </div>
                    <div className={styles.amPmSelector} style={{display: showDropDown ? '' : 'none'}}>
                        <div className={styles.amPmBox}>   
                            <span style={{opacity: isAm ? 1 : 0}}>
                                <Image src="/assets/icons/icon-check.svg" alt="check" width="12" height="8"  />
                            </span>
                            <span className={styles.label} onClick={handleAmClick}>AM</span>
                        </div>
                        <div className={styles.amPmBox} >
                            <span style={{opacity: isAm ? 0 : 1}}>
                               <Image src="/assets/icons/icon-check.svg" alt="check" width="12" height="8" /> 
                            </span>
                            <span className={styles.label} onClick={handlePmClick}>PM</span>
                        </div>
                            
                    </div>
                    <div className={styles.selectContainer}>
                        <span onClick={() => decrement()} className={styles.decrement} >
                            <Image src="/assets/icons/icon-minus.svg" alt="minus" width="10" height="3"  />
                        </span>
                        <span >{peopleCount} people</span>
                            <span onClick={() => increment()} className={styles.increment} >
                                <Image src="/assets/icons/icon-plus.svg" alt="plus" width="10" height="10"  />
                        </span>
                    </div>
                    <button form="form" type="submit" >MAKE RESERVATIONS</button>
                </form>
            </div>
        </div>
    )
}