import React, { useState } from 'react';
import Header from '../../components/header';

import {
  Body,
  Container, Content, Image, Image1, Image2, Info, LoginContainer, LoginTitle, Title,
} from './styles';

import image from '../../assets/image.png';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import Input from '../../components/input';
import Button from '../../components/button';
import { useAuth } from '../../context/auth';

const Login: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  async function handleSignIn() {
    await login({ cpf, password });
  }

  return (
    <Container>
      <Header />

      <Title>JIRO.</Title>
      <Image src={image} alt="homem-com-um-card" />
      <Image1 src={image1} alt="detalhe1" />
      <Image2 src={image2} alt="detalhe2" />
      <LoginContainer>
        <LoginTitle>LOGIN</LoginTitle>
        <Input
          placeholder="Digite seu cpf"
          value={cpf}
          onChange={setCpf}
          type="cpf"
        />
        <Input
          placeholder="Digite sua senha"
          value={password}
          onChange={setPassword}
          type="pass"
        />
        <Button title="ENTRAR" action={() => handleSignIn()} />
      </LoginContainer>
      <Info>Copyright</Info>

    </Container>
  );
};

export default Login;
