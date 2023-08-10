import React from 'react'
import styled from 'styled-components';
import { HeaderContainer, Nav, Title } from './headerStyle';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
   <HeaderContainer>
    <Title>Pokedex</Title>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/pokedex">Pokedex</Link>
    </Nav>
   </HeaderContainer>
  )
}

export default Header
