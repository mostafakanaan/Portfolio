import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import MyIcon from './MyIcon';

export default class MyNavbar extends React.Component {
    render() {
        return (
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
                        <MyIcon uri='https://facebook.com/SteveKanaan/' icon='fab fa-facebook' />
                        <MyIcon uri='https://instagram.com/_dermusti/' icon='fab fa-instagram' />
                        <span className='clickableIcon'>
                            <i className='far fa-envelope' onClick={() => { window.open('/#contact', '_self') }}></i>
                        </span>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}