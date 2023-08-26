import React, {useState, useEffect}from 'react'
import PokemonCard from '../../Componentes/PokemonCard/PokemonCard'
import axios from 'axios'
import { BASE_URL} from '../../constants/url';
import { HomeContainer, Title, StyledLinkButton } from './pokemonsListPageStyle';
import Header from '../../Componentes/Header/Header';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import GlobalContext from '../../contexts/GlobalContext';

const PokemonsListPage = () => {
   const context = useContext(GlobalContext);
   console.log (context)
   const [pokemonList, setPokemonList]= useState([]);
  //  const [pokedex, setPokedex] = useState([]);
   
   useEffect(()=>{
      axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response =>{
        setPokemonList(response.data.results);
      })
      .catch(error =>{
        console.error ("error fetching Pokemon List:", error);
      });
   },[]);

  //  const addToPokedex=(pokemon) =>{
  //   setPokedex (prevPokedex => [...prevPokedex, pokemon]);
  //  } Coloquei no App.js


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
