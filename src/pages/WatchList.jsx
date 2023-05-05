import { useState } from "react";
import { useEffect } from "react"
import Menu from "../components/menu/Menu";
import MovieCard from "../components/movieCard/MovieCard";
import { getMovieById } from "../fetchFunctions";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

function MovieList() {
    const [movies, setMovies] = useState([])

    // async function transformMovies(movies){
    //     return 
    // }

    useEffect(() => {


        const jwt = AuthService.getCurrentUser();

        UserService.getUserByjwt(jwt)
            .then(response => { console.log(response.data); return response.data.watchedList })
            .then(movies => {
                console.log(movies)
                Promise.all(movies.map(movie => {
                    return getMovieById(movie.tmdbID)

                })).then(movies => { console.log(movies); setMovies(movies) })
            })




    }, [])

    return (
        <div style={{ minHeight: '100%', position: 'relative' }}>


            <div className="container">
                <div className="row justify-content-center">
                    {
                        movies.map(movie => <div className="col-3-md" style={{ width: 200 }} >
                            <div>
                                <MovieCard movie={movie} />
                                <div style={{ textAlign: 'center' }}><button className="btn">delete</button></div>
                                <hr />
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div >
    )
}

export default MovieList