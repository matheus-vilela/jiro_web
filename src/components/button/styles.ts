import styled from 'styled-components';

export const Container = styled.button`
  width:100%;
  margin: 20px 0px;
  margin-top: 40px;
  padding: 10px 30px;
  border-radius: 7px;
  box-shadow: 0 3px 6px ${(props) => props.theme.colors.shadow};
  background-color:  ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  @media (max-width: 350) {
    height:  20px;
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  padding: 4px 0;
  margin-bottom: -3px;
  font-weight: 600;
  color:${(props) => props.theme.colors.white};
`;
