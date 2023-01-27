import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Trailer from './Trailer';
import { fetchTopRatedMovies } from '../../fetchFunctions';
import "./styles.css"



const baseUrl = 'https://image.tmdb.org/t/p/'; // base URL for TMDb images
const size = 'w500'; // size of the image


function CarouselComponent(props) {
    const [showPosters, setShowPosters] = useState(true);
    const [showTrailer, setShowTrailer] = useState(false);
    const [index, setIndex] = useState(0);
    const [movieId, setMovieId] = useState('');

    const [movies, setMovies] = useState([]);


    useEffect(() => {

        fetchTopRatedMovies().then(movies => setMovies(movies.results));

    }, []);



    async function playTrailer(movie) {
        setShowPosters(showPosters => !showPosters)
        setShowTrailer(showTrailer => !showTrailer);
        setMovieId(movie.id);
    }

    function changeIndex(selectedIndex) {
        setIndex(selectedIndex)
    }

    function displayPosters() {
        setShowPosters(showPosters => !showPosters)
        setShowTrailer(showTrailer => !showTrailer);
    }

    function handleNext() {
        if (index === movies.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index => index + 1);
        }

        displayPosters();

    }

    function handlePrev() {
        if (index === 0) {
            setIndex(movies.length - 1);
        }
        else {
            setIndex(index => index - 1);
        }
        displayPosters()

    }

    return (

        <div style={{
            marginBottom: 40, width: '100%'
        }}>
            {showPosters &&
                <Carousel activeIndex={index} onSelect={changeIndex}
                    style={{ width: '100%', height: '60%', margin: 'auto' }}
                >



                    {movies.map((movie, index) => {
                        return (<Carousel.Item key={index} interval={null}>
                            <img alt={movie.title}
                                style={{ width: '100%', objectFit: 'cover', height: '400px', display: 'block' }}
                                src={baseUrl + size + movie.poster_path} />


                            <Carousel.Caption>
                                <h3>{movie.title}</h3>

                                <button
                                    className='btn btn-primary'
                                    onClick={() => { playTrailer(movie) }}>
                                    Bande d'annonce
                                </button>
                            </Carousel.Caption>
                        </Carousel.Item>)
                    })}
                </Carousel>

            }
            {showTrailer && <Carousel
                style={{ width: '100%', height: '60%', margin: 'auto' }}
                prevIcon={
                    <span aria-hidden="true" className="carousel-control-prev-icon"
                        onClick={handlePrev} />

                }
                nextIcon={
                    <span aria-hidden="true" className="carousel-control-next-icon"
                        onClick={handleNext}
                    />

                }
            >
                <Carousel.Item>
                    <Trailer movieId={movieId} />

                </Carousel.Item>
            </Carousel>}
        </div>
    )
}


export default CarouselComponent;