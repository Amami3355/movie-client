import { useEffect } from "react";
import Menu from "../components/menu/Menu";
import AuthService from "../services/auth.service";

function Signout() {
    useEffect(
        () => {
            AuthService.logout().then(message => console.log(message));
        }
        , [])
    return (
        <div>
            <Menu />
            <br /><br /><br /><br />
            <h1>See you later</h1>
        </div>
    );
}

export default Signout;