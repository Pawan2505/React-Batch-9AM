import React, { useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Click</button>
    </div>
  );
};

export default MyComponent;
