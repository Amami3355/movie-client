import React from "react";
// import NavBar from "../components/NavBar";
import Login from "../components/Login";
import Menu from "../components/menu/Menu";
import Footer from '../components/footer/Footer'

function Signin() {
    return (
        <div>
            <Menu />
            <br /><br /><br /><br />
            <h1>Login</h1>
            <Login />
            <Footer />
        </div>
    );
}

export default Signin;