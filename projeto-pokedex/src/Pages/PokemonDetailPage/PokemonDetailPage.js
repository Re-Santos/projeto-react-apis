import React, { useState, useContext, useEffect } from 'react';
import Header from '../../Componentes/Header/Header';
import { useLocation, useNavigate} from 'react-router-dom';
import { DetailContainer, DetailContent, ImageColumn,Title, StyledLinkButton, StyledButton } from './pokemonDetailPageStyle';
import GlobalContext from '../../contexts/GlobalContext';


const PokemonDetailPage = () => {
  const [isPokemonAdded, setIsPokemonAdded] = useState(false);
  const location = useLocation();
  const { state } = location;
  const pokemonData = state.pokemonData; // state.pokemonData para acessar os dados(revisar anotações pessoais do projeto)
  const [isCaptured, setIsCaptured] = useState(false); //erro estava nas aspas do false
  const navigate = useNavigate();
  const context = useContext(GlobalContext)

  useEffect(() => {
    const isPokemonCaptured = context.pokedex.some(pokemon => pokemon.name === pokemonData.name);
    setIsCaptured(isPokemonCaptured);
  }, [context.pokedex, pokemonData.name]);

  const toggleCapture = () => {
    setIsCaptured(prevState => !prevState);
    if (isCaptured) {
      context.removeFromPokedex(pokemonData);
    } else {
      context.addToPokedex(pokemonData);
    }
    setIsPokemonAdded(true)
  }


  return (
    <>

      <Header
    
        leftButton={<StyledLinkButton to="/">Todos Pokémons</StyledLinkButton>} 
        rightButton={
          <StyledButton onClick={toggleCapture}>
            {isCaptured ? 'Excluir da Pokedex' : 'Adicionar a Pokedex'}
          </StyledButton>
        }
      />
      
      <Title>Detalhes</Title>
      <DetailContainer>
        {pokemonData && (
          <DetailContent>
            <ImageColumn>
              <img src={pokemonData?.sprites?.front_default} alt={pokemonData.name} />
              <img src={pokemonData?.sprites?.back_default} alt={pokemonData.name} />
            </ImageColumn>

            <div>
              <h2>Base Stats</h2>
              <ul>
                {pokemonData.stats ? (
                  pokemonData.stats.map(stat => (
                    <li key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  ))
                ) : (
                  <p>No base stats available.</p>
                )}
              </ul>
            </div>
            <div>
              <h2>Moves:</h2>
              <ul>
                {pokemonData.moves ? (
                  pokemonData.moves.slice(0,4).map(move => (
                    <li key={move.move.name}>
                      {move.move.name}
                    </li>
                  ))
                ) : (
                  <p>No moves available.</p>
                )}
              </ul>
            </div>
          </DetailContent>
        )}
      </DetailContainer>
    </>
  );
};

export default PokemonDetailPage;
