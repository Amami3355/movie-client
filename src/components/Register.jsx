import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

function Register() {


    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // const [alert, setAlert] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

    }, [username, password, email])


    function handleUserNameChange(e) {
        setusername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(username + password + email)
        AuthService.register(username, email, password)
            .then(message => { alert(message); navigate('/') })

    }

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
                    <label for="password">email</label>
                    <input type="email"
                        id="email" name="email"
                        onChange={handleEmailChange}
                        placeholder="email" required />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password"
                        id="password" name="password"
                        onChange={handlePasswordChange}
                        placeholder="Password" required />
                </div>
                <input type="submit" onClick={handleSubmit} value="Sign Up" />
                <a href="/signin" className="sign-in-link">login</a>
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

export default Register;