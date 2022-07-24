import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../containers/Home';
import PokeDeck from "../containers/PokeDeck";
import  NavBar from "./NavBar";
import "./styles.css";
import FourOFour from "../containers/FourOFour";
import PokeDisplay from "../containers/PokeDisplay";
import PokemonProvider from "../context/Provider";

function Router() {
    return (  
        <BrowserRouter>

        <NavBar></NavBar>    
        
           <div className="main-container">
                
                <PokemonProvider>
                    <Routes>
                    
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/pokemons" exact element={<PokeDeck/>}></Route>
                    <Route path="/pokemons/:id" element={<PokeDisplay/>}></Route>
                    <Route path="*" element={<FourOFour />}></Route>
                   
                    

                    </Routes>
                </PokemonProvider>
               
           </div>
            
        </BrowserRouter>
    );
}

export default Router;