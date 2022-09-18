import PokeButton from '../PokeButton';
import './styles.css';
import {useState} from 'react';

function PokeSearch(props) {


  const[inputValue, setInputValue] = useState("");

  // handle key events inside the Pokemon Search Component

  const handleKeyDown = (event)=>{
    
    // Keu Enter

    if(event.key == 'Enter'){
      
      props.onSearchInput(inputValue);
    }
  }


  // Handle the click and then send it to the Father component
  // Put the value of the input in empty

  const handleClick = ()=>{
    props.onSearchInput(inputValue);
    setInputValue("") 
  }

  const handleInputChange = (event)=>{
    setInputValue(event.target.value);
  }

  return ( 
    
        <div className="ps-frame" onKeyDown={handleKeyDown}>
          <div className='ps-container'>
          
            <div className='ps-container-child'>
                <h1>Search</h1>
                <input type="text" onChange={handleInputChange} value={inputValue}/>
                <PokeButton handleButtonClick={handleClick} name="Buscar"></PokeButton>
            </div>
          </div>
        </div> 
  );
}

export default PokeSearch;