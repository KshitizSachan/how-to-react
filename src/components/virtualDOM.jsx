
const virtualDom = () =>{
    return (
        <div>
        <h3>Virtual Dom</h3>
        <p>
        In React, the Virtual DOM (Document Object Model) is a programming concept and a performance optimization technique. 
        React uses a virtual representation of the DOM instead of directly interacting 
        with the actual browser's DOM. The virtual DOM is a lightweight copy of the 
        real DOM, maintained by React to improve efficiency when updating the user 
        interface.
        </p>
        <p>
        When a component's state or props change, React creates a new virtual DOM tree.
        React then compares the new virtual DOM tree with the previous one. This process is called "diffing," and 
        it involves finding the differences (or "diffs") between the two trees.
        </p>
        <p>
        The use of a virtual DOM allows React to optimize the updating process and improve the 
        performance of web applications. By minimizing direct manipulations of the real DOM and only 
        updating what is necessary, React can efficiently handle dynamic user interfaces with frequent 
        changes in state and props.
        </p>
        </div>
    )
}

export default virtualDom;