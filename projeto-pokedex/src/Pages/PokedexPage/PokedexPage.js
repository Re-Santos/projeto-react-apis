import React from 'react'
import PokemonCard from '../../Componentes/PokemonCard/PokemonCard'
import { PokedexContainer } from './pokedexPageStyle';


const PokedexPage = ({ pokedex, removeFromPokedex }) => {
  return (
    <PokedexContainer>
      {pokedex.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          onAddToPokedex={removeFromPokedex}
        />
      ))}
    </PokedexContainer>
  );
};
export default PokedexPage
