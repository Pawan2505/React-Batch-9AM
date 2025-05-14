import React from "react";

// Functional component using props destructuring
const Hello = ({ username, age }) => {
  return (
    <div>
      <h1>Hi, {username}</h1>
      <p>Age : {age}</p>
    </div>
  );
};

export default Hello;

/*

📝 Notes:

1. Instead of writing `props.username`, we directly pulled values using destructuring: 
   → `({ username, age })`

2. Cleaner and shorter than using `props.` every time.

3. This works exactly the same as:
   const Hello = (props) => {
     props.username
     props.age
   }

Example usage:
 <Hello username="Pawan Maurya" age="22" />

*/
