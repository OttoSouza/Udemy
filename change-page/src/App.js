import React from 'react';
import HomePage from './pages/homepage/HomePage'
import Navegation from './components/Nav/Navegeation'
import CardPersonagem from './components/Card-Personagem/PersonagemCard'
import Personagens from './pages/Personagens/Personagens'
import {Switch, Route} from 'react-router-dom'
import './App.css';

class App extends React.Component { 
  render() {
    return (
      <React.Fragment>
        <Navegation/>        
        <Switch>
          <Route exact path ='/' component={HomePage}/>
          <Route  path ='/personagens' component={Personagens}/>
        </Switch>
       
      </React.Fragment>
                                                                                         
    )
  }
}
export default App;
