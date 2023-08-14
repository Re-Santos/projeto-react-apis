import React from 'react'
import { HeaderContainer, Nav, Title } from './headerStyle';
import {Link} from 'react-router-dom';


const Header = ({leftButton, rightButton}) => {
  return (
   <HeaderContainer>
    <Title>Lista de Pokemons</Title>
    <Nav>
        {leftButton && <div className="left-button">{leftButton}</div>}
        {rightButton && <div className="right-button">{rightButton}</div>}
      {/* <Link to="/">Home</Link> */}
      {/* <button ><Link to="/pokedex">Ver minha POKEDEX</Link></button> */}
    </Nav>
   </HeaderContainer>
  )
}

export default Header
