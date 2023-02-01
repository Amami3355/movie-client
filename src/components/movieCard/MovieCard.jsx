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
    <div key={props.index}>
      <button className='btn' href='#' onClick={() => handleClick(props.movie.id)}>
        <Card height={250} >
          <Card.Img height={200} variant="top" src={baseUrl + size + props.movie.poster_path}
          />
          {/* <Card.Body>
            <Card.Text height={20} style={{ fontSize: 7 }}>{props.movie.title}</Card.Text>
            
          </Card.Body> */}
        </Card>
      </button>
    </div>
  );
}

export default MovieCard;