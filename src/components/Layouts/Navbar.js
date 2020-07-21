import React, {useState, useEffect} from 'react';
import '../../decorations/styles/css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);

    function toggleMenu(){setShow(!show);}
    const showMenu = show ? "show" : "";

    const handleInput = e => {e.preventDefault(); setSearchInput(e.target.value);}
    const handleForm = e => {e.preventDefault(); setSearch(searchInput);}

    return (
        <React.Fragment>
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
                style={{background: "trnasparent", outline: "none", border: "none"}}
            >
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </button>
            <div className={"collapse navbar-collapse " + showMenu}>
                <form onSubmit={handleForm}>
                    <input 
                        type="text"
                        value={searchInput}
                        onChange={handleInput}
                        placeholder="Search"
                    />
                    <Link 
                        to={"/details/" + searchInput}
                        className="btn submit-btn my-2 my-sm-0"
                        type="button"
                    >
                        <i className="fas fa-search"></i>
                    </Link>
                </form>
            </div>
        </nav>
        {/* {search ? <Link to={"details/" + search}/> : null} */}
        </React.Fragment>
    )
}

export default Navbar
