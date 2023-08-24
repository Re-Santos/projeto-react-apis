import React,{useContext} from 'react'
import PokemonCard from '../../Componentes/PokemonCard/PokemonCard';
import { PokedexContainer } from './pokedexPageStyle';
import Header from '../../Componentes/Header/Header';
import { Link } from 'react-router-dom';
import GlobalContext from '../../contexts/GlobalContext';

const PokedexPage = () => {
  // const [pokedex, setPokedex] = useState([]);
  const context = useContext(GlobalContext);
  return (
    <>
      <div>
      <Header leftButton={<Link to="/">Voltar para Lista de pokemons</Link>} />
      </div>
    <PokedexContainer>
      {context.pokedex.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          removeFromPokedex={context.removeFromPokedex}
          activePage="/pokedex"
        />
      ))}
    </PokedexContainer>
    </>
  );
};
export default PokedexPage
