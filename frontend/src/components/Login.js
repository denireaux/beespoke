import React, { useState } from 'react';
import './Register.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    if (data.access) {
      localStorage.setItem('user', JSON.stringify(data));
    }
    console.log(data);
  };

  return (
    <form className="register-form" onSubmit={handleLogin}>
      <h3>Login</h3>
      <input className="form-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="form-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="form-button" type="submit">Login</button>
    </form>
  );
};

export default Login;
