import React from "react";
import Counter from "./components/Counter";
import ObjFun from "./components/ObjFun";
// import MyComponent from './components/MyComponent'

const App = () => {
  // let username = "Pawan";
  let x = 10;
  let person = {
    username: "Sejal",
    age: 15,
  };
  return (
    <div>
      {/* <MyComponent name="Pawan maurya"/> */}
      {/* <Counter name={person.username} age={person.age} /> */}
      <ObjFun x={x} p={person} />
    </div>
  );
};

export default App;
