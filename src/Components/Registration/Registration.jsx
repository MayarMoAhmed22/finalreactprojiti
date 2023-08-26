import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
  };

  return (
    <div className="container">
    <h2 className="text-center text-primary">Register Page</h2>
    <form onSubmit={handleSubmit}>
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
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={handleUsernameChange}
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
      <div className="form-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          className="form-control"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
      </div>
      <button
        className="btn btn-primary"
        type="submit"
      >
        Register
      </button>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </form>
  </div>
  );
}

export default Registration;
