import React from "react";
import NavBar2 from "../components/NavBar2";
import CarouselComponent from "../components/carroussel/CarouselComponent"
import MoviesCarousel from "../components/carroussel/MoviesCarousel"
import Footer from "../components/footer/Footer";
import { useCookies } from "react-cookie";


function Home() {

    const [cookies, setCookie] = useCookies(['user']);


    return (
        <div style={{ minHeight: '100%', position: 'relative' }}>

            <NavBar2 cookies={cookies} />
            {/* <SearchBarComponent /> */}
            <br />
            {/* <CarouselComponent/> */}
            {/* <PresentationCarousel/> */}
            {/* <youtubeAutoplayWithCustomThumbs/> */}
            <CarouselComponent />
            <h2>Tendences</h2>
            <MoviesCarousel content="tending" />
            <h2>Films Français</h2>
            <MoviesCarousel content="frensh" />
            <h2>Action</h2>
            <MoviesCarousel content="action" />
            <h2>Aventure</h2>
            <MoviesCarousel content="adventure" />
            <br /><br />
            <Footer />

        </div>
    );
}

export default Home;