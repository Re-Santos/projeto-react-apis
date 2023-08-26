import { Link } from "react-router-dom";
import styled from "styled-components";


export const DetailContainer = styled.div`
  width:100%;
  display: flex;
  background-color: #f0f0f0;
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

  &:hover {
    color: #33a4f5;
  }
`;

export const StyledButton = styled.button`
  width: 226px;
  height: 57px;
  position: absolute;
  top: 51px;
  left: 1174px;
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
  /* transition: background-color 0.3s ease-out; */
  

`;

export const Column = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ImageColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: blue;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const DetailContent = styled.section`
  width: 1389.14px;
  height:663px;
  top:348px;
  left:25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color:lightgreen;

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

`;