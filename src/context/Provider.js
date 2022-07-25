import { useEffect, useState } from "react";
import PokemonContext from ".";

function PokemonProvider({children}) {

    const [allPokes, setAllPokes] = useState([]);
    const [ requestFinished, setRequestFinished] = useState(false)

    const getAllPokes = async ()=>{
      try{
        let pokes = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
        let allPokes = await pokes.json();
        setAllPokes(allPokes.results);
        setRequestFinished(true);

      }catch(error){
        console.log(error);
        
      }
    }

    const makeApiCall = async (url)=>{
      try{
        let result = await fetch(url);
        let resultJson = await result.json();
        return resultJson;
      }
      catch(error){
        console.log("makeApiCall error " + error);
      }
    }
   

    return ( 
    <PokemonContext.Provider value={{
        getAllPokes,
        allPokes,
        requestFinished,
        makeApiCall
    }}>
        {children}
    </PokemonContext.Provider> 
    );
}

export default PokemonProvider;