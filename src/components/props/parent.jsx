import {useState} from 'react'
import ChildComponent from './child'

const ParentComponent = () =>{
    const [dataValue, setDataValue]= useState(0)
    
    const increaseValue = () =>{
        setDataValue(dataValue+1)
    }
    const increaseValueBy = (valueFromChild) =>{
        setDataValue(dataValue+valueFromChild)
    }

    return (
        <div>
            <h3>Prop Passing by value, function, function with parameters cominf from child</h3>
            <div>Parent Value: {dataValue}</div>
            <ChildComponent dataValue={dataValue} increaseValue={increaseValue} increaseValueBy={increaseValueBy} />
        </div>
    )
}

export default ParentComponent;