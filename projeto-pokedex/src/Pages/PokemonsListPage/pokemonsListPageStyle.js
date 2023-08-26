import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledLinkButton = styled(Link)`
  width: 287px;
  height: 74px;
  position: absolute;
  top: 41px;
  left: 1112px;
  padding: 4px 10px;
  border-radius: 8px;
  background: #33A4F5;
  color: white;
  font-size: 24px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  /* transition: background-color 0.3s ease-out; */
  animation-timing-function: ease-out;
  animation-duration: 300ms;

  display: inline-block;
  text-decoration: none;
  line-height:36px;
  font-family:Poppins;
  text-align:center;

  
 //precisa rever width e heigh do texto

`;

export const Title = styled.h1`
 /* width: 420px;
 height: 72px;
 margin-top:220px;
 margin-left:40px; */
 font-size: 48px;
 font-weight: 700;
 line-height:72px;
 font-family:'poppins';
 color:#ffff;

`;