import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Trailer from "../components/carroussel/Trailer";
import NavBar2 from "../components/NavBar2";
import { getMovieById } from "../fetchFunctions";
function Contact(props) {

    const [trailerPlaying, setTrailerPlaying] = useState(false);

    const baseUrl = 'https://image.tmdb.org/t/p/'; // base URL for TMDb images
    const size = 'w500'; // size of the image

    let location = useLocation();
    let query = new URLSearchParams(location.search);
    let id = query.get('id');

    const [movie, SetMovie] = useState({});

    useEffect(() => {
        getMovieById(id).then(movie => SetMovie(movie));
    }, [id])


    function PlayTrailer() {
        setTrailerPlaying(true);
    }

    return (
        <div>
            <NavBar2 />
            <h1 style={{ textAlign: 'center', marginBottom: 20 }}>{movie.title}</h1>
            {!trailerPlaying &&
                <div style={{ position: 'relative' }}>

                    <img alt={movie.title}
                        style={{ width: '70%', margin: 'auto', objectFit: 'inherit', height: '400px', display: 'block' }}
                        src={baseUrl + size + movie.poster_path} />

                    <FontAwesomeIcon className="btn" icon={faPlayCircle}
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 50, height: 50 }}
                        onClick={PlayTrailer}
                    />
                </div>
            }

            {trailerPlaying &&
                <div style={{ position: 'relative', height: 400, width: '70%', margin: 'auto' }}>

                    <Trailer movieId={id} />


                </div>
            }
        </div>

    )
}

export default Contact;