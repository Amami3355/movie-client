// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './movieCard.css'

function MovieCard(props) {
  // const navigate = useNavigate();

  const baseUrl = 'https://image.tmdb.org/t/p/'; // base URL for TMDb images
  const size = 'w500'; // size of the image


  // function handleClick(id) {
  //   navigate('/movie-info?id=' + id);
  // }

  return (
    // <div key={props.index}>
    //   <Link to={'/movie-info/' + props.movie.id + '#top'}>
    //     <Card height={250} >
    //       <Card.Img height={200} variant="top" src={baseUrl + size + props.movie.poster_path}
    //       />

    //     </Card>
    //   </Link>
    // </div>
    <Link to={'/movie-info/' + props.movie.id + '#top'}>
      <figure class="hover-img">

        <img src={baseUrl + size + props.movie.poster_path} style={{ height: 200 }} />
        {/* <figcaption>
          <p>{props.movie.title}</p>
        </figcaption> */}

      </figure>
    </Link>
  );
}

export default MovieCard;