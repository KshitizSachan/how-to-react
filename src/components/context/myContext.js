import React, {useState, createContext} from 'react'

const MyContext = createContext()

const MyContextProvider = ({children}) =>{
    const [contextValue, setContextValue] = useState({
        theme: 'light',
        user: {name : 'John'},
        updateContext: (newContext) => {
            setContextValue((prevContext) => ({ ...prevContext, ...newContext }));
          },
    })

    return (
        <MyContext.Provider value={contextValue} >{children}</MyContext.Provider>
    )
}

export {MyContext, MyContextProvider}