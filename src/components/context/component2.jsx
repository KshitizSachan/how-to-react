import {useContext} from 'react'
import {MyContext} from './myContext'
const Component2 = () =>{
    const {theme, user, updateContext} = useContext(MyContext)
    return (
        <>
            <h4>Component 2</h4>
            <p>Current Theme: {theme}</p>
            <p>Current User: {user.name}</p>
        </>
    )
}

export default Component2;