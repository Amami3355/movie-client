import React from "react";
import NavBar from "../components/NavBar";
import SearchBarComponent from "../components/searchBar/SearchBarComponent";
import CarouselComponent from "../components/carroussel/CarouselComponent"
import MoviesCarousel from "../components/carroussel/MoviesCarousel"
import Footer from "../components/footer/Footer";


function Home() {
    return (
        <div style={{ minHeight: '100%', position: 'relative'}}>
            <NavBar />
            <SearchBarComponent />
            <br />
            {/* <CarouselComponent/> */}
            {/* <PresentationCarousel/> */}
            {/* <youtubeAutoplayWithCustomThumbs/> */}
            <CarouselComponent />
            <h2>Tendences</h2>
            <MoviesCarousel content="tending"/>
            <h2>Films Français</h2>
            <MoviesCarousel content="frensh"/>
            <h2>Action</h2>
            <MoviesCarousel content="action"/>
            <h2>Aventure</h2>
            <MoviesCarousel content="adventure"/>
            <br/><br/>
            <Footer/>

        </div>
    );
}

export default Home;