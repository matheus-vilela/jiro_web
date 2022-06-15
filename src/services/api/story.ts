import { api } from '../api';

export interface CreateStoryProps {
    sprint_id: number;
    title: string;
    status: string;
    bussinessRules: string[];
    acceptanceCriteria: string;
    bdd: string;
}

interface UpdateStoryProps {
    id: number;
    sprint_id?: number;
    title?: string;
    status?: string;
    bdd?: string;
    bussinessRules?: string[];
    acceptanceCriteria?: string;
}

export async function getStories() {
  const response = await api.get('/story');
  if (response.status === 200) { return response.data; }
  return null;
}

export async function createStory({
  sprint_id,
  title,
  status,
  bussinessRules,
  acceptanceCriteria,
  bdd,
}:CreateStoryProps) {
  const response = await api.post('/story', {
    sprint_id,
    title,
    status,
    bussinessRules,
    acceptanceCriteria,
    bdd,
  });

  if (response.status === 200 || response.status === 201) { return response.data; }
  return null;
}

export async function updateStory({
  id,
  sprint_id,
  title,
  status,
  bdd,
  bussinessRules,
  acceptanceCriteria,
}:UpdateStoryProps) {
  const response = await api.post('/story', {
    id,
    sprint_id,
    title,
    status,
    bdd,
    bussinessRules,
    acceptanceCriteria,
  });
  if (response.status === 200) { return response.data; }
  return null;
}

export async function deleteStory(
  id:number,
) {
  const response = await api.delete('/story', { headers: { id } });
  if (response.status === 200) { return response.data; }
  return null;
}
