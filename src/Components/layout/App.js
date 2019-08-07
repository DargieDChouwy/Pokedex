import React, { Component } from 'react';
import pokeball from '../../image/pokeball.png';
import chen from '../../image/chen.png'
import '../../App.css';
import 'mdbreact/dist/css/mdb.css';
import FooterPage from "./footer";
import PokemonList from '../pokemon/PokemonList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        showComponent: false,
    };
    this.showPokemonList = this.showPokemonList.bind(this);
  }

  showPokemonList(){
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pokeball} style={{width: 80}} className="App-logo" alt="logo" />
           <h1 className="App-title">Pokedex</h1>
        </header>
        <div className="container">
          <div>
            <img src={chen} className="chen" alt="chen" />
          </div>
           <button onClick={this.showPokemonList}>View first pokemon generation</button>
        </div> 
           {
             this.state.showComponent ? <PokemonList /> : null
           }  
          <FooterPage />
      </div>
    );
  }
}

export default App;
