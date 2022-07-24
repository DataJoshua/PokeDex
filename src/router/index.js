import {BrowserRouter, Routes, Route, Switch} from "react-router-dom";
import Home from '../containers/Home';
import PokeDeck from "../containers/PokeDeck";
import  NavBar from "./NavBar";
import "./styles.css";

import FourOFour from "../containers/FourOFour";


function Router() {
    return (  
        <BrowserRouter>

        <NavBar></NavBar>    
        
           <div className="main-container">
                <Routes>
                 
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/pokemons" exact element={<PokeDeck/>}></Route>
                    <Route path="*" element={<FourOFour />}></Route>

                </Routes>
           </div>
            
        </BrowserRouter>
    );
}

export default Router;