import { useParams} from 'react-router-dom';
import {useContext, useEffect, useState, useSyncExternalStore} from 'react';
import PokemonContext from '../../context';
import "./styles.css";

function PokeDisplay() {
    let {makeApiCall} = useContext(PokemonContext);
    const params = useParams();
    const [data,setData] = useState([]);
    const [locations, setLocations] = useState([]);
    const [mostrar, setMostrar] = useState(false);
    const [specieData, setspecieData] = useState([]);


    const callApi = async ()=>{
        let result = await makeApiCall(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
        setData(result);
    }
    const callLocationApi = async ()=>{
        let result = await makeApiCall(`https://pokeapi.co/api/v2/pokemon/${params.id}/encounters`)
        setLocations(result);
    }   

    const callSpeciesApi = async ()=>{
        let result = await makeApiCall(`https://pokeapi.co/api/v2/pokemon-species/${params.id}/`);
        setspecieData(result);
        
    }

    const handleClickMostrar = ()=>{
        setMostrar(mostrar => !mostrar);

    }

    useEffect(()=>{
        callApi();
        callLocationApi();
        callSpeciesApi();
    }, [])



    return (  
    
        <div className='pd-container'>
           
                <div className='pd-wallpaper'>
                    <h1>{data.name}</h1>
                    <div className='img-container'>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${params.id}.svg`} alt={`logo ${data.name}`}/>
                    </div>
                </div>
                <div className='pd-text-container'>
                   
                        <div className='pd-text-item pd-item-location'>

                            <div className="pd-text-location">
                                <h3>Puedes encontrarlo en</h3>
                               
                            </div>

                            <br></br>
                            
                            <div className="pd-locations">
                                {      
                                    locations?.map((value, index)=>{
                                        let locationName = value.location_area.name;
                                        let locationNameUp = locationName.replaceAll("-"," ");
                                        return <p key={index}>{locationNameUp}</p>
                                })}
                            </div>

                        </div>
                      
                        <div className='pd-text-item'>
                                <h2>Caracteristicas de especie</h2>
                                <br></br>
                                <p>Peso: {data.weight}</p>
                                <p>Altura: {data.height}</p>
                                <p>Experiencia básica: {data.base_experience}</p>
                        </div>     
                        
                        <div className='pd-text-item'>
                                <h2>Caracteristicas</h2>
                                <br></br>
                                <p>Felicidad Base: {specieData.base_happiness}</p>
                                <p>Radio de captura: {specieData.capture_rate}</p>
                                <p>bebe: {specieData.is_bab ? "Si" : "No"}</p>
                                <p>legendario: {specieData.is_legendary ? "Si" : "No"}</p>
                                
                        </div>      
                                
                 
                </div>
           
            
        </div>
    );
}

export default PokeDisplay;