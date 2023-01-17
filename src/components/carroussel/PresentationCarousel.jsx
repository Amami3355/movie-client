import Carousel from 'react-elastic-carousel';
import './carouselStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';



export const PresentationCarousel = () => (
  <Carousel
    autoFocus={true}
    showThumbs={false}
    showStatus={false}
    useKeyboardArrows
    className="presentation-mode"
    prevButton={
        <button className="arrow left">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      }
      nextButton={
        <button className="arrow right">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      }
  >
    <div key="content-0" className="my-slide primary">
      <h1>Presentation mode</h1>
    </div>
    <div key="content-1" className="my-slide secondary">
      <h2>It's just a couple of new styles...</h2>
    </div>
    <div key="content-2" className="my-slide content">
      <p>...and the carousel can be used to present something!</p>
    </div>
    <div key="content-3" className="my-slide content">
      <img src="/assets/meme.png" />
    </div>
    <div key="content-4" className="my-slide content">
      <p>
        See the <a href="./examples/presentation/presentation.scss">source code</a>...
      </p>
    </div>
  </Carousel>
);
