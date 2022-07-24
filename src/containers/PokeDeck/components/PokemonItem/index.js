import {useContext, useEffect, useState} from 'react';
import PokemonContext from "../../../../context/";
import "./styles.css";


function PokemonItem(props) {

    const {makeApiCall} = useContext(PokemonContext)
    const [info, setInfo] = useState([]);
    const [isLoaded, setisLoaded] = useState(false);

    const getPokeInfo = async ()=>{
        let info = await makeApiCall(props.poke_url);
        setInfo(info);
        setisLoaded(true);
    }
    useEffect(()=>{
        getPokeInfo();

    }, []);




    return ( 
    
        <div className="Pi-container">

            {isLoaded &&  
            <>  
                <div className='pi-img-container'>
                    <img src={info.sprites.other.dream_world.front_default} alt={`${info.name} image`}/>
                </div>
                <h2>{info.name}</h2>
                
               
            </>}
        
        </div> );
}

export default PokemonItem;