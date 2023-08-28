import React,{useContext} from 'react'
import PokemonCard from '../../Componentes/PokemonCard/PokemonCard';
import { PokedexContainer,Title, StyledLinkButton } from './pokedexPageStyle';
import Header from '../../Componentes/Header/Header';
import GlobalContext from '../../contexts/GlobalContext';

const PokedexPage = () => {

  const context = useContext(GlobalContext);
  return (
    <>
      <div>
        <Header leftButton={<StyledLinkButton to="/">{"<"} Todos Pokémons</StyledLinkButton>} />
      </div>
        <Title>Meus Pokémons</Title>
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
