import NavBar2 from '../components/NavBar2';


function Profile() {

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

    return (
        <>
            <NavBar2 />
            <div style={profileStyle}>
                <div class="container bootstrap">
                    <h1 class="text-primary">Edit Profile</h1>
                    <hr />
                    <div class="row">
                        {/* left column  */}
                        <div class="col-md-3">
                            <div class="text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="avatar img-circle img-thumbnail" alt="avatar" />
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
                                        <input class="form-control" type="text" value="dey-dey" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Last name:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" value="bootdey" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">User name:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" value="" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Email:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" value="janesemail@gmail.com" />
                                    </div>
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