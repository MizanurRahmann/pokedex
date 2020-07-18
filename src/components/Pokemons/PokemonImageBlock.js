import React from 'react'

function PokemonImageBlock(props) {
    return (
        <div className="pokemon-image-block">
                <div className="color-box">
                    <div className="heading">
                        <h1>{props.name}</h1>
                        <div class="type">
                            { props.types && props.types.map(type => {
                                return <p key={type}>{type}</p>})
                            }
                        </div>
                    </div>
                </div>
                <div className="image-box">
                    <img src={props.imageUrl} alt="Balbasaur" />
                </div>
            </div>
    )
}

export default PokemonImageBlock
