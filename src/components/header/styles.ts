import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.foreground};
  box-shadow: 0 4px 12px ${(props) => props.theme.colors.shadow};
  z-index: 10;

`;
export const Avatar = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.white};
`;
