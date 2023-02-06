import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Trailer from "../components/carroussel/Trailer";
import Comment from "../components/comment/Comment";
import NavBar2 from "../components/NavBar2";
import { getMovieById } from "../fetchFunctions";
function Contact(props) {

    const [trailerPlaying, setTrailerPlaying] = useState(false);
    const [movie, SetMovie] = useState({});


    const baseUrl = 'https://image.tmdb.org/t/p/'; // base URL for TMDb images
    const size = 'w500'; // size of the image

    let location = useLocation();
    let query = new URLSearchParams(location.search);
    let id = query.get('id');



    useEffect(() => {
        getMovieById(id).then(movie => SetMovie(movie));
    }, [id])


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
            <NavBar2 />
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
                                                        Identificacion
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    123456789
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span class="text-primary"></span>
                                                        Name
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    Bootdey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span class="text-primary"></span>
                                                        Lastname
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    Bootstrap
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span class="text-primary"></span>
                                                        Username
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    bootnipets
                                                </td>
                                            </tr>


                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span class="text-primary"></span>
                                                        Role
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    Admin
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span class="text-primary"></span>
                                                        Email
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    noreply@email.com
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span class="text-primary"></span>
                                                        created
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    20 jul 20014
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        <span class="text-primary"></span>
                                                        Modified
                                                    </strong>
                                                </td>
                                                <td class="text-primary">
                                                    20 jul 20014 20:00:00
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

                            <Trailer movieId={id} />


                        </div>
                    }
                </div>
                <div className="container">
                    <Comment />
                </div>
            </div>
        </>

    )
}

export default Contact;