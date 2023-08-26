import React, { useState } from 'react';

function ContactUs() {
  // State to store form input values
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle message input change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle the form submission,
    // such as sending the email and message to a server.
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
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
          <label>Message:</label>
          <textarea
            className="form-control"
            value={message}
            onChange={handleMessageChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
