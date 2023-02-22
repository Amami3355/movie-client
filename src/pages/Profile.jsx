import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import Menu from '../components/menu/Menu';
import AuthService from '../services/auth.service';
import UserService from "../services/user.service";

function Profile(props) {

    const [user, setUser] = useState({})
    const [firstName, setFirstName] = useState(props.user.firstName)
    const [lastName, setLastName] = useState(props.user.lastName)
    const [profileImage, setProfileImage] = useState(null)
    const [dataUrl, setDataUrl] = useState('')

    const profileStyle = {
        position: 'relative',
        margin: 'auto',
        top: 100,
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
                // console.log(url)
                setDataUrl(url)
            })
    }, [])

    function handleUpdate() {
        UserService.updateUser(user.id, firstName, lastName).then(user => { console.log(user); setUser(user); props.updateUser(user) })
        // UserService.test()
    }

    function handleFileChange(event) {
        console.log(event.target.files[0])
        setProfileImage(event.target.files[0])
    }

    function handleSubmit() {
        const formData = new FormData();
        formData.append('image', profileImage);
        UserService.uploadImage(formData, props.user.id)
    }

    return (
        <>
            <Menu />
            <div style={profileStyle}>
                <div class="container bootstrap">
                    <h1 class="text-primary">Edit Profile</h1>
                    <hr />
                    <div class="row">
                        {/* left column  */}
                        <div class="col-md-3">
                            <form>
                                <div class="text-center">
                                    <img src={
                                        (!dataUrl) ? require("../images/unknown.png") :
                                            dataUrl
                                    }
                                        class="avatar img-circle img-thumbnail" alt="avatar" />
                                    <h6>Upload a different photo...</h6>

                                    <input type="file" class="form-control" onChange={handleFileChange} />

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
                                        <input class="form-control" type="text" name="user_name" value={user.username} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Email:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" name="email" value={user.email} />
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