import React from 'react';
import { useAuth } from '../../../../../../context/auth';
import { TaskProps } from '../../../../../../context/task';
import {
  Avatar,
  Container, Diviser, InfoView, Priority, SubTitle, TitleCard,
} from './styles';

const propsCard = {
  date: '10/05/2023',
  title: 'Titulo',
  id: 'TSK-0001',
  prioridade: 'baixa',
  atribuido: 'Matheus',
};

interface Props {
  data: TaskProps;
  column: string;
  showDetail: any
}

const Card: React.FC<Props> = ({ data, column, showDetail }) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', event.currentTarget.id);
  };

  const { team } = useAuth();
  return (
    <Container id={JSON.stringify({ ...data, column })} draggable="true" onDragStart={handleDragStart} column={column} onClick={() => showDetail(data)}>
      <TitleCard>{data.title}</TitleCard>
      <SubTitle>
        TSK-000
        {data.id}
      </SubTitle>
      <Diviser />
      <InfoView>
        <SubTitle>Atribuido a:</SubTitle>
        <Avatar />
        <TitleCard>
          {team.filter((usr) => usr.cpf === data.employee_cpf)[0].name}
        </TitleCard>
      </InfoView>
      <InfoView>
        <SubTitle>Prioridade: </SubTitle>
        <Priority type={data.priority}>{data.priority === 0 ? 'baixa' : data.priority === 1 ? 'média' : 'alta'}</Priority>
      </InfoView>
    </Container>
  );
};

export default Card;
