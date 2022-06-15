import React, { useContext, useEffect, useState } from 'react';
import { useAuth } from '../../../../context/auth';
import { useStory } from '../../../../context/story';
import { useSprint } from '../../../../context/sprint';
import { TaskProps, useTask } from '../../../../context/task';
import Card from './components/card';
import TaskDetail from './components/task-detail';

import {
  Column, Container, Content, Diviser, Title,
} from './styles';

export interface PropsCard {
  date: string,
  title:string,
  id: string,
  prioridade:string,
  atribuido:string,
  column?:string
}
const Panel: React.FC = () => {
  const { loadTeam } = useAuth();
  const { loadSprints } = useSprint();
  const { loadStories } = useStory();
  const { putTask } = useTask();
  const { loadTasks, tasks, setTasks } = useTask();
  const [showDetail, setShowDetail] = useState<TaskProps>();

  useEffect(() => {
    loadSprints();
    loadStories();
    loadTeam();
    loadTasks();
  }, []);

  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, column:string) => {
    const task: TaskProps = JSON.parse(event.dataTransfer.getData('text'));
    if (task.status !== column) {
      setTasks((prevState) => ({
        ...prevState,
        [String(task.status)]: prevState[String(task.status)].filter(
          (item:TaskProps) => item.id !== task.id,
        ),
        [column]: [
          task,
          ...prevState[column],
        ],
      }));
      putTask({
        title: task.title,
        status: column,
        scope: task.scope,
        priority: task.priority,
        description: task.description,
        employee_cpf: task.employee_cpf,
        story_id: task.story_id,
        id: task.id,
      }, () => {});
    } else {
      setTasks((prevState) => ({
        ...prevState,
        [column]: [
          task,
          ...prevState[column].filter(
            (item:TaskProps) => item.id !== task.id,
          ),
        ],
      }));
    }
  };

  return (
    <>
      <Container>
        <Content>
          {
          Object.entries(tasks).map((column) => (
            <>
              <Column onDragOver={enableDropping} onDrop={(e) => handleDrop(e, column[0])}>
                <Title>{column[0]}</Title>
                {
                column[1].map((task) => (
                  <Card data={task} column={column[0]} showDetail={setShowDetail} />
                ))
                }
              </Column>
              <Diviser />
            </>
          ))
        }
        </Content>
      </Container>
      {!!showDetail?.id && <TaskDetail data={showDetail} showDetail={setShowDetail} />}
    </>

  );
};

export default Panel;
