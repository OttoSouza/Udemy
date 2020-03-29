import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CardComponent } from "./card.component";
import "./card.style.css";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import { Container } from './styles';

const CardList = props => (

  <CardDeck>
    <Row >
      {props.animes.map(anime => (
        <CardComponent key={anime.id} anime={anime} />
      ))}
    </Row>
  </CardDeck>

);
export default CardList;
