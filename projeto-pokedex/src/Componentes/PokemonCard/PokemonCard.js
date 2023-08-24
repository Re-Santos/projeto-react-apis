import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { CardContainer } from './pokemonCardStyle'
import PokemonsListPage from '../../Pages/PokemonsListPage/PokemonsListPage';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/url';

const PokemonCard = ({pokemon, addToPokedex, removeFromPokedex, activePage}) => {
 const  [pokemonData, setPokemonData] = useState(null)
 const navigation = useNavigate();
 
  useEffect(()=>{
    axios.get(`${BASE_URL }/${pokemon.name}`)
    .then(response =>{
      setPokemonData(response.data);
      console.log(response)
    })
    
    .catch(error =>{
      console.error ("error fetching Pokemon Data:", error);
    });
 },[pokemon.url]);
    console.log(pokemonData)

    const goToDetailsPage = (name) => {
      navigation (`/pokemon/${pokemon.name}`, { state: { pokemonData } });
    };
     console.log (pokemon)
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
      <button onClick={() => goToDetailsPage(navigation, pokemon.name)}>Ver detalhes</button>
      {/* <button onClick={() => detailsClickPokemon(pokemon)}>Detalhes</button> */}
     
    </CardContainer>
  )
}

export default PokemonCard
// O botão e a função de detalhes não estão funcionando, comentei para não perder o raciocinio