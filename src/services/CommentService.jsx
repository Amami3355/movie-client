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

function deleteCommentById(commentId) {
    console.log('delete')
    return axios.post('/comments/delete/' + commentId, { "id": commentId },

        {
            headers: { 'Authorization': AuthService.getCurrentUser() }
        }).then(response => { console.log(response); return response })
}

const CommentService = {
    createComment,
    getMovieComments,
    deleteCommentById
}

export default CommentService