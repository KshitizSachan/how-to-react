import { useState } from "react";


const useToggle = (currentState = false) =>{
    const [value, setValue] = useState(currentState);

    const toggle = () =>{
        setValue(!value);
    }

    return [value, toggle]
}

export default useToggle;



