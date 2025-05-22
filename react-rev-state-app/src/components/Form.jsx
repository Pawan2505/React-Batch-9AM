import { useState } from "react"

function Form() {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(username)
        console.log(email)
    }


    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Enter Username.."
          onChange={(e)=>setUserName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Enter email.."
          onChange={(e)=>setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
}

export default Form;