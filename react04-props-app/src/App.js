import React from 'react'
import ArrayProps from './components/ArrayProps';
// import NewComponent from './components/NewComponent';
// import Hello from './components/Hello'
// import Greet from './components/Greet'
// import MyComponent from './components/MyComponent'

const App = () => {
  // let username = "Pawan";
  // let age = 25;
  // let salary = 999;

  let fruits = ['Apple','Banana','papaya','Orange','Mango']
  return (
    <div>
      {/* <MyComponent/> */}
      {/* <Greet username="Pawan Maurya" age="29"/> */}
      {/* <Hello username="Pawan Maurya" age="22" /> */}

      {/* <NewComponent name={username} age={age} salary={salary} /> */}

      <ArrayProps fruits={fruits} />
    </div>
  );
}

export default App