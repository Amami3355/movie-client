import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Search from './searchBar/Search'

function NavBar2() {
    const [isConnected, setIsConnected] = useState(false);


    useEffect(() => {
        // console.log(jwt);
        const cookies = document.cookie.split(';');
        const keyValuePairs = cookies.map(cookie => cookie.split('='));
        const cookie = keyValuePairs[0][0];
        const cookieObject = keyValuePairs.reduce((acc, [key, value]) => {
            acc[key.trim()] = value;
            console.log(value)
            return acc;
        }, {});
        console.log(cookie === '');
        setIsConnected((cookie));
    }, []);

    return (
        <>
            <div style={{ width: '100%', position: 'absolute', zIndex: 10 }}>
                <Navbar bg="light" expand='lg' className="mb-3" >
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
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
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                    // id={`offcanvasNavbarDropdown-expand-lg`}
                                    >
                                        {(!isConnected) &&
                                            <NavDropdown.Item href="signin">
                                                Connection
                                            </NavDropdown.Item>}

                                        {(isConnected) &&
                                            <NavDropdown.Item href="signout">
                                                Déconnexion
                                            </NavDropdown.Item>}
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="signin">
                                            Connection
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            Something else here
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Search />

                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default NavBar2;