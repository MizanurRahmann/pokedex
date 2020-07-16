import React from 'react';
import { Switch, Route } from 'react-router-dom'
import PokemonList from './components/Pokemons/PokemonList';
import Default from './components/Layouts/Default';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Layouts/Navbar';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
      <Switch>
        <Route exact path="/" component={ PokemonList }/>
        <Route component={ Default}/>
      </Switch>
    </React.Fragment>
    </div>
  );
}

export default App;
