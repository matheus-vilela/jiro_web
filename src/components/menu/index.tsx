import React, { useState } from 'react';
import {
  FiFastForward, FiLayout, FiClock, FiPlus, FiChevronRight,
} from 'react-icons/fi';
import { useTheme } from 'styled-components';
import { useAuth } from '../../context/auth';

import {
  Avatar,
  Container, ContentColumn, ContentRow, Option, OptionText, SubTitle, Title,
} from './styles';

interface Props {
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
  dataUser: any;
}

const Menu: React.FC<Props> = ({ select, setSelect, dataUser }) => {
  const { team } = useAuth();
  const theme = useTheme();
  return (
    <Container>
      <Title>JIRO</Title>
      <SubTitle>PROJETO</SubTitle>
      <Option onClick={() => setSelect('panel')} active={select === 'panel'}>
        <FiLayout size={24} color={select === 'panel' ? theme.colors.black : theme.colors.white} />
        <OptionText active={select === 'panel'}>Painel</OptionText>
      </Option>
      <Option onClick={() => setSelect('sprint')} active={select === 'sprint'}>
        <FiFastForward size={24} color={theme.colors.white} />
        <OptionText>Sprint</OptionText>
      </Option>
      <Option onClick={() => setSelect('history')} active={select === 'history'}>
        <FiClock size={24} color={theme.colors.white} />
        <OptionText>Histórias</OptionText>
      </Option>
      <SubTitle>ADMIN</SubTitle>
      <Option onClick={() => setSelect('create-sprint')} active={select === 'create-sprint'}>
        <FiPlus size={24} color={theme.colors.white} />
        <OptionText>Criar sprint</OptionText>
      </Option>
      <Option onClick={() => setSelect('create-history')} active={select === 'create-history'}>
        <FiPlus size={24} color={theme.colors.white} />
        <OptionText>Criar história</OptionText>
      </Option>
      <Option onClick={() => setSelect('create-task')} active={select === 'create-task'}>
        <FiPlus size={24} color={theme.colors.white} />
        <OptionText>Adicionar task</OptionText>
      </Option>
      <Option onClick={() => setSelect('create-user')} active={select === 'create-user'}>
        <FiPlus size={24} color={theme.colors.white} />
        <OptionText>Adicionar novo membro</OptionText>
      </Option>
      <SubTitle>O TIME</SubTitle>
      {
      team.map((item) => (
        <Option key={item.cpf} onClick={() => dataUser(item)}>
          <ContentRow>
            <ContentColumn>
              <OptionText>
                {item.name}
              </OptionText>
              <OptionText style={{ fontSize: '0.8rem' }}>
                {item.role}
              </OptionText>
            </ContentColumn>
          </ContentRow>
          <FiChevronRight size={24} />
        </Option>
      ))
     }
    </Container>

  );
};

export default Menu;
