// Method 1: Direct callback form inside button

// import React, { useState } from "react";

// const MyComponent = () => {
//   const [count, setCount] = useState(0); // create state

//   return (
//     <div>
//       <h1>Count : {count}</h1>

//       {/* Direct callback form inside button */}
//       <button onClick={() => setCount((prev) => prev + 1)}>
//         Click
//       </button>
//     </div>
//   );
// };

// export default MyComponent;



// Method 2

import React, { useState } from "react";

// Create a functional component
const MyComponent = () => {
  // Step 1: Declare a state variable using useState hook
  const [count, setCount] = useState(0); // count = 0 initially

  // Step 2: Define a function to update the state
  const increment = () => {
    setCount(count + 1); // increase count by 1
  };

  // Step 3: Return JSX that shows the state and button to update it
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Click</button>
    </div>
  );
};

// Step 4: Export the component
export default MyComponent;
