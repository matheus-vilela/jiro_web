import React from 'react';
import GlobalStyle from './styles/global';
import AppProvider from './context';
import Routes from './routes/index.routes';

const App:React.FC = () => {
  return (
    <AppProvider>
      <Routes />
      <GlobalStyle />
    </AppProvider>
  );
};

export default App;
