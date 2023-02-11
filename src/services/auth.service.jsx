import axios from "axios";

const API_URL = '/api/auth';

const register = (username, email, password) => {
    return axios.post(API_URL + '/signup', {
        username,
        email,
        password
    })
}

const login = (username, password) => {
    // Remove the current connected user
    if (localStorage.getItem('Authorization')) {
        localStorage.removeItem('Authorization')
    }

    //Connect with the new User with username and password
    return axios.post(API_URL + '/signin', {
        username,
        password
    }).then(
        response => {
            console.log(response)
            if (response.data.jwtCookie) {
                localStorage.setItem('Authorization', response.data.jwtCookie)
            }
            return response.data
        }
    )
        .catch(error => { console.log(error); return error })
}



const logout = () => {
    localStorage.removeItem('Authorization');
    return axios.post(API_URL + '/signout');
}



const getCurrentUser = () => {
    return localStorage.getItem('Authorization');
}

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser
}

export default AuthService;

