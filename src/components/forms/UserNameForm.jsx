// import React, { useState } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './formStyle.css';
import AuthService from '../../services/auth.service';
import { AxiosError } from 'axios';
import { connect } from 'react-redux';
import { login } from '../../actions';
import Modal from '../modal/Modal';
import ValidationService from '../../services/ValidationService';



const UserNameForm = (props) => {
    const [username, setusername] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [isModal, setModal] = useState(false);



    function handleUserNameChange(e) {
        setusername(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }


    function hideAlert(e) {
        const alert = e.target.parentElement;
        alert.classList.remove('show')
        alert.classList.add('hide')
    }

    function showAlert(message) {
        const alert = document.getElementById('alert');
        const alertText = document.getElementById('alert-text')
        alertText.textContent = message;
        alert.classList.remove('hide')
        alert.classList.add('show')
    }



    const handleSubmit = (event) => {

        event.preventDefault();
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        if (ValidationService.validateUserName(username) && ValidationService.validatePassword(password)) {
            AuthService.login(username, password)
                .then((data) => {
                    if (data instanceof AxiosError) {
                        throw new Error('user name ou mot de passe incorrects')
                    } else {
                        console.log(data)
                        props.login(data)
                        // navigate('/')
                        setModal(true)
                    }
                })
                .then(() => { console.log(AuthService.getCurrentUser()) })
                .catch((error) => { showAlert(error) });
        }

        else {
            showAlert("Renseignez tous les champs obligatoires ...")
        }


    }

    return (
        <>
            <form className='login-form'
                method="post">
                <div className="form-group">
                    <label for="username">User name</label>
                    <input type="text"
                        value={username}
                        id="username" name="username"
                        onChange={handleUserNameChange}
                        placeholder="Enter email" required />
                </div>
                <div className="form-group">
                    <label for="username">Email</label>
                    <input type="text"
                        value={email}
                        id="email" name="email"
                        onChange={handleEmailChange}
                        placeholder="Enter email" required />
                </div>

                <input type="submit" onClick={handleSubmit} value="Sign In" />

                <a href="/signup" className="sign-in-link">Create an account</a>

                <div id='alert' class="alert alert-warning alert-dismissible fade show" role="alert">
                    <div id='alert-text'>
                        <strong>Erreur : </strong> User name ou bien mot de passe incorrects
                    </div>
                    <button onClick={hideAlert} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

                </div>
            </form>


            <Modal
                isVisible={isModal}
                message="Vous êtes connecté"
                onClose={() => navigate('/')}
            />

        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {
            dispatch(login(user))
        }
    }
}

export default connect(null, mapDispatchToProps)(UserNameForm);
