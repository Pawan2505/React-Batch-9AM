import React from "react";

const ArrayProps = (props) => {
  // const list = {
  //     listStyle : 'none'
  // }
  // console.log(props.fruits)
  return (
    <div>
      <h1>Fruits List</h1>

      {props.fruits.map((fruit, index) => (
        <li key={index} style={{ listStyle: "none", marginLeft: "100px" }}>
          {fruit}
        </li>
      ))}
    </div>
  );
};

export default ArrayProps;

/*

📝 Notes:

1. We passed an array (fruits) as props to this component.

2. We used `.map()` to loop through each fruit and display it.

3. Each item has a `key` (index) — React needs it to track list changes.

4. We used inline CSS to remove bullets and add margin.

5. This is a common way to show list data dynamically using props.

Example Usage:
 <ArrayProps fruits={fruits} />

*/
