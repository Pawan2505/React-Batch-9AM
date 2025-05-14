import React from 'react'

const Hello = ({username, age}) => {
  return (
        <div>
            <h1>Hi, {username} </h1>
            <p>Age : {age}</p>
        </div>
  )
}

export default Hello