import React, { Component } from 'react';
import pokeball from '../../image/pokeball.png';
import '../../App.css';
import 'mdbreact/dist/css/mdb.css';
import FooterPage from "./footer";
import PokemonList from '../pokemon/PokemonList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pokeball} style={{width: 80}} className="App-logo" alt="logo" />
          <h1 className="App-title">Pokedex</h1>
        </header>
          <PokemonList />
         {/* <Container> */}
             {/* <img class="chen" src={chen} style={{width: 200}} alt="chen" /> */} {/* Ne pas utiliser du br si c'est pour modifier le contenu de la pagemais padding ou margin. Br uniquement pour la structure */} 
             {/* <p>Which pokemon do you want to see ?</p> 
              <Input defaultValue="" />
              <Button color="elegant">Search</Button>
          </Container> */}
          
          <FooterPage />
      </div>
    );
  }
}

export default App;
