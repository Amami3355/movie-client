import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Trailer from "../components/carroussel/Trailer";
// import Comment from "../components/comment/Comment";
import InfoMovie from "../components/InfoMovie";
import Menu from "../components/menu/Menu";
import { getMovieById } from "../fetchFunctions";
import AuthService from "../services/auth.service";
import CommentService from "../services/CommentService";
import UserService from "../services/user.service";
function MovieInfo(props) {

    const [trailerPlaying, setTrailerPlaying] = useState(false);
    const [movie, setMovie] = useState({});
    const [value, setValue] = useState("");
    const user = AuthService.getCurrentUser();

    const { movieId } = useParams();

    const baseUrl = 'https://image.tmdb.org/t/p/'; // base URL for TMDb images
    const size = 'w500'; // size of the image

    function addToWatchList() {
        UserService.addMovieToWatchList(movie.id, user);
    }

    const [comments, setComments] = useState([])
    const [Authuser, setUser] = useState({})

    async function handleSubmit(e) {
        if (user) {
            const text = document.getElementById('text').value

            CommentService.createComment(movieId, text)
                .then((response) => { setValue(text) });

            document.getElementById('text').value = "";
        } else {
            alert("Connect to be able to comment")
        }

    }

    function deleteComment(commentId) {
        alert('Estes vous sûr de vouloir supprimer ce commentaire ?')
        CommentService.deleteCommentById(commentId).then(response => { setValue(commentId) });
    }





    useEffect(() => {
        CommentService.getMovieComments(movieId)
            .then(res => { setComments(res) })
            .catch(error => setComments([]))


        getMovieById(movieId).then(movie => setMovie(movie))

    }, [movieId, value])

    useEffect(() => {
        UserService.getUserByjwt(user).then(response => setUser(response.data))
    }, [])


    function PlayTrailer() {
        setTrailerPlaying(true);
    }

    const InfoStyle = {
        position: 'relative',
        margin: 'auto',
        top: 100,
        display: 'block'
    }

    const inf_content = {
        border: '1px solid #DDDDDD',
        WebkitBorderRadius: 10,
        borderRadius: 10,
        boxShadow: '7px 7px 7px rgba(0, 0, 0, 0.3)'
    }





    return (
        <>
            <Menu />
            <div style={InfoStyle}>


                <div class="container" >
                    <div style={inf_content}>
                        <div class="row">
                            <div class="col-lg-4" style={{ textAlign: 'center' }}>
                                <img alt="" style={{ width: 300 }} src={baseUrl + size + movie.poster_path} data-original-title="Usuario" />

                            </div>
                            <div class="col-lg-6">
                                <h1><strong>{movie.title}</strong></h1><br />
                                <div class="table-responsive">
                                    <table class="table table-user-information">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span class="text-primary"></span>
                                                        Résumé
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    {movie.overview}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span class="text-primary"></span>
                                                        Langue originale
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    {movie.original_language}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span class="text-primary"></span>
                                                        Genres
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    {
                                                        (movie.genres) && movie.genres.map((genre) => genre.name).join(', ')
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span class="text-primary"></span>
                                                        Sociétés de productions
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    {
                                                        movie.production_companies && movie.production_companies.map((company) => company.name).join(', ')
                                                    }
                                                    {/* {movie.popularity} */}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span class="text-primary"></span>
                                                        Pays
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    {
                                                        movie.production_countries && movie.production_countries.map(country => country.name).join(', ')
                                                    }
                                                </td>
                                            </tr>


                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span class="text-primary"></span>
                                                        Casting
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    {
                                                        movie.credits && movie.credits.cast && movie.credits.cast.map(actor => actor.name).slice(0, 3).join(', ')
                                                    }
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5" >
                    {!trailerPlaying &&
                        <div style={{ position: 'relative', width: '100%' }}>

                            <img alt={movie.title}
                                style={{ width: '100%', margin: 'auto', objectFit: 'inherit', height: '400px', display: 'block' }}
                                src={baseUrl + size + movie.poster_path} />

                            <FontAwesomeIcon className="btn" icon={faPlayCircle}
                                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 50, height: 50 }}
                                onClick={PlayTrailer}
                            />
                        </div>
                    }

                    {trailerPlaying &&
                        <div style={{ position: 'relative', height: 400, width: '100%', margin: 'auto' }}>

                            <Trailer movieId={movieId} />


                        </div>
                    }

                    <button style={{ margin: '20px 0' }} onClick={addToWatchList} type="button" className="btn btn-primary">Ajouter à la watch list</button>
                </div>
                <div className="container">
                    <section className="content-item" id="comments">
                        <div className='container'>
                            <div className='row'>
                                <div className='col sm-8'>
                                    <form className='form'>
                                        <h3 className="float-none pl-5">New Comment</h3>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className="col-md-2 hidden-xs">
                                                    <img style={{ maxWidth: 100 }} className="media-object" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                                </div>
                                                <div class="container col-md-10 form-group">
                                                    <textarea class="form-control" id="text" name="text" placeholder="Type in your message" rows="5"></textarea>
                                                    <h6 class="float-end" id="count_message"></h6>
                                                    <button class="btn btn-info float-end" type="button"
                                                        onClick={handleSubmit}>Post New Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <h3> Comments</h3>
                                    {
                                        comments.map((comment, index) => (
                                            <div key={index} className="d-flex media">
                                                <a className="float-none" href="#"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></a>
                                                <div className="flex-grow-1 ms-3">
                                                    <h4 className="media-heading">{comment.user.username}</h4>
                                                    <p>{comment.text}</p>
                                                    <ul className="d-inline list-unstyled list-inline media-detail float-none">
                                                        <li className='list-inline-item'>27/02/2014</li>
                                                        <li className='list-inline-item'>13</li>
                                                    </ul>
                                                    {
                                                        (Authuser.username === comment.user.username) && (
                                                            <form className="d-inline list-unstyled list-inline media-detail float-end">
                                                                <li type="submit" className='list-inline-item'><div onClick={function () { deleteComment(comment.id); return false; }} className="btn text-danger mt-0 mb-0 pt-0 pb-0" href="">delete</div></li>
                                                            </form>
                                                        )}
                                                    {(Authuser.username !== comment.user.username) && (
                                                        <ul className="d-inline list-unstyled list-inline media-detail float-end">
                                                            <li className='list-inline-item'><a href="">Like</a></li>
                                                            <li className='list-inline-item'><a href="">Reply</a></li>
                                                        </ul>)
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }


                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>

    )
}

export default MovieInfo;