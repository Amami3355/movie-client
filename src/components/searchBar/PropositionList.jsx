// import { debounce } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
// import { Card } from "react-bootstrap";
import { getPropositions } from "../../fetchFunctions";


function PropositionList(props) {

    const [propositions, setPropositions] = useState([]);


    useEffect(() => {
        if (props.keyword !== '') {
            // alert(props.keyword)
            getPropositions(props.keyword).then(movies => { setPropositions(movies.results) });

        } else {
            setPropositions([]);
        }
        // console.log(propositions)
    }, [props.keyword]);

    function searchMovie(title) {
        setPropositions([]);
        alert(title);
    }
    const propositionsStyle = {
        // position: 'relative',
        width: '60%',
        // display: 'block',
        listStyleType: 'none',
        borderRadius: '10px',
        position: 'absolute',
        zIndex: 10
    }

    return (
        <>

            {propositions.length > 0 && (
                <ul style={propositionsStyle}>

                    {propositions.splice(0, 5).map((movie, index) => (

                        <li style={{ background: 'white' }} key={index} >
                            <Card className="btn" >
                                <Card.Text onClick={() => searchMovie(movie.title)}>
                                    {movie.title}
                                </Card.Text>
                            </Card>

                        </li>
                    )
                    )
                    }
                    {/* {propositions.map(movie => (<li>hello</li>))} */}



                </ul>
            )
            }


        </>

    )
}

export default PropositionList