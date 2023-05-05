import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../actions';
import Modal from '../components/modal/Modal';
// import Menu from '../components/menu/Menu';
// import AuthService from '../services/auth.service';
import UserService from "../services/user.service";

function Profile(props) {

    const [user, setUser] = useState({})
    const [firstName, setFirstName] = useState(props.user.firstName)
    const [lastName, setLastName] = useState(props.user.lastName)
    const [profileImage, setProfileImage] = useState(null)
    const [dataUrl, setDataUrl] = useState('')
    const [isModal, setModal] = useState(false);

    const profileStyle = {
        position: 'relative',
        margin: 'auto',
        // top: 100,
        display: 'block'
    }

    function hideAlert(e) {
        const alert = e.target.parentElement;
        alert.style.display = 'none'
    }

    function handleFistNameChange(e) {
        setFirstName(e.target.value)
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value)
    }

    useEffect(() => {
        setUser(props.user)
        UserService.getImage(props.user.id)
            .then(url => {
                console.log(url)
                setDataUrl(url)
            })
    }, [props.user])

    function handleUpdate() {
        UserService.updateUser(user.id, firstName, lastName).then(user => { console.log(user); setUser(user); props.updateUser(user) })
        // UserService.test()
    }

    function handleFileChange(event) {
        console.log(event.target.files[0])
        setProfileImage(event.target.files[0])
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function () {
                setDataUrl(reader.result);
                // Use the data URL as needed
                console.log(dataUrl);
            };

            reader.readAsDataURL(file);
        }
    }

    function handleSubmit() {
        const formData = new FormData();
        formData.append('image', profileImage);
        UserService.uploadImage(formData, props.user.id)
    }


    function handlePasswordChange(e) {
        e.preventDefault();
        UserService.sendEmailToChangePassword(user.username)
        setModal(true)
        // Navigate('/update-password')
    }


    return (
        <>
            <div style={profileStyle}>
                <div class="container bootstrap">
                    <h1 class="text-primary">Edit Profile</h1>
                    <hr />
                    <div class="row">
                        {/* left column  */}
                        <div class="col-md-3">
                            <form encType='multipart/form-data'>
                                <div class="text-center">
                                    <img src={
                                        (dataUrl === 'data:image/jpeg;base64,') ? require("../images/unknown.png") :
                                            dataUrl
                                    }
                                        class="avatar img-circle img-thumbnail" alt="avatar" />
                                    <h6>Upload a different photo...</h6>

                                    <input type="file" class="form-control" accept='image/*' onChange={handleFileChange} />
                                    <br />
                                    <input type="button" className="btn" value="Changer"
                                        onClick={handleSubmit} />
                                </div>
                            </form>
                        </div>

                        {/* edit form column  */}
                        <div class="col-md-9">

                            <div id='alert' class="alert alert-warning alert-dismissible fade show col-md-8" role="alert">
                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                <button onClick={hideAlert} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <h3>Personal info</h3>

                            <form class="form-horizontal">
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">First name:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" name="first_name" onChange={handleFistNameChange} value={firstName} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Last name:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" name="last_name" onChange={handleLastNameChange} value={lastName} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">User name:</label>
                                    <div class="col-lg-8">
                                        <div className='row'>
                                            <div className='col-10'>
                                                <input class="form-control" type="text" name="user_name" value={user.username} disabled />
                                            </div>
                                            <div className='col-2'>
                                                <Link to='/change-password' className='btn'>Update</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Email:</label>
                                    <div class="col-lg-8">
                                        <div className='row'>
                                            <div className='col-10'>
                                                <input class="form-control" type="text" name="email" value={user.email} disabled />
                                            </div>
                                            <div className='col-2'>
                                                <Link to='/change-password' className='btn'>
                                                    {/* <button type='button' className='btn' style={{ display: 'inline-block' }}>Update</button> */}
                                                    Update
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Mot de passe:</label>
                                    <div class="col-lg-8">
                                        <div className='row'>
                                            <div className='col-10'>
                                                <input class="form-control" type="password" name="email" value="********" disabled />
                                            </div>
                                            <div className='col-2'>
                                                <button className='btn' onClick={handlePasswordChange}>
                                                    Update **
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                            <div class="col-lg-8">
                                <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isVisible={isModal}
                message="Vérifiez votre email pour changer le mot de passe"
                onClose={() => setModal(false)}
            />
        </>
    )

}

const mapStateToProps = state => {
    return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => {
            dispatch(login(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);