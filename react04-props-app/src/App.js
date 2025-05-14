import React from "react";
import ArrayProps from "./components/ArrayProps";
// import NewComponent from './components/NewComponent';
// import Hello from './components/Hello'
// import Greet from './components/Greet'
// import MyComponent from './components/MyComponent'

const App = () => {
  // let username = "Pawan";
  // let age = 25;
  // let salary = 999;

  let fruits = ["Apple", "Banana", "Papaya", "Orange", "Mango"];

  return (
    <div>
      {/* <MyComponent /> */}
      {/* <Greet username="Pawan Maurya" age="29" /> */}
      {/* <Hello username="Pawan Maurya" age="22" /> */}
      {/* <NewComponent name={username} age={age} salary={salary} /> */}
      <ArrayProps fruits={fruits} />
    </div>
  );
};

export default App;

/*

📝 Notes:

1. This is the main component (`App`) where we import and use other components.

2. We created a `fruits` array and passed it as props to `ArrayProps` component.

3. Other components are commented out — you can enable them one by one for practice.

4. This file shows how to organize and test different components in one place.

*/
