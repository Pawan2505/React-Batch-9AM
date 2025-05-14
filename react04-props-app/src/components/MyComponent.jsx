import React from "react";

// Create a functional component
const MyComponent = () => {
  // Declare a variable with some data
  let username = "Pawan";

  // Return JSX that uses the variable
  return (
    <div>
      <h1>Name : {username}</h1>
    </div>
  );
};

// Export the component to use in other files
export default MyComponent;

/*

📝 Notes:

1. We created a functional component using an arrow function.

2. A JavaScript variable `username` was declared and used inside JSX using curly braces {}.

3. JSX allows us to write HTML-like code inside JavaScript, which makes UI building easier.

4. This is the first step to show how React can display dynamic data on the screen.

*/
