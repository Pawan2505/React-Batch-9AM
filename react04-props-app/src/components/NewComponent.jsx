import React from 'react'

const NewComponent = ({name, age, salary}) => {
  return (
      <div>
          <h1>Username : {name}</h1>
          <h2>Age : {age}</h2>
          <h3>Salary : { salary}</h3>
    </div>
  )
}

export default NewComponent