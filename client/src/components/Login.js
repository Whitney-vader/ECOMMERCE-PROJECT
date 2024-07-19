import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };

    fetch('/auth/login', requestData)
      .then((res) => res.json())
      .then((data) => {
        login(data.access_token);
        navigate('/home');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container lm_main">
      <div className="row justify-content-center align-items-center">
        <div className="form lm_form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

