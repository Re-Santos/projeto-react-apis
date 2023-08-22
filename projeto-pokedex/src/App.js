import React, {useState} from "react";
import { AppRouter } from "./Routes/AppRouter";


const App = () => {
  const [pokedex, setPokedex] = useState([]);
  

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemon) => {
    setPokedex(prevPokedex => prevPokedex.filter(p => p.name !== pokemon.name));
  };
 
  return (
    <div>
     <AppRouter 
    
     pokedex={pokedex} 
     addToPokedex={addToPokedex} 
     removeFromPokedex={removeFromPokedex} 
  
     />
    </div>
  );
}

export default App;
