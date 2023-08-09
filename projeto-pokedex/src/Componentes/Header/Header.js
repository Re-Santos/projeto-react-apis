import React from 'react'
import { HeaderContainer, Nav, Title } from './headerStyle'



const Header = () => {
  return (
   <HeaderContainer>
    <Title>Pokedex</Title>
    <Nav>
      <a href="/">Home</a>
      <a href="/pokedex">Pokedex</a>
    </Nav>
   </HeaderContainer>
  )
}

export default Header
