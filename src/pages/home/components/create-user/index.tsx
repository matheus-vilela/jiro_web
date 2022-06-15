import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Button from '../../../../components/button';
import { useAuth } from '../../../../context/auth';
import Input from './components/input';
import {
  Avatar,
  Container,
  Content, ContentColumn, ContentRow, Option, OptionButton, OptionButtonText,
  OptionText, SubTitle, TextArea, Title,
} from './styles';

const CreateUser: React.FC = () => {
  const { createUser } = useAuth();
  const [description, setDescription] = useState('');
  const [admin, setAdmin] = useState(false);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [cargo, setCargo] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');

  async function handleCreateUser() {
    createUser({
      cpf,
      name,
      password,
      dtNasc: new Date(birthDate),
      admin,
      role: cargo,
    }, () => {
      setAdmin(false);
      setName('');
      setCargo('');
      setCpf('');
      setBirthDate('');
      setPassword('');
    });
  }

  return (
    <Container>
      <Content>
        <Title>ADICIONAR NOVO USUÁRIO</Title>
        <ContentRow>
          <ContentColumn style={{ width: 200 }}>
            <Avatar />
          </ContentColumn>
          <ContentColumn>
            <SubTitle>Nome</SubTitle>
            <Input
              placeholder="Digite a data de vencimento"
              value={name}
              onChange={setName}
              type="small"
            />
            <SubTitle>CPF</SubTitle>
            <Input
              placeholder="Digite a data de vencimento"
              value={cpf}
              onChange={setCpf}
              type="small"
            />
            <SubTitle>Cargo</SubTitle>
            <Input
              placeholder="Digite a data de vencimento"
              value={cargo}
              onChange={setCargo}
              type="small"
            />
            <SubTitle>DATA DE NASCIMENTO</SubTitle>
            <Input
              placeholder="Digite a data de vencimento"
              value={birthDate}
              onChange={setBirthDate}
              type="date"
            />
            <SubTitle>SENHA</SubTitle>
            <Input
              placeholder="Digite a data de vencimento"
              value={password}
              onChange={setPassword}
              type="small"
            />
            <SubTitle>Administrador</SubTitle>
            <ContentRow>
              <OptionButton
                type="não"
                active={!admin}
                onClick={() => setAdmin(false)}
              >
                <OptionButtonText active={!admin}>Não</OptionButtonText>
              </OptionButton>
              <OptionButton
                type="sim"
                active={admin}
                onClick={() => setAdmin(true)}
              >
                <OptionButtonText active={admin}>Sim</OptionButtonText>
              </OptionButton>
            </ContentRow>
          </ContentColumn>
        </ContentRow>
        <Button
          title="CADASTRAR USUÁRIO"
          action={() => {
            if (cpf && name && cargo && birthDate && password) {
              handleCreateUser();
            } else {
              alert('Preencha todos os campos');
            }
          }}
        />
      </Content>
    </Container>
  );
};

export default CreateUser;
