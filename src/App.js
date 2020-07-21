import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonList from './components/Pokemons/PokemonList';
import PokeDetail from './components/Pokemons/PokemonDetail'
import Default from './components/Layouts/Default';
import Navbar from './components/Layouts/Navbar';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
      <Switch>
        <Route exact path="/" component={ PokemonList }/>
        <Route path="/details/:name" component={ PokeDetail }/>
        <Route component={ Default}/>
      </Switch>
    </React.Fragment>
    </div>
  );
}

export default App;
