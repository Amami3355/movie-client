import Form from 'react-bootstrap/Form';

function SearchBar() {
    return (
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
        />
    )
}

export default SearchBar;