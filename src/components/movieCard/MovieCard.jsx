// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MovieCard(props) {
  // const navigate = useNavigate();

  const baseUrl = 'https://image.tmdb.org/t/p/'; // base URL for TMDb images
  const size = 'w500'; // size of the image


  // function handleClick(id) {
  //   navigate('/movie-info?id=' + id);
  // }

  return (
    <div key={props.index}>
      {/* <button className='btn' onClick={() => handleClick(props.movie.id)}> */}
      <Link to={'/movie-info/' + props.movie.id + '#top'}>
        <Card height={250} >
          <Card.Img height={200} variant="top" src={baseUrl + size + props.movie.poster_path}
          />

        </Card>
      </Link>
      {/* </button> */}
    </div>
  );
}

export default MovieCard;