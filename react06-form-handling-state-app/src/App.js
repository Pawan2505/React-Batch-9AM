import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername('');
  }       
  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={username} onChange={handleChange} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App