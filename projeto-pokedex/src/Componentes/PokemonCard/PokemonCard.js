import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { CardContainer } from './pokemonCardStyle'


const PokemonCard = ({pokemon, onAddToPokedex}) => {
 const  [pokemonData, setPokemonData] = useState()
 
  useEffect(()=>{
    axios.get(pokemon.url)
    .then(response =>{
      setPokemonData(response.data);
      console.log(response)
    })
    
    .catch(error =>{
      console.error ("error fetching Pokemon List:", error);
    });
 },[]);
    console.log(pokemonData)
  return (
    <CardContainer>
       <img src={pokemonData.sprites?.front_default} alt={pokemon.name} />
       
      <h3>{pokemon.name}</h3>
      {console.log(pokemon)}
      {/* <button>Adicionar</button> */}
      <button onClick={() => onAddToPokedex(pokemon)}>Adicionar</button>
    </CardContainer>
  )
}

export default PokemonCard
