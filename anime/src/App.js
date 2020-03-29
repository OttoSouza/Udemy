import React from "react";
import Navegation from "./component/Navegation/navegation.component";
import HomePage from "./component/HomePage/homepage.component";
import CardList from "./component/Card/cardlist.component";
import Container from "react-bootstrap/Container";
import "../src/component/Card/card.style.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      animes: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/OttoSouza/JsonServer/products")
      .then(response => response.json())
      .then(animes => this.setState({ animes: animes }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { animes, searchField } = this.state;
    const filterAnimes = animes.filter(anime =>
      anime.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <Container fluid className="App">
        <Navegation
          placeholder="Find your Anime"
          handleChange={this.handleChange}
        />

        <HomePage />

        <CardList animes={filterAnimes}></CardList>
        </Container>
       
      
    );
  }
}

export default App;
