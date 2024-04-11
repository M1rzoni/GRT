import  { useState } from "react";
import "./style/Login.css";
import image from "../assets/tuzla-removebg-preview.png";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = () => {
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      window.location.href = '/dashboard';
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="container">
      <div className="login-container">
        <img src={image} alt="Tuzla logo" />
        <h2>Login</h2>
        <input onChange={handleUsernameChange} value={username} placeholder="Username" type="text" />
        <input onChange={handlePasswordChange} value={password} placeholder="Password" type="password" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
