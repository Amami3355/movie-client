import React from "react";
// import NavBar from "../components/NavBar";
// import Login from "../components/Login";
import Footer from '../components/footer/Footer'
import LoginForm from "../components/forms/LoginForm";

function Signin() {
    return (
        <div>

            <h1>Login</h1>
            <LoginForm />
            <Footer />
        </div>
    );
}

export default Signin;