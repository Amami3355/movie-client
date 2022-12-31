import React from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";

function Home() {
    return (
        <div>
            <NavBar/>
            <h1>This is the home page</h1>
            <LoginForm/>
        </div>
    );
}

export default Home;