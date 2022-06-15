import styled from 'styled-components';

interface Props {
  error?: boolean
}

export const Container = styled.div`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.orange};

`;

export const Title = styled.h1<Props>`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: 600;
  color:${(props) => (props.error ? props.theme.colors.red : props.theme.colors.title)};
`;
export const Text = styled.h1<Props>`
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-weight: 400;
  margin-top: 4px;
  color:${(props) => (props.error ? props.theme.colors.red : props.theme.colors.title)};
`;

export const TextInput = styled.input<Props>`
  background-color: transparent;
  line-height: 1.6rem;
  border-radius: 7px;
  padding: 15px 20px;
  padding-bottom: 0px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-weight: 400;
  font-size: 1.4rem;
  margin-top: 4px;

  :focus {
    outline-color: ${(props) => (props.error ? props.theme.colors.red : props.theme.colors.purple)};
  }

`;

export const Icon = styled.img`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  position: absolute;
  right: 30px;
  top:50px;
  cursor: pointer;
`;
