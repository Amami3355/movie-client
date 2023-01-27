
import { useEffect, useState } from "react";
import ReactPlayer from "react-player"

function Trailer(props) {

    const [movieTrailerUrl, setMovieTrailerUrl] = useState('');
    const baseTrailerUrl = 'https://www.youtube.com/watch?v=';

    useEffect(
        () => {
            fetch("https://api.themoviedb.org/3/movie/" + props.movieId + "/videos?api_key=41f24e687319483950191eafd27835f1")
                .then(result => result.json())
                .then(movie => {
                    setMovieTrailerUrl(baseTrailerUrl + movie.results[0].key);
                })
        }
    )

    return (

        <div>
            <ReactPlayer width="100%" height={400} url={movieTrailerUrl}
                playing controls={true}
                config={{
                    youtube: {
                        playerVars: {
                            origin: 'https://www.youtube.com',
                            controls: 2
                        }
                    }
                }} />
        </div>

    )
}

export default Trailer;


