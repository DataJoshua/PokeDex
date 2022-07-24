import {useContext, useEffect} from 'react';
import PokemonContext from '../../../../context';
import "./styles.css";
import PokemonItem from '../PokemonItem';

function PokemonList() {

    const {getAllPokes, allPokes} = useContext(PokemonContext);

    useEffect(()=>{
        getAllPokes().catch(null);

    }, [])
    
    return ( 

        <div className='l-container'>
            {allPokes?.map((value,index)=>{
                return  <PokemonItem key={index} poke_url={value.url}></PokemonItem> 
            })}
           
        </div>
    );
}

export default PokemonList;