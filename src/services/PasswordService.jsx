// import AuthService from "./auth.service"
import axios from "axios"

const API_URL = '/users'



function changePassword(usernameToken, newPassword, confirmedPassword) {
    if (newPassword !== confirmedPassword) {
        alert('les mots de passes ne correspondent pas !')
        return;
    }
    const data = new URLSearchParams();
    data.append('newPassword', newPassword);
    data.append('confirmedPassword', confirmedPassword);


    return axios.put(API_URL + `/update-password/${usernameToken}`,
        data,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })


}



function validatePassword(password) {

}



const PasswordService = {
    changePassword,
    validatePassword
}

export default PasswordService