import React, { useState } from 'react';
import { FiChevronRight, FiX } from 'react-icons/fi';
import { useTheme } from 'styled-components';
import { PropsCard } from '../..';
import Button from '../../../../../../components/button';
import { useAuth } from '../../../../../../context/auth';
import { TaskProps } from '../../../../../../context/task';
import CreateTask from '../../../create-task';
import Input from '../../../create-task/components/input';

import {
  Avatar,
  Container,
  Content, ContentColumn, ContentRow, Option, OptionButton, OptionButtonText,
  OptionText, SubTitle, TextArea, Title,
} from './styles';

interface Props {
  data: TaskProps,
  showDetail: React.Dispatch<React.SetStateAction<TaskProps | undefined>>
}
const TaskDetail: React.FC<Props> = ({ data, showDetail }) => {
  const theme = useTheme();
  const { team } = useAuth();
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
        <TextArea />
        <SubTitle>Atribuido a:</SubTitle>
        <Option
          onClick={() => {

          }}
          active
        >
          <ContentRow>
            <Avatar />
            <ContentColumn>
              <OptionText>
                {team.filter((usr) => usr.cpf === data.employee_cpf)[0].name}
              </OptionText>
              <OptionText style={{ fontSize: '0.8rem' }}>
                Developer
              </OptionText>
            </ContentColumn>
          </ContentRow>
          <FiChevronRight size={24} />
        </Option>
        <SubTitle>Prioridade</SubTitle>
        <ContentRow>
          <OptionButton
            type="baixa"
            active={data.priority === 0}
          >
            <OptionButtonText active={data.priority === 0}>BAIXA</OptionButtonText>
          </OptionButton>
          <OptionButton
            type="média"
            active={data.priority === 1}
          >
            <OptionButtonText active={data.priority === 1}>MÉDIA</OptionButtonText>
          </OptionButton>
          <OptionButton
            type="alta"
            active={data.priority === 2}
          >
            <OptionButtonText active={data.priority === 2}>ALTA</OptionButtonText>
          </OptionButton>
        </ContentRow>
        <Button
          title="DELETAR TASK"
          action={() => {}}
        />
      </Content>
    </Container>

  );
};

export default TaskDetail;
