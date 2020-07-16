import React from 'react';
import '../../decorations/styles/css/Navbar.css';

function Navbar() {
    return (
        <nav class="navbar navbar-light bg-white p-2">
            <a className="navbar-brand" href='/'>
                <img 
                    src={require('../../decorations/images/poke-logo.png')} 
                    style={{width: "100px"}}
                    alt="Pokedex"
                    />
            </a>
            <form className="form-inline m-auto formStyle">
                <input 
                    type="text"
                    placeholder="Search for your favourite pokemon"
                />
                <button 
                    className="btn buttonStyle"
                    type="submit"
                >
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </nav>
    )
}

export default Navbar
