import React from 'react';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Link</Nav.Link>
                    </Nav>
                    <NavDropdown title="Categories" id="basic-nav-dropdown" className="justify-content-center">
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
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
                        <NavLink href="#" className='justify-content-end'>Connection</NavLink>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;