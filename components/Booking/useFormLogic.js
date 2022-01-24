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

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function errorStyles(element) {
        document.querySelector(`#${element}`).style.opacity = "1";
    }

    function defaultStyles(element) {
        document.querySelector(`#${element}`).style.opacity = "";
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (formInfo.name.length === 0) {
            errorStyles("nameError")
        } else {
            defaultStyles("nameError")
        }
        if (validateEmail(formInfo.email) === false) {
            errorStyles("emailError")
        } else {
            defaultStyles("emailError")
        }
        if (formInfo.month.length === 0 || formInfo.day.length === 0 || formInfo.year.length === 0) {
            errorStyles("dateError")
        } else {
            defaultStyles("dateError")
        }
        if (formInfo.hour.length === 0 || formInfo.minute.length === 0) {
            errorStyles("timeError")
        } else {
            defaultStyles("timeError")
        }
        console.log(formInfo)
        setFormInfo(initialForm)   
        console.log(formInfo)
    }

    

    return {isAm, showDropDown, handleArrowClick, handleAmClick, handlePmClick, peopleCount, increment, decrement, handleSubmit, handleChange}
}

export default useFormLogic

