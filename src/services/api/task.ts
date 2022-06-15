import { api } from '../api';

export interface CreateTaskProps {
    title: string;
    status: string;
    scope: string;
    description: string;
    priority: number;
    employee_cpf: string;
    story_id: number;
}

export interface UpdateTaskProps {
    id: number,
    title?: string;
    status?: string;
    scope?: string;
    description?: string;
    priority?: number;
    employee_cpf?: string;
    story_id?: number;
}

export async function getTasks() {
  const response = await api.get('/task');
  if (response.status === 200 || response.status === 201) { return response.data; }
  return null;
}

export async function createTask({
  title,
  status,
  scope,
  priority,
  description,
  employee_cpf,
  story_id,
}:CreateTaskProps) {
  const response = await api.post('/task', {
    title,
    status,
    scope,
    priority,
    description,
    employee_cpf,
    story_id,
  });
  if (response.status === 200 || response.status === 201) { return response.data; }
  return null;
}

export async function updateTask({
  id,
  title,
  status,
  scope,
  priority,
  description,
  employee_cpf,
  story_id,
}:UpdateTaskProps) {
  const response = await api.put('/task', {
    id,
    title,
    status,
    scope,
    priority,
    description,
    employee_cpf,
    story_id,
  });
  if (response.status === 200) { return response.data; }
  return null;
}

export async function deleteTask(
  id:number,
) {
  const response = await api.delete('/task', { headers: { id } });
  if (response.status === 200) { return response.data; }
  return null;
}
