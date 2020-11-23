import React from 'react';
import {Navbar, Nav, NavDropdown, Badge} from 'react-bootstrap';

class MyNavbar extends React.Component {
    render(){ 
        return(
            <Navbar bg="white" expand="lg" sticky="top">
            <Navbar.Brand href="/"><h1><Badge variant="dark">M.Kanaan</Badge></h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="align-content-md-center">
            <Nav.Link href="#home"><h5>Home</h5></Nav.Link>
            <Nav.Link href="#work"><h5>Work</h5></Nav.Link>
            <Nav.Link href="#about"><h5>About</h5></Nav.Link>
            </Nav>

            <Nav className="ml-auto">
            <h5><NavDropdown title="Get in touch" id="basic-nav-dropdown">
            <NavDropdown.Item href="#contact">Contact form</NavDropdown.Item>
            </NavDropdown></h5>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            );
        }
    }

    export default MyNavbar;