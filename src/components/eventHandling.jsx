import { useState } from "react";


const EventHandling = () =>{

    const [a, setA] = useState();
    const [b, setB] = useState();

    const handleChangeA=(inputForA) =>{
        setA(Number(inputForA.target.value));

    }

    const handleChangeB=(inputForB) =>{
        setB(Number(inputForB.target.value));
    }

    return (
        <div>
            <h3>Event Handling</h3>
            <input onChange={handleChangeA} placeholder="Enter the value of A" />
            <input onChange={handleChangeB} placeholder="Enter the value of B" />
            {(a && b) ? <div>
                Sum of A and B: {a+b}
            </div>: <div>
                First Enter Both A and B
            </div>}
        </div>
    )
}

export default EventHandling;
