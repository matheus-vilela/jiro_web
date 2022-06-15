import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  min-height:100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background};
  position: relative;
`;

export const Body = styled.div`
  width: 100%;
  height:100%;
  flex:1;
  display: flex;
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};

`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background};
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  bottom:40px;
  left: 0;
  z-index: 5;
`;
export const Image1 = styled.img`
  position: absolute;
  top:0;
  right: 0;
  z-index: 5;
`;
export const Image2 = styled.img`
  position: absolute;
  bottom:0;
  right: 250px;
  z-index: 5;
`;
export const Title = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.theme.colors.title};
  font-weight: ${(props) => props.theme.font.regular};
  position: absolute;
  top:100px;
  left: 150px;
  z-index: 5;
`;

export const Info = styled.h4`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.title};
  font-weight: ${(props) => props.theme.font.regular};
  width: 100%;
  text-align: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  margin-left: 300px;
  background-color: ${(props) => props.theme.colors.foreground};
  box-shadow: 0 2px 8px ${(props) => props.theme.colors.shadow};
  border-radius: 8px;
`;
export const LoginTitle = styled.h1`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: 600;
  color:${(props) => props.theme.colors.title};
`;
