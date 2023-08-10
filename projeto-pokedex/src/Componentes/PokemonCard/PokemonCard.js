import React from 'react'
import { CardContainer } from './pokemonCardStyle'


const PokemonCard = ({pokemon, onAddToPokedex}) => {

  
  return (
    <CardContainer>
      <h3>{pokemon.name}</h3>
      {/* <button>Adicionar</button> */}
      <button onClick={() => onAddToPokedex(pokemon)}>Adicionar</button>
    </CardContainer>
  )
}

export default PokemonCard
