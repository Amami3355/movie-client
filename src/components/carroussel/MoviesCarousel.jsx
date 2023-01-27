import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import MovieCard from "../movieCard/MovieCard";
import { fetchTrendingMovies, getActionMovies, fetchFrenshMovies, getAdventureMovies } from "../../fetchFunctions";
// import fetchFrenshMovies from "../../fetchFunctions/fetchFrenshMovies";



function MoviesCarousel(props) {

    const breakPoints = [
        // { width: 1, itemsToShow: 1 },
        { width: 200, itemsToShow: 1 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 6 },
        { width: 992, itemsToShow: 8 },
        { width: 1200, itemsToShow: 10 },
    ];

    const [movies, setMovies] = useState([]);

    useEffect(
        () => {
            if (props.content === "frensh") {
                fetchFrenshMovies().then(movies => setMovies(movies.results));
            } else if (props.content === "action") {
                getActionMovies().then(movies => setMovies(movies.results));
            }
            else if (props.content === "adventure") {
                getAdventureMovies().then(movies => setMovies(movies.results));
            }
            else {
                fetchTrendingMovies().then(movies => setMovies(movies.results));
            }
        }, [props.content]);

    return (
        <div style={{ marginBottom: 40 }}>
            <Carousel breakPoints={breakPoints} pagination={false}>
                {
                    movies.map(
                        (movie) => {
                            return (
                                <MovieCard movie={movie} />
                            )
                        }
                    )
                }
            </Carousel>
        </div>
    )
}

export default MoviesCarousel;