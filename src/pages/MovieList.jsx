import { useState } from "react";
import { useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom"
import Menu from "../components/menu/Menu";
import MovieCard from "../components/movieCard/MovieCard";
import { getActionMovies, fetchTrendingMovies, getAdventureMovies } from '../fetchFunctions.js'

function MovieList() {
    const [movies, setMovies] = useState([])
    const [pageIndex, setPageIndex] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    // const [genre, setGenre] = useState('');
    const { genre } = useParams();

    useEffect(() => {
        fetchData(genre, pageIndex)
    }, [pageIndex])


    function fetchData(newGenre, index) {
        if (newGenre === 'action') {
            getActionMovies(index).then(result => { setMovies([...movies, ...result.results]) })
        }
        if (newGenre === 'trending') {
            fetchTrendingMovies(index).then(result => { setMovies([...movies, ...result.results]) })
        }
        if (newGenre === 'aventure') {
            getAdventureMovies(index).then(result => { setMovies([...movies, ...result.results]) })
        }
    }

    function fetchInitialData(newGenre) {
        if (newGenre === 'action') {
            getActionMovies().then(result => { setMovies(result.results) })
        }
        if (newGenre === 'trending') {
            fetchTrendingMovies().then(result => { setMovies(result.results) })
        }
        if (newGenre === 'aventure') {
            getAdventureMovies().then(result => { setMovies(result.results) })
        }
    }

    useEffect(() => {
        setPageIndex(1)
        fetchInitialData(genre)

    }, [genre])


    // .images-list {
    //     display: grid;
    //     grid-gap: 10px;
    //     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    //     grid-auto-rows: 250px;
    //     margin: 0 auto;
    //   }

    const style = {
        display: 'grid',
        gridGap: '10px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridAutoRows: '250px',
        margin: '0 auto'
    }





    return (
        <div style={{ minHeight: '100%', position: 'relative' }}>

            <Menu />
            <br /><br /><br /><br /><br />
            <div className="container">

                {/* <div className="row justify-content-center"> */}

                <InfiniteScroll
                    dataLength={movies.length}
                    next={() => { setPageIndex(pageIndex + 1) }}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                ><div style={style}>
                        {
                            movies.map((movie, key) => <div key={key} style={{ width: 200 }} > <MovieCard movie={movie} /></div>)
                        }
                    </div>
                </InfiniteScroll>
                {/* </div> */}

            </div>

        </div >
    )
}

export default MovieList;