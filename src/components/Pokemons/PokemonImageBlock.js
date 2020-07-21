import React from 'react'

function PokemonImageBlock(props) {
    //color selection
    const BoxColor = { backgroundImage: `linear-gradient(to right, ${props.pColor} 0%, ${props.sColor} 100%)`}
    const linkColor = {background: props.sColor}
    
    return (
        <div className="pokemon-image-block">
                <div className="color-box" style={BoxColor}>
                    <div className="heading">
                        <h1>{props.name}</h1>
                        <div className="type">
                            { props.types && props.types.map(type => {
                                return <p style={linkColor} key={type}>{type}</p>})
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
