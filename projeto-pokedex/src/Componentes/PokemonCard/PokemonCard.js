import React, { useState, useEffect } from 'react';
import { getTypes } from '../../utils/ReturnPokemonType';
import { getColors } from '../../utils/ReturnCardColor';
import {
  Container,
  PokemonNumber,
  PokemonName,
  PokemonType,
  TypesContainer,
  CatchButton,
  Pokemon,
  ButtonDetails,
} from './pokemonCardStyle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';

const PokemonCard = ({ pokemon, addToPokedex, removeFromPokedex, activePage }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [showPokeball, setShowPokeball] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${pokemon.name}`)
      .then((response) => {
        setPokemonData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Pokemon Data:', error);
      });
  }, [pokemon]);
  console.log(pokemonData);

  const goToDetailsPage = () => {
    navigation(`/pokemon/${pokemon.name}`, { state: { pokemonData } });
  };

  if (!pokemonData) {
    return null;
  }

  const pokemonType = (pokemonData?.types[0]?.type?.name || '').toLowerCase();

  const togglePokeball = () => {
    setShowPokeball(true);

    setTimeout(() => {
      setShowPokeball(false);
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  return (
    <Container color={getColors(pokemonType)}>
      <div>
        <PokemonNumber>#0{pokemonData?.id}</PokemonNumber>
        <PokemonName>{pokemonData?.name.charAt(0).toUpperCase() + pokemonData?.name.slice(1)}</PokemonName>

        <TypesContainer>
          {pokemonData?.types.map((type) => {
            const typeName = type.type.name;
            return <PokemonType key={typeName} src={getTypes(typeName)} alt={typeName} />;
          })}
        </TypesContainer>
        <div>
          <ButtonDetails onClick={goToDetailsPage}>Detalhes</ButtonDetails>
        </div>
      </div>
      <div>
        <Pokemon src={pokemonData?.sprites?.front_default} alt={pokemon.name} />
        <CatchButton
          onClick={() => {
            if (activePage === '/') {
              addToPokedex(pokemon);
            } else {
              removeFromPokedex(pokemon);
            }
            togglePokeball();
          }}>
          {activePage === '/' ? 'Capturar!' : 'Remover'}
       
          {showPokeball ? (
            activePage === '/' ? (
              <img src="/Images/frame15.png" alt="pokeball" />
                ) : (
              <img src="/Images/frame16.png" alt="pokeball" />
            )
          ) : null}
       </CatchButton>
      </div>
    </Container>
  );
};

export default PokemonCard;

