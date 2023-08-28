import React, {useState } from 'react';
import GlobalContext from './GlobalContext';


const GlobalState = ({ children,  }) => {
  const [pokedex, setPokedex] = useState([]);

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
    (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
  );
  
    console.log(pokemonToAdd)
    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
};

  const removeFromPokedex = (pokemon) => {
  setPokedex(prevPokedex => prevPokedex.filter(p => p.name !== pokemon.name));
};

  const data = {
    addToPokedex ,
    removeFromPokedex,
    pokedex,
    setPokedex,
}

return (
    <GlobalContext.Provider value={data}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState