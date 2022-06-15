import { stringify } from 'querystring';
import React, { useEffect, useState } from 'react';
import {
  FiFastForward, FiChevronRight,
} from 'react-icons/fi';
import { SprintProps, useSprint } from '../../../../context/sprint';
import { StoryProps, useStory } from '../../../../context/story';
import { useTask } from '../../../../context/task';
import Input from './components/input';
import {
  Container, Content, ContentDetail,
  ContentRow, Description, Option, OptionText, Select, SelectItem, SubTitle, Title,
} from './styles';

const mockTask = [
  {
    id: 'TSK-0001',
    title: 'Desenvolver projeto no figma kanban',
  },
  {
    id: 'TSK-0002',
    title: 'Desenvolver projeto no figma kanban1',
  },
  {
    id: 'TSK-0003',
    title: 'Desenvolver projeto no figma kanban2',
  },
  {
    id: 'TSK-0004',
    title: 'Desenvolver projeto no figma kanban3',
  },
  {
    id: 'TSK-0005',
    title: 'Desenvolver projeto no figma kanban4',
  },
];
const mockHistoria = [
  {
    id: 'HIS-0001',
    title: 'Desenvolver projeto no figma kanban',
  },
  {
    id: 'HIS-0002',
    title: 'Desenvolver projeto no figma kanban1',
  },
  {
    id: 'HIS-0003',
    title: 'Desenvolver projeto no figma kanban2',
  },
  {
    id: 'HIS-0004',
    title: 'Desenvolver projeto no figma kanban3',
  },
  {
    id: 'HIS-0005',
    title: 'Desenvolver projeto no figma kanban4',
  },
];
const History: React.FC = () => {
  const { sprints } = useSprint();
  const { allTasks } = useTask();
  const { stories } = useStory();
  const [selectHistory, setSelectHistory] = useState<StoryProps>({} as StoryProps);
  const [select, setSelect] = useState<SprintProps>(sprints[0] || '');
  const [status, setStatus] = useState('BACKLOG');
  const [description, setDescription] = useState<string[] | string>('');
  const [name, setName] = useState<string>('');
  const [bdd, setbdd] = useState<string>('');
  const [rules, setRules] = useState<string>('');
  useEffect(() => {
    if (selectHistory.id) {
      // setDateInitial(selectHistory.)
      setSelect(sprints.filter((i) => i.id === selectHistory.id)[0] || '');
      setStatus(selectHistory.status);
      setDescription(selectHistory.bussinessrules || '');
      setName(selectHistory.title);
      setbdd(selectHistory.bdd);
      setRules(selectHistory.acceptancecriteria);
    } else {
      //
    }
  }, [selectHistory]);

  return (
    <Container>
      <Content>
        <Title>HISTÓRIAS</Title>
        {
          stories.sort((a, b) => a.id - b.id).map((story) => (
            <Option
              onClick={() => {
                if (selectHistory.id === story.id) {
                  setSelectHistory({} as StoryProps);
                } else {
                  setSelectHistory(story);
                }
              }}
              active={selectHistory.id === story.id}
            >
              <OptionText>
                HIS-000
                {story.id}
                {' '}
                -
                {' '}
                {story.title.toLocaleUpperCase()}
              </OptionText>
              <FiChevronRight size={24} />
            </Option>
          ))
        }
      </Content>
      {selectHistory.id && (
      <ContentDetail>
        <Title>
          HIS-000
          {selectHistory.id}
          {' '}
          -
          {' '}
          {selectHistory.title.toLocaleUpperCase()}
        </Title>
        <SubTitle>Selecione a Sprint</SubTitle>
        <Select
          value={select?.id ? `SPR-000${select.id} - ${select.name}` : 'Selecione uma opcao'}
          onChange={(e) => {
            // const spr = sprints.filter(
            //   (i) => Number(i.id) === Number(e.target.value.split('-')[1]),
            // );
            // setSelect(spr[0]);
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
        <SubTitle>Status</SubTitle>
        <Select
          value={status || 'Selecione uma opcao'}
          onChange={(e) => {
            // setStatus(e.target.value.trim());
          }}
        >
          <SelectItem> BACKLOG </SelectItem>
          <SelectItem> EM DESENVOLVIMENTO </SelectItem>
          <SelectItem> EM TESTE </SelectItem>
          <SelectItem> DEPLOYMENT </SelectItem>
          <SelectItem> CONCLUÍDO </SelectItem>
        </Select>
        <SubTitle>
          Regras de negócio
        </SubTitle>
        <Description
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          contentEditable={false}
        />
        <SubTitle>
          BDD
        </SubTitle>
        <Description
          value={bdd}
          onChange={(e) => setbdd(e.target.value)}
          contentEditable={false}

        />
        <SubTitle>
          Critérios de aceite
        </SubTitle>
        <Description
          value={rules}
          onChange={(e) => setRules(e.target.value)}
          contentEditable={false}

        />

        <Title>
          TASKS
        </Title>
        {
         allTasks.filter((tsk) => tsk.story_id === selectHistory.id).map((t) => (
           <Option
             onClick={() => {

             }}
           >
             <OptionText>
               TSK-000
               {t.id}
               {' '}
               -
               {' '}
               {t.title}
             </OptionText>
             <FiChevronRight size={24} />
           </Option>
         ))
        }
      </ContentDetail>
      )}
    </Container>
  );
};

export default History;
