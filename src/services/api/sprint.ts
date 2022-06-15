import { api } from '../api';

export interface CreateSprintProps {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
}

interface UpdateSprintProps {
    id: number;
    name?: string;
    description?: string;
    startDate?: string;
    endDate?: string;
}

export async function getSprints() {
  const response = await api.get('/sprint');
  if (response.status === 200 || response.status === 201) { return response.data; }
  return null;
}

export async function createSprint({
  name,
  description,
  startDate,
  endDate,
}:CreateSprintProps) {
  const response = await api.post('/sprint', {
    name,
    description,
    startDate,
    endDate,
  });

  if (response.status === 200 || response.status === 201) { return response.data; }
  return null;
}

export async function updateSprint({
  id,
  name,
  description,
  startDate,
  endDate,
}:UpdateSprintProps) {
  const response = await api.post('/sprint', {
    id,
    name,
    description,
    startDate,
    endDate,
  });
  if (response.status === 200) { return response.data; }
  return null;
}

export async function deleteSprint(
  id:number,
) {
  const response = await api.delete('/sprint', { headers: { id } });
  if (response.status === 200) { return response.data; }
  return null;
}
