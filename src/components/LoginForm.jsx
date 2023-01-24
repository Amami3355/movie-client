// import React, { useState } from 'react';
import { useState } from 'react';
import './formStyle.css';

const LoginForm = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');



  function handleUserNameChange(e) {
    setusername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function connectToServer() {
    fetch('http://localhost:8086/api/test/user')
      .then(response => { console.log(response) })
      .catch(error => { console.log("error") })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("kkkk")
    // Perform authentication logic here
    fetch('http://localhost:8086/api/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ "username": username, "password": password }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    })
      .then(response => {
        if (response.ok) {
          // connectToServer();
          console.log(response.headers)
          const cookies = response.headers.get("Set-Cookie");
          console.log(cookies);
          setAlert('success')
        } else {
          setAlert('failed')
        }
        return response.json()

      })
      .then(data => {
        console.log(data)

      })
      .catch(error => { console.error(error) });

  };

  return (
    <>
      <form className='login-form'
        method="post">
        <div className="form-group">
          <label for="username">User name</label>
          <input type="text"
            id="username" name="username"
            onChange={handleUserNameChange}
            placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="password"
            id="password" name="password"
            onChange={handlePasswordChange}
            placeholder="Password" required />
        </div>
        <input type="submit" onClick={handleSubmit} value="Sign In" />
        <a href="/signup" className="sign-in-link">Create an account</a>
      </form>
      {alert === 'success' &&
        <div className="login-form alert alert-success mt-3" role="alert">
          A simple success alert—check it out!
        </div>
      }
      {alert === 'failed' &&
        <div className="login-form alert alert-danger mt-3" role="alert">
          A simple success alert—check it out!
        </div>
      }
    </>
  );
}

export default LoginForm;
