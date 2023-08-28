import React from 'react'
import { HeaderContainer, Nav  } from './headerStyle';



const Header = ({leftButton, rightButton}) => {
  return (
   <HeaderContainer>
  
      <img src="/Images/image1.png" alt="Imagem título pokemon" />

    <Nav>
        {leftButton && <div className="left-button">{leftButton}</div>}
        {rightButton && <div className="right-button">{rightButton}</div>}
    </Nav>
   </HeaderContainer>
  )
}

export default Header
