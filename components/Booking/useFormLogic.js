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

    

    return {isAm, showDropDown, handleArrowClick, handleAmClick, handlePmClick, peopleCount, increment, decrement}
}

export default useFormLogic

