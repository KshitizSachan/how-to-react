import {useState} from 'react'

const ChildComponent = (props) =>{

    const {dataValue, increaseValue, increaseValueBy} = props

    const callParentFunction = () =>{
        increaseValueBy(5)
    }

    return (
        <div>
        <div>Child Value: {dataValue}</div>
          <button onClick={increaseValue}>Increase Value from Child</button>
          <button onClick={callParentFunction}>Increase Value from Child by 5</button>
        </div>
    )
}

export default ChildComponent;