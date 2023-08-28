import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PokedexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `;

export const StyledLinkButton = styled(Link)`
  width: 210px;
  height: 36px;
  position: absolute;
  top: 62px;
  left: 100px;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: #1a1a1a;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s ease-out;
  white-space: nowrap; 

  &:hover {
    color: #33a4f5;
    transform: scale(1.05);
  }
`;

export const Title = styled.h1`

 font-size: 48px;
 font-weight: 700;
 line-height:72px;
 font-family:Poppins;
 color:#ffff;
 padding-left:2%;

`;