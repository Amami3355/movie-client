import React, { useEffect } from 'react';
// import NavBar from "../components/NavBar";
// import Login from "../components/Login";
import Footer from '../components/footer/Footer';
import LoginForm from '../components/forms/LoginForm';
import AuthService from '../services/auth.service';

function Signin() {
  useEffect(() => {
    AuthService.getCsrfToken().then(data => {
      console.log(data.token);
      localStorage.setItem('csrf', data.token);
    });
  });
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

export default Signin;
