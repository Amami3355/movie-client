import React from "react";
import Footer from '../components/footer/Footer'
import ChangePasswordForm from "../components/forms/ChangePasswordForm";

function changePassword() {
    return (
        <div>

            <h1>Login</h1>
            <ChangePasswordForm />
            <Footer />
        </div>
    );
}

export default changePassword;