import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Button from '../../../../components/button';
import { useAuth } from '../../../../context/auth';
import { StoryProps, useStory } from '../../../../context/story';
import { useTask } from '../../../../context/task';
import Input from './components/input';
import {
  Avatar,
  Container,
  Content, ContentColumn, ContentRow, Option, OptionButton, OptionButtonText,
  OptionText, Select, SelectItem, SubTitle, TextArea, Title,
} from './styles';

const CreateTask: React.FC = () => {
  const { stories } = useStory();
  const { team } = useAuth();
  const { postTask } = useTask();
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(-1);
  const [select, setSelect] = useState<StoryProps>(stories[0] || '');
  const [name, setName] = useState<string>('');
  const [escopo, setEscopo] = useState<string>('');
  const [employee, setEmployee] = useState<any>('');
  const [dateInitial, setDateInitial] = useState<string>('');

  function handleCreateTask() {
    console.log('aqui');
    postTask({
      title: name,
      status: 'BACKLOG',
      scope: escopo,
      priority,
      description,
      employee_cpf: employee.cpf,
      story_id: select.id,
    }, () => {
      alert('TASK CRIADA COM SUCESSO');
      setName('');
      setDescription('');
      setEscopo('');
      setEmployee('');
      setDateInitial('');
      setPriority(-1);
    });
  }

  return (
    <Container>
      <Content>
        <Title>NOVA TASK</Title>

        <SubTitle>Selecione uma história</SubTitle>

        <Select
          value={select?.id ? `HIS-000${select.id} - ${select.title}` : 'Selecione uma opcao'}
          onChange={(e) => {
            const spr = stories.filter(
              (i) => Number(i.id) === Number(e.target.value.split('-')[1]),
            );
            setSelect(spr[0]);
          }}
        >
          {
            stories.map((item) => (
              <SelectItem key={item.id}>
                HIS-000
                {item.id}
                {' '}
                -
                {' '}
                {item.title}
              </SelectItem>
            ))
          }
        </Select>
        <SubTitle>Título</SubTitle>
        <Input
          placeholder="Digite o título da Sprint"
          value={name}
          onChange={setName}
        />
        <SubTitle>Escopo</SubTitle>
        <Input
          placeholder="Digite o escopo"
          value={escopo}
          onChange={setEscopo}
        />
        <SubTitle>Descrição</SubTitle>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <SubTitle>Atribuido a:</SubTitle>
        <Select
          value={employee ? `${employee.name} - ${employee.role}` : 'Selecione uma opcao'}
          onChange={(e) => {
            const usr = team.filter((i) => i.role === e.target.value.split('-')[1].trim() && i.name === e.target.value.split('-')[0].trim())[0];
            setEmployee(usr);
          }}
        >
          {
            team.map((item) => (
              <SelectItem key={item.cpf}>
                {item.name}
                {' '}
                -
                {' '}
                {item.role}
              </SelectItem>
            ))
          }
        </Select>
        <SubTitle>Prioridade</SubTitle>
        <ContentRow>
          <OptionButton
            type="baixa"
            active={priority === 0}
            onClick={() => {
              if (priority === 0) {
                setPriority(-1);
              } else {
                setPriority(0);
              }
            }}
          >
            <OptionButtonText active={priority === 0}>BAIXA</OptionButtonText>
          </OptionButton>
          <OptionButton
            type="média"
            active={priority === 1}
            onClick={() => {
              if (priority === 1) {
                setPriority(-1);
              } else {
                setPriority(1);
              }
            }}
          >
            <OptionButtonText active={priority === 1}>MÉDIA</OptionButtonText>
          </OptionButton>
          <OptionButton
            type="alta"
            active={priority === 2}
            onClick={() => {
              if (priority === 2) {
                setPriority(-1);
              } else {
                setPriority(2);
              }
            }}
          >
            <OptionButtonText active={priority === 2}>ALTA</OptionButtonText>
          </OptionButton>
        </ContentRow>
        <Button
          title="CADASTRAR HISTÓRIA"
          action={() => {
            if (escopo && name && employee && description && priority > -1) {
              handleCreateTask();
            } else {
              alert('Preencha todos os dados');
            }
          }}
        />
      </Content>
    </Container>
  );
};

export default CreateTask;
