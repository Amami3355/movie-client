import { useState } from 'react';
import { useEffect } from 'react';
import Menu from '../components/menu/Menu';
import AuthService from '../services/auth.service';
import UserService from "../services/user.service";

function Profile() {

    const [user, setUser] = useState({})

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

    useEffect(() => {
        const jwt = AuthService.getCurrentUser();
        UserService.getUserByjwt(jwt)
            .then(response => setUser(response.data))
    }, [])

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
                            <div class="text-center">
                                <img src={require("../images/unknown.png")} class="avatar img-circle img-thumbnail" alt="avatar" />
                                <h6>Upload a different photo...</h6>

                                <input type="file" class="form-control" />
                            </div>
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
                                        <input class="form-control" type="text" name="first_name" value={user.firstName} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Last name:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" name="last_name" value={user.lastName} />
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
                                <div class="col-lg-8">
                                    <input type="submit" className="btn" value="Update" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Profile;