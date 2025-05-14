import React from "react";

// Functional component using props destructuring
const NewComponent = ({ name, age, salary }) => {
  return (
    <div>
      <h1>Username : {name}</h1>
      <h2>Age : {age}</h2>
      <h3>Salary : {salary}</h3>
    </div>
  );
};

export default NewComponent;

/*

📝 Notes:

1. We are using props to pass data to this component.

2. Destructuring makes code cleaner: no need to write props.name, props.age etc.

3. This component is reusable — we can pass different data like:
<NewComponent name={username} age={age} salary={salary} />

4. This is the basic way to display dynamic values using props in React.

*/
