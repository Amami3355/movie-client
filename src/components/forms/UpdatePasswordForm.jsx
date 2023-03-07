// import React, { useState } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './formStyle.css';
import AuthService from '../../services/auth.service';
import { AxiosError } from 'axios';
import { connect } from 'react-redux';
import Modal from '../modal/Modal';
import ValidationService from '../../services/ValidationService';
import PasswordService from '../../services/PasswordService';


const UpdatePasswordForm = (props) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const navigate = useNavigate();
    const [isModal, setModal] = useState(false);
    // const { usernameToken } = useParams();



    function handleNewPasswordChange(e) {
        setNewPassword(e.target.value);
    }

    function handleConfirmedPasswordChange(e) {
        setConfirmedPassword(e.target.value);
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
        alert('kkkk')
        if (ValidationService.validatePassword(newPassword)
            && ValidationService.validatePassword(confirmedPassword)
            && newPassword === confirmedPassword) {
            debugger
            PasswordService.changePassword(props.usernameToken, newPassword, confirmedPassword)
                .then((data) => {
                    if (data instanceof AxiosError) {
                        throw new Error('user name ou mot de passe incorrects')
                    } else {
                        console.log(data)

                        setModal(true)
                    }
                })
                .then(data => alert(data))
                .catch((error) => { alert(error) });
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
                    <label for="newPassword">Nouveau mot de passe</label>
                    <input type="text"
                        value={newPassword}
                        id="newPassword" name="newPassword"
                        onChange={handleNewPasswordChange}
                        placeholder="Nouveau mot de passe" required />
                </div>
                <div className="form-group">
                    <label for="ConfirmedPassword">Confirmer mot de passe</label>
                    <input type="password"
                        value={confirmedPassword}
                        id="ConfirmedPassword" name="ConfirmedPassword"
                        onChange={handleConfirmedPasswordChange}
                        placeholder="Nouveau mot de passe" required />
                </div>

                <input type="submit" onClick={handleSubmit} value="Confirmer" />

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
                message="Mot de passe changé avec succès"
                onClose={() => navigate('/')}
            />

        </>
    );
}

const mapStateToPraps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToPraps)(UpdatePasswordForm);
