import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ModalApp from "../Modal/modal.component";
import Col from "react-bootstrap/Col";

import "./card.style.css";

// import { Container } from './styles';

export const CardComponent = props => (
  <Col md='6' sm='12' lg='3'>
    <Card
      bg="light"
      text="dark"
      border="dark"
      className=" card mb-5"
    >
    
      <Card.Img variant="top" src={props.anime.photo} className='img'/>
      <Card.Body text="dark">
        <Card.Title>{props.anime.name}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{props.anime.originalRun}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <ModalApp anime={props.anime} />
        </Card.Body>
      </Card.Body>
    </Card>
  </Col>
);
