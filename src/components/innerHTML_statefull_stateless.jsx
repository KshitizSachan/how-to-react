
const InnerHTML = () =>{
    let HTMLcontent= `<p>This is some <strong>strong</strong> HTML content using dangerouslySetInnerHTML</p>`

    return (
        <>
            <h3>  InnerHTML in React  </h3>
            <div dangerouslySetInnerHTML={{ __html:HTMLcontent }} />

            <h3> Stateless vs Stateful components in react </h3>
            <p>
            In React, components are broadly categorized into two types: stateless 
            components (also known as functional components) and stateful 
            components (also known as class components). These distinctions are 
            related to how a component manages and interacts with data.
            </p>
            <p>
            Stateless components do not have their own internal state. They are 
            stateless because they don't manage or track changes in data over time.
            </p>
            <p>
            Stateless components do not have lifecycle methods (like componentDidMount, 
            componentDidUpdate, etc.), as they are just functions. However, with the 
            introduction of React Hooks in React 16.8, functional components can use hooks 
            like useState and useEffect to manage state and lifecycle-like behavior.
            </p>
        </>
    )
}

export default InnerHTML;