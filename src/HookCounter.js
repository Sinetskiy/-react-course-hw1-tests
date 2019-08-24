import React, { useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return {count, increment, decrement};
};

export const HookCounter = () => {
  const {count, increment, decrement} = useCounter(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
