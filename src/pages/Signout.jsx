import { useEffect } from "react";

function Signout() {
    useEffect(
        () => {
            fetch('/api/auth/signout')
                .then(response => {
                    document.cookie = 'bezkoder=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                })
                .catch(error => { console.log(error) })
        }
        , [])
    return (
        <h1>See you later</h1>
    );
}

export default Signout;