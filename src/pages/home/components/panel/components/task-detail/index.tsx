import React, { useState } from 'react';
import { FiChevronRight, FiX } from 'react-icons/fi';
import { useTheme } from 'styled-components';
import { PropsCard } from '../..';
import Button from '../../../../../../components/button';
import { useAuth } from '../../../../../../context/auth';
import { TaskProps, useTask } from '../../../../../../context/task';
import CreateTask from '../../../create-task';
import Input from '../../../create-task/components/input';

import {
  Avatar,
  Container,
  Content, ContentColumn, ContentRow, Option, OptionButton, OptionButtonText,
  OptionText, Select, SelectItem, SubTitle, TextArea, Title,
} from './styles';

interface Props {
  data: TaskProps,
  showDetail: React.Dispatch<React.SetStateAction<TaskProps | undefined>>
}
const TaskDetail: React.FC<Props> = ({ data, showDetail }) => {
  const theme = useTheme();
  const { team, user } = useAuth();
  const { deletedTask, putTask } = useTask();
  const [description, setDescription] = useState(data.description);
  const [employee, setEmployee] = useState(team.filter((i) => i.cpf === data.employee_cpf)[0]);
  const [priority, setPriority] = useState(data.priority);
  return (
    <Container>
      <Content>
        <Title>{data.title}</Title>
        <FiX
          size={35}
          style={{
            position: 'absolute', right: 20, top: 5, cursor: 'pointer',
          }}
          color={theme.colors.white}
          onClick={() => showDetail(undefined)}
        />

        <SubTitle>Descrição</SubTitle>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          contentEditable={user.admin}
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
            onClick={() => setPriority(0)}
          >
            <OptionButtonText active={priority === 0}>BAIXA</OptionButtonText>
          </OptionButton>
          <OptionButton
            type="média"
            active={priority === 1}
            onClick={() => setPriority(1)}

          >
            <OptionButtonText active={priority === 1}>MÉDIA</OptionButtonText>
          </OptionButton>
          <OptionButton
            type="alta"
            active={priority === 2}
            onClick={() => setPriority(2)}

          >
            <OptionButtonText active={priority === 2}>ALTA</OptionButtonText>
          </OptionButton>
        </ContentRow>
        {user.admin && (
          <>
            <Button
              title="ATUALIZAR TASK"
              action={() => {
                putTask({
                  title: data.title,
                  status: data.status,
                  scope: data.scope,
                  priority,
                  description,
                  employee_cpf: employee.cpf,
                  story_id: data.story_id,
                  id: data.id,
                }, () => {
                  alert('Task atualizada com sucesso!');
                });
              }}
            />
            <Button
              title="DELETAR TASK"
              action={() => {
                deletedTask({ id: data.id }, () => {
                  alert('Task deletada com sucesso!');
                  showDetail(undefined);
                });
              }}
            />
          </>
        )}
      </Content>
    </Container>

  );
};

export default TaskDetail;
