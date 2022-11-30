import React, { useState } from "react";


export const Counter = () => {
    const [count, setCount] = useState(0);
    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => setCount(count - 1);
    return (
      <div>
        <h2>Counter Book App</h2>
        <p>List of books in the catalogue</p>
        <p>Current count: <strong>{count}</strong></p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
}