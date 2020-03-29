import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Slide from '../../components/Slider/Slide'
import './homepage.scss'

// import { Container } from './styles';

const HomePage = () =>
    <React.Fragment>
        <Container fluid className='homepage'>
            <Slide />
        </Container>
        <Container >
            <Row className='mb-5'>
                <Col className='principalContent'>
                    <h1 className='display-4'>Harry Mania</h1>
                    <p>Falando um pouco sobre os personagens da saga</p>
                </Col>
            </Row>

            <Row>
                <Col lg={3}>
                    <Nav variant="pills" id="navbarVertical" className='flex-column navpills'>
                        <Nav.Item>
                            <Nav.Link href="#hp">Harry Potter</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#hermione">Hermione</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#ronie">Ronie </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>

                <Col lg={9} >
                    <div data-spy="scroll" data-target="#navbarVertical" data-offset="0" className='scrollspySite mb-5'>
                        <h4 id="hp">Harry Potter</h4>
                        <p>udsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdjsfhsdkjfhsdkjfhsd
                            kljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdj
                            sfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfs
                            dhfkdjsfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdjsfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdjsfhsdkjfhsdkjfhsd
                            kljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdj
                            sfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfs
                    dhfkdjsfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdjsfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhs</p>
                        <h4 id="hermione">Hermione</h4>
                        <p>udsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdjsfhsdkjfhsdkjfhsd
                            kljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdj
                            sfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfs
                            dhfkdjsfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdjsfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdjsfhsdkjfhsdkjfhsd
                            kljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdj
                            sfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfs
                    dhfkdjsfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdjsfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhs</p>
                        <h4 id="ronie">Ronie</h4>
                        <p>udsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdjsfhsdkjfhsdkjfhsd
                            kljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdj
                            sfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfs
                            dhfkdjsfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdjsfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdjsfhsdkjfhsdkjfhsd
                            kljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdj
                            sfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfs
                    dhfkdjsfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhsudsfhsdufhsdfhsdfsdhfudshfdsfhsdkfsdhfkdjsfhsdkjfhsdkjfhsdkljhfsdkjlfhsdkjlfhs</p>


                    </div>
                </Col>
            </Row>

        </Container>
    </React.Fragment>;

export default HomePage;
