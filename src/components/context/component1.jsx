import {useState, useContext, useEffect} from 'react'
import {MyContext} from './myContext'

const Component1 = () =>{
    const {theme, user, updateContext} = useContext(MyContext)

    const handleThemeChange = () => {
        updateContext({ theme: theme == 'light' ? 'dark' : 'light' });
      };

    return (
        <>
            <h3>Context API</h3>
            <h4>Component 1</h4>
            <button onClick={handleThemeChange}>Toggle Theme</button>
        </>
    )
}

export default Component1;