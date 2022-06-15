import { format, parse } from 'date-fns';
import React, { useEffect, useState } from 'react';
import {
  FiFastForward, FiChevronRight,
} from 'react-icons/fi';
import Button from '../../../../components/button';
import { useAuth } from '../../../../context/auth';
import { SprintProps, useSprint } from '../../../../context/sprint';
import { useStory } from '../../../../context/story';
import Input from './components/input';
import {
  Container, Content, ContentDetail, ContentRow, Description, Option, OptionText, SubTitle, Title,
} from './styles';

const mockSprint = [
  {
    id: 'SPR-0001',
    title: 'Desenvolver projeto no figma kanban',
  },
  {
    id: 'SPR-0002',
    title: 'Desenvolver projeto no figma kanban1',
  },
  {
    id: 'SPR-0003',
    title: 'Desenvolver projeto no figma kanban2',
  },
  {
    id: 'SPR-0004',
    title: 'Desenvolver projeto no figma kanban3',
  },
  {
    id: 'SPR-0005',
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
const Sprint: React.FC = () => {
  const { sprints, putSprint } = useSprint();
  const { stories } = useStory();
  const { user } = useAuth();
  const [select, setSelect] = useState<SprintProps>({} as SprintProps);
  const [dateInitial, setDateInitial] = useState('');
  const [dateFinal, setDateFinal] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (select.id) {
      //
      setDescription(select.description);
      setDateInitial(format(new Date(select.startdate), 'yyyy-MM-dd'));
      setDateFinal(format(new Date(select.enddate), 'yyyy-MM-dd'));
    }
  }, [select]);

  function handleUpdateSprint() {
    putSprint({
      id: select.id,
      description,
      endDate: new Date(dateFinal),
      startDate: new Date(dateInitial),
      name: select.name,
    }, () => {
      alert('SPRINT ATUALIZADA COM SUCESSO');
    });
  }

  return (
    <Container>
      <Content>
        <Title>SPRINTS</Title>
        {
          sprints.map((sprint) => (
            <Option
              onClick={() => {
                if (select?.id === sprint.id) {
                  setSelect({} as SprintProps);
                } else {
                  setSelect(sprint);
                }
              }}
              active={select?.id === sprint.id}
            >
              <OptionText>
                SPR-
                000
                {sprint.id}
                {' '}
                -
                {' '}
                {sprint.name}
              </OptionText>
              <FiChevronRight size={24} />
            </Option>
          ))
        }
      </Content>
      {select.id && (
      <ContentDetail>
        <Title>
          SPR-
          000
          {select.id}
          {' '}
          -
          {' '}
          {select.name}
        </Title>
        <SubTitle>
          Descrição
        </SubTitle>
        <Description
          placeholder="Digite a data de iniciio"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          contentEditable={user.admin}
        />
        <ContentRow>
          {/* {alert(dateInitial)} */}
          <Input
            placeholder="Digite a data de iniciio"
            value={dateInitial}
            onChange={setDateInitial}
            contentEditable={user.admin}
            type="date"

          />
          <div style={{ width: 40 }} />
          <Input
            placeholder="Digite a data de término"
            value={dateFinal}
            onChange={setDateFinal}
            contentEditable={user.admin}
            type="date"

          />
        </ContentRow>
        {user.admin && (
        <Button
          title="ATUALIZAR SPRINT"
          action={() => handleUpdateSprint()}
        />
        )}
        <Title>
          Histórias
        </Title>
        {
          stories.filter((str) => str.sprint_id === select.id).map((story) => (
            <Option
              active={select.id === story.id}
            >
              <OptionText>
                HIS-000
                {story.id}
                {' '}
                -
                {' '}
                {story.title}
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

export default Sprint;
