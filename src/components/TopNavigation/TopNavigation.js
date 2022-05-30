import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

class TopNavigation extends Component {
    render() {
        return (
            <Fragment>
                <Navbar collapseOnSelect fixed={"top"} expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                                <Link to="/blog">Blog</Link>
                                <Link to="/contact">Contact</Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;