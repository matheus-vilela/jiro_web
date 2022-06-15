import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { AuthState, useAuth } from '../../context/auth';

export const api = axios.create({
  baseURL: 'https://jiroback.herokuapp.com/',
  timeout: 30000,
});

export async function signIn({ cpf, password }: {cpf: string, password: string}) {
  const { data } = await api.post('/employee/login', {
    cpf, password,
  });
  api.defaults.headers.common.token = data.token;
  if (data.token) {
    const res:AuthState = jwtDecode(data.token);
    return res;
  }
  return null;
}
