import React from 'react'
import { HeaderContainer, Nav  } from './headerStyle';
import {Link} from 'react-router-dom';
// import image1 from './Images/image1.png';


const Header = ({leftButton, rightButton}) => {
  return (
   <HeaderContainer>
  
      <img src="/Images/image1.png" alt="Imagem título pokemon" />

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
