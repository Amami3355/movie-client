import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Menu from "../components/menu/Menu";
import MovieCard from "../components/movieCard/MovieCard";
import { getActionMovies, fetchTrendingMovies, getAdventureMovies } from '../fetchFunctions.js'

function MovieList() {
    const [movies, setMovies] = useState([])
    const { genre } = useParams();

    useEffect(() => {
        console.log(genre)
        if (genre === 'action') {
            getActionMovies().then(result => { console.log(result.results); setMovies(result.results) })
        }
        if (genre === 'trending') {
            fetchTrendingMovies().then(result => { console.log(result.results); setMovies(result.results) })
        }
        if (genre === 'aventure') {
            getAdventureMovies().then(result => { console.log(result.results); setMovies(result.results) })
        }

    }, [genre])

    return (
        <div style={{ minHeight: '100%', position: 'relative' }}>

            <Menu />
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="row justify-content-center">
                    {
                        movies.map(movie => <div className="col-3-md" style={{ width: 200 }} > <MovieCard movie={movie} /></div>)
                    }
                </div>
            </div>

        </div >
    )
}

export default MovieList