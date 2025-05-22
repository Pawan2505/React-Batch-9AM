import React, { useState } from 'react'

const MyForm = () => {
    const [data, setData] = useState({ username: '', email: '', password: '' })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    const handleChange = (e) => {
      const { name, value } = e.target;
        setData((preData) => (
          {...preData,[name]:value}
      ))
    }
  return (
    <form className="w-50 mt-5 m-auto border border-2 p-5" onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <label>Username</label>
              <input
                  name='username'
          type="text"
          className="form-control"
          placeholder="Enter username"
          value={data.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-2">
        <label>Email address</label>
              <input
                  name='email'
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-2">
        <label>Password</label>
              <input
                  name='password'
          type="password"
          className="form-control"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2 w-100">
        Submit
      </button>
    </form>
  );
}

export default MyForm