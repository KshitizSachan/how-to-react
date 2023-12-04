import React, { useState, useEffect } from "react";

const DebounceExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    // Set up a timer to delay the execution of the debounced function
    const timerId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 1000); // Adjust the delay time as needed (e.g., 500 milliseconds)

    // Clear the timer on every inputValue change
    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h3>Debouncing</h3>
      <p>
        Debouncing is a technique used in web development to control the rate at
        which a particular function is called. In React, debouncing is often
        used to improve performance by preventing a function from being called
        too frequently, especially in response to user input events like typing.
      </p>
      <label>Type something:</label>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Debounced Value: {debouncedValue}</p>
    </>
  );
};

export default DebounceExample;
