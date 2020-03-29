import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Container } from './styles';

class CardPersonagem extends React.Component {

    constructor(){
        super()
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({characters: users}) )
    }

    render(){
        return(
            <div>
                {this.state.characters.map(character => (
                    <h1 key={character.id}> {character.name}</h1>
                ))}
            </div>
        )
    
    }
}

export default CardPersonagem;
