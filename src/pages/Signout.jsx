import { useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../actions";
import Menu from "../components/menu/Menu";
import AuthService from "../services/auth.service";

function Signout(props) {
    useEffect(
        () => {
            AuthService.logout().then(response => { console.log(response); props.logout() });
        }
        , [])
    return (
        <div>

            <h1>See you later</h1>
        </div>
    );
}

const addDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}


export default connect(null, addDispatchToProps)(Signout);