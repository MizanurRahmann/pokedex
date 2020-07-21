import React from 'react'

function PokemonStats(props) {
    const stats = props.stats
    const statValues = Object.values(stats);
    const total = (statValues.reduce((a,b) => a+b) / 600) * 100;
    statValues.push(total);
    
    //progressbar animation
    function prgressAnimation(){
        const progressStep = document.getElementsByClassName('progress-step');
        setInterval(() => {
            for(let i=0; i<statValues.length; i++)
                if(progressStep[i]){
                    if(statValues[i] > 100) {statValues[i] = 100}
                    progressStep[i].style.width = `${statValues[i]}%`
                }
        }, 300)
    }

    return (
        <div id="stats">
            <div className="info">
                <div className="info-title"> Hp </div>
                <div className="info-value">
                    <div className="value">{stats['hp']}</div>
                    <div className="progressbar" style={{background: "#f3f3f3"}}>
                        <div
                            className="progress-step"
                            style={{width: "0%", background: props.sColor}}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="info-title"> Attack </div>
                <div className="info-value">
                    <div className="value">{stats['attack']}</div>
                    <div className="progressbar" style={{background: "#f3f3f3"}}>
                        <div 
                            className="progress-step"
                            style={{width: "0%", background: props.pColor}}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="info-title"> Defense </div>
                <div className="info-value">
                    <div className="value">{stats['defense']}</div>
                    <div className="progressbar" style={{background: "#f3f3f3"}}>
                        <div 
                            className="progress-step"
                            style={{width: "0%", background: props.sColor}}>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info">
                <div className="info-title"> Sp. Attack </div>
                <div className="info-value">
                    <div className="value">{stats['special-attack']}</div>
                    <div className="progressbar" style={{background: "#f3f3f3"}}>
                        <div 
                            className="progress-step"
                            style={{width: "0%", background: props.pColor}}>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info">
                <div className="info-title"> Sp. Defense </div>
                <div className="info-value">
                    <div className="value">{stats['special-defense']}</div>
                    <div className="progressbar" style={{background: "#f3f3f3"}}>
                        <div 
                            className="progress-step"
                            style={{width: "0%", background: props.pColor}}>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info">
                <div className="info-title"> Speed </div>
                <div className="info-value">
                    <div className="value">{stats['speed']}</div>
                    <div className="progressbar" style={{background: "#f3f3f3"}}>
                        <div 
                            className="progress-step"
                            style={{width: "0%", background: props.sColor}}>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info">
                <div className="info-title"> Total </div>
                <div className="info-value">
                    <div className="value">{((total/100)*600).toFixed(0)}</div>
                    <div className="progressbar" style={{background: "#f3f3f3"}}>
                        <div 
                            className="progress-step"
                            style={{width: "0%", background: props.pColor}}>
                        </div>
                    </div>
                </div>
            </div>
            { prgressAnimation()}
        </div>
    )
}

export default PokemonStats
