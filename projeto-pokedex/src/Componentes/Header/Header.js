import React from 'react'
import { HeaderContainer, Nav, Title } from './headerStyle';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
   <HeaderContainer>
    <Title>Lista de Pokemons</Title>
    <Nav>
      {/* <Link to="/">Home</Link> */}
      <button ><Link to="/pokedex">Pokedex</Link></button>
    </Nav>
   </HeaderContainer>
  )
}

export default Header
