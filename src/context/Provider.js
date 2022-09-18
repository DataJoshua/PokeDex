import {useState } from "react";
import PokemonContext from ".";

function PokemonProvider({children}) {

    const [allPokes, setAllPokes] = useState([]);
    const [isApiCallFinished, setIsApiCallFinished] = useState(false);


    // call the list of all pokes in API

    const getAllPokes = async (url)=>{
      try{
        let pokes = await fetch(url);
        let allPokes = await pokes.json();
       
        setAllPokes(allPokes.results);
        setIsApiCallFinished(true);
        
       

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
   
 
    // gets the ID number of a specific URL from the API

    const getIdFromUrl = (link)=>{

      let result = link.split("/");
      
      return result[6]; 
      
    }
 
    return ( 
    <PokemonContext.Provider value={{
        getAllPokes,
        allPokes,
        makeApiCall,
        getIdFromUrl,
        isApiCallFinished
    }}>
        {children}
    </PokemonContext.Provider> 
    );
}

export default PokemonProvider;