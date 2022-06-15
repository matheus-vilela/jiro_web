import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './auth';
import dark from '../themes/dark';
import { TaskProvider } from './task';
import { SprintProvider } from './sprint';
import { StoryProvider } from './story';

export type ContextProps = {
  children: ReactNode
}

const AppProvider: React.FC<ContextProps> = ({ children }) => (
  <ThemeProvider theme={dark}>
    <AuthProvider>
      <SprintProvider>
        <StoryProvider>
          <TaskProvider>
            {children}
          </TaskProvider>
        </StoryProvider>
      </SprintProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default AppProvider;
