import axios from "axios"
import AuthService from "./auth.service"

async function createComment(movieId, text) {
    const response = await axios.post('/comments/create', {
        "movieId": movieId,
        "text": text
    },
        {
            headers: { 'Authorization': AuthService.getCurrentUser() }
        }

    )
    return response
}

async function getMovieComments(movieId) {
    console.log('hello')
    return axios.get('/comments/' + movieId)
        .then(response => {
            console.log(response.data);
            if (response.data)
                return response.data
            else return []
        })
        .catch(error => { console.log(error); return [] })
}

const CommentService = {
    createComment,
    getMovieComments
}

export default CommentService