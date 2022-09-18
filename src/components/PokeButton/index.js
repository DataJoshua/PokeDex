import './styles.css';

function PokeButton(props) {

    const handleClick = ()=>{
        props.handleButtonClick();
    }
    return ( <button onClick={handleClick}>{props.name}</button> );
}

export default PokeButton;