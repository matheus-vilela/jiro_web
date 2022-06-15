import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Button from '../../../../components/button';
import { SprintProps, useSprint } from '../../../../context/sprint';
import { useStory } from '../../../../context/story';
import Input from './components/input';
import {
  Container, Content, ContentRow, Option, OptionText, Select, SelectItem, SubTitle, TextArea, Title,
} from './styles';

const CreateHistory: React.FC = () => {
  const { sprints } = useSprint();
  const { postStory } = useStory();
  const [description, setDescription] = useState('');
  const [select, setSelect] = useState<SprintProps>(sprints[0] || '');
  const [name, setName] = useState<string>('');
  const [bdd, setbdd] = useState<string>('');
  const [rules, setRules] = useState<string>('');
  const [status, setStatus] = useState<string>('BACKLOG');

  function handleCreateStory() {
    if (select) {
      postStory({
        sprint_id: select.id,
        title: name,
        status,
        bussinessRules: [description],
        acceptanceCriteria: rules,
        bdd,
      }, () => {
        alert('História cadastrada com sucesso');
        setDescription('');
        setSelect(sprints[0] || '');
        setName('');
        setbdd('');
        setRules('');
        setStatus('BACKLOG');
      });
    }
  }

  return (
    <Container>
      <Content>
        <Title>NOVA HISTÓRIA</Title>
        <SubTitle>Selecione a Sprint</SubTitle>
        <Select
          value={select?.id ? `SPR-000${select.id} - ${select.name}` : 'Selecione uma opcao'}
          onChange={(e) => {
            const spr = sprints.filter(
              (i) => Number(i.id) === Number(e.target.value.split('-')[1]),
            );
            setSelect(spr[0]);
          }}
        >
          {
            sprints.map((item) => (
              <SelectItem key={item.id}>
                SPR-000
                {item.id}
                {' '}
                -
                {' '}
                {item.name}
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
        <SubTitle>Regras de negócio</SubTitle>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <SubTitle>BDD</SubTitle>
        <TextArea
          value={bdd}
          onChange={(e) => setbdd(e.target.value)}
        />
        <SubTitle>Critérios de aceite</SubTitle>
        <TextArea
          value={rules}
          onChange={(e) => setRules(e.target.value)}
        />
        <SubTitle>Status</SubTitle>
        <Select
          value={status || 'Selecione uma opcao'}
          onChange={(e) => {
            setStatus(e.target.value.trim());
          }}
        >
          <SelectItem> BACKLOG </SelectItem>
          <SelectItem> EM DESENVOLVIMENTO </SelectItem>
          <SelectItem> EM TESTE </SelectItem>
          <SelectItem> DEPLOYMENT </SelectItem>
          <SelectItem> CONCLUÍDO </SelectItem>
        </Select>
        <Button
          title="CADASTRAR HISTÓRIA"
          action={() => {
            if (select && description && bdd && name && rules && status) {
              handleCreateStory();
            } else {
              alert('Preencha todos os dados');
            }
          }}
        />
      </Content>
    </Container>
  );
};

export default CreateHistory;
