import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  min-height:100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.background};
  flex:1;
  width: 100%;
  `;
export const Image1 = styled.img`
  position: absolute;
  top:0;
  left: 0;
  z-index: 5;
`;
export const Image2 = styled.img`
  position: absolute;
  bottom:0;
  right: 250px;
  z-index: 5;
`;
