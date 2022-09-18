
import PokemonList from "./components/PokemonList"
import PokeSearch from "../../components/PokemonSearch";
import { useContext, useEffect, useState } from "react";
import PokePagintaion from "./components/PokePagination";
import PokemonContext from "../../context";

function PokeDeck() {
    const [pokeData, setPokeData] = useState([])
    const {makeApiCall} = useContext(PokemonContext)
    //const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([])
    const [isSearching,setIsSearching] = useState(false)

    const handleSearchInput = async (value)=>{
        let searchData = await makeApiCall("https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0")
        console.log(searchData)
        let searchResult = searchData.results.filter(poke =>{
            return poke.name.includes(value)
        })
        setPokeData(searchResult)
    } 
    
    const setAll = async (url)=>{ 
        let datos = await makeApiCall(url)
        
        setData(datos)
        setPokeData(datos.results)
      
    }

    const handleNext = ()=>{
        setAll(data.next)
    }

    const handlePrev = ()=>{
        setAll(data.previous)
    }

    useEffect(()=>{
        console.log("me he creado");
        setAll("https://pokeapi.co/api/v2/pokemon/").catch(null) 
    }, [])


    return ( 
        <>
            
            <PokeSearch onSearchInput={handleSearchInput}></PokeSearch>
            <PokemonList pokeDatos={pokeData} isSearching={isSearching}></PokemonList>
            <PokePagintaion prev={data.previous} next={data.next} onNext={handleNext} onPrev={handlePrev}></PokePagintaion>
        
        </>
       
    
    );
}

export default PokeDeck;