import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard'
import Pagination from '../Layouts/Pagination';
import Footer from '../Layouts/Footer';

function PokemonList() {
    const [pokemon, SetPokemon] = useState([]);
    const [curUrl, setCurUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [prevUrl, SetPrevUrl] = useState();
    const [nextUrl, setNextUrl] = useState();
    const [loading, SetLoading] = useState(true);
    const pagenationStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0"
    }

    
    //Data fetching from Poke API
    useEffect(() => {
        let cancel;
        SetLoading(false);

        axios.get(curUrl, {cancelToken: new axios.CancelToken(c => cancel = c)})
        .then(res => {
            setNextUrl(res.data.next);
            SetPrevUrl(res.data.previous);
            SetPokemon(res.data.results);

            return () => cancel()
        })
    }, [curUrl]);

    
    //Manage current page
    function goToPreviousPage(){setCurUrl(prevUrl)}
    function goToNextPage(){ setCurUrl(nextUrl); }
    
    
    if (loading ){ return (<div>Loading...</div>) }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    {pokemon.map(poke => (
                        <PokemonCard key={poke.name} name={poke.name} url={poke.url}/>
                    ))}
                </div>
                <div className="row">
                    <div className="col" style={pagenationStyle}>
                        <Pagination 
                            next={ nextUrl? goToNextPage : null}
                            previous={ prevUrl? goToPreviousPage : null}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default PokemonList
