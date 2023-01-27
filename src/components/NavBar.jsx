import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {


    return (
        <div style={{
            zIndex: 10, position: 'absolute', width: '100%'
        }}>
            <Navbar bg="light" expand="lg" tabIndex={-1}>
                <Container>
                    <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                        <NavDropdown title="Categories" id="basic-nav-dropdown" className="justify-content-center">
                            <NavDropdown.Item href="#"></NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Science Fiction
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">Drama</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Comédie
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav>
                            <NavDropdown title="Categories" id="basic-nav-dropdown" className="justify-content-center">

                                <div></div>

                            </NavDropdown>

                            <Nav.Link href='signin' className='justify-content-end'>
                                <div> Connection </div>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default NavBar;