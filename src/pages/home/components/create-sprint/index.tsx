import React, { useState } from 'react';
import Button from '../../../../components/button';
import { useSprint } from '../../../../context/sprint';
import Input from './components/input';
import {
  Container, Content, ContentRow, SubTitle, TextArea, Title,
} from './styles';

const CreateSprint: React.FC = () => {
  const { postSprint } = useSprint();
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [dateInitial, setDateInitial] = useState('');
  const [dateFinal, setDateFinal] = useState('');

  async function handleCreateSprint() {
    postSprint({
      name,
      description,
      startDate: new Date(dateInitial),
      endDate: new Date(dateFinal),
    }, () => {
      alert('Sprint criada com sucesso!');
    });
  }

  return (
    <Container>
      <Content>
        <Title>NOVA SPRINT</Title>
        <SubTitle>Título</SubTitle>
        <Input
          placeholder="Digite o título da Sprint"
          value={name}
          onChange={setName}
        />
        <SubTitle>Descrição</SubTitle>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <ContentRow>
          <Input
            placeholder="Digite a data de iniciio"
            value={dateInitial}
            onChange={setDateInitial}
            type="date"
          />
          <div style={{ width: 40 }} />
          <Input
            placeholder="Digite a data de término"
            value={dateFinal}
            onChange={setDateFinal}
            type="date"

          />
        </ContentRow>
        <Button
          title="CADASTRAR SPRINT"
          action={() => {
            if (name && description && dateInitial && dateFinal) {
              handleCreateSprint();
            } else {
              alert('Preencha todos os dados');
            }
          }}
        />
      </Content>
    </Container>
  );
};

export default CreateSprint;
