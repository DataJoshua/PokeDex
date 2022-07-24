import "./styles.css";
import {Link} from 'react-router-dom';
import logo from '../../assets/icon.png'

function NavBar() {
    return (
        <nav>
            <div className="logo">
                <img src={logo}/>
            </div>
            <ul>
                <li className="n-li"><Link to="/">Home</Link></li>
                <li className="n-li"><Link to="/pokemons">pokemons</Link></li>
                
            </ul>
        </nav> 
    );
}

export default NavBar;