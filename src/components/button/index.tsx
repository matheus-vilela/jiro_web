import React from 'react';

import { Container, Title } from './styles';

interface Props {
  title: string;
  action?: any;
}

const Button: React.FC<Props> = ({ title, action }) => {
  return (
    <Container onClick={() => action()}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
