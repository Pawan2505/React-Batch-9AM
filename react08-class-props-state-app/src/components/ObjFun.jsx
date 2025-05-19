import React from 'react'

const ObjFun = (props) => {
  return (
      <div>
          <h1>{props.x}</h1>
      <h1>{props.p.username}</h1>
      <p>{props.p.age}</p>
    </div>
  );
}

export default ObjFun