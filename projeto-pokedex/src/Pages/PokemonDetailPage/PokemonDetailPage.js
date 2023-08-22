import React, { useEffect, useState } from 'react';
import Header from '../../Componentes/Header/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { DetailContainer, DetailContent, ImageColumn } from './pokemonDetailPageStyle';
import axios from 'axios';

const PokemonDetailPage = () => {
  const location = useLocation();
  const { state } = location;
  const pokemonData = state.pokemonData; // state.pokemonData para acessar os dados(revisar anotações pessoais do projeto)

  const [isCaptured, setIsCaptured] = useState(false); //erro estava nas aspas do false
  const navigate = useNavigate();

  const toggleCapture = () => {
    setIsCaptured(prevState => !prevState);
  };

  return (
    <>
      <Header
        leftButton={<button onClick={() => navigate(-1)}>Todos Pokémons</button>}
        rightButton={
          <button onClick={toggleCapture}>
            {isCaptured ? 'Excluir da Pokedex' : 'Adicionar a Pokedex'}
          </button>
        }
      />
      <h1>Pokemon Detail Page</h1>
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
                      {move.move.name}: {move.move.name}
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
