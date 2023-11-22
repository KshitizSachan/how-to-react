import {useState} from 'react'

const StateUsage = () =>{

    const [kills, setKills]= useState(0)

    const incrementNumOfKills = () =>{
        setKills(kills+1)
    }

    return (
        <div>
            <h3>State Usage</h3>
            <div>
                <div>Total Kills So Far: {kills}</div>
                <button onClick={incrementNumOfKills}>Press to Kill Someone</button>
            </div>
        </div>
    )
}


export default StateUsage;