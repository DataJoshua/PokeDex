import {useContext, useEffect} from 'react';
import PokemonContext from '../../../../context';
import "./styles.css";
import PokemonItem from '../PokemonItem';

function PokemonList() {

    const {getAllPokes, allPokes} = useContext(PokemonContext);

    useEffect(()=>{
        getAllPokes().catch(null);

    }, []);

    const handleClick = ()=>{
        console.log("you made a click");
    }
    
    return ( 

        <div className='l-container'>
            {allPokes?.map((value,index)=>{
                return  <PokemonItem onClick={handleClick} key={index} poke_url={value.url} name={value.name} id={index + 1}></PokemonItem> 
            })}
           
        </div>
    );
}

export default PokemonList;