import React, {useState, useEffect}from 'react'
import PokemonCard from '../../Componentes/PokemonCard/PokemonCard'
import axios from 'axios'
import { BASE_URL} from '../../constants/url';
import Header from '../../Componentes/Header/Header';
import {useContext} from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { HomeContainer, 
         Title, 
         StyledLinkButton,
} from './pokemonsListPageStyle';


const PokemonsListPage = ({pokemonData}) => {
   const context = useContext(GlobalContext);
   console.log (context)
   const [pokemonList, setPokemonList]= useState([]);

 

   useEffect(()=>{
      axios.get(`${BASE_URL }`)
      .then(response =>{
        setPokemonList(response.data.results);
      })
      .catch(error =>{
        console.error ("error fetching Pokemon List:", error);
      });
   },[]);


  return (
    <>
    <div>
      <Header rightButton={<StyledLinkButton to="/pokedex">Pokédex</StyledLinkButton>} />
    </div>
    <Title>Todos os Pokémons</Title>
    <HomeContainer>

       {pokemonList.map(pokemon =>(
         
        <PokemonCard 
        key ={pokemon.name} 
        pokemon={pokemon}
        addToPokedex={context.addToPokedex}
        activePage = "/"
        />
      ))}
      
    </HomeContainer>
    </>
  )
}

export default PokemonsListPage
