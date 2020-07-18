import React from 'react'


function PokemonMoves(props) {
    const accuracy = props.accuracy ? props.accuracy : 'Null';
    const power = props.power ? props.power : "Null";
    const pp = props.pp ? props.pp : "Null";
    const iconDesign = {
        color: "#46D1B2"
    }


    return (
        <div>
            <div className="info">
                <div className="info-title"> Accuracy :</div>
                <div className="info-value"> {accuracy} </div>
            </div>
            <div className="info">
                <div className="info-title"> PP :</div>
                <div className="info-value"> {pp} </div>
            </div>
            <div className="info">
                <div className="info-title"> Power :</div>
                <div className="info-value"> {power} </div>
            </div>
            <div className="info">
                <div className="info-title"> Type :</div>
                <div className="info-value"> {props.type} </div>
            </div>
            <div className="info">
                <div className="info-title"> Target :</div>
                <div className="info-value"> {props.target} </div>
            </div>

            <div className='encounter'>
                <h3>
                    <i class="fas fa-bolt mr-2" style={iconDesign}></i> Encounter
                    <span className="encounter-name"> {props.encounterName} </span>
                </h3>
                <div className="encounter-des"> {props.encounterDes} </div>
            </div>
        </div>
    )
}

export default PokemonMoves
