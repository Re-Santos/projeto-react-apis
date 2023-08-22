import styled from "styled-components";



export const DetailContainer = styled.div`
  display: flex;
  background-color: #f0f0f0;
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

export const DetailContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

`;