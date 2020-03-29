import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './SlideJumbotron.scss'

// import { Container } from './styles';

const SlideInfo = () => 

<Jumbotron fluid className='jumbotron'> 
    <Container >
        <h1>Opa, Pessoa!!</h1>
        <p>Local desenvolvido para fãs de Harry Potter. Se você quer saber mais sobre os personagens dessa saga maravilhosa, esta no local certo!!</p>
    <Button className='btn info' href='http://wallpaperswide.com/harry_potter-desktop-wallpapers.html'>Mais Imagens</Button>
    </Container>

    <hr/>

    <Container >
        <h1>Imagens</h1>
        <p>Aqui estão algumas imagens de HP, se quiserem mais algumas é so clicarem no botao abaixo.</p>
    <Button className='btn danger' href='http://wallpaperswide.com/harry_potter-desktop-wallpapers.html'>Mais Imagens</Button>
    </Container>
</Jumbotron>







export default SlideInfo;
