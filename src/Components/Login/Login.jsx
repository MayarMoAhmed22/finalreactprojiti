import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/Components/Login/Login', {
        email: email,
        password: password,
      });

      if (response.status === 200 && response.data.success) {
        navigate('../Products/Products'); // Redirect to the Products page
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center text-primary">Login Page</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/Registration">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

