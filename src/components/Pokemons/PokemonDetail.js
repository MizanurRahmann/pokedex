import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { padToThree ,CapitalFirst } from '../../decorations/styles/js/TextDecor';
import '../../decorations/styles/css/PokeDetail.css';
import PokemonImageBlock from './PokemonImageBlock';

function PokemonDetail(props) {
    const POKE_ID = props.match.params.id;
    const POKE_API = `https://pokeapi.co/api/v2/pokemon/${POKE_ID}`;
    const POKE_SPECIES = `https://pokeapi.co/api/v2/pokemon-species/${POKE_ID}/`;
    const POKE_MOVES = `https://pokeapi.co/api/v2/move/${POKE_ID}/`
    const POKE_IMAGE = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(POKE_ID)}.png`;

    //Use two variables for basic and detail information
    const [pokemon, setPokemon] = useState({});
    const [species, setSpecies] = useState({});
    const [moves, setMoves] = useState({});

    //Get the data from API
    useEffect(() => {
        axios.get(POKE_API).then(resource => {setPokemon(resource.data)});
        axios.get(POKE_SPECIES).then(resource => {setSpecies(resource.data)});
        axios.get(POKE_MOVES).then(resources => {setMoves(resources.data)});
    }, []);

    //Informations
    const name = CapitalFirst(pokemon.name + "");
    const height = Math.round((pokemon.height * 0.328084 + 0.0001) * 100) / 100 + "ft (" + pokemon.height/100 + "m)";
    const weight = Math.round((pokemon.weight * 0.220462 + 0.0001) * 100) / 100 + "lbs (" + pokemon.weight/10 + "kg)";
    const abilities = pokemon.abilities && pokemon.abilities.map(a => {return CapitalFirst(a.ability.name)}).join(', ');
    const types = pokemon.types && pokemon.types.map(t => {return CapitalFirst(t.type.name)});
    const genderRate = species.gender_rate;
    const eggGroup = species.egg_groups && species.egg_groups.map(e => {return CapitalFirst(e.name)}).join(', ');
    const color = species.color && species.color.name;
    const accuracy = moves.accuracy;
    const type = moves.type && moves.type.name;
    const pp = moves.pp;
    const power = moves.power;
    const target = moves.target && moves.target.name;
    let description = '';
    let stats = {};

    species.flavor_text_entries && species.flavor_text_entries.some(f => {
        if (f.language.name == 'en'){
            description = f.flavor_text;
            return;
        }
    });
    pokemon.stats && pokemon.stats.map(s => {
        stats[s.stat.name] = s.base_stat;
    })


    return (
        <div className="container-fluid">
            <div className="row pokemon-details">
                <div className="col-md-6 basic">
                    <PokemonImageBlock name = {name} types = {types} imageUrl = {POKE_IMAGE} />
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
    )
}

export default PokemonDetail
