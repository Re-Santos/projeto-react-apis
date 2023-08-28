import React, { useState, useContext, useEffect } from 'react';
import Header from '../../Componentes/Header/Header';
import { useLocation} from 'react-router-dom';
import { DetailContainer, 
         DetailContent, 
         ImageColumn,
         Title, 
         StyledLinkButton,
         StyledButton,
         FirstImage, 
         SecondImage,
         BaseStatsColumn,
         BaseStatsTitle,
         BaseStats,
         MovesColumn,
         MovesTitle,
         MoveItem,
                 } from './pokemonDetailPageStyle';
import GlobalContext from '../../contexts/GlobalContext';


const PokemonDetailPage = () => {
  const [isPokemonAdded, setIsPokemonAdded] = useState(false);
  const location = useLocation();
  const { state } = location;
  const pokemonData = state.pokemonData; 
  const [isCaptured, setIsCaptured] = useState(false); 
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
             <FirstImage>
              <div>
                <img src={pokemonData?.sprites?.front_default} alt={pokemonData.name} />
              </div>
             </FirstImage>
             < SecondImage>
             <div>
                <img src={pokemonData?.sprites?.back_default} alt={pokemonData.name} />
              </div>
              </SecondImage>
            </ImageColumn>
            <BaseStats>
              <BaseStatsColumn>
            
                <BaseStatsTitle>Base Stats</BaseStatsTitle>
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
              </BaseStatsColumn>
              </BaseStats>
            <div>
              
              <MovesColumn>
              <MovesTitle>Moves</MovesTitle>
              <ul>
                {pokemonData.moves.slice(0, 4).map(move => (
                  <MoveItem key={move.move.name}>{move.move.name}</MoveItem>
                ))}
              </ul>
            </MovesColumn>
            </div>
          </DetailContent>
        )}
      </DetailContainer>
    </>
  );
};

export default PokemonDetailPage;
