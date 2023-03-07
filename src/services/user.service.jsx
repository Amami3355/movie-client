import axios from "axios";
import AuthHeader from "./auth-header";
import AuthService from "./auth.service";


const API_URL = '/api/test';
const jwt = AuthService.getCurrentUser();

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
    return axios.post('/users/add-to-watchlist',
        { "movieId": movieId },
        {
            headers: { Authorization: jwt, "Content-Type": "multipart/form-data" }
        })
        .then(response => { console.log(response); return response })
}

function getWatchList() {

    return axios.get('/users/get-watchlist',
        {
            headers: { Authorization: jwt, "Content-Type": "multipart/form-data" }
        })
        .then(response => { console.log(response); return response.data })
}

function updateUser(id, firstName, lastName) {
    return axios.post('/users/update',
        { "id": id, "first_name": firstName, "last_name": lastName },
        {
            headers: { Authorization: jwt, "Content-Type": "multipart/form-data" }
        }
    ).
        then(response => { alert(response.data); return response.data })
}

// function test() {
//     return axios.post('/users/test',

//         {
//             headers: { Authorization: jwt, "Content-Type": "multipart/form-data" }
//         })
//         .then(response => { console.log(response); return response })
// }

function uploadImage(file, id) {
    return axios.post('/users/upload/' + id, file,
        {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
}

function getImage(id) {
    // alert('get image')
    return axios.get('/users/get/image/' + id)
        .then(response => { return response.data })
        .catch(error => { console.log(error) })
}

function sendEmailToChangePassword(username) {
    debugger
    return axios.post('users/send-password-token/' + username)
        .catch(error => console.log(error))
}

const UserService = {
    getPublicContent,
    getUserBoard,
    getAdminBoard,
    getUserByjwt,
    addMovieToWatchList,
    getWatchList,
    updateUser,
    uploadImage,
    getImage,
    sendEmailToChangePassword
}

export default UserService