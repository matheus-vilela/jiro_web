import React, {
  createContext, useCallback, useState, useContext, Dispatch, SetStateAction,
} from 'react';
import { ContextProps } from '.';
import { signIn } from '../services/api';
import {
  createTask, CreateTaskProps, deleteTask, getTasks, updateTask, UpdateTaskProps,
} from '../services/api/task';

export type TaskState = {
  [key: string]: {
    id: number,
    title:string,
    priority:number,
    status:string,
    scope:string
    employee_cpf: string,
    story_id: number,
    description: string,
  }[]
}
export type SignInCredentials = {
  cpf: string;
  password: string;
}
export type TaskContextData ={
  loadTasks(): void;
  tasks: TaskState;
  allTasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskState>>;
  postTask({
    title,
    status,
    scope,
    priority,
    description,
    employee_cpf,
    story_id,
  }:CreateTaskProps, callback:any): void;
  deletedTask({
    id,
  }:{ id:number}, callback:any): void;
  putTask({
    title,
    status,
    scope,
    priority,
    description,
    employee_cpf,
    story_id,
    id,
  }:UpdateTaskProps, callback:any): void;
}
export interface TaskProps {
  id: number,
  title:string,
  priority:number,
  status:string,
  scope:string
  employee_cpf: string,
  story_id: number,
  description: string,
}
export const TaskContext = createContext<TaskContextData>(
  {} as TaskContextData,
);

export const TaskProvider: React.FC<ContextProps> = ({ children }) => {
  const [allTasks, setAlltasks] = useState<TaskProps[]>([]);
  const [tasks, setTasks] = useState<TaskState>({
    [String('BACKLOG')]: [

    ],
    [String('EM DESENVOLVIMENTO')]: [

    ],
    [String('EM TESTE')]: [

    ],
    [String('DEPLOYMENT')]: [

    ],
    [String('CONCLUÍDO')]: [

    ],
  });

  async function loadTasks() {
    const list = await getTasks();

    if (list) {
      setTasks({
        [String('BACKLOG')]: [

        ],
        [String('EM DESENVOLVIMENTO')]: [

        ],
        [String('EM TESTE')]: [

        ],
        [String('DEPLOYMENT')]: [

        ],
        [String('CONCLUÍDO')]: [

        ],
      });
      setAlltasks(list);
      list.map((item:TaskProps) => {
        setTasks((prevState) => ({
          ...prevState,
          [item.status]: [
            ...prevState[item.status],
            item,
          ],
        }));
        return null;
      });
    }
  }

  async function postTask({
    title,
    status,
    scope,
    priority,
    description,
    employee_cpf,
    story_id,
  }:CreateTaskProps, callback:any) {
    const res = await createTask({
      title,
      status,
      scope,
      priority,
      description,
      employee_cpf,
      story_id,
    });
    if (res) {
      callback();
      loadTasks();
    }
  }

  async function putTask({
    title,
    status,
    scope,
    priority,
    description,
    employee_cpf,
    story_id,
    id,
  }:UpdateTaskProps, callback:any) {
    const res = await updateTask({
      id,
      title,
      status,
      scope,
      priority,
      description,
      employee_cpf,
      story_id,
    });
    if (res) {
      callback();
      loadTasks();
    }
  }

  async function deletedTask({
    id,
  }:{ id:number}, callback:any) {
    const res = await deleteTask(
      id,
    );
    if (res) {
      callback();
      loadTasks();
    }
  }
  return (
    <TaskContext.Provider value={{
      loadTasks, tasks, setTasks, postTask, putTask, allTasks, deletedTask,
    }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export function useTask(): TaskContextData {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useAuth must be used within an TaskProvider');
  }

  return context;
}
