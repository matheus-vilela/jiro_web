import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
  z-index: 6;
`;
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 80vh;
  width: 100%;
  padding: 20px 0;
  background-color: ${(props) => props.theme.colors.foreground};
  border-radius: 10px;
  box-shadow: 0 2px 8px ${(props) => props.theme.colors.shadow};

`;
export const Column = styled.div`
  display: flex;
  align-items:flex-start;
  justify-content: flex-start;
  flex-direction: column;
  flex:1;
  height: 100%;
  min-height: 80vh;
  min-width: 300px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.foreground};
`;

export const Diviser = styled.div`
  display: flex;
  min-height: 80vh;
  height: 100%;
  border-right: 2px solid ${(props) => props.theme.colors.black};
`;
export const Title = styled.h1`
  font-size: 1rem;
  line-height: 1rem;
  font-weight: ${(props) => props.theme.font.semiBold};
  color:${(props) => props.theme.colors.title};
  border-bottom: 2px solid ${(props) => props.theme.colors.black};
  width: 100%;
  text-align: center;
  padding-bottom: 5px;
`;
