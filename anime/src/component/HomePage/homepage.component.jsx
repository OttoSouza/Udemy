import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './homepage.style.css'

// import { Container } from './styles';

const HomePage = () => (
  <Container className='mt-4'>
    <Row className="row">
      <Col className="col-12 text-center mt-5">
        <h1 className="display-3 mb-3 h1"> WellCome Guys</h1>
        <p className="pt-2 pb-2">If you wanna know about some animes, you are in the right place</p>
      </Col>
    </Row>
  </Container>
);

export default HomePage;
