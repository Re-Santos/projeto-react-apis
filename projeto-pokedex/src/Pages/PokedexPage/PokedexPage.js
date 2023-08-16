import React,{useState} from 'react'
import PokemonCard from '../../Componentes/PokemonCard/PokemonCard';
import { PokedexContainer } from './pokedexPageStyle';
import Header from '../../Componentes/Header/Header';
import { Link } from 'react-router-dom';

const PokedexPage = ({pokedex,removeFromPokedex}) => {
  // const [pokedex, setPokedex] = useState([]);

  return (
    <>
      <div>
      <Header leftButton={<Link to="/">Voltar para Lista de pokemons</Link>} />
      </div>
    <PokedexContainer>
      {pokedex.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          removeFromPokedex={removeFromPokedex}
          activePage="/pokedex"
        />
      ))}
    </PokedexContainer>
    </>
  );
};
export default PokedexPage
