
import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  min-width: 380px;
  max-width: 400px;
  background-color: ${({ color }) => color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin-bottom:4%;
  margin-left:2%;
  color: #ffffff;
  
`;

export const PokemonNumber = styled.p`
  width: 30px;
  height: 19px; 
  top: 25px;
  left: 23px;

  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
`;

export const PokemonName = styled.h1`
  width: 159px;
  height: 39px;
  top: 40px;
  left: 23px;

  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const PokemonType = styled.img`
  top: 40px;
  left: 23px;

  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`

`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Pokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;
`
export const ButtonDetails = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`
