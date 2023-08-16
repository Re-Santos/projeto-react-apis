import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { CardContainer } from './pokemonCardStyle'
import PokemonsListPage from '../../Pages/PokemonsListPage/PokemonsListPage';


const PokemonCard = ({pokemon, addToPokedex, removeFromPokedex, activePage}) => {
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
      {/* activePage=> usa a condição ternária para mostrar o botão correto em cada página */}
      {activePage === "/" ?( 
      <button onClick={() => addToPokedex(pokemon)}>Adicionar</button>
      ): 
      <button onClick={() => removeFromPokedex(pokemon)}>Remover</button>}
      <button>Ver detalhes</button>
     
    </CardContainer>
  )
}

export default PokemonCard
