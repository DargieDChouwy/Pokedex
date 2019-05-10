import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';


export default class PokemonList extends Component {
  /*We are calling the API here*/
state = {
  url:'/pokemon/?offset=0&limit=151',
  pokemon: null
};
  
async componentDidMount() {
  const res = await axios.get(this.state.url);
  this.setState({ pokemon: res.data['results'] });
}

  render() {
    console.log(this.state.pokemon)
    return (
     <React.Fragment> {/*don't want to keep burying our content*/}
      {this.state.pokemon ? (<div>
        {
          this.state.pokemon.map(pokemon => (
            <PokemonCard 
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
              type={pokemon.types}
            />
          ))
        }
      </div>) : (<h1>Loading ...</h1>)}
     </React.Fragment> 
    );
  }
}
