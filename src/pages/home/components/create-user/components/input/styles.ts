import styled from 'styled-components';

interface Props {
  error?: boolean;
  type?: string;
}

export const Container = styled.div<Props>`
  margin: 10px 0px;
  width:${(props) => (props.type !== 'txt' ? '350px' : '100%')};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.theme.colors.orange};

`;

export const Title = styled.h1<Props>`
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 600;
  color:${(props) => (props.error ? props.theme.colors.red : props.theme.colors.title)};
`;
export const Text = styled.h1<Props>`
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 400;
  margin-top: 4px;
  color:${(props) => (props.error ? props.theme.colors.red : props.theme.colors.title)};
`;

export const TextInput = styled.input<Props>`
  background-color: transparent;
  font-size: 1rem;
  line-height: 1em;
  border-radius: 7px;
  padding: 5px 0px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-weight: 400;

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
