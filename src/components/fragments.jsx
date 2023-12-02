

const Fragments = () =>{

    return (
        <>
            <h3>
                Fragments in React
            </h3>
            <p>
            Fragments prevent you from creating unnecessary nodes in react DOM.
            </p>
            <p>
            React fragments are a feature in React that allows you to group multiple 
            JSX elements without introducing an additional parent element in the DOM. 
            Normally, when you create JSX, you need to wrap your elements in a single 
            parent element. Fragments provide a way to group elements without adding 
            unnecessary nodes to the DOM. Prior to React 16.2, developers often 
            used div elements as wrappers to group elements together. However, 
            this approach could result in unnecessary div elements in the DOM, 
            leading to potential styling and layout issues.
            </p>
            <p>
            Fragments are represented by the syntax React.Fragment  or the shorthand opening and closing angle brackets with a similar closing component
            </p>
            
        </>
    )
}

export default Fragments;






