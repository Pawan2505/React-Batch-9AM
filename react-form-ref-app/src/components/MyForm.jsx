import React, { useRef } from 'react'

const MyForm = () => {

    const usernameref = useRef('');
    const emailRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(usernameref.current.value);
        console.log(emailRef.current.value);
        
        usernameref.current.value = '';
        emailRef.current.value = '';    
    }

  return (
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter Username...' ref={usernameref} />
          <input type="email" placeholder='Enter Email...' ref={emailRef} />
          <button type='submit'>Save</button>
    </form>
  )
}

export default MyForm