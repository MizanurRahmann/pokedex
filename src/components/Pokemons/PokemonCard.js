import React from 'react';
import axios from 'axios';

function PokemonCard(props) {
    const {name, url} = props;
    return (
        <div>
            {props.name}
        </div>
    )
}

export default PokemonCard
