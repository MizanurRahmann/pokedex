import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonImageBlock from './PokemonImageBlock';
import PokemonAbout from './PokemonAbout';
import PokemonStats from './PokemonStats';
import PokemonMoves from './PokemonMoves';
import '../../decorations/styles/css/PokeDetail.css';
import { padToThree ,CapitalFirst } from '../../decorations/styles/js/TextDecor';


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
    const [view, setView] = useState('About');

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
        if (f.language.name === 'en'){
            description = f.flavor_text;
            return;
        }
    });
    pokemon.stats && pokemon.stats.map(s => {
        stats[s.stat.name] = s.base_stat;
        return null;
    })

    //To change the information details
    const viewHnadler = (e) => {
        setView(e.target.innerHTML);
        const marker = document.querySelector("#marker");
        marker.style.left = e.target.offsetLeft + "px";
        marker.style.width = e.target.offsetWidth + "px";
    }

    return (
        <div className="container-fluid">
            <div className="row pokemon-details">
                <div className="col-lg-6 basic">
                    <PokemonImageBlock 
                        name = {name}
                        types = {types}
                        imageUrl = {POKE_IMAGE} /
                    >
                </div>
                <div className="col-lg-6">
                    <div className="pokemon-info-block">
                        <div className="info-nav">
                            <div id="marker"></div>
                            <p onClick={e => viewHnadler(e)}>About</p>
                            <p onClick={e => viewHnadler(e)}>Stats</p>
                            <p onClick={e => viewHnadler(e)}>Battle</p>
                        </div>
                        {
                            view === 'About'
                            ? <PokemonAbout
                                description = {description}
                                height = {height}
                                weight = {weight}
                                color = {CapitalFirst(color+"")}
                                abilities = {abilities}
                                genderRate = {genderRate}
                                eggGroup = {eggGroup}
                             />
                            : view === 'Stats'
                                ? <PokemonStats 
                                    stats = {stats}
                                />
                                : <PokemonMoves />

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetail
