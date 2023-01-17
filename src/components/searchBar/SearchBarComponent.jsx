// import { InputGroup, FormControl } from 'react-bootstrap';
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { debounce } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getPropositions } from '../../fetchFunctions';
import { Card } from "react-bootstrap";
function SearchBarComponent() {
    // const style = { textAlign: 'center', margin: '50px 0' }

    const [propositions, setPropositions] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if (keyword !== '') {
            const data = debounce(getPropositions(keyword).then(movies => setPropositions(movies.results)));
            data();
        } else {
            setPropositions([]);
        }

    }, [keyword]);

    function handleKeywordChanged(e) {
        setKeyword(e.target.value);
    }

    function searchMovie(title){
        setPropositions([]);
        alert(title);
    }

    const propositionsStyle = {
        // position: 'relative',
        width: '60%',
        // display: 'block',
        listStyleType: 'none',
        borderRadius: '10px'
    }

    return (


        <div style={{ display: 'flex', position: 'absolute', left: 30, width: '100%', zIndex: 10, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%' }}>
                <input
                    type="text"
                    placeholder='Search'
                    style={{
                        display: 'block',
                        marginTop: 50,
                        marginBottom: 0,
                        width: '60%',
                        height: '40px',
                        borderRadius: '10px',
                        border: 'solid',
                        padding: '0 15px',
                        fontSize: '18px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    }}
                    onChange={handleKeywordChanged}
                />

                {propositions.length > 0 && (
                    <ul style={propositionsStyle}>
                        {propositions.splice(0, 5).map((movie, index) => (
                            <li style={{ background: 'white' }} key={index}>
                                <Card className="btn">
                                    <Card.Text onClick={() =>
                                        searchMovie(movie.title)}>{movie.title}</Card.Text>
                                </Card>
                                
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>




    );
}

export default SearchBarComponent;