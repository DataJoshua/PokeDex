
import { useNavigate } from 'react-router-dom';

import "./styles.css";


function PokemonItem(props) {
    const navigate = useNavigate();
    

    const handleClick = ()=>{
        navigate(`/pokemons/${props.id}`);
    }


    return ( 
    
        <div className="Pi-container" onClick={handleClick}>

    
            <>  
                <div className='pi-img-container'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`} alt={`${props.name} image`} loading="lazy"/>
                </div>
                <h2>{props.name}</h2>
                
               
            </>        
        </div> );
}

export default PokemonItem;