import React, {
  createContext, useCallback, useState, useContext, Dispatch, SetStateAction,
} from 'react';
import { ContextProps } from '.';
import {
  createSprint, CreateSprintProps, getSprints, updateSprint, UpdateSprintProps,
} from '../services/api/sprint';

export type SprintState = {

}

export type SprintContextData ={
  loadSprints(): void;
  postSprint({
    name,
    description,
    startDate,
    endDate,
  }:CreateSprintProps, callback:any): void;
  putSprint({
    name,
    description,
    startDate,
    endDate,
    id,
  }:UpdateSprintProps, callback:any): void;

  sprints: SprintProps[]
}

export const SprintContext = createContext<SprintContextData>(
  {} as SprintContextData,
);

export interface SprintProps {
  description: string;
  enddate: string;
  id: number;
  name: string;
  startdate: string;
}

export const SprintProvider: React.FC<ContextProps> = ({ children }) => {
  const [sprints, setSprints] = useState<SprintProps[]>([]);

  async function loadSprints() {
    const res = await getSprints();
    if (res) {
      setSprints(res);
    }
  }
  async function postSprint({
    name,
    description,
    startDate,
    endDate,
  }:CreateSprintProps, callback:any) {
    const res = await createSprint({
      name,
      description,
      startDate,
      endDate,
    });
    if (res) {
      loadSprints();
      callback();
    }
  }
  async function putSprint({
    name,
    description,
    startDate,
    endDate,
    id,
  }:UpdateSprintProps, callback:any) {
    const res = await updateSprint({
      id,
      name,
      description,
      startDate,
      endDate,
    });
    if (res) {
      loadSprints();
      callback();
    }
  }
  return (
    <SprintContext.Provider value={{
      loadSprints, sprints, postSprint, putSprint,
    }}
    >
      {children}
    </SprintContext.Provider>
  );
};

export function useSprint(): SprintContextData {
  const context = useContext(SprintContext);

  if (!context) {
    throw new Error('useSprint must be used within an SprintProvider');
  }

  return context;
}
