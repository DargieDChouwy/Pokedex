import React, { Component } from 'react'
import 'mdbreact/dist/css/mdb.css';
import styled from 'styled-components';
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
    imageLoading: true,
    toManyRequests: false
  }

componentDidMount () {
  const {name, url } = this.props; 
  const pokemonIndex = url.split("/")[url.split('/').length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

  this.setState({
    name: name,
    imageUrl: imageUrl,
    pokemonIndex: pokemonIndex
    });
}

  render() {
    return (
        <div className='card'>
            <div className='card-header'><h1>{this.state.name}</h1>
            {this.state.imageLoading ? (
              <h1>LOADING</h1>
            ) : null}
              <Sprite className='card-img-top rounded mx-auto' 
              onLoad={() => this.setState({imageLoading: false})}
              onError={() => this.setState({toManyRequests: true})}
              src={this.state.imageUrl}
              style={
                this.state.toManyRequests ? { } :
                this.state.imageLoading ? null : {}
              }
              />
              {this.state.toManyRequests ? (<h6>
                <span className='badge badge-danger'>Too many request</span>
                </h6>) : null}
                <div className='card-body'>
                </div>
                  <div className='card-title'>
                    <h5>{this.state.pokemonIndex}</h5>
                  </div>
            </div>
        </div>
    );
  }
}
