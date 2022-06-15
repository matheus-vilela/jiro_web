import React, {
  createContext, useCallback, useState, useContext, Dispatch, SetStateAction,
} from 'react';
import { ContextProps } from '.';
import { createStory, CreateStoryProps, getStories } from '../services/api/story';

export type StoryState = {

}

export type StoryContextData ={
  loadStories(): void;
  postStory({
    sprint_id, title, status, bussinessRules, acceptanceCriteria, bdd,
  }: CreateStoryProps, callback:any): void;
  // postStory({
  //   name,
  //   description,
  //   startDate,
  //   endDate,
  // }:CreateStoryProps, callback:any): void;
  stories: StoryProps[]
}

export const StoryContext = createContext<StoryContextData>(
  {} as StoryContextData,
);

export interface StoryProps {
  sprint_id: number,
  title:string,
  status: string,
  bussinessrules: string[],
  acceptancecriteria:string,
  bdd:string,
  id: number
}

export const StoryProvider: React.FC<ContextProps> = ({ children }) => {
  const [stories, setStories] = useState<StoryProps[]>([]);
  const [storySelect, setStorySelect] = useState<StoryProps[]>([]);

  async function loadStories() {
    const res = await getStories();
    if (res) {
      setStories(res);
    }
  }
  async function postStory({
    sprint_id, title, status, bussinessRules, acceptanceCriteria, bdd,
  }: CreateStoryProps, callback:any) {
    const res = await createStory({
      sprint_id, title, status, bussinessRules, acceptanceCriteria, bdd,
    });
    if (res) {
      loadStories();
      callback();
    }
  }

  return (
    <StoryContext.Provider value={{
      loadStories, stories, postStory,
    }}
    >
      {children}
    </StoryContext.Provider>
  );
};

export function useStory(): StoryContextData {
  const context = useContext(StoryContext);

  if (!context) {
    throw new Error('useStory must be used within an StoryProvider');
  }

  return context;
}
