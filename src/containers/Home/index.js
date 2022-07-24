
import "./styles.css";
import logo from "../../assets/icon.png";


function Home() {

    return (     
        <>
            <div className="h-main-container">
                <div>
                    <img src={logo} alt="main-logo"/>
                </div>
                <h2>The best pokemon Deck</h2>
                <h3>Search for more Than 1000 pokemons!</h3>
            </div>

        </>

    );
}

export default Home;