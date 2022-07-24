import { useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import PokemonContext from '../../context';
import "./styles.css";

function PokeDisplay() {
    let {makeApiCall} = useContext(PokemonContext);
    const params = useParams();
    const [data,setData] = useState([]);
    const [locations, setLocations] = useState([]);


    const callApi = async ()=>{
        let result = await makeApiCall(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
        setData(result);
    }
    const callLocationApi = async ()=>{
        let result = await makeApiCall(`https://pokeapi.co/api/v2/pokemon/${params.id}/encounters`)
        setLocations(result);
    }

    useEffect(()=>{
        callApi();
        callLocationApi();
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
                    <ul>
                        <li>weight: {data.weight}</li>
                        <ul className='pd-location'>
                            {locations?.map((value, index)=>{
                                let locationName = value.location_area.name;
                                let locationNameUp = locationName.replaceAll("-"," ");
                                return <li key={index}>{locationNameUp}</li>
                            })}
                        </ul>
                    </ul>
                </div>
           
            
        </div>
    );
}

export default PokeDisplay;