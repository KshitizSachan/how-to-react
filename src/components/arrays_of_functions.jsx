import { useState, useEffect } from "react";

const ArrayFunctions = () =>{
    const [value1, setValue1] = useState()
    const [value2, setValue2] = useState()
    const [value3, setValue3] = useState()

    const functionArray = [
        () =>{setValue1(1)},
        () =>{setValue2(1)},
        () =>{setValue3(1)},
    ]

    const handleClick = () =>{
            functionArray.forEach((fun) =>{
                fun()
            })
    }

    const handleClick2 = () =>{
        functionArray[1]()
    }

    return (
        <>
            <h3>Running array of functions</h3>
            <button onClick={handleClick}>Click to run all three functions</button>
            <button onClick={handleClick2}>Click to run 2nd function</button>
            {value1 && (<div>Function 1 executed successfully</div>)}
            {value2 && (<div>Function 2 executed successfully</div>)}
            {value3 && (<div>Function 3 executed successfully</div>)}

        </>
    )
}

export default ArrayFunctions;