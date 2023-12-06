import useToggle from "./useToggle";

const CustomHook = () =>{
    const [state, toggle] = useToggle()

    return (
        <>
            <h3>Custom Hooks</h3>
            <p>Custom hooks are functions that allow you to reuse stateful logic 
            across multiple components. Custom hooks follow the naming convention
             of being prefixed with "use" and can use existing React hooks to 
             manage state, side effects, and more.</p>
             <button onClick={toggle}>Click to use custom hook</button>
             {state && (
                <div>Hook used successfully</div>
             )}
             <h3>Side effects in react</h3>
             <p>side effects refer to any behavior or operation that happens in 
             a component that is not directly related to rendering. Side effects 
             commonly include data fetching, subscriptions, manual DOM 
             manipulations, and other interactions with the outside world.</p>
        </>
    )
}

export default CustomHook;