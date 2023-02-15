import axios from "axios";
import AuthHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = '/api/test';

const getPublicContent = () => {
    return axios.get(API_URL + '/all')
}

const getUserBoard = () => {
    return axios.get(API_URL + '/user', { headers: AuthHeader() })

}

const getAdminBoard = () => {
    return axios.get(API_URL + '/admin', { headers: AuthHeader() })
}

const getUserByjwt = (jwt) => {
    return axios.get('/users/auth', { headers: { Authorization: jwt } })
}

const addMovieToWatchList = (movieId, jwt) => {
    alert('ksjdlkfjs')
    return axios.post('/users/add-to-watchlist', { "movieId": movieId },

        {
            headers: { Authorization: jwt, "Content-Type": "multipart/form-data" }
        }).then(response => { console.log(response); return response })
}

function getWatchList() {
    const jwt = AuthService.getCurrentUser();
    return axios.get('/users/get-watchlist',
        {
            headers: { Authorization: jwt, "Content-Type": "multipart/form-data" }
        }).then(response => { console.log(response); return response.data })
}

const UserService = {
    getPublicContent,
    getUserBoard,
    getAdminBoard,
    getUserByjwt,
    addMovieToWatchList,
    getWatchList
}

export default UserService