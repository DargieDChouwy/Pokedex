import React, { Component } from 'react';
import pokeball from './pokeball.png';
import chen from './chen.png';
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import {Col, Container, Row, Footer, Button, Input} from 'mdbreact';
import FooterPage from "./footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pokeball} style={{width: 80}} className="App-logo" alt="logo" />
          <h1 className="App-title">Pokedex</h1>
        </header>
          <br/>
          <Container>
              <img src={chen} style={{width: 200}} alt="chen" />
              <p>What pokemon do you want to see ?</p>
              <br/>
              <Input defaultValue="Pikachu" />
              <Button color="elegant">Search</Button>
              <FooterPage/>
          </Container>

      </div>
    );
  }
}

export default App;
