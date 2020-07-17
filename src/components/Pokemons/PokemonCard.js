import React from 'react';
import { Link } from 'react-router-dom';
import {padToThree, CapitalFirst} from '../../decorations/styles/js/TextDecor';
import '../../decorations/styles/css/PokeCard.css';


function PokemonCard(props) {
    const {name, url} = props;
    const IMAGE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    const id = url.split('/')[url.split('/').length - 2];
    const imgLink = `${IMAGE_API}${padToThree(id)}.png`;

    return (
        <Link 
            to={"/details/" + id}
            className= 'col-sm-6 col-md-3'
            style={{textDecoration: 'none', color: '#000'}}
        >
            <div className="poke-card">
                <i className="fas fa-circle circle-1"></i>
                <i className="fas fa-circle circle-2"></i>
                <h3>#{padToThree(id)}</h3>
                <div className="poke-image">
                    <img src={imgLink} alt={name} />
                </div>
                <h2 className="poke-name">{CapitalFirst(name)}</h2>
            </div>
        </Link>
    )
}

export default PokemonCard
