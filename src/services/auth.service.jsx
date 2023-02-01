import axios from "axios";

const API_URL = '/api/auth';

const register = (username, password, password) => {
    return axios.post(API_URL + 'signup', {
        username,
        email,
        password
    })
}

const login = (username, password) => {
    return axios.post(API_URL + 'signin', {
        username,
        password
    }).then(
        response => {
            if (response.data.jwt) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data
        }
    )
        .catch(error => console.log(error))
}

const logout = () => {
    localStorage.removeItem('user');
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser
}

export default AuthService;

