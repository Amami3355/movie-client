import { useEffect } from "react";
import AuthService from "../services/auth.service";

function Signout() {
    useEffect(
        () => {
            // fetch('/api/auth/signout')
            //     .then(response => {
            //         document.cookie = 'bezkoder=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            //     })
            //     .catch(error => { console.log(error) })



            AuthService.logout().then(message => console.log(message));

        }
        , [])
    return (
        <h1>See you later</h1>
    );
}

export default Signout;