
import "./styles.css";
import logo from "../../assets/icon.png";
import PokeSearch from "../../components/PokemonSearch";
import PokemonList from "../PokeDeck/components/PokemonList";
import { useState } from "react";


function Home() {

    const [searchValue, setSearchValue] = useState("");
    const [isSearched, setIsSearched] = useState(false);
    
    // Handle the event on serarch that is given by the children Poke Search in props

    const handleSearchInput = (value)=>{

        setSearchValue(value)
        
        setIsSearched(true)
    }

    return (     
        <div className="h-main-container">
            <div >
                <div>
                    <img src={logo} alt="main-logo"/>
                </div>
                <h2>The best pokemon Deck</h2>
                <h3>Search for more Than 1000 pokemons!</h3>
            </div>
            <PokeSearch onSearchInput={handleSearchInput}></PokeSearch>
           {isSearched &&  <PokemonList searchText={searchValue}></PokemonList>}
        
        </div>

    );
}

export default Home;