import React from 'react';
import {Navbar, Nav, NavDropdown, Badge} from 'react-bootstrap';

class MyNavbar extends React.Component {
    render(){ 
        return(
            <Navbar bg="white" expand="lg" sticky="top">
            <Navbar.Brand href="/"><h1><Badge variant="dark">M.Kanaan</Badge></h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            );
        }
    }

    export default MyNavbar;