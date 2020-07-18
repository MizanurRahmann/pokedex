import React from 'react'

function PokemonAbout(props) {
    return (
        <div>
            <div className="description">
                <span><i className="fas fa-fingerprint" style={{color: props.sColor}}></i></span>
                {props.description}
            </div>
            <div className="info">
                <div className="info-title"> Color :</div>
                <div className="info-value"> {props.color} </div>
            </div>
            <div className="info">
                <div className="info-title"> Height :</div>
                <div className="info-value"> {props.height} </div>
            </div>
            <div className="info">
                <div className="info-title"> Weight :</div>
                <div className="info-value"> {props.weight} </div>
            </div>
            <div className="info">
                <div className="info-title"> Abilities :</div>
                <div className="info-value"> {props.abilities} </div>
            </div>

            <h3 style={{marginTop: "35px", fontSize: "20px"}}>Breeding</h3>
            <div className="info">
                <div className="info-title"> Gender :</div>
                <div className="info-value">
                    <i className="fas fa-mars male"></i> {100 - ((props.genderRate / 8) * 100)}%
                    <i className="fas fa-venus ml-5 female"></i> {(props.genderRate / 8) * 100}%
                </div>
            </div>
            <div className="info">
                <div className="info-title"> Egg groups :</div>
                <div className="info-value"> {props.eggGroup} </div>
            </div>
        </div>
    )
}

export default PokemonAbout
