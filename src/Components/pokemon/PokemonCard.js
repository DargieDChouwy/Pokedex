import React, { Component } from 'react'
import 'mdbreact/dist/css/mdb.css';
import styled from 'styled-components';
import axios from 'axios';
import '../../App.css';

  const Sprite = styled.img`
    width: 7em;
    height: 7em;
  `;

export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl:'',
    pokemonIndex:'',
    types:[],
    imageLoading: true
  }

  async componentDidMount () {
  const {name, url} = this.props; 
  const pokemonIndex = url.split("/")[url.split('/').length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;


  await axios.get('http://localhost:8000/api/v2/pokemon/'+pokemonIndex)
  .then(request => {
    this.setState({
    name: name,
    types: request.data.types,
    imageUrl: imageUrl,
    pokemonIndex: pokemonIndex,
    });
  });
}

  render() {
    return (
        <div className='card'>
            <div className='card-header'>
            <h1>{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1).toLowerCase()}</h1>
            {this.state.imageLoading ? (
              <h1>LOADING ...</h1>
            ) : null}
              <Sprite className='card-img-top rounded mx-auto' 
              onLoad={() => this.setState({imageLoading: false})}
              src={this.state.imageUrl}
              style={
                this.state.imageLoading ? null : {}
              }
              />
              {this.state.toManyRequests ? (<h6>
                <span className='badge badge-danger'>Too many request</span>
                </h6>) : null}
                <div className='card-body'>
               {this.state.types.map(element => (<h5 className={'elementType ' + element.type.name} key={element.type.name}>{element.type.name.charAt(0).toUpperCase() + element.type.name.slice(1).toLowerCase()}</h5>))}
                </div>
                  <div className='card-title'>
                    <h5>#{this.state.pokemonIndex}</h5>
                  </div>
            </div>
        </div>
    );
  }
}
