import React from 'react';
import './Navegation.style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'


// import { Container } from './styles';

const Navegeation = () =>

    <Container fluid>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar">
            <Navbar.Brand href="#home">Harry Potter</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navmenu">
                    <LinkContainer to='/'>
                    <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/personagens'>
                    <Nav.Link>Personagens</Nav.Link>                    
                    </LinkContainer>
                    <LinkContainer to='#'>
                    <Nav.Link>Sobre</Nav.Link>
                    </LinkContainer>
                    
                    <NavDropdown title="Social Media">
                        <NavDropdown.Item>FaceBook</NavDropdown.Item>
                        <NavDropdown.Item>Twitter</NavDropdown.Item>
                        <NavDropdown.Item>Instagram</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <Button variant="outline-light">Entrar</Button>
                    <Button variant="outline-info" className="ml-3">Cadastra-se</Button>

                </Form>
            </Navbar.Collapse>
        </Navbar>
    </Container>
export default Navegeation;
