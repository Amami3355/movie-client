import React from "react";
import { useParams } from "react-router-dom";
// import NavBar from "../components/NavBar";
// import Login from "../components/Login";
import Footer from '../components/footer/Footer'
import LoginForm from "../components/forms/LoginForm";
import UpdatePasswordForm from "../components/forms/UpdatePasswordForm";

function UpdatePassword() {
    const { usernameToken } = useParams('usernameToken')
    return (
        <div>

            <h1>Login</h1>
            <UpdatePasswordForm usernameToken={usernameToken} />
            <Footer />
        </div>
    );
}

export default UpdatePassword;