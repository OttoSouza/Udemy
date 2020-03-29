import React from 'react';
import './Slide.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import HP_fire from '../../assets/img/HP_fire.jpg'
import Hp_Hermione from '../../assets/img/Hp_Hermione.jpg'
import HP7 from '../../assets/img/HP7.jpg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import SlideJumbotron from '../Slide-Info/SlideJumbotron'
import Container from 'react-bootstrap/Container'
// import { Container } from './styles';

function Slide(props) {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
  
    <Row>
      <Col lg={6} md={6}>
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="img"
          src={HP_fire}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Horwarts in fire</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="img"
          src={Hp_Hermione}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Harry Potter and Hermione</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="img"
          src={HP7}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
      </Col>

      <Col lg={6} md={6}>
      <SlideJumbotron/>
      </Col>

    </Row>


  );
}
export default Slide;
