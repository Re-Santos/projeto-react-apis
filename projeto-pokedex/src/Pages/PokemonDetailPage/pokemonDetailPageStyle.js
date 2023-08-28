import { Link } from "react-router-dom";
import styled from "styled-components";


export const DetailContainer = styled.div`

`;
export const FirstImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 2px solid #ffffff;
  margin-top:-18%;
  margin-left:44px;
  img {
    width:270px;
    height: 193px;
    right:0;
    top: -60px;
    z-index: 2;
    gap:10px;
  }
`;

export const SecondImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 2px solid #ffffff;
  margin-top:26px;
  margin-bottom:26px;
  margin-left:44px;
  img {
    width:270px;
    height: 193px;
    right:0;
    top: -60px;
    z-index: 2;
    gap:10px;
  }
`;

export const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-right:3%;


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

export const StyledButton = styled.button`
  width: 226px;
  height: 57px;
  position: absolute;
  top: 51px;
  left: 80%;
  padding: 4px 10px 4px 10px;
  border-radius: 8px;
  background: #FF6262;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height:24px;
  border: none;
  cursor: pointer;
  font-family:'poppins';
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const DetailContent = styled.section`
  width: 90%;
  height: 40%;
  border-radius: 37.88571548461914px;
  background: #729F92;
  border-style: solid;
  border-color: #00000024;
  
  top:348px;
  margin-left:5%;
  margin-right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom:20px;

`;
export const BaseStatsColumn = styled.div`
  width: 307px;
  height: 257px;
  margin-top: 5%;
  margin-left:5%;
  background-color: #ffffff;
  border-radius: 8px;
  border: 2px solid #ffffff;
 
`;

export const BaseStatsTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const BaseStats =styled.div`
  width: 342px;
  height: 590px;
  margin-top: 6%;
  margin-right: 3%;
  border-radius: 12px;
  background: #FFFFFF;
  margin-bottom:14%;
`;

export const Title = styled.h1`
 width: 220px;
 height: 72px;
 top: 220px;
 left: 40px;

 font-size: 48px;
 font-weight: 700;
 line-height:72px;
 font-family:Poppins;
 color:#ffff;
 padding-left:2%;
`;

export const MovesColumn = styled.div`
  width: 292px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 2px solid #ffffff;
  margin-top: 184px;
  padding: 10px;
  padding-bottom:34%;
`;

export const MovesTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const MoveItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
`;