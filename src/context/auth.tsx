import React, {
  createContext, useCallback, useState, useContext, Dispatch, SetStateAction,
} from 'react';
import { ContextProps } from '.';
import { signIn } from '../services/api';
import { createEmployee, CreateEmployeeProps, getEmployees } from '../services/api/employee';

export type AuthState = {
  name: string;
  role: string;
  cpf: string;
  admin: boolean;
  dtnasc?: Date;
  exp?: number;
  iat?:number;
}
export type SignInCredentials = {
  cpf: string;
  password: string;
}
export type AuthContextData ={
  user: AuthState;
  team: AuthState[];
  login(data: SignInCredentials): Promise<void>;
  signOut(): void;
  loadTeam(): void;
  createUser({
    cpf,
    name,
    password,
    dtNasc,
    admin,
    role,
  }:CreateEmployeeProps, callback:any): void;
  setUser: Dispatch<SetStateAction<AuthState>>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<ContextProps> = ({ children }) => {
  const [user, setUser] = useState<AuthState>(() => {
    const data = sessionStorage.getItem('@jiro:user');

    if (data) {
      return JSON.parse(data);
    }

    return {} as AuthState;
  });
  const [team, setTeam] = useState<AuthState[]>([]);
  const login = async (
    { cpf, password }:{cpf:string, password: string},
  ) => {
    const res = await signIn({ cpf, password });
    if (res) {
      setUser(res);
      sessionStorage.setItem('@jiro:user', JSON.stringify(res));
    }
  };

  const signOut = () => {
    sessionStorage.removeItem('@jiro:user');
    setUser({} as AuthState);
  };

  const loadTeam = async () => {
    const res = await getEmployees();
    if (res) {
      setTeam(res);
    }
  };
  const createUser = async ({
    cpf,
    name,
    password,
    dtNasc,
    admin,
    role,
  }:CreateEmployeeProps, callback: any) => {
    const res = await createEmployee({
      cpf,
      name,
      password,
      dtNasc,
      admin,
      role,
    });
    if (res) {
      alert('Usuário criado');
      callback();
    }
  };

  return (
    <AuthContext.Provider value={{
      user, login, signOut, setUser, createUser, loadTeam, team,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
