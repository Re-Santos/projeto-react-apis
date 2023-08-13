import React, {useState, useEffect}from 'react'
import PokemonCard from '../../Componentes/PokemonCard/PokemonCard'
import axios from 'axios'
import { BASE_URL} from '../../constants/url';
import { HomeContainer } from './pokemonsListPageStyle';

const PokemonsListPage = () => {
   const [pokemonList, setPokemonList]= useState([]);
   const [pokedex, setPokedex] = useState([]);
   
   useEffect(()=>{
      axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response =>{
        setPokemonList(response.data.results);
      })
      .catch(error =>{
        console.error ("error fetching Pokemon List:", error);
      });
   },[]);

   const addToPokedex=(pokemon) =>{
    setPokedex (prevPokedex => [...prevPokedex, pokemon]);
   }

  return (
    <HomeContainer>
      {pokemonList.map(pokemon =>(
        <PokemonCard 
        key ={pokemon.name} 
        pokemon={pokemon}
        onAddToPokedex={addToPokedex}
        />
      ))}
    </HomeContainer>
  )
}

export default PokemonsListPage
