import React from "react";
import NavBar from "../components/NavBar";
import Login from "../components/Login";


function Signin() {
    return (
        <div>
            <NavBar />
            <h1>This is the home page</h1>
            <Login />
        </div>
    );
}

export default Signin;