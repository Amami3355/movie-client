import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Image } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AuthService from '../services/auth.service';

// import Search from './searchBar/Search'
// import { debounce } from '@material-ui/core';
// import { getPropositions } from '../fetchFunctions';
import PropositionList from './searchBar/PropositionList.jsx';


function NavBar2() {
    const [isConnected, setIsConnected] = useState(false);



    const [keyword, setKeyword] = useState('');



    function handleKeywordChanged(e) {
        setKeyword(e.target.value);
    }





    useEffect(() => {
        const user = AuthService.getCurrentUser()
        if (user && user.jwt) {
            setIsConnected(true)
        } else {
            setIsConnected(false)
        }
    }, []);

    return (
        <>
            <div style={{ width: '100%', position: 'absolute', zIndex: 10 }}>
                <Navbar bg="light" expand='lg' className="mb-3" >
                    <Container fluid>


                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-lg`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start flex-grow-1 pe-3">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="#">Link</Nav.Link>
                                    <NavDropdown
                                        title="Genres">

                                        <NavDropdown.Item href="#">
                                            Aventure
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            Action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            Science Fiction
                                        </NavDropdown.Item>
                                    </NavDropdown>


                                </Nav>
                                <Form className="d-flex">
                                    {/* <Search /> */}
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"

                                        onChange={handleKeywordChanged}
                                    />

                                    <Button variant="outline-success">Search</Button>

                                </Form>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavDropdown title="Options" style={{ relative: 'absolute', right: 10 }}>

                                        {(!isConnected) &&
                                            <NavDropdown.Item href="signin">
                                                Connection
                                            </NavDropdown.Item>}

                                        {(isConnected) &&
                                            <NavDropdown.Item href="signout">
                                                Déconnexion
                                            </NavDropdown.Item>}
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/signup">
                                            S'enregistrer
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>

                            </Offcanvas.Body>

                        </Navbar.Offcanvas>
                        <Navbar.Brand href="#">
                            {(!isConnected) && <Image
                                width={25}
                                height={25}
                            />}
                            {(isConnected) && <Image
                                width={25}
                                height={25}
                            />}
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <PropositionList keyword={keyword} />

            </div>
        </>
    );
}

export default NavBar2;