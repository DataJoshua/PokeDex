import "./styles.css";
import PokemonItem from '../../containers/PokeDeck/components/PokemonItem';

function PokeItemLoading() {
    return (<>
        <PokemonItem name="Cargando.."></PokemonItem>
    </>);
}

export default PokeItemLoading;