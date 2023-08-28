import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

export const StyledLinkButton = styled(Link)`
  width: 287px;
  height: 74px;
  position: absolute;
  top: 41px;
  left: 75%;
  padding: 4px 10px;
  border-radius: 8px;
  background: #33A4F5;
  color: white;
  font-size: 24px;
  font-weight: 700;
  border: none;
  cursor: pointer;
 
  animation-timing-function: ease-out;
  animation-duration: 300ms;

  display: inline-block;
  
  text-decoration: none;
  line-height:36px;
  font-family:'poppins';
  text-align:center;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h1`
 font-size: 48px;
 font-weight: 700;
 line-height:72px;
 font-family:'poppins';
 color:#ffff;
 padding-left:2%;

`;