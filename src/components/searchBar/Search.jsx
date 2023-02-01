import Form from 'react-bootstrap/Form';
import { debounce } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getPropositions } from '../../fetchFunctions';
function SearchBar() {


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

    function searchMovie(title) {
        setPropositions([]);
        alert(title);
    }



    return (
        <>
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleKeywordChanged}
            />

        </>
    )
}

export default SearchBar;