import React, { useState } from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';
import image3 from '../../assets/image3.png';
import image2 from '../../assets/image2.png';
import {
  Container, Content, Image1, Image2,
} from './styles';
import Panel from './components/panel';
import Sprint from './components/sprint';
import History from './components/history';
import CreateSprint from './components/create-sprint';
import CreateHistory from './components/create-history';
import CreateTask from './components/create-task';
import CreateUser from './components/create-user';

const Home: React.FC = () => {
  const [select, setSelect] = useState('panel');

  return (
    <Container>
      <Image1 src={image3} alt="detalhe3" />
      <Image2 src={image2} alt="detalhe2" />
      <Header />
      <Content>
        <Menu select={select} setSelect={setSelect} />
        {select === 'panel' && <Panel />}
        {select === 'sprint' && <Sprint />}
        {select === 'history' && <History />}
        {select === 'create-sprint' && <CreateSprint />}
        {select === 'create-history' && <CreateHistory />}
        {select === 'create-task' && <CreateTask />}
        {select === 'create-user' && <CreateUser />}
      </Content>
    </Container>
  );
};

export default Home;
