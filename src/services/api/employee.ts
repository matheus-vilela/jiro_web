import { api } from '../api';

export interface CreateEmployeeProps {
    cpf: string;
    name: string;
    password: string;
    dtNasc: Date;
    admin?: boolean;
    role: string;
}

export interface UpdateSprintProps {
    currentCpf: string;
    cpf?: string;
    name?: string;
    password?: string;
    dtNasc?: string;
    role?: string;
}

export async function getEmployees() {
  const response = await api.get('/employee');
  if (response.status === 200 || response.status === 201) { return response.data; }
  return null;
}

export async function createEmployee({
  cpf,
  name,
  password,
  dtNasc,
  admin,
  role,
}:CreateEmployeeProps) {
  const response = await api.post('/employee', {
    cpf,
    name,
    password,
    dtNasc,
    admin,
    role,
  });
  if (response.status === 200 || response.status === 201) { return response.data; }
  return null;
}

export async function updateEmployee({
  currentCpf,
  cpf,
  name,
  password,
  dtNasc,
  role,
}:UpdateSprintProps) {
  const response = await api.post('/employee', {
    currentCpf,
    cpf,
    name,
    password,
    dtNasc,
    role,
  });
  if (response.status === 200) { return response.data; }
  return null;
}

export async function deleteEmployee(
  cpf:string,
) {
  const response = await api.delete('/employee', { headers: { cpf } });
  if (response.status === 200) { return response.data; }
  return null;
}
