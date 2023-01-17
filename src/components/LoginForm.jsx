// import React, { useState } from 'react';

import './formStyle.css';
const LoginForm = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform authentication logic here
  };

  return (
    <form className='login-form' action="/signin" method="post">
      <div className="form-group">
        <label for="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="Enter email" required />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" required />
      </div>
      <button type="submit" onSubmit={handleSubmit}>Sign In</button>
      <a href="/signup" className="sign-in-link">Create an account</a>
    </form>
  );
}

export default LoginForm;
