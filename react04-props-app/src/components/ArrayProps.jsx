import React from 'react'

const ArrayProps = (props) => {

    // const list = {
    //     listStyle : 'none'
    // }
    // console.log(props.fruits)
  return (
    <div>
      <h1>Fruits List</h1>
      {props.fruits.map((fruit, index) => (
        <li key={index} style={{listStyle:'none',marginLeft:'100px'}}>
          {fruit}
        </li>
      ))}
    </div>
  );
}

export default ArrayProps