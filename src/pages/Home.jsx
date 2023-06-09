import React from 'react';
import CarouselComponent from '../components/carroussel/CarouselComponent';
import MoviesCarousel from '../components/carroussel/MoviesCarousel';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

function Home() {
  return (
    <div style={{ minHeight: '100%', position: 'relative' }}>
      <CarouselComponent />
      <h2 style={{ position: 'relative', left: 75 }}>Tendences</h2>
      <MoviesCarousel content='trending' />
      <h2 style={{ position: 'relative', left: 75 }}>Films Français</h2>
      <MoviesCarousel content='frensh' />
      <h2 style={{ position: 'relative', left: 75 }}>Action</h2>
      <MoviesCarousel content='action' />
      <h2 style={{ position: 'relative', left: 75 }}>Aventure</h2>
      <MoviesCarousel content='adventure' />
      <br />
      <br />
    </div>
  );
}

export default Home;
