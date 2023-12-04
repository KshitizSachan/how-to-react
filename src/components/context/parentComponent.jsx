import { useContext } from "react";
import {MyContext} from "./myContext"

const Parent = ({children}) =>{
    const {theme} = useContext(MyContext)
    
    return (
        <div
          style={{
            textAlign: 'center',
            paddingTop: "2rem",
            paddingBottom: "4rem",
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#333" : "#fff",
          }}
        >
        {children}
        </div>
    )
}

export default Parent;