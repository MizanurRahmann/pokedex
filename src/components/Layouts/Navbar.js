import React, {useState} from 'react';
import '../../decorations/styles/css/Navbar.css';

function Navbar() {
    const [show, setShow] = useState(false);
    function toggleMenu(){setShow(!show);}
    const showMenu = show ? "show" : "";

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-hite">
            <a className="navbar-brand" href="/">
                <img 
                    src={require('../../decorations/images/poke-logo.png')} 
                    style={{width: "100px", marginLeft: "20px"}}
                    alt="Pokedex"
                />
            </a>
            <button 
                type="button"
                className="navbar-toggler"
                onClick = {toggleMenu}
            >
                <div className="bg-light line-1"></div>
                <div className="bg-light line-2"></div>
                <div className="bg-light line-3"></div>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse " + showMenu}>
                <form>
                    <input type="search" placeholder="Search"  />
                    <button className="btn submit-btn my-2 my-sm-0" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </nav>


    )
}

export default Navbar
