// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MovieCard(props) {
  const navigate = useNavigate();

  const baseUrl = 'https://image.tmdb.org/t/p/'; // base URL for TMDb images
  const size = 'w500'; // size of the image


  function handleClick(id) {
    alert('hello')
    navigate('/movie-info?id=' + id);
  }

  return (
    <div>
      <button className='btn' href='#' onClick={() => handleClick(props.movie.id)}>
        <Card style={{ width: '12rem', height: '18rem' }}  >
          <Card.Img height={230} variant="top" src={baseUrl + size + props.movie.poster_path}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: 12 }}>{props.movie.title}</Card.Title>
            {/* <Card.Text>
          {(props.movie.overview.split(" ").length > 20) ? 
          props.movie.overview.split(" ").splice(0, 20).join(" ") + " ..."
          : props.movie.overview + " ..."}
        </Card.Text> */}
            {/* <Button variant="primary" onClick={() => handleClick(props.movie.id)}>
              Go somewhere
            </Button> */}
          </Card.Body>
        </Card>
      </button>
    </div>
  );
}

export default MovieCard;