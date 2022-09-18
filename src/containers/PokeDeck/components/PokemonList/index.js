import {useContext, useEffect, useState} from 'react';
import PokemonContext from '../../../../context';
import "./styles.css";
import PokemonItem from '../PokemonItem';


function PokemonList({pokeDatos, isSearching}) {


    const {getIdFromUrl} = useContext(PokemonContext);
    
    // take all Poke List from API
  
    // function to filtrate all the Poke List based on the users input

    /*const filtrarPokes = ()=>{
        const pokesFiltrados = allPokes?.filter((value)=>{
            let search = props.searchText;
             
            return value.name.includes(search);
        })

        return pokesFiltrados;

      


    }*/
   


    console.log(pokeDatos)
   
    return ( 
                // Renders the object of Pokes filteres 
        <div className='l-container'>
            
            {pokeDatos?.map((value)=>{
                let id_url = getIdFromUrl(value.url);
                return  <PokemonItem key={id_url} name={value.name} id={id_url} display_img="true"></PokemonItem> 
            })} 
            

        
           
        </div>
    );
}

export default PokemonList;