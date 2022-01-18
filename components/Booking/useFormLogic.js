import { useState } from "react"

function useFormLogic() {

    const [peopleCount, setPeopleCount] = useState(4)
    const [isAm, setIsAm] = useState(true)
    const [showDropDown, setShowDropDown] = useState(false)

    function increment() {
        setPeopleCount(prevState => prevState + 1)
    }

    function decrement() {
        if (peopleCount > 1) setPeopleCount(prevState => prevState - 1)
    }

    function handleArrowClick() {
        setShowDropDown(prevState => !prevState)
    }

    function handleAmClick() {
        setIsAm(true)
        setShowDropDown(false)
    }
    function handlePmClick() {
        setIsAm(false)
        setShowDropDown(false)
    }

    const initialForm = {
        name: '',
        email: '',
        month: '',
        day: '',
        year: '',
        hour: '',
        minute: ''
    }

    const [formInfo, setFormInfo] = useState(initialForm)


    function handleChange(e) {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        console.log(formInfo)
        e.preventDefault()
        if (formInfo.name === 0) {
        
        }
    }

    

    return {isAm, showDropDown, handleArrowClick, handleAmClick, handlePmClick, peopleCount, increment, decrement, handleSubmit, handleChange}
}

export default useFormLogic

