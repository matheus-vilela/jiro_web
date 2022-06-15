import React from 'react';
import {
  BrowserRouter,
  Routes as RouteProvider,
  Route,
} from 'react-router-dom';
import { useAuth } from '../context/auth';

import Home from '../pages/home';
import Login from '../pages/login';

const Routes: React.FC = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <RouteProvider>
        {user.cpf
          ? <Route path="/" element={<Home />} />
          : <Route path="/" element={<Login />} />}
      </RouteProvider>
    </BrowserRouter>
  );
};

export default Routes;
