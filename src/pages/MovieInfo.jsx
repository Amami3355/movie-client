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
function MovieInfo(props) {

    const [trailerPlaying, setTrailerPlaying] = useState(false);
    const [movie, setMovie] = useState({});
    const [value, setValue] = useState("");
    const user = AuthService.getCurrentUser();

    const { movieId } = useParams();

    const baseUrl = 'https://image.tmdb.org/t/p/'; // base URL for TMDb images
    const size = 'w500'; // size of the image


    const [comments, setComments] = useState([])

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





    useEffect(() => {
        CommentService.getMovieComments(movieId)
            .then(res => { setComments(res) })
            .catch(error => setComments([]))


        getMovieById(movieId).then(movie => setMovie(movie))
    }, [movieId, value])


    function PlayTrailer() {
        setTrailerPlaying(true);
    }

    const InfoStyle = {
        position: 'relative',
        margin: 'auto',
        top: 100,
        display: 'block'
    }



    return (
        <>
            <Menu />
            <div style={InfoStyle}>


                <InfoMovie movie={movie} />

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
                                        comments.map(comment => (
                                            <div className="d-flex media">
                                                <a className="float-none" href="#"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></a>
                                                <div className="flex-grow-1 ms-3">
                                                    <h4 className="media-heading">John Doe</h4>
                                                    <p>{comment.text}</p>
                                                    <ul className="d-inline list-unstyled list-inline media-detail float-none">
                                                        <li className='list-inline-item'>27/02/2014</li>
                                                        <li className='list-inline-item'>13</li>
                                                    </ul>
                                                    <ul className="d-inline list-unstyled list-inline media-detail float-end">
                                                        <li className='list-inline-item'><a href="">Like</a></li>
                                                        <li className='list-inline-item'><a href="">Reply</a></li>
                                                    </ul>
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