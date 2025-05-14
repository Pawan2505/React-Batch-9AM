import React from "react";

// Functional component that receives props
const Greet = (props) => {
  console.log(props); // Logs the full props object

  return (
    <div>
      <h1>Hi, {props.username}</h1>
      <p>Age : {props.age}</p>
    </div>
  );
};

export default Greet;

/*

📝 Notes:

1. `props` means inputs given to the component from the parent.

2. We access values using `props.username` and `props.age`.

3. `console.log(props)` helps us see what data is coming in.

Example use:
<Greet username="Pawan Maurya" age="29" /> 

*/
