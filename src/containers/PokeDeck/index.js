import PokemonProvider from "../../context/Provider";
import {useEffect, useContext, useState} from 'react';
import PokemonList from "./components/PokemonList"
import PokemonItem from "./components/PokemonItem";

function PokeDeck() {

    return ( 
        <PokemonProvider>
            <h1>List of Pokemons</h1>
            <PokemonList></PokemonList>
        
        </PokemonProvider>
    );
}

export default PokeDeck;