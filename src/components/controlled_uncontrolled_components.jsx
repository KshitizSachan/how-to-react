import { useState } from "react";


const ContVsUnControlled = () =>{

    const [inputValue, setInputValue]= useState()
    const [inputValue2, setInputValue2]= useState()

    const handleChange =(event) =>{
        setInputValue(event.target.value)
    }

    const handleSubmit =(event) =>{
        event.preventDefault()
        console.log(event.target[0].value);
        setInputValue2(event.target[0].value)
    }

    return (
        <div>
            <h3> Controlled Component</h3>
            <input value={inputValue} onChange={handleChange}></input>
            {inputValue && (<div>Input Value: {inputValue}</div>)}
            <h3> Uncontrolled Component</h3>
            <form onSubmit={handleSubmit}>
            <input></input>
            <button type="submit">Submit</button>
            </form>
            {inputValue2 && (<div>Input Value: {inputValue2}</div>)}

            
            
        </div>
    )
}

export default ContVsUnControlled;