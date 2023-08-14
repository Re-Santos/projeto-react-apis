import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { CardContainer } from './pokemonCardStyle'


const PokemonCard = ({pokemon, onAddToPokedex, onRemoveFromPokedex}) => {
 const  [pokemonData, setPokemonData] = useState(null)
 
  useEffect(()=>{
    axios.get(pokemon.url)
    .then(response =>{
      setPokemonData(response.data);
      console.log(response)
    })
    
    .catch(error =>{
      console.error ("error fetching Pokemon Data:", error);
    });
 },[pokemon.url]);
    console.log(pokemonData)

  return (
    <CardContainer>
      <img src={pokemonData?.sprites?.front_default}alt={pokemon.name} />
       
      <h3>{pokemon.name}</h3>
      {console.log(pokemon)}

      <button onClick={() => onAddToPokedex(pokemon)}>Adicionar</button>
      <button>Ver detalhes</button>
      {/* <button onClick={() => onRemoveFromPokedex(pokemon)}>Remover</button> */}
    </CardContainer>
  )
}

export default PokemonCard
