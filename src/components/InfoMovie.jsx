import { useEffect } from "react";
import { useState } from "react";


function InfoMovie(props) {

    const baseUrl = 'https://image.tmdb.org/t/p/'; // base URL for TMDb images
    const size = 'w500'; // size of the image

    // const [movie, setMovie] = useState({})

    const inf_content = {
        border: '1px solid #DDDDDD',
        WebkitBorderRadius: 10,
        borderRadius: 10,
        boxShadow: '7px 7px 7px rgba(0, 0, 0, 0.3)'
    }

    // useEffect(
    //     () => {
    //         setMovie(props.movie)
    //     }, []
    // )

    return (
        <div class="container" >
            <div style={inf_content}>
                <div class="row">
                    <div class="col-lg-4" style={{ textAlign: 'center' }}>
                        <img alt="" style={{ width: 300 }} src={baseUrl + size + props.movie.poster_path} data-original-title="Usuario" />

                    </div>
                    <div class="col-lg-6">
                        <h1><strong>{props.movie.title}</strong></h1><br />
                        <div class="table-responsive">
                            <table class="table table-user-information">
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="text-primary"></span>
                                                Résumé
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            {props.movie.overview}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="text-primary"></span>
                                                Langue originale
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            {props.movie.original_language}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="text-primary"></span>
                                                Genres
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            {
                                                // props.movie.genres[0].name
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="text-primary"></span>
                                                Sociétés de productions
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            {/* {
                                                movie.production_companies.map(company => company.name).join(', ')
                                            } */}
                                            {props.movie.popularity}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="text-primary"></span>
                                                Pays
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            {/* {
                                                movie.production_countries.map(country => country.name).join(', ')
                                            } */}
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="text-primary"></span>
                                                Casting
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            {/* {
                                                movie.credits.cast.map(actor => actor.name).slice(0, 3).join(', ')
                                            } */}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default InfoMovie